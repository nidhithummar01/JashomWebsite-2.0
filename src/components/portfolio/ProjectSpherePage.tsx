import { PortfolioDetailPage } from './PortfolioDetailPage';

export function ProjectSpherePage() {
  return (
    <PortfolioDetailPage
      title="ProjectSphere - Project Management Platform"
      keywords="project management, team collaboration, resource management, project analytics, workflow automation"
      serviceOverview="ProjectSphere offers a complete project management platform with real-time collaboration, resource management, and advanced analytics for better project outcomes."
      coreFeatures={[
        '45% improvement in team efficiency',
        '30% faster project delivery',
        '85% user adoption rate',
        'Real-time team collaboration',
        'Resource allocation and tracking',
        'Advanced project analytics',
        'Customizable workflows',
        'Integration with popular tools'
      ]}
      targetIndustries={[
        'Software Development Teams',
        'Marketing Agencies',
        'Consulting Firms',
        'Enterprise Organizations',
        'Remote Teams'
      ]}
      roiBenefits={[
        'Improved project delivery timelines',
        'Better resource utilization',
        'Enhanced team productivity',
        'Reduced project management overhead',
        'Data-driven decision making'
      ]}
    />
  );
}
