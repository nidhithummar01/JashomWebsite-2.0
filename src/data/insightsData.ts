export interface InsightCard {
  id: string;
  category: 'Insights' | 'Case study' | 'News';
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
  featured?: boolean;
  color?: string;
}

export const insightsData: InsightCard[] = [
  {
    id: '1',
    category: 'Insights',
    title: 'GPU Acceleration in AI: Transforming Machine Learning Performance',
    description: 'Explore how GPU optimization is revolutionizing AI workloads, reducing training time from weeks to hours, and enabling real-time inference at scale.',
    image: '/insights/gpu-ai.jpg',
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    link: '/insights/gpu-acceleration-ai/',
    featured: true,
    color: '#0EA5E9'
  },
  {
    id: '2',
    category: 'Case study',
    title: 'Dedicated team for investment portfolio management ecosystem',
    description: 'Learn how we developed a unified AI platform for investment portfolio management, serving thousands of investors with real-time analytics and insights.',
    image: '/insights/portfolio-management.jpg',
    date: 'Feb 5, 2026',
    readTime: '12 min read',
    link: '/portfolio/investment-portfolio/',
    featured: true,
    color: '#1E293B'
  },
  {
    id: '3',
    category: 'Case study',
    title: 'A shoppable video platform for ABUV',
    description: 'Find out how Jashom\'s dedicated team helped ABUV release their innovative machine learning-driven shoppable video platform.',
    image: '/insights/shoppable-video.jpg',
    date: 'Feb 1, 2026',
    readTime: '10 min read',
    link: '/portfolio/abuv-platform/',
    color: '#7C3AED'
  },
  {
    id: '4',
    category: 'Case study',
    title: 'A furniture manufacturing software suite',
    description: 'Read the story behind Jashom\'s 3-year collaboration with a leading UK furniture manufacturer and their digital transformation journey.',
    image: '/insights/furniture-software.jpg',
    date: 'Jan 28, 2026',
    readTime: '9 min read',
    link: '/portfolio/furniture-suite/',
    color: '#F5F5F5'
  },
  {
    id: '5',
    category: 'Insights',
    title: 'CUDA Development: Best Practices for High-Performance Computing',
    description: 'Explore the essentials of CUDA architecture, its advantages, pitfalls, examples of successful solutions, and implementation tips for optimal GPU performance.',
    image: '/insights/cuda-development.jpg',
    date: 'Jan 25, 2026',
    readTime: '15 min read',
    link: '/insights/cuda-best-practices/',
    color: '#F8F9FA'
  },
  {
    id: '6',
    category: 'Insights',
    title: 'Custom AI Solutions: Development Roadmap, Costs & Benefits',
    description: 'Discover the complete guide to building custom AI solutions, from initial assessment and architecture design to deployment and ROI maximization.',
    image: '/insights/custom-ai.jpg',
    date: 'Jan 20, 2026',
    readTime: '11 min read',
    link: '/insights/custom-ai-solutions/',
    color: '#0EA5E9'
  },
  {
    id: '7',
    category: 'Insights',
    title: 'Neurology Telemedicine: A Full Solution Overview',
    description: 'Learn about the architecture, features, integrations, and implementation of telemedicine solutions transforming neurological care delivery.',
    image: '/insights/telemedicine.jpg',
    date: 'Jan 15, 2026',
    readTime: '13 min read',
    link: '/insights/neurology-telemedicine/',
    color: '#1E293B'
  },
  {
    id: '8',
    category: 'Case study',
    title: 'BPM Automation for UK Care Homes',
    description: 'Learn how Jashom helped automate healthcare business process management system for UK care homes, improving efficiency by 60%.',
    image: '/insights/bpm-automation.jpg',
    date: 'Jan 10, 2026',
    readTime: '10 min read',
    link: '/portfolio/bpm-automation/',
    color: '#6B7280'
  }
];

// Get latest N insights
export const getLatestInsights = (count: number = 3): InsightCard[] => {
  return insightsData.slice(0, count);
};
