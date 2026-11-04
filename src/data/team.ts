export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sakthivel-muthusamy',
    name: 'Sakthivel Muthusamy',
    role: 'Founder, Managing Director',
    department: 'Executive Leadership',
    image: '/assets/images/team/sakthivel-muthusamy.webp',
    bio: 'Pioneered TeesZone with a vision to transform Tiruppur knitwear manufacturing into a seamless corporate-apparel solution provider across India.',
  },
  {
    id: 'saranya-sakthivel',
    name: 'Saranya Sakthivel',
    role: 'Director, Head of Operations',
    department: 'Operations & Production',
    image: '/assets/images/team/saranya-sakthivel.webp',
    bio: 'Oversees daily plant operations, cutting-to-pack workflows, and stringent quality assurance protocols across every production batch.',
  },
  {
    id: 'archana-r',
    name: 'Archana R',
    role: 'HR & Talent Acquisition Executive',
    department: 'Human Resources',
    image: '/assets/images/team/archana-r.webp',
    bio: 'Fosters our skilled artisan and workforce ecosystem, ensuring fair trade practices and continuous upskilling in apparel craftsmanship.',
  },
  {
    id: 'vijayadarshini-nm',
    name: 'Vijayadarshini NM',
    role: 'E-Commerce & Digital Growth Executive',
    department: 'Digital & Growth',
    image: '/assets/images/team/vijayadarshini-nm.webp',
    bio: 'Drives our digital presence, client onboarding platforms, and omni-channel customer experiences for businesses nationwide.',
  },
  {
    id: 'ramya-r',
    name: 'Ramya R',
    role: 'Business Development Manager',
    department: 'Business Development',
    image: '/assets/images/team/ramya-r.webp',
    bio: 'Leads institutional client partnerships, corporate bulk contracts, and nationwide distributor networks.',
  },
  {
    id: 'nithyasri-s',
    name: 'NithyaSri S',
    role: 'Corporate Relations & MIS Executive',
    department: 'Client Relations & MIS',
    image: '/assets/images/team/nithyasri-s.webp',
    bio: 'Coordinates order tracking, production updates, and seamless turnaround reports for corporate procurement teams.',
  },
  {
    id: 'vasuki-thangaraj',
    name: 'Vasuki Thangaraj',
    role: 'Junior Full Stack Developer',
    department: 'Technology & Platforms',
    image: '/assets/images/team/vasuki-thangaraj.webp',
    bio: 'Builds and optimizes TeesZone digital portals, quotation calculators, and manufacturing workflow management tools.',
  },
];
