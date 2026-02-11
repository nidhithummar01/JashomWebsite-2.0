import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { CheckCircle2, Clock, TrendingUp, FileSearch, Rocket, ArrowRight } from 'lucide-react';

export function GPUOptimizationThankYouPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Thank You - GPU Optimization Service | Jashom"
        description="Thank you for your interest in GPU optimization services. Our experts will analyze your requirements and provide a free consultation within 48 hours."
        keywords="GPU optimization, thank you, performance optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#111827' }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8"
            style={{ background: '#0EA5E9' }}
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Request Received Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 mb-8"
          >
            Thank you for choosing Jashom for GPU optimization. Our performance experts are reviewing your requirements and will provide a detailed analysis and free consultation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20"
            style={{ background: 'rgba(14, 165, 233, 0.1)' }}
          >
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-white">Free Consultation Scheduled: Within 48 Hours</span>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Optimization Journey
            </h2>
            <p className="text-lg text-white/70">
              Here's how we'll help you achieve 10X performance improvements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <FileSearch className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                1. Performance Analysis
              </h3>
              <p className="text-base text-white/70">
                Our experts analyze your GPU workloads, identify bottlenecks, and create a detailed optimization roadmap.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                2. Optimization Strategy
              </h3>
              <p className="text-base text-white/70">
                We present a customized optimization plan with expected performance gains and implementation timeline.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                3. Implementation
              </h3>
              <p className="text-base text-white/70">
                Our team implements optimizations, validates performance improvements, and ensures production readiness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#111827' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expected Performance Improvements
            </h2>
            <p className="text-lg text-white/70">
              Based on our previous optimization projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-xl border border-white/10"
              style={{ background: 'rgba(14, 165, 233, 0.05)' }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">10X</div>
              <div className="text-white/70">Faster Execution</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-xl border border-white/10"
              style={{ background: 'rgba(14, 165, 233, 0.05)' }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-white/70">Cost Reduction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 rounded-xl border border-white/10"
              style={{ background: 'rgba(14, 165, 233, 0.05)' }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-white/70">GPU Utilization</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0B0F14' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore Our Optimization Work
            </h2>
            <p className="text-lg text-white/70">
              See how we've helped companies achieve breakthrough performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Portfolio Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/portfolio"
                className="block p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ background: '#111827' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  Optimization Case Studies
                </h3>
                <p className="text-base text-white/70 mb-4">
                  Real-world examples of GPU optimization projects with measurable performance gains.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="font-semibold">View Case Studies</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            {/* CUDA Development Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/cuda-development-service"
                className="block p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ background: '#111827' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  CUDA Development Services
                </h3>
                <p className="text-base text-white/70 mb-4">
                  Custom CUDA development for GPU-accelerated applications and solutions.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#111827' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg text-white/70 mb-6">
              Our optimization experts are available to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@jashom.com"
                className="text-lg font-semibold text-blue-400 hover:opacity-80 transition-opacity"
              >
                info@jashom.com
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919023906363"
                className="text-lg font-semibold text-blue-400 hover:opacity-80 transition-opacity"
              >
                +91 90239 06363
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
