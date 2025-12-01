import sharp from 'sharp';
import { writeFileSync, statSync, existsSync, mkdirSync } from 'fs';

const imageUrl = 'https://cdn.poehali.dev/files/7eba80d1-3c41-41f8-bdbf-a0e1d0979032.JPG';
const outputPath = 'public/stand-led.webp';

async function downloadAndConvert() {
  try {
    // Ensure public directory exists
    if (!existsSync('public')) {
      mkdirSync('public', { recursive: true });
    }

    console.log('Downloading image...');
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const originalSize = buffer.length;
    
    console.log('Converting to WebP...');
    
    // Get original dimensions
    const originalMetadata = await sharp(buffer).metadata();
    
    // Convert to WebP
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 90 })
      .toBuffer();
    
    writeFileSync(outputPath, webpBuffer);
    
    const stats = statSync(outputPath);
    const webpSize = stats.size;
    const savedPercentage = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
    
    console.log(JSON.stringify({
      success: true,
      originalSize: originalSize,
      webpSize: webpSize,
      width: originalMetadata.width,
      height: originalMetadata.height,
      savedPercentage: savedPercentage,
      outputPath: outputPath
    }));
    
  } catch (error) {
    console.log(JSON.stringify({
      success: false,
      error: error.message
    }));
    process.exit(1);
  }
}

downloadAndConvert();
