import sharp from 'sharp';
import { writeFileSync } from 'fs';

const imageUrl = 'https://cdn.poehali.dev/files/7eba80d1-3c41-41f8-bdbf-a0e1d0979032.JPG';

console.log('🚀 Начинаю конвертацию изображения в WebP...\n');

try {
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
  
  const outputPath = 'public/stand-led.webp';
  writeFileSync(outputPath, webpBuffer);
  
  const metadata = await sharp(webpBuffer).metadata();
  
  console.log('\n✅ Конвертация завершена успешно!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📁 Файл: ${outputPath}`);
  console.log(`📊 Размер: ${(webpBuffer.length / 1024).toFixed(2)} KB`);
  console.log(`📐 Разрешение: ${metadata.width}×${metadata.height}px`);
  console.log(`🎨 Формат: WebP`);
  console.log(`⚡ Экономия: ${(((buffer.length - webpBuffer.length) / buffer.length) * 100).toFixed(1)}%`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
} catch (error) {
  console.error('\n❌ Ошибка:', error.message);
  process.exit(1);
}
