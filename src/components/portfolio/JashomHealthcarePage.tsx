import { PortfolioDetailPage } from './PortfolioDetailPage';

export function JashomHealthcarePage() {
  return (
    <PortfolioDetailPage
      title="Jashom Healthcare - Interoperability Platform"
      keywords="healthcare interoperability, HL7 integration, FHIR standards, EMR integration, healthcare data exchange"
      serviceOverview="Jashom Healthcare provides seamless interoperability between healthcare systems using industry-standard protocols (HL7, FHIR) and advanced integration technology. The platform enables universal connectivity, real-time data synchronization, and built-in HIPAA compliance with 24/7 monitoring and support services."
      coreFeatures={[
        'Universal connectivity using HL7 and FHIR standards',
        'Real-time data synchronization across all systems',
        'Built-in HIPAA compliance and security protocols',
        '24/7 monitoring and support services',
        'Seamless integration with EMR, LIS, and PACS systems',
        'IoT medical device connectivity',
        'Remote care system integration',
        'Telemedicine platform compatibility',
        'Instant data synchronization with 99.9% uptime guarantee'
      ]}
      technicalSpecs={[
        {
          title: 'Universal Connectivity',
          items: [
            'Connect any healthcare system using HL7 and FHIR',
            'Proprietary API support with flexible integration engine',
            'Seamless integration with major EMR platforms (Epic, Cerner, Allscripts)',
            'Support for multiple data formats and protocols'
          ]
        },
        {
          title: 'Integration Capabilities',
          items: [
            'Electronic Medical Records (EMR) integration',
            'Laboratory Information Systems (LIS) connectivity',
            'Picture Archiving Systems (PACS) integration',
            'IoT Medical Devices real-time data collection',
            'Remote Care Systems integration',
            'Telemedicine Platform compatibility'
          ]
        },
        {
          title: 'Real-time Synchronization',
          items: [
            'Instant data synchronization across connected systems',
            '99.9% uptime guarantee',
            '24/7 continuous monitoring',
            'Quick issue resolution and support'
          ]
        },
        {
          title: 'Security & Compliance',
          items: [
            'Built-in HIPAA compliance protocols',
            'GDPR and regulatory requirements support',
            'End-to-end data encryption',
            'Secure data transfer mechanisms'
          ]
        }
      ]}
      developmentStatus={[
        '99.9% system uptime ensuring continuous data flow',
        '35% reduction in duplicate patient records',
        '50+ healthcare partners successfully integrated',
        '60% faster care coordination across facilities',
        '24/7 real-time synchronization',
        'Zero data loss incidents since launch'
      ]}
      targetIndustries={[
        'Healthcare Networks',
        'Hospital Systems',
        'Medical Device Manufacturers',
        'Healthcare IT Providers',
        'Telemedicine Platforms',
        'Laboratory Services',
        'Imaging Centers'
      ]}
      roiBenefits={[
        'Improved care coordination across facilities',
        'Reduced data duplication by 35%',
        'Faster information exchange between systems',
        'Better patient outcomes through unified data',
        'Enhanced operational efficiency',
        'Reduced IT integration costs'
      ]}
      securityGuarantees={[
        'HIPAA-compliant data exchange protocols',
        'Encrypted data transmission for all transfers',
        'Secure authentication and authorization',
        'Comprehensive audit trails and logging',
        'Data integrity verification mechanisms',
        'Regular security audits and compliance checks'
      ]}
    />
  );
}
