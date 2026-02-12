import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { AnimatedCounter } from './AnimatedCounter';
import { useEffect, useRef, useState } from 'react';
import { getLatestInsights } from '../data/insightsData';
// COMMENTED OUT - Services temporarily hidden from UI but preserved in codebase
// import { ServicesSlider } from './ServicesSlider';
import {
  Cpu,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  Award,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

export function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const portfolioProjects = [
    {
      title: 'BoostReferral - SaaS Platform',
      industry: 'SaaS',
      challenge: 'Businesses needed an automated solution to manage referral programs',
      solution: 'Comprehensive referral management platform with analytics',
      impact: ['Automated referral management', '99.9% platform uptime', 'Scalable SaaS architecture'],
      tags: ['SaaS Platform', 'Analytics', 'Automation'],
      image: '/images/portfolio/boostreferral.jpg',
      link: '/projects/boostreferral',
      liveUrl: 'https://www.boostreferral.com'
    },
    {
      title: 'ProjectSphere - Project Management Platform',
      industry: 'SaaS',
      challenge: 'Organizations need comprehensive project management tools',
      solution: 'Complete project management platform with real-time collaboration',
      impact: ['45% team efficiency', '30% faster delivery', '85% user adoption'],
      tags: ['Project Management', 'Collaboration', 'Analytics'],
      image: '/images/portfolio/projectsphere.jpg',
      link: '/projects/projectsphere'
    },
    {
      title: 'EnviroPulse - Environmental Monitoring',
      industry: 'Environmental Tech',
      challenge: 'Real-time monitoring across multiple zones needed',
      solution: 'IoT sensors with advanced analytics for environmental monitoring',
      impact: ['35% reduction in incidents', 'Real-time monitoring', 'Multi-zone tracking'],
      tags: ['IoT', 'Real-time Data', 'Analytics'],
      image: '/images/portfolio/enviropulse.jpg',
      link: '/projects/enviropulse',
      liveUrl: 'https://enviropulse.jashom.com'
    },
    {
      title: 'GreenSphere - ESG Platform',
      industry: 'ESG Platform',
      challenge: 'ESG metrics tracking and reporting challenges',
      solution: 'Comprehensive ESG tracking and reporting platform',
      impact: ['23% carbon reduction', '65% reporting efficiency', 'Automated reporting'],
      tags: ['ESG', 'Sustainability', 'Reporting'],
      image: '/images/portfolio/greensphere.jpg',
      link: '/projects/greensphere',
      liveUrl: 'https://greenesg.jashom.com/'
    },
    {
      title: 'EcoBot AI - Sustainability Assistant',
      industry: 'AI Platform',
      challenge: 'Organizations struggle with environmental regulations',
      solution: 'AI-powered sustainability assistant with instant responses',
      impact: ['40% reduced compliance issues', '60% better decisions', 'Instant responses'],
      tags: ['AI', 'NLP', 'Sustainability'],
      image: '/images/portfolio/ecobot-ai.jpg',
      link: '/projects/ecobot-ai',
      liveUrl: 'https://ecoai.jashom.com/dashboard'
    },
    {
      title: 'Jashom Health - Hospital System',
      industry: 'Healthcare',
      challenge: 'Multi-location healthcare with HIPAA compliance needed',
      solution: 'Comprehensive hospital management with real-time monitoring',
      impact: ['99.9% uptime', '40% reduced overhead', '100% HIPAA compliance'],
      tags: ['HIPAA', 'Healthcare', 'Real-time'],
      image: '/images/portfolio/jashom-health.jpg',
      link: '/projects/jashom-health',
      liveUrl: 'https://jashomhealth.jashom.com'
    },
    {
      title: 'Jashom Healthcare - Interoperability',
      industry: 'Healthcare',
      challenge: 'Healthcare systems in silos needed integration',
      solution: 'Seamless interoperability with HL7/FHIR protocols',
      impact: ['99.9% uptime', '35% reduced duplicates', '50+ partners integrated'],
      tags: ['HL7', 'FHIR', 'Integration'],
      image: '/images/portfolio/jashom-healthcare.jpg',
      link: '/projects/jashom-healthcare',
      liveUrl: 'https://jashomhealthcare.jashom.com'
    },
    {
      title: 'Jashom ICU Connect - Remote Monitoring',
      industry: 'Remote ICU',
      challenge: 'Rural hospitals lack access to specialist care',
      solution: 'Remote monitoring platform bridging rural hospitals and specialists',
      impact: ['40% reduced transfers', '15+ hospitals connected', '<30s response time'],
      tags: ['Remote Monitoring', 'Vital Signs', 'Collaboration'],
      image: '/images/portfolio/jashom-icu-connect.jpg',
      link: '/projects/jashom-icu-connect',
      liveUrl: 'https://jashomhealthcareplus.jashom.com'
    },
    {
      title: 'RAG.LU - AI Knowledge Platform',
      industry: 'AI Platform',
      challenge: 'Intelligent knowledge management needed',
      solution: 'RAG technology for knowledge management',
      impact: ['93% accuracy', '10x faster processing', 'AI transformation'],
      tags: ['RAG', 'AI', 'Knowledge Management'],
      image: '/images/portfolio/rag-lu.ai.png',
      link: '/projects/rag-lu',
      liveUrl: 'https://rag.lu'
    }
  ];

  const totalSlides = portfolioProjects.length;
  const maxSlide = totalSlides - cardsPerView;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }

    // Handle responsive cards per view
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3); // Desktop: 3 cards
      } else if (width >= 640) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
      setCurrentSlide(0); // Reset to start on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < maxSlide;

  return (
    <div className="min-h-screen" style={{ width: '100%', overflow: 'hidden', background: '#0B0F14' }}>
      <SEO
        title="Jashom. AI - AI & GPU Optimization | Enterprise AI Solutions"
        description="Transform your business with cutting-edge AI and GPU optimization solutions. Industry-leading expertise in machine learning, deep learning, and high-performance computing. Request a demo today."
        keywords="AI optimization, GPU acceleration, machine learning development, artificial intelligence consulting, MLOps, data engineering, AI security, CUDA programming, deep learning, neural networks, computer vision, NLP, enterprise AI"
      />
      {/* Hero Section - Full Screen Edge-to-Edge */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ margin: 0, padding: 0, background: '#0B0F14' }}>
        {/* Video Background - Full Screen Coverage */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ 
            pointerEvents: 'none',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Premium Gradient Overlay */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'radial-gradient(ellipse at center, rgba(11, 15, 20, 0.3) 0%, rgba(11, 15, 20, 0.5) 50%, rgba(11, 15, 20, 0.7) 100%)'
        }} />

        <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(14, 165, 233, 0.2)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span style={{ color: '#9E9E9E' }}>Next-Gen AI Solutions</span>
            </motion.div>

            <motion.h1
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-0"
              style={{ 
                color: '#FAFAFA',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Accelerate Your AI Journey with <span style={{ color: '#0EA5E9' }}>Precision Engineering</span>
            </motion.h1>

            <motion.p
              className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0"
              style={{ 
                color: '#9E9E9E',
                lineHeight: 1.8,
                textShadow: '0 2px 10px rgba(0,0,0,0.9)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From GPU optimization to intelligent automation, we build AI solutions that drive measurable business outcomes.
              Partner with experts who understand both technology and your industry.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="w-auto max-w-xs px-6 sm:px-8 py-3 sm:py-4 rounded-xl border text-center text-sm sm:text-base cursor-pointer transition-all duration-240"
                style={{
                  background: 'rgba(14, 165, 233, 0.12)',
                  borderColor: 'rgba(14, 165, 233, 0.35)',
                  color: '#FAFAFA'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.18)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Start Your AI Transformation
              </Link>
              <a
                href="https://calendly.com/jaydave-jashom/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto max-w-xs px-6 sm:px-8 py-3 sm:py-4 rounded-xl border text-center text-sm sm:text-base cursor-pointer transition-all duration-240"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FAFAFA'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Schedule a Meeting
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMMENTED OUT - Services temporarily hidden from UI but preserved in codebase */}
      {/* <ServicesSlider /> */}

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #0B0F14 0%, #111827 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
              What We <span style={{ color: '#0EA5E9' }}>Do</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* GPU Optimization */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>GPU Optimization</h3>
              <p className="text-base sm:text-lg leading-loose" style={{ color: '#9E9E9E', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                We unlock maximum GPU performance through memory optimization, kernel tuning, and throughput engineering. Our solutions deliver measurable speed improvements and cost reductions for production workloads at scale.
              </p>
            </div>

            {/* CUDA Development */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>CUDA Development</h3>
              <p className="text-base sm:text-lg leading-loose" style={{ color: '#9E9E9E', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                We build custom CUDA solutions for parallel computing and performance-critical systems. From low-level GPU programming to algorithm acceleration, we help organizations extract full value from NVIDIA hardware.
              </p>
            </div>

            {/* AI Engineering */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>AI Engineering</h3>
              <p className="text-base sm:text-lg leading-loose" style={{ color: '#9E9E9E', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                We develop production-ready AI systems that deliver business impact. Our work spans model optimization, deployment architecture, and integration—moving AI from experimentation to reliable operation.
              </p>
            </div>

            {/* Data & Performance Engineering */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Data & Performance Engineering</h3>
              <p className="text-base sm:text-lg leading-loose" style={{ color: '#9E9E9E', fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                We architect high-performance data systems that handle scale and complexity. Through optimized pipelines and system design, we enable faster insights and more reliable decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Which Services We Provide Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
              Which Services We Provide
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#9E9E9E' }}>
              Comprehensive AI and technology solutions tailored to accelerate your business growth
            </p>
          </motion.div>

          {/* Services Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 - AI & ML Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>AI & ML Solutions</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                Custom AI models, machine learning pipelines, and intelligent automation systems that transform your business operations.
              </p>
              <a href="/services" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Service 2 - GPU Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>GPU Optimization</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                High-performance CUDA development and GPU acceleration services for AI workloads and compute-intensive applications.
              </p>
              <a href="/services/gpu-optimization" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Service 3 - DevOps & Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>DevOps & Cloud</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                Scalable cloud infrastructure, CI/CD automation, and DevSecOps practices for reliable and secure deployments.
              </p>
              <a href="/services" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Service 4 - Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Cybersecurity</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                Comprehensive security assessments, VAPT services, and compliance solutions to protect your digital assets.
              </p>
              <a href="/services" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Service 5 - Product Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Product Engineering</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                End-to-end product development from ideation to deployment, building scalable and user-centric solutions.
              </p>
              <a href="/services" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Service 6 - Custom Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.3)' }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#0EA5E9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Custom Development</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                Tailored software solutions designed to meet your unique business requirements and technical challenges.
              </p>
              <a href="/services" className="text-sm font-semibold inline-flex items-center gap-2 transition-colors" style={{ color: '#0EA5E9' }}>
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:opacity-90"
              style={{
                background: '#0EA5E9',
                color: '#FFFFFF'
              }}
            >
              View All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section-5: Trusted by Innovative Teams Worldwide */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-[#0a0a1a] to-black relative overflow-hidden" style={{ marginTop: '4rem' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl font-bold mb-12 sm:mb-16"
          >
            Trusted by Innovative Teams Worldwide
          </motion.h2>

          {/* Main Grid Container: 50% | 50% split - Force side-by-side on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* LEFT SIDE - LOGOS (50%) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex items-center justify-center"
            >
              {/* 2x2 Logo Grid - Clean and transparent */}
              <div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                <motion.div 
                  className="flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logos/nvidia.png" 
                    alt="NVIDIA"
                    className="h-10 sm:h-12 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logos/aws.png" 
                    alt="AWS"
                    className="h-10 sm:h-12 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logos/goggle cloud.png" 
                    alt="Google Cloud"
                    className="h-10 sm:h-12 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logos/microsoft-azure.png" 
                    alt="Microsoft Azure"
                    className="h-12 sm:h-14 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - CONTENT (50%) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Heading with gradient */}
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight mb-8 md:mb-10">
                500+ clients served
              </h3>

              {/* Metrics Grid - 2 columns on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {/* Metric 1 */}
                <motion.div 
                  className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">$20bn</div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    worth investment portfolios managed
                  </p>
                </motion.div>

                {/* Metric 2 */}
                <motion.div 
                  className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">10x</div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    faster pharmaceutical market analytics
                  </p>
                </motion.div>

                {/* Metric 3 */}
                <motion.div 
                  className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">20M+</div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    customers enjoying AI-powered shopping
                  </p>
                </motion.div>

                {/* Metric 4 */}
                <motion.div 
                  className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">$50K</div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    saved annually with DevOps
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10x', label: 'Performance Gain' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                duration={2 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider Section - Controlled Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30">
              <span className="text-[#d1d5db] text-sm">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Our Portfolio
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Real-world transformations powered by our AI and GPU optimization expertise
            </p>
          </motion.div>

          {/* Controlled Carousel Container */}
          <div className="relative">
            {/* Left Arrow - Responsive positioning */}
            <button
              onClick={goToPrev}
              disabled={!canGoPrev}
              className={`absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canGoPrev
                  ? 'bg-blue-500 hover:bg-cyan-600 cursor-pointer shadow-2xl'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
            </button>

            {/* Right Arrow - Responsive positioning */}
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={`absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canGoNext
                  ? 'bg-blue-500 hover:bg-cyan-600 cursor-pointer shadow-2xl'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next slide"
              type="button"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
            </button>

            {/* Carousel Wrapper - Overflow Hidden with responsive padding */}
            <div className="overflow-hidden px-12 sm:px-14 lg:px-16">
              {/* Carousel Track - Transform Based */}
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / cardsPerView + (cardsPerView === 1 ? 0 : 24 / cardsPerView))}%)`
                }}
              >
                {portfolioProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: cardsPerView === 1 
                        ? '100%' 
                        : `calc(${100 / cardsPerView}% - ${(24 * (cardsPerView - 1)) / cardsPerView}px)`
                    }}
                  >
                    <div className="glass-effect rounded-2xl p-3 sm:p-4 border border-[#ffffff]/30 h-full flex flex-col hover:border-[#ffffff]/50 transition-all duration-300 group">
                      {/* Image - Responsive sizing */}
                      {project.image && (
                        <div className="mb-3 rounded-lg overflow-hidden border border-white/10 w-full max-w-[200px]" style={{ height: '120px' }}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-white/10 text-white/70 text-xs">
                          {project.industry}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#d1d5db] transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      <div className="space-y-2 mb-3 flex-grow">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                            <span className="text-[#d1d5db] text-xs font-medium">Challenge</span>
                          </div>
                          <p className="text-white/60 text-xs leading-relaxed pl-3 line-clamp-2">{project.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                            <span className="text-[#d1d5db] text-xs font-medium">Solution</span>
                          </div>
                          <p className="text-white/60 text-xs leading-relaxed pl-3 line-clamp-2">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-[#ffffff]/10 text-white/50 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                        <Link
                          to={project.link}
                          className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors text-xs group/link"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#ffffff] hover:text-[#d1d5db] transition-colors text-xs"
                          >
                            <span>Visit Live Platform</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Minimal Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header - Centered */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(14, 165, 233, 0.05)',
                borderColor: 'rgba(14, 165, 233, 0.2)'
              }}
            >
              <span style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.875rem' }}>Client Testimonials</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#FAFAFA', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              What Our Clients Say
            </h2>
            
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
              Trusted by industry leaders to deliver exceptional results
            </p>
          </motion.div>

          {/* Testimonials Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div 
                className="h-full p-8 rounded-2xl border transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "Jashom's GPU optimization reduced our inference latency by 73%. The team's expertise in CUDA programming is unmatched."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFF'
                  }}>
                    DC
                  </div>
                  <div>
                    <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '15px' }}>David Chen</div>
                    <div style={{ color: '#9CA3AF', fontSize: '13px' }}>VP Engineering, Apex AI</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div 
                className="h-full p-8 rounded-2xl border transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "The AI automation solutions delivered by Jashom transformed our workflow. We achieved 5x faster processing with their custom ML pipeline."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFF'
                  }}>
                    MR
                  </div>
                  <div>
                    <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '15px' }}>Maria Rodriguez</div>
                    <div style={{ color: '#9CA3AF', fontSize: '13px' }}>CTO, DataFlow Systems</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div 
                className="h-full p-8 rounded-2xl border transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#0EA5E9" opacity="0.3"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "Outstanding DevSecOps implementation. Jashom's team integrated security seamlessly into our CI/CD pipeline without compromising speed."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #10B981, #34D399)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFF'
                  }}>
                    EW
                  </div>
                  <div>
                    <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '15px' }}>Emily Watson</div>
                    <div style={{ color: '#9CA3AF', fontSize: '13px' }}>Head of Security, TechCorp</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Jashom - Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #111827 0%, #0B0F14 100%)' }}>
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-6 py-2 rounded-full border" style={{
              background: 'rgba(14, 165, 233, 0.08)',
              borderColor: 'rgba(14, 165, 233, 0.25)'
            }}>
              <span style={{ color: '#0EA5E9', fontWeight: 600 }}>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}>
              Why <span style={{ color: '#0EA5E9' }}>Jashom</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
              Experience the Jashom advantage with cutting-edge AI solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Benefit 1 - GPU Expertise */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <Cpu className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>10x GPU Performance</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Advanced CUDA optimization and parallel computing expertise delivering measurable speedups for AI workloads and real-time inference systems.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 - AI Engineering */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <Brain className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Production-Ready AI</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  From model development to deployment, we build scalable AI systems that deliver real business impact across healthcare, finance, and retail sectors.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 - Enterprise Security */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <Shield className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Bank-Grade Security</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Enterprise-level security protocols, compliance frameworks, and data protection ensuring your AI infrastructure remains secure and audit-ready.
                </p>
              </div>
            </motion.div>

            {/* Benefit 4 - Fast Deployment */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <Zap className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Lightning Fast Deployment</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Rapid prototyping to production pipeline with MLOps best practices, reducing deployment cycles from weeks to hours with continuous optimization.
                </p>
              </div>
            </motion.div>

            {/* Benefit 5 - 24/7 Support */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <Users className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>24/7 Expert Support</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Round-the-clock monitoring and dedicated support team ensuring your AI systems run smoothly with guaranteed response times for critical issues.
                </p>
              </div>
            </motion.div>

            {/* Benefit 6 - Cost Optimization */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderColor: 'rgba(14, 165, 233, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.3)'
                }}>
                  <TrendingUp className="w-8 h-8" style={{ color: '#0EA5E9' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Cost-Effective Solutions</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Optimized resource utilization and intelligent scaling strategies that reduce infrastructure costs while maximizing performance and ROI.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                borderColor: 'rgba(14, 165, 233, 0.35)',
                border: '1px solid',
                color: '#FAFAFA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.18)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(14, 165, 233, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Start Your AI Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0B0F14' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <motion.div
                  className="inline-block mb-4 px-4 py-2 rounded-full border"
                  style={{
                    background: 'rgba(14, 165, 233, 0.08)',
                    borderColor: 'rgba(14, 165, 233, 0.25)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.875rem' }}>Resources</span>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}>
                  Our Latest <span style={{ color: '#0EA5E9' }}>Blogs</span>
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-240"
                style={{
                  background: 'rgba(14, 165, 233, 0.12)',
                  border: '1px solid rgba(14, 165, 233, 0.35)',
                  color: '#FAFAFA'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.18)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>View All</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getLatestInsights(3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <Link to={blog.link} className="block h-full">
                  <div
                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                      background: '#111827',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden" style={{ background: '#1E293B' }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${blog.image})`,
                          opacity: 0.4
                        }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0" style={{
                        background: 'linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)'
                      }} />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{
                          background: 'rgba(14, 165, 233, 0.15)',
                          color: '#0EA5E9',
                          border: '1px solid rgba(14, 165, 233, 0.3)',
                          backdropFilter: 'blur(8px)'
                        }}>
                          {blog.category}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 transition-colors duration-240 group-hover:text-[#0EA5E9]" style={{ 
                        color: '#FAFAFA',
                        lineHeight: 1.4
                      }}>
                        {blog.title}
                      </h3>

                      <p className="text-sm mb-4 line-clamp-2" style={{ 
                        color: '#9CA3AF',
                        lineHeight: 1.6
                      }}>
                        {blog.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#6B7280' }}>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-240" style={{ color: '#0EA5E9' }}>
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-240 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                      background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.05) 0%, rgba(14, 165, 233, 0.02) 100%)'
                    }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:hidden"
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-240"
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#FAFAFA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.18)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
              }}
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0F14 0%, #111827 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(14, 165, 233, 0.08)',
                borderColor: 'rgba(14, 165, 233, 0.25)'
              }}
            >
              <span style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.875rem' }}>Get In Touch</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}>
              Let's Build Something <span style={{ color: '#0EA5E9' }}>Amazing</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
              Ready to transform your business with AI? Share your details and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 font-medium text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 font-medium text-sm">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium text-sm">Service Interest</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                >
                  <option value="" className="bg-[#1A1A1A]">Select a service</option>
                  <option value="gpu-optimization" className="bg-[#1A1A1A]">GPU Optimization Service</option>
                  <option value="cuda-development" className="bg-[#1A1A1A]">CUDA Development Service</option>
                  <option value="ai-ml" className="bg-[#1A1A1A]">AI/ML Development</option>
                  <option value="consulting" className="bg-[#1A1A1A]">AI Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium text-sm">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(14, 165, 233, 0.12)',
                  border: '1px solid rgba(14, 165, 233, 0.35)',
                  color: '#FAFAFA'
                }}
                whileHover={{ 
                  scale: 1.02,
                  background: 'rgba(14, 165, 233, 0.18)',
                  borderColor: 'rgba(14, 165, 233, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12 border border-[#ffffff]/30 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/10 to-[#d1d5db]/10 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="mb-3 sm:mb-4 text-gradient text-xl sm:text-2xl md:text-3xl px-2">Ready to Accelerate Your AI Journey?</h2>
              <p className="text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Join hundreds of forward-thinking companies leveraging Jashom's AI expertise
                to drive innovation and achieve unprecedented business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link
                  to="/contact"
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base cursor-pointer"
                >
                  Request a Demo
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 border border-[#ffffff]/30 text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
