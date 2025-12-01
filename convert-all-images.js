import sharp from 'sharp';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

// Список всех изображений на сайте для конвертации
const images = [
  {
    url: 'https://cdn.poehali.dev/files/548262f6-0b94-41d6-85f3-17c332689344.jpg',
    output: 'public/navigation-stands.webp',
    name: 'Навигационные стенды'
  },
  {
    url: 'https://cdn.poehali.dev/files/74af9600-7d6f-4e12-b2f9-ba0aeaa73390.JPG',
    output: 'public/info-stands.webp',
    name: 'Информационные стенды'
  },
  {
    url: 'https://cdn.poehali.dev/files/7eba80d1-3c41-41f8-bdbf-a0e1d0979032.JPG',
    output: 'public/led-stands.webp',
    name: 'Стенды с подсветкой'
  },
  {
    url: 'https://cdn.poehali.dev/files/3b4b63aa-8795-43b6-a56d-b8058de2ff34.JPG',
    output: 'public/acrylic-stands.webp',
    name: 'Стенды из акрила'
  },
  {
    url: 'https://cdn.poehali.dev/files/91e7009b-f9ee-48d3-b453-5065bc578d85.jpg',
    output: 'public/photozones.webp',
    name: 'Фотозоны'
  },
  {
    url: 'https://cdn.poehali.dev/files/b35c4586-350b-43b7-bdbc-9d6a86020ab4.jpg',
    output: 'public/hanging-panels.webp',
    name: 'Панно на подвесной системе'
  },
  {
    url: 'https://cdn.poehali.dev/files/99d3a317-9933-423c-9a96-d80668cdbcb9.JPG',
    output: 'public/interior-solutions.webp',
    name: 'Интерьерные решения'
  },
  {
    url: 'https://cdn.poehali.dev/files/a9d22313-900b-40ae-b101-aa0b4c9f156f.jpg',
    output: 'public/interior-signs.webp',
    name: 'Интерьерные вывески'
  }
];

async function convertImage(imageData) {
  try {
    console.log(`\n📥 Загружаю: ${imageData.name}...`);
    const response = await fetch(imageData.url);
    
    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const originalSize = buffer.length;
    
    console.log(`⚙️  Конвертирую в WebP (качество 90%)...`);
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 90 })
      .toBuffer();
    
    writeFileSync(imageData.output, webpBuffer);
    
    const metadata = await sharp(webpBuffer).metadata();
    const savedBytes = originalSize - webpBuffer.length;
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${imageData.name}`);
    console.log(`   📊 ${(originalSize / 1024).toFixed(2)} KB → ${(webpBuffer.length / 1024).toFixed(2)} KB`);
    console.log(`   ⚡ Экономия: ${savedPercent}% (${(savedBytes / 1024).toFixed(2)} KB)`);
    console.log(`   📐 ${metadata.width}×${metadata.height}px`);
    
    return {
      name: imageData.name,
      originalSize,
      webpSize: webpBuffer.length,
      saved: savedBytes,
      savedPercent
    };
    
  } catch (error) {
    console.error(`❌ Ошибка при конвертации ${imageData.name}:`, error.message);
    return null;
  }
}

async function convertAll() {
  console.log('🚀 Начинаю конвертацию всех изображений в WebP...\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  // Ensure public directory exists
  if (!existsSync('public')) {
    mkdirSync('public', { recursive: true });
    console.log('📁 Создана директория public\n');
  }
  
  const results = [];
  
  for (const imageData of images) {
    const result = await convertImage(imageData);
    if (result) {
      results.push(result);
    }
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 ИТОГОВАЯ СТАТИСТИКА:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebP = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSaved = totalOriginal - totalWebP;
  const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);
  
  console.log(`✅ Успешно конвертировано: ${results.length} из ${images.length} изображений`);
  console.log(`📦 Исходный размер: ${(totalOriginal / 1024).toFixed(2)} KB`);
  console.log(`📦 Размер WebP: ${(totalWebP / 1024).toFixed(2)} KB`);
  console.log(`⚡ Общая экономия: ${(totalSaved / 1024).toFixed(2)} KB (${totalPercent}%)`);
  console.log(`🌐 Улучшение скорости загрузки: ~${totalPercent}%`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

convertAll();
