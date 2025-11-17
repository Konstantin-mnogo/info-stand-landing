import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PriceCalculator = () => {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);
  const [material, setMaterial] = useState<string>('pvc');
  const [printing, setPrinting] = useState<string>('digital');

  const materialPrices: Record<string, number> = {
    pvc: 500,
    acrylic: 1200,
    composite: 800,
    metal: 1500
  };

  const printingPrices: Record<string, number> = {
    digital: 300,
    uv: 500,
    screen: 400
  };

  const area = (width * height) / 10000;
  const materialCost = area * materialPrices[material];
  const printingCost = area * printingPrices[printing];
  const totalPrice = Math.round(materialCost + printingCost);

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
              <Label htmlFor="material" className="text-base">
                Материал
              </Label>
              <Select value={material} onValueChange={setMaterial}>
                <SelectTrigger id="material" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pvc">ПВХ (500 ₽/м²)</SelectItem>
                  <SelectItem value="composite">Композит (800 ₽/м²)</SelectItem>
                  <SelectItem value="acrylic">Акрил (1200 ₽/м²)</SelectItem>
                  <SelectItem value="metal">Металл (1500 ₽/м²)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="printing" className="text-base">
                Тип печати
              </Label>
              <Select value={printing} onValueChange={setPrinting}>
                <SelectTrigger id="printing" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Цифровая печать (300 ₽/м²)</SelectItem>
                  <SelectItem value="screen">Шелкография (400 ₽/м²)</SelectItem>
                  <SelectItem value="uv">УФ-печать (500 ₽/м²)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Площадь:</span>
                <span className="font-medium">{area.toFixed(2)} м²</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Стоимость материала:</span>
                <span className="font-medium">{Math.round(materialCost)} ₽</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Стоимость печати:</span>
                <span className="font-medium">{Math.round(printingCost)} ₽</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-bold">
                <span className="text-secondary">Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Указана примерная стоимость. Точную цену уточняйте у менеджера
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;
