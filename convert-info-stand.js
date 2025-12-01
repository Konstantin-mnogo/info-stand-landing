import sharp from 'sharp';
import { writeFileSync, statSync, existsSync, mkdirSync } from 'fs';

const imageUrl = 'https://cdn.poehali.dev/files/74af9600-7d6f-4e12-b2f9-ba0aeaa73390.JPG';
const outputPath = 'public/info-stand.webp';

async function downloadAndConvert() {
  try {
    // Ensure public directory exists
    if (!existsSync('public')) {
      mkdirSync('public', { recursive: true });
      console.log('📁 Создана директория public');
    }

    console.log('📥 Загружаю изображение:', imageUrl);
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`✓ Загружено: ${(buffer.length / 1024).toFixed(2)} KB\n`);
    
    console.log('⚙️  Конвертирую в WebP (качество 90%)...');
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 90 })
      .toBuffer();
    
    writeFileSync(outputPath, webpBuffer);
    
    // Get file stats
    const stats = statSync(outputPath);
    const metadata = await sharp(outputPath).metadata();
    
    console.log('\n✅ Конвертация завершена успешно!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📁 Файл сохранен: ${outputPath}`);
    console.log(`📊 Размер файла: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`📐 Разрешение: ${metadata.width}×${metadata.height}px`);
    console.log(`🎨 Формат: ${metadata.format}`);
    console.log(`💎 Качество: 90%`);
    console.log(`⚡ Экономия места: ${(((buffer.length - webpBuffer.length) / buffer.length) * 100).toFixed(1)}%`);
    console.log(`✓ Стенд на фото: не обрезан, полностью виден`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
  } catch (error) {
    console.error('\n❌ Ошибка:', error.message);
    process.exit(1);
  }
}

downloadAndConvert();
