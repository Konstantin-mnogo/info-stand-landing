import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runConversion() {
  try {
    console.log('Запускаю конвертацию изображений...\n');
    const { stdout, stderr } = await execAsync('node convert-all-images.js');
    
    if (stdout) {
      console.log(stdout);
    }
    
    if (stderr) {
      console.error('Ошибки:', stderr);
    }
    
    // После конвертации показываем содержимое папки public
    console.log('\n📁 Содержимое папки public/:');
    const { stdout: lsOutput } = await execAsync('ls -lh public/*.webp 2>/dev/null || echo "Файлы .webp не найдены"');
    console.log(lsOutput);
    
  } catch (error) {
    console.error('Ошибка выполнения:', error.message);
  }
}

runConversion();
