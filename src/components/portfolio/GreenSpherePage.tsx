import { PortfolioDetailPage } from './PortfolioDetailPage';

export function GreenSpherePage() {
  return (
    <PortfolioDetailPage
      title="GreenSphere - ESG Management Platform"
      keywords="ESG metrics, sustainability tracking, ESG reporting, carbon emissions, compliance management"
      serviceOverview="GreenSphere provides a comprehensive platform for tracking, analyzing, and reporting ESG metrics, helping organizations achieve their sustainability goals. The platform addresses the challenges organizations face in tracking, managing, and reporting ESG metrics effectively, reducing compliance risks and identifying sustainability opportunities."
      coreFeatures={[
        'Comprehensive ESG metrics tracking',
        'Sustainability reporting automation',
        'Carbon footprint analysis and monitoring',
        'Compliance management tools',
        'Stakeholder reporting capabilities',
        'Goal tracking and benchmarking',
        'Real-time sustainability dashboards',
        'Regulatory compliance monitoring',
        'Data-driven sustainability insights'
      ]}
      technicalSpecs={[
        {
          title: 'ESG Tracking',
          items: [
            'Environmental metrics monitoring',
            'Social impact measurement',
            'Governance compliance tracking',
            'Integrated ESG scoring system'
          ]
        },
        {
          title: 'Carbon Management',
          items: [
            'Carbon footprint calculation',
            'Emissions tracking and analysis',
            'Reduction target monitoring',
            'Carbon offset management'
          ]
        },
        {
          title: 'Reporting & Compliance',
          items: [
            'Automated ESG report generation',
            'Regulatory compliance monitoring',
            'Stakeholder reporting tools',
            'Industry standard frameworks support'
          ]
        },
        {
          title: 'Analytics & Insights',
          items: [
            'Real-time sustainability dashboards',
            'Trend analysis and forecasting',
            'Benchmarking against industry standards',
            'Goal progress tracking'
          ]
        }
      ]}
      developmentStatus={[
        '23% average reduction in carbon emissions',
        '65% improvement in ESG reporting efficiency',
        'Comprehensive ESG metrics tracking',
        'Automated sustainability reporting',
        'Successfully deployed across multiple industries',
        'Continuous platform enhancements'
      ]}
      targetIndustries={[
        'Corporate Enterprises',
        'Financial Institutions',
        'Manufacturing Companies',
        'Energy Sector',
        'Public Organizations',
        'Investment Firms',
        'Retail Companies'
      ]}
      roiBenefits={[
        'Improved ESG performance scores',
        'Reduced carbon footprint by 23%',
        'Enhanced stakeholder confidence',
        'Streamlined compliance reporting by 65%',
        'Better sustainability decision-making',
        'Reduced regulatory risks'
      ]}
      competitiveAdvantages={[
        'Comprehensive ESG tracking capabilities',
        'Automated reporting and compliance',
        'Proven carbon emission reductions',
        'User-friendly sustainability dashboards',
        'Industry-leading analytics',
        'Continuous regulatory updates'
      ]}
    />
  );
}
