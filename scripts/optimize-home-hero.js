import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/assets/images/hero/home/home-hero.jpg');
const outputPath = path.join(__dirname, '../src/assets/images/hero/home/home-hero.webp');

sharp(inputPath)
  .resize({
    width: 1920,
    withoutEnlargement: true
  })
  .webp({
    quality: 85
  })
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully optimized:', outputPath);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });
