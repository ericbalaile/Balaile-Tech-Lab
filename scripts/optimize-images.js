import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const heroImages = [
  '../src/assets/images/hero/home/home-hero.jpg',
  '../src/assets/images/hero/services/services-hero.jpg',
  '../src/assets/images/hero/about/about-hero.jpg',
  '../src/assets/images/hero/contact/contact-hero.jpg'
];

async function optimize() {
  for (const relativePath of heroImages) {
    const inputPath = path.join(__dirname, relativePath);
    const outputPath = inputPath.replace(/\.jpg$/, '.webp');

    try {
      await sharp(inputPath)
        .resize({
          width: 1920,
          withoutEnlargement: true
        })
        .webp({
          quality: 85
        })
        .toFile(outputPath);
      console.log(`Successfully optimized: ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`Error optimizing ${path.basename(inputPath)}:`, err);
    }
  }
}

optimize();
