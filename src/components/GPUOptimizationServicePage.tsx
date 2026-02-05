import { motion } from 'motion/react';
import { SEO } from './SEO';
import { CircuitDivider } from './CircuitDivider';
import { ArrowRight, Zap, Cpu, TrendingUp } from 'lucide-react';

export function GPUOptimizationServicePage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="GPU Optimization Service | High-Performance Computing Solutions | Jashom"
        description="Professional GPU optimization services to maximize performance, reduce costs, and accelerate your computational workloads with expert optimization techniques."
        keywords="GPU optimization, performance tuning, CUDA optimization, GPU computing, high performance computing"
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
            <span className="text-[#d1d5db] text-xs sm:text-sm">Performance Excellence</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">GPU Optimization Service</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Maximize your GPU performance with our expert optimization services. Reduce costs, accelerate workloads, and unlock the full potential of your hardware.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Main Content */}
        <section className="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Service Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">What We Optimize</h2>
                <div className="space-y-6">
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white text-lg font-semibold">Performance Bottlenecks</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      Identify and eliminate performance bottlenecks in your GPU workloads, memory access patterns, and kernel execution.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <Cpu className="w-6 h-6 text-green-400" />
                      <h3 className="text-white text-lg font-semibold">Memory Management</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      Optimize memory allocation, data transfer patterns, and cache utilization for maximum throughput.
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                      <h3 className="text-white text-lg font-semibold">Scalability</h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base">
                      Scale your applications across multiple GPUs and optimize for distributed computing environments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Benefits & Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">Optimization Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Up to 10x Performance Gains</h4>
                      <p className="text-white/70 text-sm">Dramatic improvements in computational speed and efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Reduced Infrastructure Costs</h4>
                      <p className="text-white/70 text-sm">Lower cloud computing bills and hardware requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Energy Efficiency</h4>
                      <p className="text-white/70 text-sm">Reduced power consumption and environmental impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Faster Time-to-Market</h4>
                      <p className="text-white/70 text-sm">Accelerated development and deployment cycles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Competitive Advantage</h4>
                      <p className="text-white/70 text-sm">Superior performance compared to non-optimized solutions</p>
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