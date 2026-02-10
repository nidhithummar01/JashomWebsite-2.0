import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { AnimatedCounter } from './AnimatedCounter';
import { useEffect, useRef } from 'react';
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
  Clock
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

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

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
                  className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
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
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
