import { PortfolioDetailPage } from './PortfolioDetailPage';

export function EnviroPulsePage() {
  return (
    <PortfolioDetailPage
      title="EnviroPulse - Environmental Monitoring"
      keywords="environmental monitoring, IoT sensors, real-time data, environmental analytics, compliance reporting"
      serviceOverview="EnviroPulse combines IoT sensors with advanced analytics to provide real-time monitoring and insights across multiple environmental parameters. The platform addresses the need for comprehensive coverage and actionable insights in industrial facilities, enabling real-time monitoring of environmental metrics across multiple zones."
      coreFeatures={[
        'Real-time environmental monitoring across multiple zones',
        'IoT sensor integration for comprehensive data collection',
        'Advanced data visualization and analytics',
        'Automated alerts and notifications',
        'Comprehensive environmental analytics dashboard',
        'Multi-parameter tracking capabilities',
        'Compliance reporting automation',
        'Historical data analysis and trending',
        'Customizable monitoring thresholds'
      ]}
      technicalSpecs={[
        {
          title: 'IoT Integration',
          items: [
            'Support for multiple sensor types',
            'Real-time data collection and processing',
            'Wireless and wired sensor connectivity',
            'Scalable sensor network architecture'
          ]
        },
        {
          title: 'Monitoring Capabilities',
          items: [
            'Multi-zone environmental tracking',
            'Real-time parameter monitoring',
            'Automated threshold alerts',
            'Continuous data logging'
          ]
        },
        {
          title: 'Analytics & Reporting',
          items: [
            'Advanced data visualization',
            'Trend analysis and forecasting',
            'Compliance report generation',
            'Custom dashboard creation'
          ]
        },
        {
          title: 'Alert System',
          items: [
            'Instant notifications for threshold breaches',
            'Multi-channel alert delivery',
            'Escalation protocols',
            'Alert history and tracking'
          ]
        }
      ]}
      developmentStatus={[
        '35% reduction in environmental incidents',
        '45% improvement in compliance reporting efficiency',
        'Real-time environmental monitoring capabilities',
        'Multi-zone tracking across facilities',
        'Successfully deployed in multiple industrial facilities',
        'Continuous platform enhancements'
      ]}
      targetIndustries={[
        'Manufacturing Facilities',
        'Industrial Plants',
        'Environmental Agencies',
        'Research Institutions',
        'Compliance Organizations',
        'Chemical Processing Plants',
        'Energy Production Facilities'
      ]}
      roiBenefits={[
        'Reduced environmental compliance risks',
        'Improved incident response times by 35%',
        'Better environmental performance tracking',
        'Automated compliance reporting saving time',
        'Data-driven environmental decisions',
        'Reduced regulatory penalties'
      ]}
      competitiveAdvantages={[
        'Comprehensive IoT sensor integration',
        'Real-time monitoring and alerts',
        'Advanced analytics capabilities',
        'Multi-zone tracking support',
        'Proven reduction in environmental incidents',
        'User-friendly interface and dashboards'
      ]}
    />
  );
}
