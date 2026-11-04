const sharp = require('sharp');
const path = require('path');
const outDir = path.resolve(__dirname, '../public/assets/images/why-choose');
const src = 'C:/Users/vasuk/.gemini/antigravity/brain/d162e90d-8855-4ed8-a7e2-eb4467247166/.user_uploaded/media_1793422400497_18daa9e8.jpg';

async function checkCards() {
  // Let's crop:
  // Card 1: Direct Manufacturer
  // In reference image:
  // Left: ~58, Top: ~140, Width: ~180, Height: ~135
  await sharp(src)
    .extract({ left: 56, top: 140, width: 185, height: 135 })
    .toFile(path.join(outDir, 'crop_full_c1.jpg'));

  // Card 2: Premium Fabrics
  // Left: ~260, Top: ~140, Width: ~185, Height: ~135
  await sharp(src)
    .extract({ left: 260, top: 140, width: 185, height: 135 })
    .toFile(path.join(outDir, 'crop_full_c2.jpg'));

  // Card 3: Complete Customization
  // Left: ~465, Top: ~140, Width: ~185, Height: ~135
  await sharp(src)
    .extract({ left: 465, top: 140, width: 185, height: 135 })
    .toFile(path.join(outDir, 'crop_full_c3.jpg'));

  // Card 4: Bulk Production
  // Left: ~56, Top: ~280, Width: ~280, Height: ~135
  await sharp(src)
    .extract({ left: 56, top: 280, width: 280, height: 135 })
    .toFile(path.join(outDir, 'crop_full_c4.jpg'));

  // Card 5: On-Time Delivery
  // Left: ~355, Top: ~280, Width: ~255, Height: ~135
  await sharp(src)
    .extract({ left: 355, top: 280, width: 255, height: 135 })
    .toFile(path.join(outDir, 'crop_full_c5.jpg'));

  console.log('Cards cropped successfully');
}

checkCards().catch(console.error);
