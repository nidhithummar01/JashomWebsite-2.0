import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Contact Jashom | Request AI Demo & Consultation | Get Started"
        description="Transform your business with AI. Contact Jashom for a free consultation. Available 24/7. Email: info@jashom.com | Phone: +91 90239 06363"
        keywords="contact AI company, AI consultation, request AI demo, AI consultation Gujarat India, GPU optimization contact, enterprise AI inquiry"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db] text-xs sm:text-sm">Get In Touch</span>
          </motion.div>
          <h1 className="mb-3 sm:mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">Contact Us</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-[#ffffff]/30">
              <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#d1d5db] mb-2">Message Sent!</h3>
                  <p className="text-white/70">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all"
                    >
                      <option value="" className="bg-[#1A1A1A]">Select a service</option>
                      <option value="ai-ml" className="bg-[#1A1A1A]">AI/ML Development</option>
                      <option value="gpu" className="bg-[#1A1A1A]">GPU Optimization</option>
                      <option value="data" className="bg-[#1A1A1A]">Data Engineering</option>
                      <option value="mlops" className="bg-[#1A1A1A]">MLOps</option>
                      <option value="security" className="bg-[#1A1A1A]">AI Security</option>
                      <option value="consulting" className="bg-[#1A1A1A]">AI Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#ffffff]/20 text-white placeholder-white/40 focus:border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-black border border-white text-white transition-all duration-300 hover:bg-white hover:text-black"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Our Office Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-[#ffffff]/30">
              <h3 className="mb-6 text-white text-lg sm:text-xl font-semibold">Our Office</h3>
              
              <div className="space-y-6">
                {/* India Flag and Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="8" fill="#FF9933"/>
                      <rect y="8" width="32" height="8" fill="#FFFFFF"/>
                      <rect y="16" width="32" height="8" fill="#138808"/>
                      <circle cx="16" cy="12" r="3" fill="none" stroke="#000080" strokeWidth="0.5"/>
                      <circle cx="16" cy="12" r="2.5" fill="none" stroke="#000080" strokeWidth="0.3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90 text-base leading-relaxed">
                      414, Satyam-2, Amba Business Park,<br />
                      ATPL, Adalaj, Gujarat,<br />
                      India - 380054
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <a href="mailto:info@jashom.com" className="text-white/90 hover:text-white transition-colors">
                    info@jashom.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <a href="tel:+916354412744" className="text-white/90 hover:text-white transition-colors">
                    +91 635 441 2744
                  </a>
                </div>

                {/* Visit Message */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    Pay us a visit for a cup of coffee. We'll be more than happy to welcome you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map/Additional Info */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12 border border-[#ffffff]/30 text-center">
            <h2 className="mb-3 sm:mb-4 text-gradient text-xl sm:text-2xl md:text-3xl px-2">Global Reach, Local Expertise</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4 sm:px-0">
              While headquartered in Gujarat, India, we serve clients worldwide with 24/7 support
              and distributed teams across multiple time zones.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
