import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function GPUOptimizationServicePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Redirect to GPU optimization thank you page
    navigate('/gpu-optimization-thank-you');
  };
  return (
    <div className="min-h-screen" style={{ background: '#0B0F14' }}>
      <Helmet>
        <title>NVIDIA GPU Optimization Services | Optimize NVIDIA GPU Performance</title>
        <meta name="description" content="Improve speed and efficiency with expert NVIDIA GPU optimization services. We help businesses optimize NVIDIA GPU performance for AI, HPC, and data-intensive applications." />
      </Helmet>

      {/* Hero Section with Background Image */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url(/images/service-hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Gradient Overlay - Left to Right fade for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(11, 15, 20, 0.95) 0%, rgba(11, 15, 20, 0.85) 40%, rgba(11, 15, 20, 0.6) 70%, rgba(11, 15, 20, 0.4) 100%)'
          }}
        ></div>

        {/* Content - Premium Spacing */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
              style={{ maxWidth: '620px' }}
            >
              {/* Heading */}
              <h1
                className="font-bold text-white leading-tight"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                  letterSpacing: '-0.02em',
                  marginBottom: '32px'
                }}
              >
                GPU Optimization Services
              </h1>

              {/* Paragraph */}
              <p
                className="text-white/90"
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  lineHeight: '1.75',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
                  marginBottom: '48px',
                  maxWidth: '560px'
                }}
              >
                We create unique GPU optimization solutions that address actual performance issues. Our end-to-end optimization services deliver speed, scalability, and long-term business impact from planning to implementation and support.
              </p>

              {/* CTA Button */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{
                  background: '#10B981',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)'
                }}
              >
                Get Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#0B0F14' }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section title - full width centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <p className="text-sm uppercase tracking-wider" style={{ color: '#10B981' }}>Overview</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              What is GPU
              <br />
              Optimization?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Description */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-white/70 text-base leading-relaxed">
                  GPU optimization is the process of analyzing, tuning, and enhancing GPU workloads to maximize computational performance and efficiency. It involves identifying bottlenecks, optimizing memory usage, improving kernel execution, and implementing best practices to achieve faster processing times and reduced resource consumption.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  GPU optimization bridges the gap between raw computing power and practical application performance in AI/ML, scientific computing, data analytics, and rendering. It enables organizations to reduce infrastructure costs, accelerate time-to-results, and maintain competitive advantage in compute-intensive industries.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#10B981' }}>10x</div>
                    <div className="text-sm" style={{ color: '#9E9E9E' }}>Faster Performance</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#10B981' }}>40%</div>
                    <div className="text-sm" style={{ color: '#9E9E9E' }}>Cost Reduction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <img
                  src="/images/gpu.optimization.jpg"
                  alt="GPU Optimization"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider between sections */}
      <div className="premium-divider" />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section title - full width centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Optimize Performance That Will
              <br />
              Make a Difference
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-white/70 text-base leading-relaxed">
              Our skilled GPU engineers deliver scalable, efficient, and high-performance optimization solutions. Jashom provides performance-driven GPU optimization for all computing needs, from AI/ML acceleration to scientific computing workloads.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - CUDA Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                CUDA
                <br />
                Optimization
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                We optimize CUDA kernels, memory patterns, and parallel execution strategies to maximize GPU utilization. Our experts fine-tune your code for peak performance, reducing execution time and improving throughput across NVIDIA GPU architectures.
              </p>
            </motion.div>

            {/* Card 2 - AI/ML Acceleration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                AI/ML
                <br />
                Acceleration
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Accelerate your machine learning models with our GPU optimization expertise. We optimize training pipelines, inference workloads, and neural network architectures to achieve faster results with lower computational costs.
              </p>
            </motion.div>

            {/* Card 3 - Performance Profiling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                Performance
                <br />
                Profiling
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Comprehensive performance analysis using industry-standard profiling tools. We identify bottlenecks, analyze memory usage patterns, and provide actionable insights to optimize your GPU workloads for maximum efficiency.
              </p>
            </motion.div>
          </div>

          {/* Get in Touch Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-16 pt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90"
              style={{
                background: '#10B981',
                color: '#FFFFFF'
              }}
            >
              Get in Touch With Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Services Section */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ marginBottom: '16px' }}>
                Offering Industry-Specific
                <br />
                GPU Solutions
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-3xl mb-6">
                We provide customized GPU optimization solutions tailored to meet the particular needs of your industry. We assist you in improving computational performance, reducing costs, and accelerating innovation through cutting-edge GPU technology.
              </p>

              {/* Industry List - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-8 max-w-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-base">AI & Machine Learning</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Scientific Computing</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Data Analytics</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Rendering & Graphics</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/gpu.service.jpg"
                  alt="Industry-Specific GPU Solutions"
                  className="w-full h-auto object-cover"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.25), 0 0 40px rgba(16, 185, 129, 0.1)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line Above Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Process Flow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0F14 0%, #111827 50%, #0B0F14 100%)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <div className="inline-block mb-4 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              GPU Optimization <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16">
              A systematic 6-step approach to unlock maximum GPU performance
            </p>
          </motion.div>

          {/* Process Steps - Centered Transparent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Strategy & Planning</h3>
                <p className="text-white/60 leading-relaxed">Define objectives, assess infrastructure, and create optimization roadmap</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Data Collection</h3>
                <p className="text-white/60 leading-relaxed">Gather metrics, analyze workload patterns, and identify bottlenecks</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Algorithm Design</h3>
                <p className="text-white/60 leading-relaxed">Optimize kernels, parallel strategies, and memory management</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Training & Tuning</h3>
                <p className="text-white/60 leading-relaxed">Fine-tune parameters, optimize throughput, and enhance efficiency</p>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Validation</h3>
                <p className="text-white/60 leading-relaxed">Benchmark results, validate improvements, and ensure quality</p>
              </div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Deployment</h3>
                <p className="text-white/60 leading-relaxed">Seamless integration, monitoring, and continuous optimization</p>
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105"
            >
              <span>Start Your Optimization Journey</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Need a Custom AI Development Partner? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden group"
            style={{
              maxHeight: '500px',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Image with Hover Zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/custom-ai-partner.jpg.jpg"
                alt="Custom AI Development Partner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: '70% center',
                  transform: 'translateY(-10px) scale(1.08)'
                }}
              />
              {/* Enhanced Gradient Overlay for Better Depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.4) 100%),
                    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%),
                    radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)
                  `,
                  boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.3)'
                }}
              ></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 py-20 px-8 sm:px-12 lg:px-16">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
                  Need a Custom AI Development Partner?
                </h2>
                <p className="text-base sm:text-lg mb-8 leading-relaxed" style={{ color: '#E5E5E5' }}>
                  We develop multiple projects like custom models, smart assistants, or predictive engines. Together, we can create innovative AI solutions to give you a competitive advantage.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90"
                  style={{
                    background: '#10B981',
                    color: '#FFFFFF'
                  }}
                >
                  Discuss Your Project With Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider Line Below Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Business Benefits Section */}
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              How Your Business Benefits from
              <br />
              GPU Optimization
            </h2>
          </motion.div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Enhanced Forecasting Accuracy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Faster
                <br />
                Processing
                <br />
                Speed
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Accelerate your computational workloads with optimized GPU performance. Reduce processing time from hours to minutes, enabling faster iterations and quicker time-to-market for your products.
              </p>
            </motion.div>

            {/* Card 2 - Effective Data Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(6, 182, 212, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Reduced
                <br />
                Infrastructure
                <br />
                Costs
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Maximize hardware utilization and reduce cloud computing expenses. Our optimization techniques help you achieve more with less, cutting infrastructure costs by up to 60% while maintaining peak performance.
              </p>
            </motion.div>

            {/* Card 3 - Better Decision-Making */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(139, 92, 246, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Improved
                <br />
                Scalability
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Scale your operations seamlessly as your business grows. Optimized GPU workloads handle increased data volumes and complex computations without proportional cost increases or performance degradation.
              </p>
            </motion.div>

            {/* Card 4 - Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(236, 72, 153, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Enhanced
                <br />
                Model
                <br />
                Performance
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Boost AI/ML model training and inference speeds dramatically. Optimized GPU kernels enable faster experimentation, better model accuracy, and real-time predictions for production applications.
              </p>
            </motion.div>

            {/* Card 5 - Improved Productivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(251, 146, 60, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Competitive
                <br />
                Advantage
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Stay ahead of competitors with superior computational capabilities. Faster processing, lower costs, and better performance give you the edge in data-intensive industries and AI-driven markets.
              </p>
            </motion.div>

            {/* Card 6 - Better Customer Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-xl p-8 border transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(52, 211, 153, 0.35)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Energy
                <br />
                Efficiency
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Reduce power consumption and environmental impact through efficient GPU utilization. Optimized workloads consume less energy per computation, supporting sustainability goals while lowering operational costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line Below Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* AI Models We Have Expertise In Section */}
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
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: '#FAFAFA' }}>
              AI Models We Have Expertise In
            </h2>
          </motion.div>

          {/* AI Models Grid - 4 columns, 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

            {/* Model 1 - GPT-4o */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/gpt-4o.jpg.jpg"
                  alt="GPT-4o"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                GPT-4o
              </h3>
            </motion.div>

            {/* Model 2 - Llama 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/llama-3.jpg.webp"
                  alt="Llama 3"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Llama 3
              </h3>
            </motion.div>

            {/* Model 3 - PaLM 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/palm-2.jpg.webp"
                  alt="PaLM 2"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                PaLM 2
              </h3>
            </motion.div>

            {/* Model 4 - Stability AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/stability-ai.jpg.webp"
                  alt="Stability AI"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Stability AI
              </h3>
            </motion.div>

            {/* Model 5 - Google Gemini */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/google-gemini.jpg.webp"
                  alt="Google Gemini"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Google Gemini
              </h3>
            </motion.div>

            {/* Model 6 - Vicuna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/vicuna.jpg.webp"
                  alt="Vicuna"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Vicuna
              </h3>
            </motion.div>

            {/* Model 7 - Mistral */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/mistral.jpg.webp"
                  alt="Mistral"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Mistral
              </h3>
            </motion.div>

            {/* Model 8 - Claude */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex items-center justify-center" style={{ height: '72px' }}>
                <img
                  src="/images/AI Models exeperty/claude.jpg.webp"
                  alt="Claude"
                  className="object-contain transition-transform duration-300"
                  style={{ maxHeight: '72px', maxWidth: '100%' }}
                />
              </div>
              <h3
                className="text-base font-semibold"
                style={{
                  color: '#FAFAFA',
                  letterSpacing: '0.02em'
                }}
              >
                Claude
              </h3>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Why Choose Jashom For
              <br />
              GPU Optimization?
            </h2>
          </motion.div>

          {/* Benefits List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Benefit 1 - End-to-end Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-6 rounded-xl p-6 border transition-all duration-300"
              style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '16px' }}>Deep GPU Expertise</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  Jashom specializes in GPU computing and CUDA optimization. Our team has extensive experience with NVIDIA architectures, parallel computing patterns, and performance tuning. We manage all aspects from profiling to deployment, focusing on measurable performance gains and cost reduction.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 - Proven Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-6 rounded-xl p-6 border transition-all duration-300"
              style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '16px' }}>Proven Performance Results</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  We deliver measurable improvements with up to 10X performance gains. Our optimization strategies reduce computational costs, accelerate time-to-results, and maximize hardware utilization. Every optimization is backed by comprehensive profiling and benchmarking data.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 - Industry-Specific Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-6 rounded-xl p-6 border transition-all duration-300"
              style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '16px' }}>Tailored Optimization Strategies</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  Jashom creates optimization solutions that understand your specific workload requirements. We design strategies based on your industry needs, whether it's AI/ML acceleration, scientific computing, data analytics, or rendering. Our solutions provide real competitive advantages in compute-intensive applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full border mb-6"
              style={{
                background: 'rgba(16, 185, 129, 0.05)',
                borderColor: 'rgba(16, 185, 129, 0.2)'
              }}
            >
              <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.875rem' }}>Client Testimonials</span>
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
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3" />
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "Jashom's GPU optimization reduced our inference latency by 73%. The team's expertise in CUDA programming is unmatched."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-4 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #10B981, #06B6D4)',
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
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3" />
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "The AI automation solutions delivered by Jashom transformed our workflow. We achieved 5x faster processing with their custom ML pipeline."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-4 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
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
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3" />
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "Outstanding DevSecOps implementation. Jashom's team integrated security seamlessly into our CI/CD pipeline without compromising speed."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-4 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Title */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">FAQs</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Frequently
                  <br />
                  Asked Questions
                </h2>
              </motion.div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="lg:col-span-8 space-y-4">
              {/* FAQ 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{ background: '#0B0F14' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      How can my company benefit from GPU optimization?
                    </h3>
                    <svg
                      className="w-6 h-6 text-white/60 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-8">
                    <p className="text-white/70 text-base leading-relaxed">
                      With carefully optimized GPU workloads, your company can achieve faster computation, reduce infrastructure costs, and improve efficiency. GPU optimization helps you scale your operations, streamline processes, and accelerate time-to-results for compute-intensive applications.
                    </p>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{ background: '#0B0F14' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      What happens if my project's requirements change in the middle?
                    </h3>
                    <svg
                      className="w-6 h-6 text-white/60 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-8">
                    <p className="text-white/70 text-base leading-relaxed">
                      We understand that optimization requirements can evolve. Our flexible approach allows us to adapt to changing needs, whether it's targeting different GPU architectures, optimizing new workloads, or adjusting performance goals. We work closely with you to ensure the optimization strategy aligns with your current objectives.
                    </p>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{ background: '#0B0F14' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      Do you optimize existing code or build new solutions?
                    </h3>
                    <svg
                      className="w-6 h-6 text-white/60 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-8">
                    <p className="text-white/70 text-base leading-relaxed">
                      We do both! We can optimize your existing CUDA code, CPU-to-GPU migrations, and legacy applications. We also develop new GPU-accelerated solutions from scratch, implementing best practices and cutting-edge optimization techniques from the ground up.
                    </p>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{ background: '#0B0F14' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      How secure are the GPU optimization solutions you provide?
                    </h3>
                    <svg
                      className="w-6 h-6 text-white/60 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-8">
                    <p className="text-white/70 text-base leading-relaxed">
                      Security is a top priority. We follow industry best practices for code security, data protection, and confidentiality. All optimization work is conducted under strict NDA agreements, and we implement secure coding practices to protect your intellectual property and sensitive data throughout the optimization process.
                    </p>
                  </div>
                </details>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Form Section - Premium Layout */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0F14 0%, #111827 100%)' }}>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-6 px-4 py-2 rounded-full border"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderColor: 'rgba(16, 185, 129, 0.25)'
                }}
              >
                <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.875rem' }}>Get In Touch</span>
              </motion.div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}
              >
                Get Started with{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #10B981, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  GPU Optimization
                </span>
              </h2>

              <p
                className="text-base sm:text-lg mb-4 leading-relaxed max-w-2xl mx-auto"
                style={{ color: '#9CA3AF' }}
              >
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Form Container - Centered with max-width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{
                maxWidth: '1100px',
                margin: '0 auto'
              }}
            >
              {/* Subtle radial glow behind form */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
                  filter: 'blur(60px)',
                  opacity: 0.6
                }}
              />

              <div
                className="relative w-full"
                style={{
                  background: 'rgba(17, 24, 39, 0.6)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(14px)',
                  padding: '48px 32px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                <form style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} onSubmit={handleSubmit}>
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                    <div>
                      <label className="block text-white/90 mb-2 font-medium text-sm">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border text-white placeholder-white/40 focus:border-[#10B981]/50 focus:outline-none focus:ring-1 focus:ring-[#10B981]/30 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-white/90 mb-2 font-medium text-sm">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border text-white placeholder-white/40 focus:border-[#10B981]/50 focus:outline-none focus:ring-1 focus:ring-[#10B981]/30 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                    <div>
                      <label className="block text-white/90 mb-2 font-medium text-sm">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-white placeholder-white/40 focus:border-[#10B981]/50 focus:outline-none focus:ring-1 focus:ring-[#10B981]/30 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-white/90 mb-2 font-medium text-sm">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-white placeholder-white/40 focus:border-[#10B981]/50 focus:outline-none focus:ring-1 focus:ring-[#10B981]/30 transition-all"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message (Full Width) */}
                  <div>
                    <label className="block text-white/90 mb-2 font-medium text-sm">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-white/40 focus:border-[#10B981]/50 focus:outline-none focus:ring-1 focus:ring-[#10B981]/30 transition-all resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderColor: 'rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="Tell us about your GPU optimization needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center sm:justify-start">
                    <motion.button
                      type="submit"
                      className="px-12 py-4 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #10B981, #06B6D4)',
                        border: '1px solid transparent',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
                        minWidth: '200px'
                      }}
                      whileHover={{
                        y: -2,
                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Our Office Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  Our Office
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address */}
                <div
                  className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(17, 24, 39, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(14px)'
                  }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                    <img
                      src="/images/inidan.flag.jpg"
                      alt="India Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#FAFAFA' }}>Address</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    414, Satyam-2, Amba Business Park,<br />
                    ATPL, Adalaj, Gujarat,<br />
                    India - 380054
                  </p>
                </div>

                {/* Email */}
                <div
                  className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(17, 24, 39, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(14px)'
                  }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#FAFAFA' }}>Email</h4>
                  <a
                    href="mailto:info@jashom.com"
                    className="text-sm transition-colors inline-block"
                    style={{ color: '#10B981' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#059669'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#10B981'}
                  >
                    info@jashom.com
                  </a>
                  <p className="text-xs mt-3" style={{ color: '#6B7280' }}>
                    We respond within 24 hours
                  </p>
                </div>

                {/* Phone */}
                <div
                  className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(17, 24, 39, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(14px)'
                  }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#FAFAFA' }}>Phone</h4>
                  <a
                    href="tel:+919023906363"
                    className="text-sm transition-colors inline-block"
                    style={{ color: '#10B981' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#059669'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#10B981'}
                  >
                    +91 90239 06363
                  </a>
                  <p className="text-xs mt-3" style={{ color: '#6B7280' }}>
                    Mon-Fri, 9AM-6PM IST
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </div>
  );
}
