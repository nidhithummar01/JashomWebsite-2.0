import { motion } from 'motion/react';
import { SEO } from './SEO';
import { ArrowRight } from 'lucide-react';

export function CUDADevelopmentServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="CUDA Development Service | Custom GPU Computing Solutions | Jashom"
        description="Professional CUDA development services for custom GPU computing solutions. Expert parallel programming, kernel development, and GPU acceleration."
        keywords="CUDA development, GPU programming, parallel computing, kernel development, GPU acceleration"
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20" style={{ background: '#000000' }}>
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              CUDA Development Services
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              We create custom CUDA solutions that transform computational challenges into high-performance GPU-accelerated applications. Our end-to-end development services deliver speed, scalability, and innovation from architecture design to deployment and support.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:opacity-90"
              style={{
                background: '#0EA5E9',
                color: '#FFFFFF'
              }}
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">Overview</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  What is CUDA
                  <br />
                  Development?
                </h2>
              </motion.div>
            </div>

            {/* Right Column - Description */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-white/70 text-base leading-relaxed">
                  CUDA development is the process of creating custom GPU-accelerated applications using NVIDIA's parallel computing platform. It involves designing, implementing, and optimizing parallel algorithms, custom kernels, and GPU workloads to achieve dramatic performance improvements over traditional CPU-based solutions.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  CUDA development enables organizations to harness the massive parallel processing power of modern GPUs for AI/ML, scientific computing, data analytics, and real-time processing. It transforms computational bottlenecks into competitive advantages through expert parallel programming and optimization techniques.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Delivering Industry-Specific
              <br />
              CUDA Solutions
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-12 max-w-3xl">
              We provide customized CUDA development solutions tailored to meet the unique computational needs of your industry. We help you accelerate innovation, reduce processing time, and achieve breakthrough performance through expert GPU programming.
            </p>

            {/* Industry List - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">Machine Learning</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">Scientific Computing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">Financial Computing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">Image & Video Processing</span>
              </div>
            </div>

            {/* Image Below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ 
                  background: '#1a1a1a',
                  minHeight: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/images/industry-services.jpg" 
                  alt="Industry-Specific Services" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
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
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
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
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
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
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
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
                style={{ background: '#0a0a0a' }}
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
                style={{ background: '#0a0a0a' }}
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
                style={{ background: '#0a0a0a' }}
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
                style={{ background: '#0a0a0a' }}
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
        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-white text-xl sm:text-2xl font-bold px-2">Ready to Accelerate Your Applications?</h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Transform your computational challenges into high-performance solutions with our expert CUDA development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
