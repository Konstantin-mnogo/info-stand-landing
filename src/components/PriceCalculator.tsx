import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const PriceCalculator = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [pvcThickness, setPvcThickness] = useState<string>('3mm');
  const [printing, setPrinting] = useState<string>('interior');
  const [pocketCounts, setPocketCounts] = useState<Record<string, number>>({
    a5: 0,
    a4: 0,
    a3: 0,
    a2: 0
  });
  const [headerText, setHeaderText] = useState<string>('ИНФОРМАЦИЯ');
  const [fontFamily, setFontFamily] = useState<string>('sans');
  const [bgColor, setBgColor] = useState<string>('white');

  const pvcPrices: Record<string, number> = {
    '3mm': 1990,
    '5mm': 2530,
    '8mm': 2850,
    '10mm': 3280
  };

  const printingPrices: Record<string, number> = {
    interior: 559,
    interiorLaminated: 672,
    uvVinyl: 910,
    oracal: 2720
  };

  const pocketPrices: Record<string, number> = {
    a5: 100,
    a4: 200,
    a3: 300,
    a2: 600
  };

  const printingNames: Record<string, string> = {
    interior: 'Печать интерьерная без ламинации',
    interiorLaminated: 'Печать интерьерная с ламинацией',
    uvVinyl: 'УФ печать на виниловой пленке',
    oracal: 'Аппликация Oracal 641'
  };

  const area = (width && height) ? (width * height) / 10000 : 0;
  const pvcCost = area * pvcPrices[pvcThickness];
  const printingCost = area * printingPrices[printing];
  const pocketsCost = Object.entries(pocketCounts).reduce(
    (sum, [size, count]) => sum + pocketPrices[size] * count, 0
  );
  const calculatedPrice = Math.round(pvcCost + printingCost + pocketsCost);
  const totalPrice = (width && height) ? Math.max(1500, calculatedPrice) : 0;

  const updatePocketCount = (size: string, value: number) => {
    setPocketCounts(prev => ({
      ...prev,
      [size]: Math.max(0, value)
    }));
  };

  const pocketSizes: Record<string, { width: number; height: number }> = {
    a5: { width: 14.8, height: 21 },
    a4: { width: 21, height: 29.7 },
    a3: { width: 29.7, height: 42 },
    a2: { width: 42, height: 59.4 }
  };



  const fontFamilyMap: Record<string, string> = {
    sans: 'Arial, sans-serif',
    serif: 'Georgia, serif',
    mono: 'Courier New, monospace'
  };

  const bgColorMap: Record<string, string> = {
    white: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
    blue: 'linear-gradient(to bottom right, #dbeafe, #93c5fd)',
    green: 'linear-gradient(to bottom right, #d1fae5, #6ee7b7)',
    yellow: 'linear-gradient(to bottom right, #fef3c7, #fcd34d)',
    red: 'linear-gradient(to bottom right, #fee2e2, #fca5a5)',
    gray: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)'
  };



  const renderPreview = () => {
    const isMobile = window.innerWidth < 768;
    const maxWidth = isMobile ? Math.min(window.innerWidth - 80, 350) : 400;
    const maxHeight = isMobile ? 400 : 500;
    const aspectRatio = width / height;
    
    let previewWidth = maxWidth;
    let previewHeight = maxWidth / aspectRatio;
    
    if (previewHeight > maxHeight) {
      previewHeight = maxHeight;
      previewWidth = maxHeight * aspectRatio;
    }

    const scale = previewWidth / width;
    const allPockets: Array<{ size: string; width: number; height: number }> = [];
    
    Object.entries(pocketCounts).forEach(([size, count]) => {
      for (let i = 0; i < count; i++) {
        allPockets.push({
          size,
          width: pocketSizes[size].width,
          height: pocketSizes[size].height
        });
      }
    });

    // Рассчитываем реальное количество карманов в ряд на основе размеров стенда
    let pocketsPerRow = 1;
    if (allPockets.length > 0) {
      const pocketWidth = allPockets[0].width;
      const spacing = 1; // 1 см отступ между карманами
      const sideMargin = 2; // 2 см отступ от краёв
      
      // Сколько карманов поместится по ширине стенда
      const availableWidth = width - (sideMargin * 2);
      pocketsPerRow = Math.floor((availableWidth + spacing) / (pocketWidth + spacing));
      
      // Минимум 1, максимум количество карманов
      pocketsPerRow = Math.max(1, Math.min(pocketsPerRow, allPockets.length));
    }
    
    const baseFontSize = Math.min(previewWidth / 10, previewHeight / 8);

    return (
      <div 
        className="border-4 border-primary/20 shadow-lg relative overflow-hidden"
        style={{ 
          width: `${previewWidth}px`, 
          height: `${previewHeight}px`,
          margin: '0 auto',
          background: bgColorMap[bgColor]
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center text-secondary font-bold px-4"
        >
          <div
            style={{ 
              fontSize: `${baseFontSize}px`,
              fontFamily: fontFamilyMap[fontFamily],
              padding: `${previewHeight * 0.05}px`,
              textAlign: 'center'
            }}
          >
            {headerText || 'ИНФОРМАЦИЯ'}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div 
            className="grid justify-items-center items-end mx-auto"
            style={{
              gridTemplateColumns: `repeat(${pocketsPerRow}, minmax(0, 1fr))`,
              gap: `${scale}px`,
              maxWidth: '90%'
            }}
          >
            {allPockets.map((pocket, index) => {
              // Реальные размеры кармана в сантиметрах, масштабированные для превью
              const pocketWidth = pocket.width * scale;
              const pocketHeight = pocket.height * scale;
              
              return (
                <div
                  key={index}
                  className="border-2 border-primary/40 bg-white/60 flex items-center justify-center text-xs font-medium text-muted-foreground"
                  style={{
                    width: `${pocketWidth}px`,
                    height: `${pocketHeight}px`,
                    minWidth: '20px',
                    minHeight: '30px'
                  }}
                >
                  <span className="text-[0.5rem] sm:text-xs">{pocket.size.toUpperCase()}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-medium text-muted-foreground">
          {width}×{height} см
        </div>
      </div>
    );
  };

  const handleSendCalculation = () => {
    const pocketsText = Object.entries(pocketCounts)
      .filter(([_, count]) => count > 0)
      .map(([size, count]) => `${size.toUpperCase()}: ${count} шт`)
      .join(', ');

    const message = `Расчет стоимости стенда:\n\nРазмер: ${width}x${height} см\nПВХ: ${pvcThickness}\nИзображение: ${printingNames[printing]}\nТекст заголовка: "${headerText}"${pocketsText ? `\nКарманы: ${pocketsText}` : ''}\n\nИтого: ${totalPrice.toLocaleString('ru-RU')} ₽`;
    
    // Отправляем событие для обновления формы
    window.dispatchEvent(new CustomEvent('calculatorMessage', { 
      detail: { message } 
    }));
    
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30" aria-label="Калькулятор стоимости стенда">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-secondary break-words px-4">
          Калькулятор стоимости
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base md:text-lg px-4 leading-relaxed">
          Рассчитайте примерную стоимость без учета разработки макета, доставки и монтажа
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-secondary">Параметры стенда</CardTitle>
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
                  value={width || ''}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  placeholder="100"
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
                  value={height || ''}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  placeholder="100"
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
                  <SelectItem value="oracal">Аппликация Oracal 641</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="headerText" className="text-base">
                Текст заголовка
              </Label>
              <Input
                id="headerText"
                type="text"
                value={headerText}
                onChange={(e) => setHeaderText(e.target.value)}
                placeholder="ИНФОРМАЦИЯ"
                className="text-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fontFamily" className="text-base">
                  Шрифт
                </Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger id="fontFamily">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sans">Без засечек</SelectItem>
                    <SelectItem value="serif">С засечками</SelectItem>
                    <SelectItem value="mono">Моноширинный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bgColor" className="text-base">
                  Цвет фона
                </Label>
                <Select value={bgColor} onValueChange={setBgColor}>
                  <SelectTrigger id="bgColor">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">Белый</SelectItem>
                    <SelectItem value="blue">Синий</SelectItem>
                    <SelectItem value="green">Зеленый</SelectItem>
                    <SelectItem value="yellow">Желтый</SelectItem>
                    <SelectItem value="red">Красный</SelectItem>
                    <SelectItem value="gray">Серый</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base">Карманы (опционально)</Label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
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
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-secondary">Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽<sup className="text-base sm:text-lg">*</sup></span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 text-center">
                * Базовая стоимость без учета разработки макета, доставки и монтажа. Финальная цена рассчитывается индивидуально после консультации с менеджером.
              </p>
              <Button 
                className="w-full text-sm sm:text-base" 
                size="lg"
                onClick={handleSendCalculation}
              >
                Отправить заявку с расчетом
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-secondary">Визуализация</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[300px] sm:min-h-[500px] p-4 sm:p-6 overflow-hidden">
            {renderPreview()}
          </CardContent>
        </Card>
      </div>
      </div>
    </section>
  );
};

export default PriceCalculator;