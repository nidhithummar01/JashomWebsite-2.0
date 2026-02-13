export interface Career {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  openings: number;
  postedDate: string;
  description: string;
  image: string;
}

export const careers: Career[] = [
  {
    id: '1',
    slug: 'senior-cuda-developer',
    title: 'Senior CUDA Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    openings: 2,
    postedDate: '11 February 2G',
    description: 'We are seeking an experienced CUDA developer to join our GPU optimization team. You will work on cutting-edge parallel computing projects.',
    image: '/images/careers/cuda-developer.jpg'
  },
  {
    id: '2',
    slug: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    department: 'AI',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-5 years',
    openings: 3,
    postedDate: '09 February 2G',
    description: 'Join our AI team to build and deploy state-of-the-art machine learning models. Work on real-world problems in computer vision and NLP.',
    image: '/images/careers/ai-engineer.jpg'
  },
  {
    id: '3',
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '4-6 years',
    openings: 1,
    postedDate: '05 February 2G',
    description: 'We need a skilled DevOps engineer to manage our cloud infrastructure and CI/CD pipelines. Help us scale our AI platforms efficiently.',
    image: '/images/careers/devops-engineer.jpg'
  },
  {
    id: '4',
    slug: 'frontend-developer-react',
    title: 'Frontend Developer (React)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    openings: 2,
    postedDate: '30 January 2G',
    description: 'Build beautiful and performant user interfaces for our AI platforms. Work with modern React, TypeScript, and cutting-edge frontend technologies.',
    image: '/images/careers/frontend-developer.jpg'
  },
  {
    id: '5',
    slug: 'technical-writer',
    title: 'Technical Writer',
    department: 'Documentation',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    openings: 1,
    postedDate: '20 January 2G',
    description: 'Create comprehensive technical documentation for our AI and GPU optimization products. Help developers understand complex technical concepts.',
    image: '/images/careers/technical-writer.jpg'
  },
  {
    id: '6',
    slug: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    openings: 1,
    postedDate: '15 January 2G',
    description: 'Lead product strategy and development for our AI solutions. Work closely with engineering and design teams to deliver exceptional products.',
    image: '/images/careers/product-manager.jpg'
  }
];

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find(career => career.slug === slug);
}

export function getAllDepartments(): string[] {
  const departments = careers.map(career => career.department);
  return ['All', ...Array.from(new Set(departments))];
}
