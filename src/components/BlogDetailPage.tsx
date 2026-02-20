import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BlogDetailPage() {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState('');

  // Table of Contents
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'parallel-processing', title: 'The Power of Parallel Processing' },
    { id: 'training-times', title: 'Real-World Impact on Training Times' },
    { id: 'real-time-inference', title: 'Enabling Real-Time Inference' },
    { id: 'optimization', title: 'Optimization Strategies' },
    { id: 'future', title: 'The Future of GPU-Accelerated AI' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  // Demo blog content
  const blog = {
    title: 'GPU Acceleration in AI: Transforming Machine Learning Performance',
    excerpt: 'Explore how GPU optimization is revolutionizing AI workloads, reducing training time from weeks to hours, and enabling real-time inference at scale.',
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    category: 'Insights',
    author: 'Jashom Team',
    image: '/images/service-hero-bg.jpg',
    content: `
      <h2>Introduction</h2>
      <p>In the rapidly evolving landscape of artificial intelligence, GPU acceleration has emerged as a game-changing technology that's fundamentally transforming how we approach machine learning workloads. What once took weeks of computational time can now be accomplished in mere hours, opening up new possibilities for real-time AI applications at unprecedented scales.</p>

      <h2>The Power of Parallel Processing</h2>
      <p>Graphics Processing Units (GPUs) were originally designed to handle the parallel processing demands of rendering complex graphics. However, their architecture—featuring thousands of smaller, efficient cores designed for simultaneous operations—makes them ideally suited for the matrix operations that form the backbone of machine learning algorithms.</p>

      <p>Unlike traditional CPUs that excel at sequential processing, GPUs can perform thousands of calculations simultaneously. This parallel processing capability is particularly valuable for training deep neural networks, where the same operations need to be applied across massive datasets.</p>

      <h2>Real-World Impact on Training Times</h2>
      <p>The impact of GPU acceleration on training times is nothing short of revolutionary. Consider these real-world examples:</p>

      <ul>
        <li><strong>Image Classification:</strong> Training a ResNet-50 model on ImageNet that would take 29 days on a CPU can be completed in just 4 hours on a modern GPU cluster.</li>
        <li><strong>Natural Language Processing:</strong> Large language models that required weeks of training time can now be trained in days with proper GPU optimization.</li>
        <li><strong>Computer Vision:</strong> Object detection models can be trained 50-100x faster with GPU acceleration compared to CPU-only approaches.</li>
      </ul>

      <h2>Enabling Real-Time Inference</h2>
      <p>Beyond training, GPU acceleration is crucial for deploying AI models in production environments where real-time inference is required. Applications like autonomous vehicles, real-time video analysis, and interactive AI assistants all depend on the ability to process data and generate predictions in milliseconds.</p>

      <p>Modern GPUs, particularly those designed for data center deployment like NVIDIA's A100 and H100, offer specialized tensor cores that can perform mixed-precision calculations at incredible speeds, making real-time inference not just possible but practical at scale.</p>

      <h2>Optimization Strategies</h2>
      <p>To fully leverage GPU acceleration, several optimization strategies are essential:</p>

      <h3>1. Memory Management</h3>
      <p>Efficient memory usage is critical. Techniques like gradient checkpointing, mixed-precision training, and careful batch size selection can dramatically improve GPU utilization and training speed.</p>

      <h3>2. Kernel Optimization</h3>
      <p>Custom CUDA kernels can be developed to optimize specific operations in your ML pipeline, potentially offering 2-10x speedups over generic implementations.</p>

      <h3>3. Multi-GPU Scaling</h3>
      <p>Distributed training across multiple GPUs requires careful consideration of communication patterns, data parallelism strategies, and synchronization methods to achieve near-linear scaling.</p>

      <h2>The Future of GPU-Accelerated AI</h2>
      <p>As AI models continue to grow in size and complexity, GPU acceleration will become even more critical. Emerging technologies like:</p>

      <ul>
        <li>Sparse neural networks that can leverage GPU capabilities more efficiently</li>
        <li>Quantum-inspired algorithms designed for parallel execution</li>
        <li>Neuromorphic computing architectures that mimic biological neural networks</li>
      </ul>

      <p>These innovations promise to push the boundaries of what's possible with GPU-accelerated AI even further.</p>

      <h2>Conclusion</h2>
      <p>GPU acceleration has transformed machine learning from an academic curiosity into a practical tool that's reshaping industries worldwide. By reducing training times from weeks to hours and enabling real-time inference at scale, GPUs have made it possible to deploy AI solutions that were previously impractical or impossible.</p>

      <p>As we look to the future, the continued evolution of GPU technology, combined with sophisticated optimization techniques, will unlock even more powerful AI applications. Organizations that invest in understanding and leveraging GPU acceleration today will be well-positioned to lead in the AI-driven future.</p>
    `
  };

  return (
    <div className="min-h-screen" style={{ background: '#0B0F14' }}>
      <SEO
        title={`${blog.title} | Jashom Insights`}
        description={blog.excerpt}
        keywords="GPU acceleration, AI, machine learning, CUDA, deep learning"
      />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${blog.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'rgba(11, 15, 20, 0.85)' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/insights/"
              className="inline-flex items-center gap-2 text-base transition-colors"
              style={{ color: '#10B981' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 leading-relaxed"
            style={{ color: '#D1D5DB' }}
          >
            {blog.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF' }}>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF' }}>{blog.readTime}</span>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content Section with TOC */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <article style={{ color: '#D1D5DB' }}>
                
                {/* Introduction */}
                <div id="introduction">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    Introduction
                  </h2>
                  <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                    In the rapidly evolving landscape of artificial intelligence, GPU acceleration has emerged as a game-changing technology that's fundamentally transforming how we approach machine learning workloads. What once took weeks of computational time can now be accomplished in mere hours, opening up new possibilities for real-time AI applications at unprecedented scales.
                  </p>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* The Power of Parallel Processing */}
                <div id="parallel-processing">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    The Power of Parallel Processing
                  </h2>
                  
                  {/* Side by side: Text + Image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        Graphics Processing Units (GPUs) were originally designed to handle the parallel processing demands of rendering complex graphics. However, their architecture—featuring thousands of smaller, efficient cores designed for simultaneous operations—makes them ideally suited for the matrix operations that form the backbone of machine learning algorithms.
                      </p>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '0', fontSize: '1.0625rem' }}>
                        Unlike traditional CPUs that excel at sequential processing, GPUs can perform thousands of calculations simultaneously. This parallel processing capability is particularly valuable for training deep neural networks, where the same operations need to be applied across massive datasets.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/blog&insights/Parallel Processing.jpg"
                        alt="Parallel Processing Architecture"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* Real-World Impact */}
                <div id="training-times">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    Real-World Impact on Training Times
                  </h2>
                  <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                    The impact of GPU acceleration on training times is nothing short of revolutionary. Consider these real-world examples:
                  </p>

                  {/* Stat Highlight Block */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '12px',
                    padding: '32px',
                    marginBottom: '32px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <TrendingUp style={{ color: '#10B981', width: '24px', height: '24px' }} />
                      <h3 style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                        Performance Gains
                      </h3>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                      <li style={{ color: '#D1D5DB', marginBottom: '16px', paddingLeft: '0', lineHeight: 1.8 }}>
                        <strong style={{ color: '#10B981', fontWeight: 600 }}>Image Classification:</strong> Training a ResNet-50 model on ImageNet that would take 29 days on a CPU can be completed in just 4 hours on a modern GPU cluster.
                      </li>
                      <li style={{ color: '#D1D5DB', marginBottom: '16px', paddingLeft: '0', lineHeight: 1.8 }}>
                        <strong style={{ color: '#10B981', fontWeight: 600 }}>Natural Language Processing:</strong> Large language models that required weeks of training time can now be trained in days with proper GPU optimization.
                      </li>
                      <li style={{ color: '#D1D5DB', marginBottom: 0, paddingLeft: '0', lineHeight: 1.8 }}>
                        <strong style={{ color: '#10B981', fontWeight: 600 }}>Computer Vision:</strong> Object detection models can be trained 50-100x faster with GPU acceleration compared to CPU-only approaches.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* Real-Time Inference */}
                <div id="real-time-inference">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    Enabling Real-Time Inference
                  </h2>
                  
                  {/* Side by side: Image + Text */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <img
                        src="/images/blog&insights/Inference.jpg"
                        alt="Real-Time Inference"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        Beyond training, GPU acceleration is crucial for deploying AI models in production environments where real-time inference is required. Applications like autonomous vehicles, real-time video analysis, and interactive AI assistants all depend on the ability to process data and generate predictions in milliseconds.
                      </p>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '0', fontSize: '1.0625rem' }}>
                        Modern GPUs, particularly those designed for data center deployment like NVIDIA's A100 and H100, offer specialized tensor cores that can perform mixed-precision calculations at incredible speeds, making real-time inference not just possible but practical at scale.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* Optimization Strategies */}
                <div id="optimization">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    Optimization Strategies
                  </h2>
                  
                  {/* Side by side: Text + Image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                    <div>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        To fully leverage GPU acceleration, several optimization strategies are essential:
                      </p>

                      <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 600, marginTop: '32px', marginBottom: '20px' }}>
                        1. Memory Management
                      </h3>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        Efficient memory usage is critical. Techniques like gradient checkpointing, mixed-precision training, and careful batch size selection can dramatically improve GPU utilization and training speed.
                      </p>

                      <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 600, marginTop: '32px', marginBottom: '20px' }}>
                        2. Kernel Optimization
                      </h3>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        Custom CUDA kernels can be developed to optimize specific operations in your ML pipeline, potentially offering 2-10x speedups over generic implementations.
                      </p>

                      <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 600, marginTop: '32px', marginBottom: '20px' }}>
                        3. Multi-GPU Scaling
                      </h3>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '0', fontSize: '1.0625rem' }}>
                        Distributed training across multiple GPUs requires careful consideration of communication patterns, data parallelism strategies, and synchronization methods to achieve near-linear scaling.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/blog&insights/Optimization Strategies.jpg"
                        alt="Optimization Strategies"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
                          position: 'sticky',
                          top: '120px'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* Future */}
                <div id="future">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    The Future of GPU-Accelerated AI
                  </h2>
                  
                  {/* Side by side: Image + Text */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <img
                        src="/images/blog&insights/GPU-Accelerated AI.jpg"
                        alt="Future of GPU-Accelerated AI"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        As AI models continue to grow in size and complexity, GPU acceleration will become even more critical. Emerging technologies like:
                      </p>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '2.5rem', marginBottom: '32px', marginTop: '24px' }}>
                        <li style={{ color: '#D1D5DB', marginBottom: '16px', paddingLeft: '8px', lineHeight: 1.8 }}>
                          Sparse neural networks that can leverage GPU capabilities more efficiently
                        </li>
                        <li style={{ color: '#D1D5DB', marginBottom: '16px', paddingLeft: '8px', lineHeight: 1.8 }}>
                          Quantum-inspired algorithms designed for parallel execution
                        </li>
                        <li style={{ color: '#D1D5DB', marginBottom: '16px', paddingLeft: '8px', lineHeight: 1.8 }}>
                          Neuromorphic computing architectures that mimic biological neural networks
                        </li>
                      </ul>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '0', fontSize: '1.0625rem' }}>
                        These innovations promise to push the boundaries of what's possible with GPU-accelerated AI even further.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)', margin: '60px 0' }} />

                {/* Conclusion */}
                <div id="conclusion">
                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    marginTop: '60px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    Conclusion
                  </h2>
                  
                  {/* Side by side: Text + Image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '28px', fontSize: '1.0625rem' }}>
                        GPU acceleration has transformed machine learning from an academic curiosity into a practical tool that's reshaping industries worldwide. By reducing training times from weeks to hours and enabling real-time inference at scale, GPUs have made it possible to deploy AI solutions that were previously impractical or impossible.
                      </p>
                      <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '0', fontSize: '1.0625rem' }}>
                        As we look to the future, the continued evolution of GPU technology, combined with sophisticated optimization techniques, will unlock even more powerful AI applications. Organizations that invest in understanding and leveraging GPU acceleration today will be well-positioned to lead in the AI-driven future.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/blog&insights/Conclusion.jpg"
                        alt="Conclusion"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
                        }}
                      />
                    </div>
                  </div>
                </div>

              </article>
            </motion.div>

            {/* Floating Table of Contents - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block lg:col-span-4"
            >
              <div style={{ position: 'sticky', top: '120px' }}>
                <div style={{
                  background: 'rgba(17, 24, 39, 0.6)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    color: '#FFFFFF',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    Table of Contents
                  </h3>
                  <nav>
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 16px',
                          marginBottom: '8px',
                          borderRadius: '8px',
                          border: 'none',
                          background: activeSection === item.id ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                          color: activeSection === item.id ? '#10B981' : '#9CA3AF',
                          fontSize: '0.9375rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          borderLeft: activeSection === item.id ? '3px solid #10B981' : '3px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (activeSection !== item.id) {
                            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.05)';
                            e.currentTarget.style.color = '#D1D5DB';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeSection !== item.id) {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#9CA3AF';
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 text-center border"
            style={{
              background: 'rgba(16, 185, 129, 0.05)',
              borderColor: 'rgba(16, 185, 129, 0.2)'
            }}
          >
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Ready to Accelerate Your AI Projects?
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: '#9CA3AF' }}
            >
              Let's discuss how GPU optimization can transform your machine learning workflows.
            </p>
            <Link
              to="/contact/"
              className="inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #10B981 100%)',
                color: '#000000'
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add custom styles for the article content */}
      <style>{`
        .prose h2 {
          color: #FFFFFF;
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .prose h3 {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #D1D5DB;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 2rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          color: #D1D5DB;
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }
        .prose strong {
          color: #10B981;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}



