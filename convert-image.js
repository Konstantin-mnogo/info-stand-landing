import sharp from 'sharp';
import { writeFileSync } from 'fs';

const imageUrl = 'https://cdn.poehali.dev/files/7eba80d1-3c41-41f8-bdbf-a0e1d0979032.JPG';
const outputFilename = 'stand-with-led-lighting.webp';

async function convertToWebP() {
  try {
    console.log('Downloading image...');
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log('Converting to WebP format...');
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 90 })
      .toBuffer();
    
    writeFileSync(outputFilename, webpBuffer);
    
    const stats = await sharp(webpBuffer).metadata();
    console.log(`\nConversion successful!`);
    console.log(`Output file: ${outputFilename}`);
    console.log(`Dimensions: ${stats.width}x${stats.height}`);
    console.log(`Quality: 90%`);
    console.log(`Format: ${stats.format}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

convertToWebP();
