const sharp = require('sharp');
const path = require('path');

const images = [
  { step: 1, path: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793268323911_60274608.jpg' },
  { step: 2, path: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793268323897_49918221.jpg' },
  { step: 3, path: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793268323861_c7f26f40.jpg' },
  { step: 4, path: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793268323887_4fb2d44c.jpg' },
  { step: 5, path: 'C:/Users/vasuk/.gemini/antigravity/brain/6db944d0-57da-495f-91d0-2ab454c3e845/.user_uploaded/media_1793268323906_ce69e619.jpg' }
];

const outputDir = path.resolve(__dirname, '../public/assets/images');

async function processIcons() {
  for (const img of images) {
    console.log(`Processing Step ${img.step}...`);
    const { data, info } = await sharp(img.path)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const w = info.width;
    const h = info.height;

    // Helper to get brightness (max channel)
    function br(idx) {
      return Math.max(data[idx * 3], data[idx * 3 + 1], data[idx * 3 + 2]);
    }

    // 1. BFS to mark true exterior background
    const isBg = new Uint8Array(w * h);
    const queue = [];

    // Dark threshold for exterior background traversal
    const bgThreshold = 30;

    // Seed borders
    for (let x = 0; x < w; x++) {
      if (br(x) <= bgThreshold) { isBg[x] = 1; queue.push(x); }
      if (br((h - 1) * w + x) <= bgThreshold) { isBg[(h - 1) * w + x] = 1; queue.push((h - 1) * w + x); }
    }
    for (let y = 0; y < h; y++) {
      if (br(y * w) <= bgThreshold) { isBg[y * w] = 1; queue.push(y * w); }
      if (br(y * w + w - 1) <= bgThreshold) { isBg[y * w + w - 1] = 1; queue.push(y * w + w - 1); }
    }

    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++];
      const cx = curr % w;
      const cy = Math.floor(curr / w);

      const neighbors = [
        cy > 0 ? (cy - 1) * w + cx : -1,
        cy < h - 1 ? (cy + 1) * w + cx : -1,
        cx > 0 ? cy * w + (cx - 1) : -1,
        cx < w - 1 ? cy * w + (cx + 1) : -1,
      ];

      for (const n of neighbors) {
        if (n !== -1 && !isBg[n]) {
          if (br(n) <= bgThreshold) {
            isBg[n] = 1;
            queue.push(n);
          }
        }
      }
    }

    // 2. Build RGBA output buffer
    const rgba = Buffer.alloc(w * h * 4);
    const lowThresh = 8;
    const highThresh = 42;

    for (let i = 0; i < w * h; i++) {
      const r = data[i * 3];
      const g = data[i * 3 + 1];
      const b = data[i * 3 + 2];
      const bVal = Math.max(r, g, b);

      if (isBg[i]) {
        if (bVal <= lowThresh) {
          // Pure background
          rgba[i * 4] = 0;
          rgba[i * 4 + 1] = 0;
          rgba[i * 4 + 2] = 0;
          rgba[i * 4 + 3] = 0;
        } else {
          // Soft transition edge: anti-alias & un-premultiply against black
          const alphaRatio = Math.min(1, Math.max(0, (bVal - lowThresh) / (highThresh - lowThresh)));
          const a = Math.round(alphaRatio * 255);
          if (a === 0) {
            rgba[i * 4] = 0;
            rgba[i * 4 + 1] = 0;
            rgba[i * 4 + 2] = 0;
            rgba[i * 4 + 3] = 0;
          } else {
            // Un-premultiply so no dark fringe remains
            const scale = 255 / a;
            rgba[i * 4] = Math.min(255, Math.round(r * scale));
            rgba[i * 4 + 1] = Math.min(255, Math.round(g * scale));
            rgba[i * 4 + 2] = Math.min(255, Math.round(b * scale));
            rgba[i * 4 + 3] = a;
          }
        }
      } else {
        // Interior pixel (solid foreground)
        rgba[i * 4] = r;
        rgba[i * 4 + 1] = g;
        rgba[i * 4 + 2] = b;
        rgba[i * 4 + 3] = 255;
      }
    }

    // 3. Trim bounding box to avoid unnecessary transparent padding and make cards crisp
    const outPngPath = path.join(outputDir, `process-step-${img.step}.png`);
    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .trim()
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(outPngPath);

    const outMeta = await sharp(outPngPath).metadata();
    console.log(`Saved Step ${img.step} to ${outPngPath} (${outMeta.width}x${outMeta.height}, transparent PNG)`);
  }
  console.log('All 5 process step icons successfully converted to transparent PNGs!');
}

processIcons().catch((err) => {
  console.error('Error processing icons:', err);
  process.exit(1);
});
