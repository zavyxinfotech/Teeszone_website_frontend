const sharp = require('sharp');
const fs = require('fs');

const base = 'C:/Users/vasuk/.gemini/antigravity-ide/brain/2189a88f-b7ce-4a7f-a55f-46469442f2d8/.user_uploaded/';

async function extractAllAssets() {
  console.log('Extracting assets from reference designs...');
  
  fs.mkdirSync('public/assets/logo', { recursive: true });
  fs.mkdirSync('public/assets/images/team', { recursive: true });
  fs.mkdirSync('public/assets/products', { recursive: true });

  // 1. Team members
  const team = [
    { name: 'sakthivel-muthusamy', left: 16 },
    { name: 'saranya-sakthivel', left: 66 },
    { name: 'archana-r', left: 116 },
    { name: 'vijayadarshini-nm', left: 166 },
    { name: 'ramya-r', left: 216 },
    { name: 'nithyasri-s', left: 266 },
    { name: 'vasuki-thangaraj', left: 316 },
  ];

  for (const t of team) {
    await sharp(base + 'media_1792937241436.jpg')
      .extract({ left: t.left, top: 680, width: 46, height: 45 })
      .resize(300, 300, { kernel: 'lanczos3' })
      .webp({ quality: 95 })
      .toFile('public/assets/images/team/' + t.name + '.webp');
  }

  // 2. Products
  const products = [
    { name: 'round-neck', left: 15 },
    { name: 'polo-tshirt', left: 74 },
    { name: 'oversized-tshirt', left: 133 },
    { name: 'sportswear', left: 192 },
    { name: 'corporate-wear', left: 251 },
    { name: 'custom-printed', left: 310 },
  ];

  for (const p of products) {
    await sharp(base + 'media_1792937241472.jpg')
      .extract({ left: p.left, top: 227, width: 55, height: 53 })
      .resize(400, 400, { kernel: 'lanczos3' })
      .webp({ quality: 95 })
      .toFile('public/assets/products/' + p.name + '.webp');
  }

  // 3. Home Hero
  await sharp(base + 'media_1792937241472.jpg')
    .extract({ left: 45, top: 38, width: 330, height: 165 })
    .resize(1000, 500, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/home-hero.webp');

  // 4. Factory Exterior with Lorry
  await sharp(base + 'media_1792937241472.jpg')
    .extract({ left: 155, top: 135, width: 220, height: 68 })
    .resize(800, 250, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/factory-exterior.webp');

  // 5. Factory Interior (About Hero)
  await sharp(base + 'media_1792937241436.jpg')
    .extract({ left: 130, top: 35, width: 245, height: 165 })
    .resize(1000, 670, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/factory-interior.webp');

  // 6. Story Grid Images
  await sharp(base + 'media_1792937241436.jpg')
    .extract({ left: 150, top: 260, width: 225, height: 75 })
    .resize(700, 300, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/quality-check.webp');

  await sharp(base + 'media_1792937241436.jpg')
    .extract({ left: 135, top: 338, width: 52, height: 50 })
    .resize(400, 400, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/apparel-products.webp');

  await sharp(base + 'media_1792937241436.jpg')
    .extract({ left: 190, top: 338, width: 55, height: 50 })
    .resize(400, 400, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/fabric-printing.webp');

  await sharp(base + 'media_1792937241436.jpg')
    .extract({ left: 308, top: 338, width: 62, height: 50 })
    .resize(400, 400, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/bulk-orders.webp');

  // 7. Contact Hero
  await sharp(base + 'media_1792937241506.jpg')
    .extract({ left: 245, top: 40, width: 285, height: 200 })
    .resize(900, 630, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/contact-hero.webp');

  // 8. Folded T-shirt stack with cotton
  await sharp(base + 'media_1792937241472.jpg')
    .extract({ left: 240, top: 712, width: 135, height: 90 })
    .resize(600, 400, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/folded-stack.webp');

  // 9. Hanging T-shirts CTA
  await sharp(base + 'media_1792937241472.jpg')
    .extract({ left: 20, top: 815, width: 355, height: 85 })
    .resize(1000, 300, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile('public/assets/images/hanging-tees.webp');

  console.log('All image assets extracted successfully!');
}

extractAllAssets().catch(err => {
  console.error('Error during extraction:', err);
  process.exit(1);
});
