import { PortfolioDetailPage } from './PortfolioDetailPage';

export function JashomICUConnectPage() {
  return (
    <PortfolioDetailPage
      title="Jashom ICU Connect - Remote Monitoring"
      keywords="remote ICU monitoring, telemedicine, vital signs tracking, specialist collaboration, critical care"
      serviceOverview="Jashom ICU Connect provides a comprehensive remote monitoring and collaboration platform that bridges the gap between rural hospitals and specialist care. The platform enables 24/7 real-time vital signs monitoring, direct communication between specialists and on-site staff, and secure role-based access control with HIPAA-compliant instant alert systems."
      coreFeatures={[
        '24/7 real-time vital signs monitoring and alerts',
        'Direct communication between specialists and on-site staff',
        'Secure role-based access control for different user types',
        'HIPAA-compliant platform with instant alert system',
        'Real-time vital signs tracking and analysis',
        'Secure video consultation capabilities',
        'Expert collaboration tools for remote specialists',
        'Critical care alert system with < 30 second response time',
        'Multi-facility monitoring from centralized dashboard'
      ]}
      technicalSpecs={[
        {
          title: 'Real-Time Monitoring',
          items: [
            'Continuous vital signs monitoring 24/7',
            'Instant critical care alerts',
            '< 30 second response time for emergencies',
            'Real-time data synchronization across facilities'
          ]
        },
        {
          title: 'Specialist Collaboration',
          items: [
            'Direct communication channels with specialists',
            'Secure video consultation platform',
            'Remote expert guidance and support',
            'Collaborative decision-making tools'
          ]
        },
        {
          title: 'Access Control & Security',
          items: [
            'Role-based access control system',
            'HIPAA-compliant communications',
            'Encrypted video streaming',
            'Secure data transmission protocols'
          ]
        },
        {
          title: 'Alert System',
          items: [
            'Instant critical care notifications',
            'Customizable alert thresholds',
            'Multi-channel alert delivery',
            'Alert escalation protocols'
          ]
        }
      ]}
      developmentStatus={[
        '40% reduction in unnecessary patient transfers',
        '15+ hospitals now have specialist oversight',
        '< 30 second response time for critical alerts',
        'Improved outcomes through 24/7 specialist collaboration',
        '100% 24/7 monitoring coverage',
        'Zero critical alert failures since launch'
      ]}
      targetIndustries={[
        'Rural Hospitals',
        'Community Healthcare Centers',
        'Telemedicine Providers',
        'Critical Care Networks',
        'Healthcare Systems',
        'Remote Medical Facilities'
      ]}
      roiBenefits={[
        'Reduced patient transfer costs by 40%',
        'Improved patient outcomes in remote areas',
        'Access to specialist expertise 24/7',
        'Faster critical care response times',
        'Enhanced rural healthcare quality',
        'Reduced healthcare delivery costs'
      ]}
      securityGuarantees={[
        'HIPAA-compliant communications platform',
        'Encrypted video streaming for consultations',
        'Role-based access control for all users',
        'Secure data transmission protocols',
        'Comprehensive audit logging and compliance',
        'Regular security assessments and updates'
      ]}
    />
  );
}
