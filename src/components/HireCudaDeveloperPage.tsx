import { motion } from 'motion/react';
import { SEO } from './SEO';
import { CircuitDivider } from './CircuitDivider';
import { ArrowRight } from 'lucide-react';

export function HireCudaDeveloperPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Hire Expert CUDA Developer | GPU Computing Specialists | Jashom"
        description="Connect with expert CUDA developers to accelerate your AI and GPU computing projects. Professional GPU optimization and parallel computing solutions."
        keywords="hire CUDA developer, GPU computing, parallel computing, AI acceleration, CUDA expert"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db] text-xs sm:text-sm">Expert Talent</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">Hire Expert CUDA Developer</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Connect with world-class CUDA developers to accelerate your AI and GPU computing projects with cutting-edge parallel computing solutions
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Main Content */}
        <section className="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Why Choose Our CUDA Experts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Why Choose Our CUDA Experts?</h2>
                <div className="space-y-6">
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <h3 className="text-white text-lg font-semibold mb-3">Deep GPU Architecture Knowledge</h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      Our developers have extensive experience with NVIDIA GPU architectures, memory optimization, and parallel computing patterns.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <h3 className="text-white text-lg font-semibold mb-3">AI & ML Acceleration</h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      Specialized in optimizing machine learning workloads, neural networks, and AI inference pipelines for maximum GPU utilization.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <h3 className="text-white text-lg font-semibold mb-3">Performance Optimization</h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      Expert in CUDA profiling, memory management, and kernel optimization to achieve maximum performance gains.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Services & Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Our CUDA Development Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Custom CUDA Kernel Development</h4>
                      <p className="text-white/70 text-sm">High-performance parallel computing solutions tailored to your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">GPU Memory Optimization</h4>
                      <p className="text-white/70 text-sm">Efficient memory management and data transfer optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">AI Model Acceleration</h4>
                      <p className="text-white/70 text-sm">Deep learning model optimization and inference acceleration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Performance Profiling & Analysis</h4>
                      <p className="text-white/70 text-sm">Comprehensive performance analysis and bottleneck identification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Multi-GPU Scaling</h4>
                      <p className="text-white/70 text-sm">Distributed computing solutions across multiple GPUs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-white text-xl sm:text-2xl font-bold px-2">Ready to Accelerate Your Project?</h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Connect with our expert CUDA developers and transform your computational challenges into high-performance solutions.
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