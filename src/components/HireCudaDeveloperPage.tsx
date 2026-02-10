import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Award, Zap, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function HireCudaDeveloperPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null); // Default: all closed

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
      <SEO
        title="Hire Expert CUDA Developer | 5+ Years Experience | Jashom"
        description="Hire experienced CUDA developers with 5+ years expertise. Build high-performance GPU applications with seamless performance and enhanced computing power."
        keywords="hire CUDA developer, GPU computing, parallel computing, AI acceleration, CUDA expert, 5+ years experience"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#2a2a2a' }}>
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
                  className="px-6 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:flex-[2]"
                  style={{
                    background: '#FFFFFF',
                    color: '#333333',
                    borderRadius: '4px',
                    border: '1px solid #e0e0e0'
                  }}
                />
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 hover:opacity-90 whitespace-nowrap w-full sm:w-auto sm:flex-[1] text-center sm:ml-3"
                  style={{
                    background: '#FF8C00',
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
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#FF8C00' }}>
                    <Award className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>15 Days Risk-Free</div>
                    <div style={{ color: '#B0B0B0', fontSize: '14px' }}>Trial</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16" style={{ background: '#555555' }}></div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#FF8C00' }}>
                    <Zap className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>24x7 Technical</div>
                    <div style={{ color: '#B0B0B0', fontSize: '14px' }}>Support</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16" style={{ background: '#555555' }}></div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#FF8C00' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Heading & Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ color: '#1a1a1a' }}>
                Hire CUDA Developers From Us To Improve Your Product Efficiency
              </h2>
              
              <p className="text-base mb-8 leading-relaxed" style={{ color: '#666666' }}>
                Hire CUDA developers to enhance your GPU computing with high-performance applications. Our experts write efficient code, turning complex computational needs into high-value performance gains. With core CUDA and parallel computing expertise, we support you at every stage of development, from requirements analysis to deployment.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded font-semibold border-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                style={{
                  background: 'transparent',
                  borderColor: '#FF8C00',
                  color: '#FF8C00'
                }}
              >
                TALK TO OUR EXPERT
              </a>
            </motion.div>

            {/* Right Column - Expandable Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Option 1 - Start 15 Days Risk-Free Trial */}
              <div className="rounded-lg overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #e0e0e0' }}>
                <button 
                  onClick={() => toggleAccordion(0)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold transition-colors hover:bg-gray-50" 
                  style={{ color: '#1a1a1a' }}
                >
                  <span>Start 15 Days Risk-Free Trial!</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openAccordion === 0 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 pb-6"
                  >
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                      Try our exceptional service free for 15 days. No commitment, no risk. See if it exceeds your expectations.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Option 2 - Hiring Engagement Options */}
              <div className="rounded-lg overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #e0e0e0' }}>
                <button 
                  onClick={() => toggleAccordion(1)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold transition-colors hover:bg-gray-50" 
                  style={{ color: '#1a1a1a' }}
                >
                  <span>Hiring Engagement Options at Jashom:</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 pb-6"
                  >
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>
                      We provide three types of hiring engagement models. You can choose the preferred model that fits your business needs and hire CUDA developers from Jashom.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Hourly Basis',
                        'Monthly Basis',
                        'Fixed Basis'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#666666' }}></span>
                          <span className="text-sm" style={{ color: '#666666' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Option 3 - Why Should I Hire (Default Open) */}
              <div className="rounded-lg overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #e0e0e0' }}>
                <button 
                  onClick={() => toggleAccordion(2)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold transition-colors hover:bg-gray-50" 
                  style={{ color: '#1a1a1a' }}
                >
                  <span>Why Should I Hire CUDA Developers From Jashom?</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openAccordion === 2 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === 2 && (
                  <div className="px-6 py-4 pb-6">
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>
                      Hiring CUDA developers from our company offers several advantages:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Onboarding Within 48 Hrs',
                        '50+ CUDA Developers',
                        '100+ GPU Projects Completed',
                        'Efficient Code, 5X Fast Delivery',
                        'Save Up to 40% on Development Costs',
                        'Trusted Payment Method'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#FF8C00' }}></span>
                          <span className="text-sm" style={{ color: '#666666' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our CUDA Engineers Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1a1a1a' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  GPU Kernel Optimization
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  Parallel Computing Architecture
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  Performance Profiling and Analysis
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  AI/ML Model Acceleration
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  Advanced Memory Management
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                  Multi-GPU Infrastructure
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  Our tech experts can help organizations develop and scale robust multi-GPU infrastructure to meet the growing computational needs. With CUDA multi-GPU programming, companies can boost performance, enhance efficiency, and accelerate their workloads.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How to Hire Section - 4 Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              How Can You Hire CUDA Engineers from Jashom?
            </h2>
            <p className="text-lg mx-auto" style={{ color: '#666666' }}>
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
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                Share Requirements
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                Interview Profiles
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                Select a Hiring Model
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
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
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                Start Development
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                Introduce the developer to your development environment and begin production right away.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Hire CUDA Engineers Section - 6 Cards with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              Why Hire CUDA Engineers from Jashom?
            </h2>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: '#666666' }}>
              Our entire process revolves around the peace of mind for our clients, explore what you get when you choose us.
            </p>
          </motion.div>

          {/* 6 Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1 - Quality Code */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src="/images/cuda-quality-code.jpg.jpg" 
                  alt="Quality Code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  Quality Code
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  The dedicated engineer you hire from Jashom are trained to maintain the quality of code; everything coming from our experts is of the utmost quality.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - NDA */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src="/images/cuda-nda.jpg.jpg" 
                  alt="NDA Agreement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  NDA
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  To ensure the confidentiality and security of sensitive information, we sign NDA with all our engineers who work on your project.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Verified Skillset */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src="/images/cuda-verified.jpg.jpg" 
                  alt="Certified Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  Verified Skillset
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  Our engineers' skills are verified through prestigious certifications and their success rates in the previous projects they have worked on.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Cost Reduction */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/images/cuda-cost.jpg.jpg" 
                  alt="Cost Reduction" 
                  className="w-full h-full"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    transform: 'scale(1.8)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  Cost Reduction
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  Hiring models ensures that you pay only for the work, time, and duration utilized by engineer, which in turn helps save on additional costs.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - High Experience */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src="/images/cuda-experience.jpg.jpg" 
                  alt="High Experience Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  High Experience
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  Leverage the decade-long experience of our engineers to get more effective software solutions for your business that meet your specific needs.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Quick Onboarding */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ background: '#f5f5f5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src="/images/cuda-onboarding.jpg.jpg" 
                  alt="Quick Onboarding" 
                  className="w-full h-full"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    transform: 'scale(1.5)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  Quick Onboarding
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  We follow a simple process through which you can employ the engineers of your choice in no time and start your project ASAP.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Engagement Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FF8C00' }}>
              Our Engagement Models
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: '#666666' }}>
              Discover the right engagement model that fits perfectly with your business needs for your CUDA project today!
            </p>
          </motion.div>

          {/* 4 Cards Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 - Full-time */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: '#1a1a1a' }}
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
              style={{ background: '#1a1a1a' }}
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
              style={{ background: '#1a1a1a' }}
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
              style={{ background: '#1a1a1a' }}
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
        className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: '#1a1a1a', // Fallback color
          backgroundImage: 'url(/images/cuda-cta-bg.jpg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Ready to unleash the power of CUDA?
            </h2>
            
            <p className="text-lg sm:text-xl mb-12 leading-relaxed max-w-2xl" style={{ color: '#D0D0D0' }}>
              Hire CUDA developers today and build the perfect team for your perfect business!
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                background: '#FF8C00',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(255, 140, 0, 0.4)'
              }}
            >
              Take Charge
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section - We Are Trusted By Businesses Across the Globe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              We Are Trusted By Businesses Across the Globe
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#666666' }}>
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
              <h3 className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>
                Jashom Reviews
              </h3>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6"
                    fill={star <= 4 ? '#FF8C00' : 'none'}
                    stroke={star === 5 ? '#FF8C00' : 'none'}
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
              <span className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>4.8</span>
            </div>
            <div className="h-8 w-px" style={{ background: '#e0e0e0' }}></div>
            <div className="text-sm" style={{ color: '#666666' }}>
              Powered by <span className="font-bold" style={{ color: '#FF8C00' }}>Clutch</span>
            </div>
          </motion.div>

          {/* 6 Review Cards - 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Review 1 */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "Jashom's CUDA developers transformed our AI pipeline. The performance improvements were beyond our expectations. Their expertise in GPU optimization is unmatched."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>John Davis</div>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "Outstanding work on our GPU computing project. The team delivered high-quality code and met all deadlines. Highly recommend for any CUDA development needs."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Sarah Martinez</div>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "The CUDA expertise at Jashom is exceptional. They optimized our machine learning models and reduced training time by 10X. Professional and reliable team."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">RC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Robert Chen</div>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
                <svg className="w-5 h-5" fill="none" stroke="#FF8C00" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "Great experience working with Jashom. Their CUDA developers are skilled and responsive. They helped us achieve significant performance gains in our application."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">EP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Emily Parker</div>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "Jashom delivered exactly what we needed. Their deep understanding of CUDA and parallel computing helped us solve complex computational challenges efficiently."
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Michael Kim</div>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
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
                    fill="#FF8C00"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                "Impressive technical skills and professionalism. The team at Jashom helped us migrate our CPU code to GPU with remarkable speed improvements. Highly satisfied!"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FF8C00' }}>
                    <span className="text-white font-bold text-sm">LW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Lisa Wang</div>
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

      {/* Divider Line */}
      <div style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ height: '1px', background: '#e0e0e0' }}></div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            
            {/* Why Choose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1a1a1a' }}>
                Why Choose Our CUDA Experts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50" style={{
                  background: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1a1a1a' }}>
                    15+ Years Experience
                  </h3>
                  <p style={{ color: '#666666', lineHeight: 1.7 }}>
                    Our developers have 15+ years of hands-on experience with CUDA programming, GPU architectures, and parallel computing optimization.
                  </p>
                </div>

                <div className="p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50" style={{
                  background: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1a1a1a' }}>
                    Deep GPU Architecture Knowledge
                  </h3>
                  <p style={{ color: '#666666', lineHeight: 1.7 }}>
                    Extensive expertise with NVIDIA GPU architectures, memory optimization, kernel development, and parallel computing patterns.
                  </p>
                </div>

                <div className="p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50" style={{
                  background: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1a1a1a' }}>
                    AI & ML Acceleration
                  </h3>
                  <p style={{ color: '#666666', lineHeight: 1.7 }}>
                    Specialized in optimizing machine learning workloads, neural networks, and AI inference pipelines for maximum GPU utilization.
                  </p>
                </div>

                <div className="p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50" style={{
                  background: '#f9f9f9',
                  borderColor: '#e0e0e0'
                }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1a1a1a' }}>
                    Performance Optimization
                  </h3>
                  <p style={{ color: '#666666', lineHeight: 1.7 }}>
                    Expert in CUDA profiling, memory management, and kernel optimization to achieve 10X faster performance gains.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Q&A / FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
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
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: '#1a1a1a' }}>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      What experience level do your CUDA developers have?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      How quickly can I onboard a CUDA developer?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      What hiring models do you offer?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed mb-3" style={{ color: '#666666' }}>
                      We offer three flexible hiring models to suit your project needs:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#FF8C00' }}></span>
                        <span className="text-base" style={{ color: '#666666' }}><strong>Hourly Basis:</strong> Pay only for the hours worked, ideal for short-term tasks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#FF8C00' }}></span>
                        <span className="text-base" style={{ color: '#666666' }}><strong>Monthly Basis:</strong> Full-time dedicated developers for ongoing projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#FF8C00' }}></span>
                        <span className="text-base" style={{ color: '#666666' }}><strong>Fixed Basis:</strong> Fixed-price contracts for well-defined project scopes</span>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      Do you offer a risk-free trial period?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      What kind of projects can your CUDA developers handle?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
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
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1a1a1a' }}>
                      How do you ensure code quality and security?
                    </h3>
                    <svg 
                      className="w-6 h-6 transition-transform group-open:rotate-180" 
                      style={{ color: '#666666' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pt-2 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
                Get Started with Expert CUDA Developers
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#666666' }}>
                Fill out the form and our team will get back to you within 24 hours. Share your project requirements and we'll match you with the perfect CUDA developer for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3E0' }}>
                    <svg className="w-6 h-6" style={{ color: '#FF8C00' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a1a1a' }}>Quick Response</h3>
                    <p className="text-sm" style={{ color: '#666666' }}>We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3E0' }}>
                    <svg className="w-6 h-6" style={{ color: '#FF8C00' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a1a1a' }}>No Obligation</h3>
                    <p className="text-sm" style={{ color: '#666666' }}>Free consultation with no commitment required</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3E0' }}>
                    <svg className="w-6 h-6" style={{ color: '#FF8C00' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a1a1a' }}>Expert Matching</h3>
                    <p className="text-sm" style={{ color: '#666666' }}>We'll match you with developers suited to your project</p>
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
              style={{ background: '#f9f9f9', borderColor: '#e0e0e0' }}
            >
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                    placeholder="Your Company"
                  />
                </div>

                {/* Hiring Model */}
                <div>
                  <label htmlFor="hiringModel" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Preferred Hiring Model *
                  </label>
                  <select
                    id="hiringModel"
                    name="hiringModel"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                  >
                    <option value="">Select a hiring model</option>
                    <option value="hourly">Hourly Basis</option>
                    <option value="monthly">Monthly Basis</option>
                    <option value="fixed">Fixed Price Project</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ 
                      background: '#FFFFFF',
                      borderColor: '#e0e0e0',
                      color: '#1a1a1a'
                    }}
                    placeholder="Tell us about your project, timeline, and specific CUDA expertise needed..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                  style={{
                    background: '#FF8C00',
                    color: '#FFFFFF'
                  }}
                >
                  Submit Request
                </button>

                <p className="text-xs text-center" style={{ color: '#999999' }}>
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-3xl p-12 text-center overflow-hidden"
            style={{
              background: '#252525',
              border: '1px solid #333333'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Ready to Accelerate Your Project?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#B0B0B0' }}>
                Connect with our expert CUDA developers with 5+ years experience and transform your computational challenges into high-performance solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  background: '#FF8C00',
                  color: '#FFFFFF'
                }}
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}