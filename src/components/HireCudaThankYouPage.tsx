import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { CheckCircle2, Clock, FileText, ArrowRight, Users, Zap } from 'lucide-react';

export function HireCudaThankYouPage() {
  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
      <SEO
        title="Thank You - Hire CUDA Developer | Jashom"
        description="Thank you for your interest in hiring CUDA developers. We'll review your requirements and get back to you within 24 hours."
        keywords="hire CUDA developer, thank you, GPU computing"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#2a2a2a' }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8"
            style={{ background: '#FF8C00' }}
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Thank You for Your Interest!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl mb-8"
            style={{ color: '#B0B0B0' }}
          >
            We've received your request to hire CUDA developers. Our team is reviewing your requirements and will match you with the perfect developers for your project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg"
            style={{ background: '#333333' }}
          >
            <Clock className="w-5 h-5" style={{ color: '#FF8C00' }} />
            <span style={{ color: '#FFFFFF' }}>Expected Response: Within 24 Hours</span>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              What Happens Next?
            </h2>
            <p className="text-lg" style={{ color: '#666666' }}>
              Here's our streamlined process to get you started quickly
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: '#FFF3E0' }}>
                <FileText className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                1. Requirements Review
              </h3>
              <p className="text-base" style={{ color: '#666666' }}>
                Our team analyzes your project requirements and technical needs within 24 hours.
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: '#FFF3E0' }}>
                <Users className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                2. Developer Matching
              </h3>
              <p className="text-base" style={{ color: '#666666' }}>
                We match you with pre-screened CUDA developers who fit your project perfectly.
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: '#FFF3E0' }}>
                <Zap className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                3. Quick Onboarding
              </h3>
              <p className="text-base" style={{ color: '#666666' }}>
                Interview candidates and start your 15-day risk-free trial within 48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              While You Wait, Explore Our Work
            </h2>
            <p className="text-lg" style={{ color: '#666666' }}>
              Learn more about our CUDA expertise and successful projects
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
                className="block p-8 rounded-xl border-2 transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  View Our Portfolio
                </h3>
                <p className="text-base mb-4" style={{ color: '#666666' }}>
                  Explore 100+ successful GPU projects and CUDA implementations across various industries.
                </p>
                <div className="flex items-center gap-2" style={{ color: '#FF8C00' }}>
                  <span className="font-semibold">Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            {/* GPU Optimization Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/gpu-optimization-service"
                className="block p-8 rounded-xl border-2 transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
                style={{ background: '#FFFFFF', borderColor: '#e0e0e0' }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  GPU Optimization Services
                </h3>
                <p className="text-base mb-4" style={{ color: '#666666' }}>
                  Learn how we optimize GPU workloads for 10X performance improvements.
                </p>
                <div className="flex items-center gap-2" style={{ color: '#FF8C00' }}>
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Have Questions?
            </h3>
            <p className="text-lg mb-6" style={{ color: '#B0B0B0' }}>
              Our team is here to help. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@jashom.com"
                className="text-lg font-semibold hover:opacity-80 transition-opacity"
                style={{ color: '#FF8C00' }}
              >
                info@jashom.com
              </a>
              <span style={{ color: '#666666' }}>|</span>
              <a
                href="tel:+919023906363"
                className="text-lg font-semibold hover:opacity-80 transition-opacity"
                style={{ color: '#FF8C00' }}
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
