import { motion } from 'motion/react';
import { SEO } from './SEO';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Thank You | Jashom"
        description="Thank you for your interest in Jashom. We'll get back to you soon with our expert solutions."
        keywords="thank you, contact confirmation, jashom response"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">Thank You!</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            We've received your message and appreciate your interest in Jashom's AI and GPU optimization solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <section className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-[#ffffff]/30">
              <h2 className="mb-6 text-white text-xl sm:text-2xl font-bold">What Happens Next?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Review</h3>
                  <p className="text-white/70 text-sm">Our team will review your requirements and project details</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Connect</h3>
                  <p className="text-white/70 text-sm">We'll reach out within 24 hours to discuss your project</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Deliver</h3>
                  <p className="text-white/70 text-sm">We'll provide a customized solution proposal for your needs</p>
                </motion.div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/70 text-sm sm:text-base mb-6">
                  In the meantime, feel free to explore our portfolio and learn more about our AI and GPU optimization expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  >
                    <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Back to Home</span>
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}