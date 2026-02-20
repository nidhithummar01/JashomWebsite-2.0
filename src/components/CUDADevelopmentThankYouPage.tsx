import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { CheckCircle2, Clock, Code, Layers, Rocket, ArrowRight } from 'lucide-react';

export function CUDADevelopmentThankYouPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Thank You - CUDA Development Service | Jashom"
        description="Thank you for your interest in CUDA development services. Our architects will review your project and provide a detailed proposal within 3-5 business days."
        keywords="CUDA development, thank you, GPU programming"
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
            Thank You for Reaching Out!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 mb-8"
          >
            We've received your CUDA development project request. Our experienced CUDA architects are reviewing your requirements and will prepare a comprehensive project proposal tailored to your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20"
            style={{ background: 'rgba(14, 165, 233, 0.1)' }}
          >
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-white">Project Proposal: Within 3-5 Business Days</span>
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
              Your Development Journey
            </h2>
            <p className="text-lg text-white/70">
              From concept to deployment, here's how we'll bring your CUDA project to life
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
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                1. Technical Review
              </h3>
              <p className="text-base text-white/70">
                Our CUDA architects analyze your project scope, technical requirements, and performance goals.
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
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                2. Proposal & Planning
              </h3>
              <p className="text-base text-white/70">
                We deliver a detailed proposal with architecture design, timeline, milestones, and cost breakdown.
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
                3. Development & Delivery
              </h3>
              <p className="text-base text-white/70">
                Our team develops, tests, and deploys your CUDA solution with ongoing support and optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#111827' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our CUDA Development Expertise
            </h2>
            <p className="text-lg text-white/70">
              Technologies and domains we specialize in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'AI/ML Model Acceleration',
              'Scientific Computing',
              'Real-time Data Processing',
              'Image & Video Processing',
              'Financial Modeling',
              'Custom GPU Kernels'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 text-center"
                style={{ background: 'rgba(14, 165, 233, 0.05)' }}
              >
                <div className="text-white font-semibold">{item}</div>
              </motion.div>
            ))}
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
              Explore Our CUDA Projects
            </h2>
            <p className="text-lg text-white/70">
              See how we've delivered successful CUDA solutions
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
                to="/portfolio/"
                className="block p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ background: '#111827' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  CUDA Development Portfolio
                </h3>
                <p className="text-base text-white/70 mb-4">
                  Explore our successful CUDA projects across AI, scientific computing, and data analytics.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="font-semibold">View Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            {/* Hire Developers Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/hire-cuda-developer/"
                className="block p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ background: '#111827' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  Hire CUDA Developers
                </h3>
                <p className="text-base text-white/70 mb-4">
                  Need dedicated CUDA developers? Hire our experts with 15+ years of experience.
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
              Questions About Your Project?
            </h3>
            <p className="text-lg text-white/70 mb-6">
              Our CUDA development team is here to help clarify any technical details.
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
