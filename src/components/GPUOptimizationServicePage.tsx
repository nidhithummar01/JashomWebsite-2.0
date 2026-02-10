import { motion } from 'motion/react';
import { SEO } from './SEO';
import { ArrowRight, Zap, Cpu, TrendingUp } from 'lucide-react';

export function GPUOptimizationServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="GPU Optimization Service | High-Performance Computing Solutions | Jashom"
        description="Professional GPU optimization services to maximize performance, reduce costs, and accelerate your computational workloads with expert optimization techniques."
        keywords="GPU optimization, performance tuning, CUDA optimization, GPU computing, high performance computing"
      />

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[600px] flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(/images/service-hero-bg.jpg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              GPU Optimization Services
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              We create unique GPU optimization solutions that address actual performance issues. Our end-to-end optimization services deliver speed, scalability, and long-term business impact from planning to implementation and support.
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
                  What is GPU
                  <br />
                  Optimization?
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
                  GPU optimization is the process of analyzing, tuning, and enhancing GPU workloads to maximize computational performance and efficiency. It involves identifying bottlenecks, optimizing memory usage, improving kernel execution, and implementing best practices to achieve faster processing times and reduced resource consumption.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  GPU optimization bridges the gap between raw computing power and practical application performance in AI/ML, scientific computing, data analytics, and rendering. It enables organizations to reduce infrastructure costs, accelerate time-to-results, and maintain competitive advantage in compute-intensive industries.
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
                Optimize Performance That Will
                <br />
                Make a Difference
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
                Our skilled GPU engineers deliver scalable, efficient, and high-performance optimization solutions. Jashom provides performance-driven GPU optimization for all computing needs, from AI/ML acceleration to scientific computing workloads.
              </p>
            </motion.div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - CUDA Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-8"
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
              className="rounded-3xl p-8"
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
              className="rounded-3xl p-8"
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
              Offering Industry-Specific
              <br />
              GPU Solutions
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-12 max-w-3xl">
              We provide customized GPU optimization solutions tailored to meet the particular needs of your industry. We assist you in improving computational performance, reducing costs, and accelerating innovation through cutting-edge GPU technology.
            </p>

            {/* Industry List - Vertical Stack */}
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">AI & Machine Learning</span>
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
                <span className="text-white text-base">Data Analytics</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-base">Rendering & Graphics</span>
              </div>
            </div>
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
              GPU Optimization?
            </h2>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-12">
            {/* Benefit 1 - End-to-end Expertise */}
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
                <h3 className="text-2xl font-bold text-white mb-3">Deep GPU Expertise</h3>
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
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Proven Performance Results</h3>
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
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Tailored Optimization Strategies</h3>
                <p className="text-white/70 text-base leading-relaxed max-w-4xl">
                  Jashom creates optimization solutions that understand your specific workload requirements. We design strategies based on your industry needs, whether it's AI/ML acceleration, scientific computing, data analytics, or rendering. Our solutions provide real competitive advantages in compute-intensive applications.
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
                  <div className="px-6 pb-6">
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
                style={{ background: '#0a0a0a' }}
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
                  <div className="px-6 pb-6">
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
                style={{ background: '#0a0a0a' }}
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
                  <div className="px-6 pb-6">
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
                style={{ background: '#0a0a0a' }}
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
                  <div className="px-6 pb-6">
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
        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-white text-xl sm:text-2xl font-bold px-2">Ready to Optimize Your GPU Performance?</h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Let our experts analyze your workloads and deliver measurable performance improvements that drive real business value.
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