import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Award, Zap, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HireCudaDeveloperPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Redirect to hire cuda thank you page
    navigate('/hire-cuda-thank-you');
  };

  return (
    <div className="min-h-screen" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
      <Helmet>
        <title>Hire CUDA Developers | Dedicated CUDA Programmers & GPU Experts</title>
        <meta name="description" content="Looking to hire CUDA developers? Get skilled GPU programmers for NVIDIA CUDA projects, performance optimization, and custom parallel computing solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ minHeight: '600px', paddingTop: '160px', paddingBottom: '100px' }}>
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hire.hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.1)'
          }}
        >
          {/* Overlay for better text readability */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}>
                Hire CUDA Developers
              </h1>
              
              <p className="text-lg leading-relaxed" style={{ color: '#B0B0B0' }}>
                CUDA Developers | CUDA solutions | CUDA service providers
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#B0B0B0' }}>
                Hire CUDA developers from us to create dynamic and high-performance GPU applications. Our experienced developers ensure seamless performance, optimized computing, and enhanced acceleration, delivering 10X faster results. Get in touch to build consistent, scalable solutions that drive your business growth.
              </p>

              {/* Email Input + CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-4xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:flex-[2]"
                  style={{
                    background: '#1F2937', color: '#FAFAFA',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                />
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 hover:opacity-90 whitespace-nowrap w-full sm:w-auto sm:flex-[1] text-center sm:ml-3"
                  style={{
                    background: '#10B981',
                    color: '#FFFFFF',
                    borderRadius: '4px',
                    textDecoration: 'none'
                  }}
                >
                  HIRE CUDA DEVELOPER NOW
                </a>
              </div>

              {/* Stats - Horizontal Layout with Dividers */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-6 sm:gap-8 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <Award className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>15 Days Risk-Free</div>
                    <div style={{ color: '#B0B0B0', fontSize: '14px' }}>Trial</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16" style={{ background: '#555555' }}></div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <Zap className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>24x7 Technical</div>
                    <div style={{ color: '#B0B0B0', fontSize: '14px' }}>Support</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16" style={{ background: '#555555' }}></div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                    <DollarSign className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>On-Time</div>
                    <div style={{ color: '#B0B0B0', fontSize: '14px' }}>Delivery</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Empty/Background Space */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Empty space or subtle background pattern */}
              <div className="h-full min-h-[400px]"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Hire CUDA Developers Section - Before Why Choose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* 2-Column Layout: Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: '#FAFAFA' }}>
                  Hire CUDA Developers From Us To Improve Your Product Efficiency
                </h2>
                
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#9E9E9E' }}>
                  Hire CUDA developers to enhance your GPU computing with high-performance applications. Our experts write efficient code, turning complex computational needs into high-value performance gains. With core CUDA and parallel computing expertise, we support you at every stage of development, from requirements analysis to deployment.
                </p>

                <div className="pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded font-semibold border-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                    style={{
                      background: 'transparent',
                      borderColor: '#10B981',
                      color: '#10B981'
                    }}
                  >
                    TALK TO OUR EXPERT
                  </a>
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
                    src="/images/hire.page.jpg" 
                    alt="Hire CUDA Developers" 
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
        </div>
      </section>

      {/* Our CUDA Engineers Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FAFAFA' }}>
              Our CUDA Engineers have expertise in
            </h2>
          </motion.div>

          {/* Expertise Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Item 1 - GPU Kernel Optimization */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  GPU Kernel Optimization
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our GPU optimization services enable you to maximize performance of your CUDA applications with efficient kernel design and memory management strategies.
                </p>
              </div>
            </motion.div>

            {/* Item 2 - Parallel Computing Architecture */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  Parallel Computing Architecture
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our team can seamlessly implement parallel computing solutions using CUDA architecture. The objective is to efficiently distribute workloads, maximize throughput, and achieve optimal performance with tools like CUDA streams and multi-GPU setups.
                </p>
              </div>
            </motion.div>

            {/* Item 3 - Performance Profiling */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  Performance Profiling and Analysis
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our team of CUDA engineers can help you identify bottlenecks and optimize performance. Our team is skilled in profiling tools and performance analysis. We have in-depth knowledge of CUDA profiling tools including Nsight Systems, Nsight Compute, nvprof, etc.
                </p>
              </div>
            </motion.div>

            {/* Item 4 - AI/ML Acceleration */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  AI/ML Model Acceleration
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our team identifies the best CUDA optimization strategies for your AI/ML models and accelerate training and inference to meet your performance goals faster, with fewer errors and less computational cost.
                </p>
              </div>
            </motion.div>

            {/* Item 5 - Memory Management */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  Advanced Memory Management
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our CUDA engineers can integrate efficient memory management strategies to reduce the cost and increase the scalability of your GPU applications. We work with unified memory, pinned memory, and various memory optimization techniques.
                </p>
              </div>
            </motion.div>

            {/* Item 6 - Multi-GPU Scaling */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#E3F2FD' }}>
                  <svg className="w-8 h-8" style={{ color: '#2196F3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA' }}>
                  Multi-GPU Infrastructure
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our tech experts can help organizations develop and scale robust multi-GPU infrastructure to meet the growing computational needs. With CUDA multi-GPU programming, companies can boost performance, enhance efficiency, and accelerate their workloads.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How to Hire Section - 4 Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
              How Can You Hire CUDA Engineers from Jashom?
            </h2>
            <p className="text-lg mx-auto" style={{ color: '#9E9E9E' }}>
              Onboarding the right developers for your project is just a four-step process.
            </p>
          </motion.div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            
            {/* Step 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ 
                  background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.05) 70%)',
                  border: '3px solid rgba(33, 150, 243, 0.3)'
                }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#2196F3' }}>
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                Share Requirements
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                Share your development needs, such as skillset, experience, technology, and the number of developers.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ 
                  background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.05) 70%)',
                  border: '3px solid rgba(33, 150, 243, 0.3)'
                }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#2196F3' }}>
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                Interview Profiles
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                Select developers from the profiles sent by our experts and screen them as per your requirements.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ 
                  background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.05) 70%)',
                  border: '3px solid rgba(33, 150, 243, 0.3)'
                }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#2196F3' }}>
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                Select a Hiring Model
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                Choose the hiring model that meets your requirements and resolves your remote hiring concerns.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ 
                  background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.05) 70%)',
                  border: '3px solid rgba(33, 150, 243, 0.3)'
                }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#2196F3' }}>
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                Start Development
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                Introduce the developer to your development environment and begin production right away.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Hire CUDA Engineers Section - 6 Cards with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
              Why Hire CUDA Engineers from Jashom?
            </h2>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: '#9E9E9E' }}>
              Our entire process revolves around the peace of mind for our clients, explore what you get when you choose us.
            </p>
          </motion.div>

          {/* 6 Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1 - Quality Code */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-quality-code.jpg.jpg" 
                  alt="Quality Code" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  Quality Code
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  The dedicated engineer you hire from Jashom are trained to maintain the quality of code; everything coming from our experts is of the utmost quality.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - NDA */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-nda.jpg.jpg" 
                  alt="NDA Agreement" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  NDA
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  To ensure the confidentiality and security of sensitive information, we sign NDA with all our engineers who work on your project.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Verified Skillset */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-verified.jpg.jpg" 
                  alt="Certified Developer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  Verified Skillset
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Our engineers' skills are verified through prestigious certifications and their success rates in the previous projects they have worked on.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Cost Reduction */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-cost.jpg.jpg" 
                  alt="Cost Reduction" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    objectPosition: 'center 40%',
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  Cost Reduction
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Hiring models ensures that you pay only for the work, time, and duration utilized by engineer, which in turn helps save on additional costs.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - High Experience */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-experience.jpg.jpg" 
                  alt="High Experience Team" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  High Experience
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  Leverage the decade-long experience of our engineers to get more effective software solutions for your business that meet your specific needs.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Quick Onboarding */}
            <motion.div
              className="rounded-xl overflow-hidden group"
              style={{ background: '#0B0F14' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
                <img 
                  src="/images/cuda-onboarding.jpg.jpg" 
                  alt="Quick Onboarding" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    borderRadius: '12px 12px 0 0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 15, 20, 0.4) 100%)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                  Quick Onboarding
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                  We follow a simple process through which you can employ the engineers of your choice in no time and start your project ASAP.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Engagement Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#10B981' }}>
              Our Engagement Models
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: '#9E9E9E' }}>
              Discover the right engagement model that fits perfectly with your business needs for your CUDA project today!
            </p>
          </motion.div>

          {/* 4 Cards Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 - Full-time */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Full-time
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
                Hire CUDA Developers working dedicatedly for your long-term project.
              </p>
            </motion.div>

            {/* Card 2 - Part-time */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Part-time
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
                Want to keep maintaining your project? Hire CUDA developers on a part-time basis.
              </p>
            </motion.div>

            {/* Card 3 - Time & Material */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Time & Material
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
                Get the best developers on hourly basis with resources as per your unique requirements.
              </p>
            </motion.div>

            {/* Card 4 - Custom Model */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Custom Model
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
                We are always open to a collaboration that is custom and tailor-made for your business needs.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="relative px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
        style={{
          minHeight: '400px',
          background: '#0B0F14'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/cuda-cta-bg.jpg.jpg" 
            alt="CUDA Background"
            className="w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              minHeight: '400px'
            }}
          />
        </div>

        {/* Lighter Gradient Overlay for better image visibility */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(90deg, rgba(11, 15, 20, 0.75) 0%, rgba(11, 15, 20, 0.4) 60%, rgba(11, 15, 20, 0.2) 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 py-20 w-full">
          <motion.div
            className="max-w-[60%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight" 
              style={{ 
                color: '#FFFFFF', 
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              Ready to unleash the power of CUDA?
            </h2>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-orange-500"
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #10B981'
              }}
            >
              Take Charge
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Jashom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}>
              Why <span style={{ color: '#10B981' }}>Jashom</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
              Experience the Jashom advantage with cutting-edge AI solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Benefit 1 - GPU Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>10x GPU Performance</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Advanced CUDA optimization and parallel computing expertise delivering measurable speedups for AI workloads and real-time inference systems.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 - AI Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Production-Ready AI</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  From model development to deployment, we build scalable AI systems that deliver real business impact across healthcare, finance, and retail sectors.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 - Enterprise Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Bank-Grade Security</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Enterprise-level security protocols, compliance frameworks, and data protection ensuring your AI infrastructure remains secure and audit-ready.
                </p>
              </div>
            </motion.div>

            {/* Benefit 4 - Fast Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <Zap className="w-8 h-8" style={{ color: '#10B981' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Lightning Fast Deployment</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Rapid prototyping to production pipeline with MLOps best practices, reducing deployment cycles from weeks to hours with continuous optimization.
                </p>
              </div>
            </motion.div>

            {/* Benefit 5 - 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>24/7 Expert Support</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Round-the-clock monitoring and dedicated support team ensuring your AI systems run smoothly with guaranteed response times for critical issues.
                </p>
              </div>
            </motion.div>

            {/* Benefit 6 - Cost Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative rounded-2xl p-8 border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300" style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>Cost-Effective Solutions</h3>
                <p className="leading-relaxed" style={{ color: '#9E9E9E', lineHeight: 1.8 }}>
                  Optimized resource utilization and intelligent scaling strategies that reduce infrastructure costs while maximizing performance and ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section - We Are Trusted By Businesses Across the Globe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
              We Are Trusted By Businesses Across the Globe
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#9E9E9E' }}>
              Our clients trust us for our expertise, dedication, and commitment to delivering exceptional results.
            </p>
          </motion.div>

          {/* Jashom Reviews Header with Clutch Branding */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold" style={{ color: '#FAFAFA' }}>
                Jashom Reviews
              </h3>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6"
                    fill={star <= 4 ? '#10B981' : 'none'}
                    stroke={star === 5 ? '#10B981' : 'none'}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={star === 5 ? 2 : 0}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold" style={{ color: '#FAFAFA' }}>4.8</span>
            </div>
            <div className="h-8 w-px" style={{ background: '#e0e0e0' }}></div>
            <div className="text-sm" style={{ color: '#9E9E9E' }}>
              Powered by <span className="font-bold" style={{ color: '#10B981' }}>Clutch</span>
            </div>
          </motion.div>

          {/* 6 Review Cards - 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Review 1 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "Jashom's CUDA developers transformed our AI pipeline. The performance improvements were beyond our expectations. Their expertise in GPU optimization is unmatched."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>John Davis</div>
                    <div className="text-xs" style={{ color: '#999999' }}>CTO, TechVision AI</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "Outstanding work on our GPU computing project. The team delivered high-quality code and met all deadlines. Highly recommend for any CUDA development needs."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>Sarah Martinez</div>
                    <div className="text-xs" style={{ color: '#999999' }}>VP Engineering, DataFlow</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "The CUDA expertise at Jashom is exceptional. They optimized our machine learning models and reduced training time by 10X. Professional and reliable team."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">RC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>Robert Chen</div>
                    <div className="text-xs" style={{ color: '#999999' }}>Lead Scientist, NeuroTech</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Review 4 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
                <svg className="w-5 h-5" fill="none" stroke="#10B981" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "Great experience working with Jashom. Their CUDA developers are skilled and responsive. They helped us achieve significant performance gains in our application."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">EP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>Emily Parker</div>
                    <div className="text-xs" style={{ color: '#999999' }}>Director, CloudCompute</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Review 5 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "Jashom delivered exactly what we needed. Their deep understanding of CUDA and parallel computing helped us solve complex computational challenges efficiently."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>Michael Kim</div>
                    <div className="text-xs" style={{ color: '#999999' }}>Founder, QuantumLabs</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Review 6 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(16, 185, 129, 0.2)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="#10B981"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9E9E9E' }}>
                "Impressive technical skills and professionalism. The team at Jashom helped us migrate our CPU code to GPU with remarkable speed improvements. Highly satisfied!"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
                    <span className="text-white font-bold text-sm">LW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>Lisa Wang</div>
                    <div className="text-xs" style={{ color: '#999999' }}>CTO, SimuTech Solutions</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: '#E8F5E9' }}>
                  <svg className="w-4 h-4" style={{ color: '#2E7D32' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: '#2E7D32' }}>Verified</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Related Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#10B981' }}>
              Looking for something else?
            </h2>
            <p className="text-lg text-center mx-auto" style={{ color: '#B0B0B0' }}>
              You can also check out the related services.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* GPU Optimization Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                background: '#2a2a2a',
                border: '1px solid #3a3a3a'
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                GPU Optimization Service
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#B0B0B0' }}>
                Maximize your GPU performance with our expert optimization services. We fine-tune your applications for peak efficiency and speed.
              </p>
              <a
                href="/gpu-optimization-service"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600"
                style={{
                  background: '#10B981',
                  color: '#FFFFFF'
                }}
              >
                Know More
              </a>
            </motion.div>

            {/* CUDA Development Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                background: '#2a2a2a',
                border: '1px solid #3a3a3a'
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                CUDA Development Service
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#B0B0B0' }}>
                Build high-performance parallel computing applications with our expert CUDA development team. Custom solutions for your unique needs.
              </p>
              <a
                href="/cuda-development-service"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600"
                style={{
                  background: '#10B981',
                  color: '#FFFFFF'
                }}
              >
                Know More
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Q&A / FAQ Section */}
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
                <p className="text-sm mb-4 uppercase tracking-wider" style={{ color: '#999999' }}>FAQs</p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: '#FAFAFA' }}>
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
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      What experience level do your CUDA developers have?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#9E9E9E' }}>
                      Our CUDA developers have 15+ years of hands-on experience with GPU programming, parallel computing, and performance optimization. They have worked on diverse projects across AI/ML, scientific computing, data analytics, and high-performance computing domains.
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
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      How quickly can I onboard a CUDA developer?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#9E9E9E' }}>
                      We can onboard CUDA developers within 48 hours. Once you share your requirements, we'll provide you with pre-screened developer profiles. After your selection and interview, the developer can start working on your project immediately.
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
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      What hiring models do you offer?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed mb-3" style={{ color: '#9E9E9E' }}>
                      We offer three flexible hiring models to suit your project needs:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#10B981' }}></span>
                        <span className="text-base" style={{ color: '#9E9E9E' }}><strong>Hourly Basis:</strong> Pay only for the hours worked, ideal for short-term tasks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#10B981' }}></span>
                        <span className="text-base" style={{ color: '#9E9E9E' }}><strong>Monthly Basis:</strong> Full-time dedicated developers for ongoing projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#10B981' }}></span>
                        <span className="text-base" style={{ color: '#9E9E9E' }}><strong>Fixed Basis:</strong> Fixed-price contracts for well-defined project scopes</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      Do you offer a risk-free trial period?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#9E9E9E' }}>
                      Yes! We offer a 15-day risk-free trial period. This allows you to evaluate the developer's skills, work quality, and fit with your team before making a long-term commitment. If you're not satisfied, you can discontinue without any obligations.
                    </p>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      What kind of projects can your CUDA developers handle?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#9E9E9E' }}>
                      Our CUDA developers can handle a wide range of projects including AI/ML model acceleration, scientific computing simulations, real-time data processing, image and video processing, financial modeling, molecular dynamics, and custom GPU-accelerated applications. They have expertise in optimizing existing code and building new solutions from scratch.
                    </p>
                  </div>
                </details>
              </motion.div>

              {/* FAQ 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#FAFAFA' }}>
                      How do you ensure code quality and security?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#9E9E9E' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#9E9E9E' }}>
                      We follow industry best practices including code reviews, performance profiling, comprehensive testing, and secure coding standards. All work is conducted under strict NDA agreements to protect your intellectual property. Our developers use version control, documentation, and continuous integration to ensure high-quality, maintainable code.
                    </p>
                  </div>
                </details>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#FAFAFA' }}>
                Get Started with Expert CUDA Developers
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9E9E9E' }}>
                Fill out the form and our team will get back to you within 24 hours. Share your project requirements and we'll match you with the perfect CUDA developer for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#FAFAFA' }}>Quick Response</h3>
                    <p className="text-sm" style={{ color: '#9E9E9E' }}>We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#FAFAFA' }}>No Obligation</h3>
                    <p className="text-sm" style={{ color: '#9E9E9E' }}>Free consultation with no commitment required</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#FAFAFA' }}>Expert Matching</h3>
                    <p className="text-sm" style={{ color: '#9E9E9E' }}>We'll match you with developers suited to your project</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 border"
              style={{ 
                background: '#111827', 
                borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* 2-Column Grid for Name, Email, Phone, Company */}
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '28px', marginBottom: '28px' }}>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      style={{ 
                        background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                        color: '#FAFAFA'
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      style={{ 
                        background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                        color: '#FAFAFA'
                      }}
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      style={{ 
                        background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                        color: '#FAFAFA'
                      }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      style={{ 
                        background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                        color: '#FAFAFA'
                      }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Hiring Model - Full Width */}
                <div style={{ marginBottom: '28px' }}>
                  <label htmlFor="hiringModel" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                    Preferred Hiring Model *
                  </label>
                  <select
                    id="hiringModel"
                    name="hiringModel"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    style={{ 
                      background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                      color: '#FAFAFA'
                    }}
                  >
                    <option value="">Select a hiring model</option>
                    <option value="hourly">Hourly Basis</option>
                    <option value="monthly">Monthly Basis</option>
                    <option value="fixed">Fixed Price Project</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                {/* Project Details - Full Width */}
                <div style={{ marginBottom: '28px' }}>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#FAFAFA' }}>
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    style={{ 
                      background: '#1F2937', borderColor: 'rgba(16, 185, 129, 0.3)',
                      color: '#FAFAFA'
                    }}
                    placeholder="Tell us about your project, timeline, and specific CUDA expertise needed..."
                  />
                </div>

                {/* Submit Button - Full Width */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                  style={{
                    background: '#10B981',
                    color: '#FFFFFF'
                  }}
                >
                  Submit Request
                </button>

                <p className="text-xs text-center mt-4" style={{ color: '#999999' }}>
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
