import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const PriceCalculator = () => {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);
  const [pvcThickness, setPvcThickness] = useState<string>('3mm');
  const [printing, setPrinting] = useState<string>('interior');
  const [pocketCounts, setPocketCounts] = useState<Record<string, number>>({
    a5: 0,
    a4: 0,
    a3: 0,
    a2: 0
  });

  const pvcPrices: Record<string, number> = {
    '3mm': 700,
    '5mm': 1150,
    '8mm': 1190,
    '10mm': 1450
  };

  const printingPrices: Record<string, number> = {
    interior: 1490,
    interiorLaminated: 1580,
    uvVinyl: 1810,
    oracal: 3160
  };

  const pocketPrices: Record<string, number> = {
    a5: 150,
    a4: 250,
    a3: 350,
    a2: 650
  };

  const printingNames: Record<string, string> = {
    interior: 'Печать интерьерная без ламинации',
    interiorLaminated: 'Печать интерьерная с ламинацией',
    uvVinyl: 'УФ печать на виниловой пленке',
    oracal: 'Аппликация Оракал 641'
  };

  const area = (width * height) / 10000;
  const pvcCost = area * pvcPrices[pvcThickness];
  const printingCost = area * printingPrices[printing];
  const pocketsCost = Object.entries(pocketCounts).reduce(
    (sum, [size, count]) => sum + pocketPrices[size] * count, 0
  );
  const totalPrice = Math.round(pvcCost + printingCost + pocketsCost);

  const updatePocketCount = (size: string, value: number) => {
    setPocketCounts(prev => ({
      ...prev,
      [size]: Math.max(0, value)
    }));
  };

  const handleSendCalculation = () => {
    const pocketsText = Object.entries(pocketCounts)
      .filter(([_, count]) => count > 0)
      .map(([size, count]) => `${size.toUpperCase()}: ${count} шт`)
      .join(', ');

    const message = `Расчет стоимости стенда:\n\nРазмер: ${width}x${height} см\nПВХ: ${pvcThickness}\nИзображение: ${printingNames[printing]}${pocketsText ? `\nКарманы: ${pocketsText}` : ''}\n\nИтого: ${totalPrice.toLocaleString('ru-RU')} ₽`;
    
    const orderSection = document.getElementById('order');
    if (orderSection) {
      const textarea = orderSection.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = message;
        textarea.focus();
      }
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Калькулятор стоимости
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Рассчитайте примерную стоимость без учета макета и монтажа
        </p>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">Параметры стенда</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="width" className="text-base">
                  Ширина (см)
                </Label>
                <Input
                  id="width"
                  type="number"
                  min="10"
                  max="500"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="text-base">
                  Высота (см)
                </Label>
                <Input
                  id="height"
                  type="number"
                  min="10"
                  max="500"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pvc" className="text-base">
                Толщина ПВХ
              </Label>
              <Select value={pvcThickness} onValueChange={setPvcThickness}>
                <SelectTrigger id="pvc" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3mm">3 мм</SelectItem>
                  <SelectItem value="5mm">5 мм</SelectItem>
                  <SelectItem value="8mm">8 мм</SelectItem>
                  <SelectItem value="10mm">10 мм</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="printing" className="text-base">
                Изображение
              </Label>
              <Select value={printing} onValueChange={setPrinting}>
                <SelectTrigger id="printing" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior">Печать интерьерная без ламинации</SelectItem>
                  <SelectItem value="interiorLaminated">Печать интерьерная с ламинацией</SelectItem>
                  <SelectItem value="uvVinyl">УФ печать на виниловой пленке</SelectItem>
                  <SelectItem value="oracal">Аппликация Оракал 641</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-base">Карманы (опционально)</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="a5" className="text-sm">А5</Label>
                  <Input
                    id="a5"
                    type="number"
                    min="0"
                    value={pocketCounts.a5 || ''}
                    onChange={(e) => updatePocketCount('a5', Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="a4" className="text-sm">А4</Label>
                  <Input
                    id="a4"
                    type="number"
                    min="0"
                    value={pocketCounts.a4 || ''}
                    onChange={(e) => updatePocketCount('a4', Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="a3" className="text-sm">А3</Label>
                  <Input
                    id="a3"
                    type="number"
                    min="0"
                    value={pocketCounts.a3 || ''}
                    onChange={(e) => updatePocketCount('a3', Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="a2" className="text-sm">А2</Label>
                  <Input
                    id="a2"
                    type="number"
                    min="0"
                    value={pocketCounts.a2 || ''}
                    onChange={(e) => updatePocketCount('a2', Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center text-3xl font-bold mb-4">
                <span className="text-secondary">Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Стоимость примерная без учета макета, монтажа и других доп. услуг
              </p>
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleSendCalculation}
              >
                Отправить заявку с расчетом
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;