import { PortfolioDetailPage } from './PortfolioDetailPage';

export function JashomHealthPage() {
  return (
    <PortfolioDetailPage
      title="Jashom Health - Hospital System"
      keywords="hospital management, HIPAA compliance, patient monitoring, healthcare analytics, multi-location healthcare"
      serviceOverview="Jashom Health provides a comprehensive hospital management system designed specifically for multi-location healthcare facilities. The platform combines advanced technology with strict compliance standards to deliver centralized patient management, built-in HIPAA compliance, real-time patient monitoring, and integrated analytics across all locations."
      coreFeatures={[
        'Centralized patient management across all locations',
        'Built-in HIPAA compliance with audit trails',
        'Real-time patient monitoring and alerts',
        'Integrated analytics and reporting',
        'End-to-end encryption for data security',
        'Role-based access control ensuring compliance',
        'Live patient monitoring with instant alerts',
        'Comprehensive healthcare dashboard with unified patient data view',
        'Data-driven insights for operational efficiency and patient outcomes'
      ]}
      technicalSpecs={[
        {
          title: 'HIPAA-Compliant Security',
          items: [
            'End-to-end encryption for all patient data',
            'Comprehensive audit trails for compliance',
            'Role-based access control',
            'Complete compliance with healthcare regulations'
          ]
        },
        {
          title: 'Multi-Location Support',
          items: [
            'Seamless management of multiple hospital locations',
            'Centralized data with distributed access controls',
            'Supports 25+ hospital locations simultaneously',
            '2,500+ active healthcare professionals'
          ]
        },
        {
          title: 'Real-Time Monitoring',
          items: [
            'Live patient monitoring capabilities',
            'Instant alerts and notifications for critical care',
            'Real-time patient data synchronization',
            '< 30 second response time for critical alerts'
          ]
        },
        {
          title: 'Advanced Analytics',
          items: [
            'Data-driven insights for operational efficiency',
            'Patient outcomes tracking and analysis',
            'Resource optimization analytics',
            'Comprehensive reporting capabilities'
          ]
        }
      ]}
      developmentStatus={[
        '99.9% system uptime ensuring continuous patient care',
        '40% reduction in administrative overhead',
        '60% improvement in patient care coordination',
        '100% HIPAA compliance with zero security incidents',
        'Zero security incidents since launch',
        'Real-time patient data synchronization across all facilities'
      ]}
      targetIndustries={[
        'Multi-location Hospitals',
        'Healthcare Networks',
        'Medical Centers',
        'Specialty Clinics',
        'Healthcare Systems'
      ]}
      roiBenefits={[
        'Improved patient care quality through real-time monitoring',
        'Reduced administrative costs by 40%',
        'Better resource utilization across facilities',
        'Enhanced care coordination between locations',
        'Complete compliance risk mitigation'
      ]}
      securityGuarantees={[
        'HIPAA-compliant architecture with full audit trails',
        'End-to-end encryption for all patient data',
        'Role-based access control for different user types',
        'Continuous audit logging and monitoring',
        'Regular security assessments and updates',
        'Data backup and disaster recovery systems'
      ]}
    />
  );
}
