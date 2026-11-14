import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const clients = [
  { id: 1, name: 'Zoho CRM', category: 'Corporate Apparel', file: 'review-1.png' },
  { id: 2, name: 'PV Renewable India Pvt Ltd', category: 'Corporate Apparel', file: 'review-2.png' },
  { id: 3, name: 'Briar Tea Bungalows', category: 'Corporate Apparel', file: 'review-3.png' },
  { id: 4, name: 'RK Academy', category: 'School Uniforms', file: 'review-4.png' },
  { id: 5, name: 'Excel College Institutions', category: 'College Uniforms', file: 'review-5.png' },
  { id: 6, name: 'Serwell Systems', category: 'Corporate Uniforms', file: 'review-6.png' },
  { id: 7, name: 'Magnus Sports Club', category: 'Sports Uniforms', file: 'review-7.png' },
  { id: 8, name: 'Skyline Lite Hotels & Resorts', category: 'Hotel Uniforms', file: 'review-8.png' },
  { id: 9, name: 'Holy Cross High School', category: 'School Uniforms', file: 'review-9.png' },
  { id: 10, name: 'MRF Vapocure Paints', category: 'Corporate Uniforms', file: 'review-10.png' },
  { id: 11, name: 'Beyomo Salon Comes Home', category: 'Salon Shop Uniforms', file: 'review-11.png' },
  { id: 12, name: 'Besten Pumps', category: 'Manufacturing Company Uniforms', file: 'review-12.png' },
  { id: 13, name: 'Apex Tech Enterprises', category: 'Corporate Company Uniforms', file: 'review-13.png' },
  { id: 14, name: 'PowerGrid Electricals', category: 'Electrical Company Uniforms', file: 'review-14.png' },
  { id: 15, name: 'Summit Annual Conclave', category: 'Events Apparel', file: 'review-15.png' },
  { id: 16, name: 'National Sports Carnival', category: 'Events Apparel', file: 'review-16.png' },
  { id: 17, name: 'Address Developers', category: 'Corporate Uniforms', file: 'review-17.png' },
  { id: 18, name: 'Global Logistics Corporation', category: 'Corporate Uniforms', file: 'review-18.png' },
  { id: 19, name: 'Hindu Global School', category: 'Sports Uniforms', file: 'review-19.png' },
  { id: 20, name: 'Hindu Global Athletic Academy', category: 'Sports Uniforms', file: 'review-20.png' },
  { id: 21, name: 'Asian Paints Painting Service', category: 'Painting Service Uniforms', file: 'review-21.png' },
  { id: 22, name: 'Premier Sports League', category: 'Sports Uniforms', file: 'review-22.png' },
  { id: 23, name: 'Marathon Runners Club', category: 'Athletic Uniforms', file: 'review-23.png' },
  { id: 24, name: 'Modern Motors Multi Car Service', category: 'Automotive Workshop Uniforms', file: 'review-24.png' },
  { id: 25, name: 'Youth Fest Cultural Forum', category: 'Events Apparel', file: 'review-25.png' },
  { id: 26, name: 'Prime Cuts Gourmet Meat Shop', category: 'Retail Store Uniforms', file: 'review-26.png' },
  { id: 27, name: 'Tech Expo Annual Meet', category: 'Events Apparel', file: 'review-27.png' },
  { id: 28, name: "Single's Network Business Club", category: 'Corporate Uniforms', file: 'review-28.png' },
  { id: 29, name: 'Pinnacle Sports Championship', category: 'Events Apparel', file: 'review-29.png' },
  { id: 30, name: 'Lazana Luxury Hotels & Suites', category: 'Hospitality & Hotel Uniforms', file: 'review-30.png' }
];

const sourceDir = 'public/assets/images/client-reviews';

console.log('Optimizing 30 client review images into webp...');
for (const c of clients) {
  const src = path.join(sourceDir, c.file);
  const destWebp = path.join(sourceDir, `review-${c.id}.webp`);
  
  if (fs.existsSync(src)) {
    const meta = await sharp(src).metadata();
    // Resize longest dimension to max 640px for fast loading, 85 quality webp
    const isLandscape = meta.width >= meta.height;
    const resizeOpts = isLandscape 
      ? { width: Math.min(640, meta.width) }
      : { height: Math.min(640, meta.height) };
      
    await sharp(src)
      .resize(resizeOpts)
      .webp({ quality: 86, effort: 5 })
      .toFile(destWebp);
      
    const webpMeta = await sharp(destWebp).metadata();
    console.log(`Saved review-${c.id}.webp (${webpMeta.width}x${webpMeta.height}, ${fs.statSync(destWebp).size} bytes)`);
  } else {
    console.warn(`File not found: ${src}`);
  }
}

// Generate the TypeScript dataset file
const tsContent = `// Auto-generated genuine customer review images dataset from Google Sheets: CLIENT REVIEW IMAGES tab
export interface ClientReviewItem {
  id: number;
  clientName: string;
  category: string;
  image: string;
  imagePng: string;
  rating: number;
  featured?: boolean;
}

export const CLIENT_REVIEWS_DATA: ClientReviewItem[] = [
${clients.map(c => `  {
    id: ${c.id},
    clientName: '${c.name.replace(/'/g, "\\'")}',
    category: '${c.category}',
    image: '/assets/images/client-reviews/review-${c.id}.webp',
    imagePng: '/assets/images/client-reviews/review-${c.id}.png',
    rating: 5,
    featured: ${[1, 3, 4, 7, 10, 11, 12, 17, 21, 24, 28, 30].includes(c.id)}
  },`).join('\n')}
];
`;

fs.writeFileSync('src/data/clientReviewsData.ts', tsContent);
console.log('Generated src/data/clientReviewsData.ts with all 30 genuine reviews!');
