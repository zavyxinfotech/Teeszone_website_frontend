const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, '../public/assets/images/sectors');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sectors = [
  {
    id: 'corporate',
    src: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793346341800_cd698e9f.png',
  },
  {
    id: 'education',
    src: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793346341819_06efe545.png',
  },
  {
    id: 'sports',
    src: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793346341833_da15dd92.png',
  },
  {
    id: 'healthcare',
    src: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793346341839_a4a48164.png',
  },
  {
    id: 'industrial',
    src: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793346341870_645222bc.png',
  },
];

async function processSectors() {
  for (const s of sectors) {
    const pngPath = path.join(outDir, `sector-${s.id}.png`);
    const webpPath = path.join(outDir, `sector-${s.id}.webp`);

    // Trim bounding box if needed and save high-quality transparent PNG and WebP
    await sharp(s.src)
      .trim()
      .png({ compressionLevel: 8 })
      .toFile(pngPath);

    await sharp(s.src)
      .trim()
      .webp({ quality: 92, alphaQuality: 100 })
      .toFile(webpPath);

    const meta = await sharp(pngPath).metadata();
    console.log(`Saved sector-${s.id} (${meta.width}x${meta.height}, transparent)`);
  }
  console.log('All sector images processed successfully!');
}

processSectors();

