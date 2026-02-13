import { motion } from 'motion/react';
import { SEO } from './SEO';

export function CUDADevelopmentServicePage() {
  return (
    <div className="min-h-screen" style={{ background: '#0B0F14' }}>
      <SEO
        title="CUDA Development Service | Custom GPU Computing Solutions | Jashom"
        description="Professional CUDA development services for custom GPU computing solutions. Expert parallel programming, kernel development, and GPU acceleration."
        keywords="CUDA development, GPU programming, parallel computing, kernel development, GPU acceleration"
      />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url(/images/cuda.service.hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
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

        {/* Content - Vertically Centered */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[700px] text-left sm:text-left"
            >
              {/* Heading */}
              <h1 
                className="font-bold text-white leading-tight mb-5"
                style={{ 
                  fontSize: 'clamp(32px, 5vw, 60px)',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                  letterSpacing: '-0.02em'
                }}
              >
                CUDA Development Services
              </h1>
              
              {/* Paragraph */}
              <p 
                className="text-white/90 mb-8"
                style={{ 
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: '1.7',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
                }}
              >
                We create custom CUDA solutions that transform computational challenges into high-performance GPU-accelerated applications. Our end-to-end development services deliver speed, scalability, and innovation from architecture design to deployment and support.
              </p>
              
              {/* CTA Button */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:opacity-90 hover:scale-105"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Title and Description */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <p className="text-sm uppercase tracking-wider" style={{ color: '#10B981' }}>Overview</p>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  What is CUDA
                  <br />
                  Development?
                </h2>
                
                <p className="text-white/70 text-base leading-relaxed">
                  CUDA development is the process of creating custom GPU-accelerated applications using NVIDIA's parallel computing platform. It involves designing, implementing, and optimizing parallel algorithms, custom kernels, and GPU workloads to achieve dramatic performance improvements over traditional CPU-based solutions.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  CUDA development enables organizations to harness the massive parallel processing power of modern GPUs for AI/ML, scientific computing, data analytics, and real-time processing. It transforms computational bottlenecks into competitive advantages through expert parallel programming and optimization techniques.
                </p>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#10B981' }}>100x</div>
                    <div className="text-sm" style={{ color: '#9E9E9E' }}>Faster Processing</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#10B981' }}>50%</div>
                    <div className="text-sm" style={{ color: '#9E9E9E' }}>Cost Savings</div>
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
                  src="/images/cuda.developer.jpg" 
                  alt="CUDA Development" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Custom Development That
                <br />
                Delivers Results
              </h2>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <p className="text-white/70 text-base leading-relaxed">
                Our expert CUDA engineers deliver scalable, efficient, and high-performance custom solutions. Jashom provides end-to-end CUDA development for all GPU computing needs, from kernel optimization to complete application acceleration.
              </p>
            </motion.div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Custom Kernel Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                Custom Kernel
                <br />
                Development
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                We design and implement high-performance custom CUDA kernels tailored to your specific computational requirements. Our experts optimize memory patterns, thread execution, and parallel strategies for maximum GPU utilization and throughput.
              </p>
            </motion.div>

            {/* Card 2 - Application Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                Application
                <br />
                Integration
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Seamlessly integrate GPU acceleration into your existing applications and workflows. We handle the complexity of CUDA integration, ensuring smooth interoperability with your current systems while delivering measurable performance gains.
              </p>
            </motion.div>

            {/* Card 3 - End-to-End Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl p-8"
              style={{ background: '#f5f5f5' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                End-to-End
                <br />
                Solutions
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Complete GPU-accelerated solutions from architecture design to production deployment. We manage the entire development lifecycle, including profiling, optimization, testing, and ongoing maintenance for long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/industry-services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0" style={{ background: 'rgba(11, 15, 20, 0.5)' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              Delivering Industry-Specific
              <br />
              CUDA Solutions
            </h2>
            <p className="text-white/90 text-base leading-relaxed mb-12 max-w-3xl" style={{ textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' }}>
              We provide customized CUDA development solutions tailored to meet the unique computational needs of your industry. We help you accelerate innovation, reduce processing time, and achieve breakthrough performance through expert GPU programming.
            </p>

            {/* Industry List - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base font-medium">Machine Learning</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base font-medium">Scientific Computing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base font-medium">Financial Computing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base font-medium">Image & Video Processing</span>
              </div>
            </div>
          </motion.div>
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
              CUDA Development <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16">
              A systematic 6-step approach to deliver high-performance GPU solutions
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
                <h3 className="text-2xl font-bold text-white mb-6">Requirements Analysis</h3>
                <p className="text-white/60 leading-relaxed">Understand computational needs, analyze workloads, and define performance goals</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Architecture Design</h3>
                <p className="text-white/60 leading-relaxed">Design parallel algorithms, memory strategies, and optimal GPU architecture</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Kernel Development</h3>
                <p className="text-white/60 leading-relaxed">Implement custom CUDA kernels with optimized parallel execution patterns</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Optimization & Testing</h3>
                <p className="text-white/60 leading-relaxed">Profile performance, optimize bottlenecks, and validate correctness</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Integration</h3>
                <p className="text-white/60 leading-relaxed">Seamlessly integrate GPU code with existing systems and workflows</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Deployment & Support</h3>
                <p className="text-white/60 leading-relaxed">Production deployment, monitoring, and ongoing maintenance support</p>
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
              <span>Start Your Development Journey</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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
              CUDA Development
            </h2>
          </motion.div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Dramatic
                <br />
                Performance
                <br />
                Gains
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Achieve 10-100X speedups over CPU implementations with custom CUDA solutions. Transform hours of processing into minutes, enabling real-time capabilities and faster innovation cycles.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Cost
                <br />
                Efficiency
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Reduce infrastructure costs by processing more data with fewer resources. GPU acceleration delivers superior price-performance ratios compared to scaling CPU-based systems.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Competitive
                <br />
                Edge
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Outpace competitors with superior computational capabilities. Faster processing enables quicker insights, better models, and more responsive applications.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Scalable
                <br />
                Solutions
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Build applications that scale effortlessly from single GPUs to multi-GPU clusters. Handle growing data volumes without proportional cost increases.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Future-Ready
                <br />
                Technology
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Invest in proven GPU computing technology that continues to evolve. CUDA solutions remain relevant as new GPU architectures deliver even greater performance.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              style={{ background: 'rgba(16, 185, 129, 0.05)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Faster
                <br />
                Time-to-Market
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                Accelerate development cycles with rapid prototyping and testing. GPU-powered workflows enable faster iterations and quicker product launches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line Below Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Why Choose Jashom For
              <br />
              CUDA Development?
            </h2>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-12">
            {/* Benefit 1 - Deep CUDA Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Deep CUDA Expertise</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  Jashom specializes in CUDA development and GPU computing. Our team has extensive experience with parallel programming, kernel optimization, and NVIDIA architectures. We manage all aspects from design to deployment, focusing on measurable performance gains and production-ready solutions.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 - Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Proven Development Results</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  We deliver measurable improvements with up to 100X performance gains over CPU implementations. Our custom CUDA solutions reduce processing time, lower infrastructure costs, and enable real-time capabilities. Every solution is backed by comprehensive profiling and benchmarking data.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 - Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Tailored Development Approach</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  Jashom creates custom CUDA solutions that understand your specific computational challenges. We design strategies based on your workload requirements, whether it's ML acceleration, scientific simulation, or real-time processing. Our solutions provide real competitive advantages in compute-intensive applications.
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
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-base mb-8" style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                  "Jashom's GPU optimization reduced our inference latency by 73%. The team's expertise in CUDA programming is unmatched."
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
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
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3"/>
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
                    <path d="M10 18C10 15.7909 11.7909 14 14 14V10C9.58172 10 6 13.5817 6 18C6 20.2091 7.79086 22 10 22V18Z" fill="#10B981" opacity="0.3"/>
                    <path d="M22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18C18 20.2091 19.7909 22 22 22V18Z" fill="#10B981" opacity="0.3"/>
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
                      What types of applications can benefit from CUDA development?
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
                  <div className="px-6 pb-6">
                    <p className="text-white/70 text-base leading-relaxed">
                      Applications with computationally intensive workloads benefit most from CUDA development, including machine learning training and inference, scientific simulations, financial modeling, image and video processing, data analytics, cryptography, and real-time processing systems. Any application with parallel processing opportunities can achieve significant speedups.
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
                      How long does a typical CUDA development project take?
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
                  <div className="px-6 pb-6">
                    <p className="text-white/70 text-base leading-relaxed">
                      Project timelines vary based on complexity and scope. Simple kernel optimization projects may take 2-4 weeks, while complete application development can take 2-6 months. We provide detailed timelines during the initial analysis phase and maintain transparent communication throughout the development process.
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
                      Do you provide ongoing support after development?
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
                  <div className="px-6 pb-6">
                    <p className="text-white/70 text-base leading-relaxed">
                      Yes, we offer comprehensive post-deployment support including maintenance, updates, performance monitoring, and optimization refinements. We can provide ongoing support contracts or project-based assistance as your needs evolve and new GPU architectures are released.
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
                      What GPU hardware do I need for CUDA development?
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
                  <div className="px-6 pb-6">
                    <p className="text-white/70 text-base leading-relaxed">
                      CUDA requires NVIDIA GPUs with compute capability 3.0 or higher. We recommend modern GPUs like the RTX series for development and testing, and data center GPUs like A100, H100, or L40S for production workloads. We can help you select the right hardware based on your specific requirements and budget.
                    </p>
                  </div>
                </details>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Form Section */}
        <motion.div
          className="mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 border" style={{ background: '#0B0F14', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Contact Form */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Get Started with CUDA Development
                </h2>
                <p className="text-white/70 text-base mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your CUDA development needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ background: '#10B981' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Column - Office Information */}
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Office</h3>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                      <p className="text-white/70 leading-relaxed">
                        414, Satyam-2, Amba Business Park,<br />
                        ATPL, Adalaj, Gujarat,<br />
                        India - 380054
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                      <a href="mailto:info@jashom.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        info@jashom.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                      <a href="tel:+919023906363" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +91 90239 06363
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Response Badge */}
                <div className="mt-8 p-6 rounded-xl border" style={{ background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="text-lg font-semibold text-white">Quick Response</h4>
                  </div>
                  <p className="text-white/70 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

