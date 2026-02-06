import { PortfolioDetailPage } from './PortfolioDetailPage';

export function RAGLUPage() {
  return (
    <PortfolioDetailPage
      title="RAG.LU - AI Knowledge Platform"
      keywords="RAG technology, AI knowledge management, information retrieval, machine learning, enterprise AI"
      serviceOverview="RAG.LU is an AI-powered platform that combines advanced Retrieval-Augmented Generation technology with user-friendly interfaces to deliver intelligent knowledge management solutions. The platform addresses the limitations of traditional search and knowledge management systems by combining retrieval mechanisms with generative AI to provide more accurate, contextual, and relevant responses."
      coreFeatures={[
        'Advanced RAG (Retrieval-Augmented Generation) implementation',
        'Intelligent knowledge retrieval and management',
        'AI-powered content analysis and processing',
        'Scalable architecture for enterprise deployment',
        'Natural language processing capabilities',
        'Real-time information synthesis',
        'Customizable knowledge base integration',
        'Enterprise-ready security and compliance',
        'Context-aware intelligent responses'
      ]}
      technicalSpecs={[
        {
          title: 'RAG Technology',
          items: [
            'Advanced Retrieval-Augmented Generation architecture',
            'Combines retrieval mechanisms with generative AI',
            'Context-aware information processing',
            'Intelligent response generation'
          ]
        },
        {
          title: 'Knowledge Management',
          items: [
            'Intelligent knowledge retrieval systems',
            'Customizable knowledge base integration',
            'Real-time information synthesis',
            'Advanced content analysis and processing'
          ]
        },
        {
          title: 'AI Capabilities',
          items: [
            'Natural language processing',
            'Machine learning model integration',
            'Contextual understanding and analysis',
            'Accurate and relevant response generation'
          ]
        },
        {
          title: 'Enterprise Features',
          items: [
            'Scalable architecture for large deployments',
            'Enterprise-ready security protocols',
            'Compliance and data protection',
            'High-performance processing capabilities'
          ]
        }
      ]}
      developmentStatus={[
        '93% accuracy in information retrieval',
        '10x faster processing speed compared to traditional systems',
        'RAG-powered knowledge management capabilities',
        'AI transformation solutions for enterprises',
        'Successfully deployed across multiple industries',
        'Continuous model improvements and updates'
      ]}
      targetIndustries={[
        'Enterprise Organizations',
        'Research Institutions',
        'Legal Firms',
        'Financial Services',
        'Healthcare Organizations',
        'Technology Companies',
        'Consulting Firms'
      ]}
      roiBenefits={[
        'Faster information access and retrieval',
        'Improved knowledge discovery and insights',
        'Reduced search time by 10x',
        'Enhanced decision-making capabilities',
        'Better knowledge utilization across organization',
        'Increased productivity through AI automation'
      ]}
      competitiveAdvantages={[
        'Breakthrough RAG technology implementation',
        'Superior accuracy compared to traditional search',
        'Contextual understanding of queries',
        'Democratized access to advanced AI capabilities',
        'Enterprise-grade reliability and security',
        'Continuous learning and improvement'
      ]}
    />
  );
}
