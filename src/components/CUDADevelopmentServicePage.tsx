import { motion } from 'motion/react';
import { SEO } from './SEO';
import { CircuitDivider } from './CircuitDivider';
import { ArrowRight, Code, Layers, Rocket } from 'lucide-react';

export function CUDADevelopmentServicePage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="CUDA Development Service | Custom GPU Computing Solutions | Jashom"
        description="Professional CUDA development services for custom GPU computing solutions. Expert parallel programming, kernel development, and GPU acceleration."
        keywords="CUDA development, GPU programming, parallel computing, kernel development, GPU acceleration"
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
            <span className="text-[#d1d5db] text-xs sm:text-sm">Custom Development</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">CUDA Development Service</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Custom CUDA development solutions tailored to your specific needs. From kernel optimization to complete GPU-accelerated applications.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Main Content */}
        <section className="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Development Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Development Services</h2>
                <div className="space-y-6">
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white text-lg font-semibold">Custom CUDA Kernels</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      High-performance custom kernels designed for your specific computational requirements and data patterns.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Layers className="w-6 h-6 text-green-400" />
                      <h3 className="text-white text-lg font-semibold">Application Integration</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      Seamless integration of CUDA acceleration into existing applications and workflows.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Rocket className="w-6 h-6 text-purple-400" />
                      <h3 className="text-white text-lg font-semibold">End-to-End Solutions</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      Complete GPU-accelerated solutions from architecture design to deployment and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Our CUDA Expertise</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Machine Learning Acceleration</h4>
                      <p className="text-white/70 text-sm">Custom kernels for neural networks, training, and inference optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Scientific Computing</h4>
                      <p className="text-white/70 text-sm">High-performance computing for research and simulation workloads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Image & Video Processing</h4>
                      <p className="text-white/70 text-sm">Real-time processing, computer vision, and media applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Financial Computing</h4>
                      <p className="text-white/70 text-sm">Risk analysis, algorithmic trading, and quantitative modeling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Cryptography & Security</h4>
                      <p className="text-white/70 text-sm">GPU-accelerated encryption, hashing, and security algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Data Analytics</h4>
                      <p className="text-white/70 text-sm">Large-scale data processing and real-time analytics acceleration</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Analysis</h3>
                <p className="text-white/70 text-sm">Analyze your requirements and identify optimization opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Design</h3>
                <p className="text-white/70 text-sm">Create optimized architecture and implementation strategy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Develop</h3>
                <p className="text-white/70 text-sm">Build and optimize custom CUDA solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Deploy</h3>
                <p className="text-white/70 text-sm">Integration, testing, and production deployment</p>
              </div>
            </div>
          </motion.div>
        </section>

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