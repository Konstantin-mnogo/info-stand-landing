import sharp from 'sharp';
import { writeFileSync, statSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const imageUrl = 'https://cdn.poehali.dev/files/7eba80d1-3c41-41f8-bdbf-a0e1d0979032.JPG';
const outputPath = 'public/stand-led.webp';

async function downloadAndConvert() {
  try {
    // Ensure public directory exists
    if (!existsSync('public')) {
      mkdirSync('public', { recursive: true });
      console.log('Created public directory');
    }

    console.log('Downloading image from:', imageUrl);
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`Downloaded ${buffer.length} bytes`);
    
    console.log('\nConverting to WebP format (90% quality)...');
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 90 })
      .toBuffer();
    
    writeFileSync(outputPath, webpBuffer);
    
    // Get file stats
    const stats = statSync(outputPath);
    const metadata = await sharp(outputPath).metadata();
    
    console.log('\n✓ Conversion successful!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`File saved to: ${outputPath}`);
    console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`Format: ${metadata.format}`);
    console.log(`Quality: 90%`);
    console.log(`Full image preserved: No cropping applied`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

downloadAndConvert();
