import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { AnimatedCounter } from './AnimatedCounter';
import { useEffect, useRef } from 'react';
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
  Rocket
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
      type: "spring",
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
    <div className="min-h-screen bg-black" style={{ width: '100%', overflow: 'hidden' }}>
      <SEO
        title="Jashom. AI - AI & GPU Optimization | Enterprise AI Solutions"
        description="Transform your business with cutting-edge AI and GPU optimization solutions. Industry-leading expertise in machine learning, deep learning, and high-performance computing. Request a demo today."
        keywords="AI optimization, GPU acceleration, machine learning development, artificial intelligence consulting, MLOps, data engineering, AI security, CUDA programming, deep learning, neural networks, computer vision, NLP, enterprise AI"
      />
      {/* Hero Section - Full Screen Edge-to-Edge */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black" style={{ margin: 0, padding: 0 }}>
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
        
        {/* Enhanced Dark Overlay for Text Readability - NO GRID */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />

        <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#d1d5db]">Next-Gen AI Solutions</span>
            </motion.div>

            <motion.h1
              className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Accelerate Your AI Journey with Precision Engineering
            </motion.h1>

            <motion.p
              className="mb-6 sm:mb-8 text-white max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0 font-medium"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
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
                className="w-auto max-w-xs px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-center text-sm sm:text-base cursor-pointer"
              >
                Start Your AI Transformation
              </Link>
              <a
                href="https://calendly.com/jaydave-jashom/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto max-w-xs px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-center text-sm sm:text-base cursor-pointer"
              >
                Schedule a Meeting
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* COMMENTED OUT - Services temporarily hidden from UI but preserved in codebase */}
      {/* <ServicesSlider /> */}

      <div className="flex justify-center pb-12 sm:pb-20 px-4">
        <Link
          to="/contact"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-center text-sm sm:text-base whitespace-nowrap cursor-pointer"
        >
          Schedule a Call
        </Link>
      </div>

      <CircuitDivider />

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What We Do</h2>
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
              <h3 className="text-white text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>GPU Optimization</h3>
              <p className="text-white/80 text-base sm:text-lg leading-loose" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                We unlock maximum GPU performance through memory optimization, kernel tuning, and throughput engineering. Our solutions deliver measurable speed improvements and cost reductions for production workloads at scale.
              </p>
            </div>

            {/* CUDA Development */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-white text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>CUDA Development</h3>
              <p className="text-white/80 text-base sm:text-lg leading-loose" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                We build custom CUDA solutions for parallel computing and performance-critical systems. From low-level GPU programming to algorithm acceleration, we help organizations extract full value from NVIDIA hardware.
              </p>
            </div>

            {/* AI Engineering */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-white text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Engineering</h3>
              <p className="text-white/80 text-base sm:text-lg leading-loose" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                We develop production-ready AI systems that deliver business impact. Our work spans model optimization, deployment architecture, and integration—moving AI from experimentation to reliable operation.
              </p>
            </div>

            {/* Data & Performance Engineering */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-white text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Data & Performance Engineering</h3>
              <p className="text-white/80 text-base sm:text-lg leading-loose" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                We architect high-performance data systems that handle scale and complexity. Through optimized pipelines and system design, we enable faster insights and more reliable decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Section-5: Trusted by Innovative Teams - Client Showcase & Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-black to-[#0a1a1a]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Trusted by Innovative Teams Worldwide
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-3xl mx-auto">
              Driving AI and GPU-accelerated solutions for modern businesses
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Client Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-8">
                Partnering with Industry Leaders
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'FinTech Platforms',
                  'AI Research Teams',
                  'SaaS Startups',
                  'Enterprise Engineering',
                  'Healthcare Systems',
                  'Data Analytics Firms',
                  'Cloud Providers',
                  'Manufacturing Tech'
                ].map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center justify-center text-center transition-all hover:bg-white/10 hover:border-white/20 cursor-default"
                  >
                    <span className="text-white/70 text-sm font-medium">{client}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Impact Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-8">
                Measurable Impact
              </h3>
              
              {/* Impact Card 1 */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">10× Performance Gains</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  GPU optimization delivering measurable speedups for compute-heavy workloads.
                </p>
              </motion.div>

              {/* Impact Card 2 */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">AI at Scale</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  CUDA-powered systems built for inference, training, and real-time analytics.
                </p>
              </motion.div>

              {/* Impact Card 3 */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">Cost-Efficient Infrastructure</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Reduced cloud and GPU infrastructure spend through low-level optimization.
                </p>
              </motion.div>

              {/* Impact Card 4 */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">Production-Ready Solutions</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  From prototype to deployment with performance guarantees.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Why Choose Jashom?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Industry-leading expertise in AI optimization and deployment
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Cpu,
                title: 'GPU Optimization',
                description: 'Maximize performance with advanced GPU acceleration and optimization techniques.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Deploy AI solutions that operate at unprecedented speeds without compromising quality.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security protocols to protect your data and AI models.'
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-4"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

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

      <CircuitDivider />

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Powered by Leading Technologies</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We leverage the most advanced AI frameworks and tools to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'TensorFlow', 'PyTorch', 'CUDA', 'Kubernetes', 'AWS', 'Azure',
              'NVIDIA', 'Docker', 'Ray', 'MLflow', 'Hugging Face', 'LangChain'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass-effect rounded-lg p-4 text-center border border-[#ffffff]/20 hover:border-[#d1d5db]/50 transition-all cursor-pointer group"
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="text-white/80 group-hover:text-white transition-colors">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Our AI-First Approach</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From strategy to deployment, we guide you through every step of your AI transformation journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Target,
                step: '01',
                title: 'Discover & Analyze',
                description: 'Deep dive into your business needs, challenges, and opportunities for AI integration.'
              },
              {
                icon: Brain,
                step: '02',
                title: 'Design & Architect',
                description: 'Create scalable AI architectures optimized for performance and cost-efficiency.'
              },
              {
                icon: Rocket,
                step: '03',
                title: 'Develop & Deploy',
                description: 'Build robust AI solutions with continuous testing and seamless deployment.'
              },
              {
                icon: TrendingUp,
                step: '04',
                title: 'Optimize & Scale',
                description: 'Monitor, refine, and scale your AI systems for maximum business impact.'
              }
            ].map((phase, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <motion.div
                    className="text-[#ffffff]/50 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {phase.step}
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-4"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <phase.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-white mb-3">{phase.title}</h3>
                  <p className="text-white/70 text-sm">{phase.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4 text-gradient text-2xl sm:text-3xl md:text-4xl">Trusted by Industry Leaders</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              See what our clients say about transforming their businesses with Jashom
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                quote: "Jashom's GPU optimization reduced our AI inference time by 85%. Their expertise in CUDA programming is unmatched.",
                author: "Sarah",
                role: "CTO, Tech Company",
                rating: 5
              },
              {
                quote: "The AI solutions delivered by Jashom have transformed our customer experience. ROI exceeded expectations within 6 months.",
                author: "Michael",
                role: "FoodTech Engineering",
                rating: 5
              },
              {
                quote: "Outstanding MLOps implementation. Our model deployment cycle went from weeks to hours. Game-changing partnership.",
                author: "Dr. Emily Watson",
                role: "Head of AI, HealthTech Solutions",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Sparkles className="w-5 h-5 text-[#d1d5db] fill-[#d1d5db]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Why Jashom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect border border-[#ffffff]/30">
                <span className="text-[#d1d5db] text-xs sm:text-sm">The Jashom Difference</span>
              </div>
              <h2 className="mb-4 sm:mb-6 text-gradient text-2xl sm:text-3xl md:text-4xl">Why Global Enterprises Choose Jashom</h2>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                We don't just build AI solutions—we create competitive advantages. Our team combines
                deep technical expertise with business acumen to deliver transformative results.
              </p>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  'Proven track record with Fortune 500 companies',
                  'Cutting-edge research in GPU acceleration',
                  'End-to-end AI solution design and implementation',
                  'Industry-specific domain expertise',
                  'Dedicated support and continuous optimization',
                  'Scalable solutions that grow with your business'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3 group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#d1d5db] flex-shrink-0 mt-0.5 group-hover:text-[#ffffff]" />
                    </motion.div>
                    <span className="text-white/80 group-hover:text-white transition-colors">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-[#d1d5db] hover:text-white transition-colors group text-sm sm:text-base cursor-pointer"
              >
                <span>View Our Success Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { icon: Award, label: 'Industry Recognition', value: '3+ Awards' },
                { icon: Users, label: 'Expert Team', value: '50+ AI Experts' },
                { icon: Globe, label: 'Global Presence', value: '3+ Countries' },
                { icon: Brain, label: 'AI Models', value: '50+ Models' }
              ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="glass-effect rounded-xl p-4 sm:p-6 border border-[#ffffff]/20 flex items-center gap-3 sm:gap-4 cursor-pointer group"
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      borderColor: 'rgba(0, 255, 255, 0.5)',
                      boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <metric.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors">{metric.label}</div>
                      <div className="text-white text-lg sm:text-xl group-hover:text-[#d1d5db] transition-colors">{metric.value}</div>
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CircuitDivider />

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
