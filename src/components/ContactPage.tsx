import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const faqs = [
    {
      question: 'What industries does Jashom work with?',
      answer: 'We work across multiple industries including Healthcare, FinTech, Legal & Tax, Retail, Supply Chain, and Environmental Technology. Our AI solutions are tailored to meet the specific needs of each sector, from GPU-accelerated medical imaging to intelligent automation for financial services.'
    },
    {
      question: 'How fast can your team start?',
      answer: 'We can typically start within 1-2 weeks after the initial consultation. Our onboarding process is streamlined to get your project moving quickly while ensuring we fully understand your requirements and objectives.'
    },
    {
      question: 'Do you offer consultation?',
      answer: 'Yes, we offer free initial consultations to discuss your AI project needs. Our experts will assess your requirements, provide technical recommendations, and outline a clear roadmap for implementation.'
    },
    {
      question: 'Where are you located?',
      answer: 'Our office is located in Adalaj, Gujarat, India at 414, Satyam-2, Amba Business Park, ATPL. We work with clients globally and offer remote collaboration for all projects.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#000000' }}>
      <SEO
        title="Contact Jashom | AI & GPU Optimization Experts"
        description="Get in touch with Jashom's AI experts. We help companies scale with GPU optimization, CUDA development, and intelligent AI systems."
        keywords="contact AI company, AI consultation, GPU optimization contact, CUDA development inquiry"
      />

      {/* SECTION 1 - HERO SECTION */}
      <section 
        className="relative overflow-hidden flex items-center"
        style={{ 
          height: '90vh',
          minHeight: '600px',
          backgroundImage: 'url(/images/contact.hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay 70% */}
        <div 
          className="absolute inset-0 z-0"
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ 
                  color: '#FFFFFF',
                  textAlign: 'left',
                  position: 'relative',
                  paddingBottom: '24px'
                }}
              >
                Let's Discuss Your AI Project
                <div 
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{
                    width: '180px',
                    background: '#00E5FF',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)'
                  }}
                />
              </h1>
              
              <p 
                className="text-xl sm:text-2xl leading-relaxed"
                style={{ color: '#D1D5DB' }}
              >
                We help companies scale with GPU optimization, CUDA development, and intelligent AI systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - SIDE BY SIDE INFO & FORM */}
      <section style={{ padding: '120px 0', background: '#000000' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-start"
              style={{ display: 'grid' }}
            >
              
              {/* LEFT SIDE - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 
                  className="text-4xl sm:text-5xl font-bold mb-8 leading-tight"
                  style={{ color: '#FFFFFF' }}
                >
                  We'd love to help you build{' '}
                  <span style={{ color: '#00E5FF' }}>smarter systems</span>.
                </h2>

                {/* Cyan Divider */}
                <div 
                  className="h-1 w-32 rounded-full mb-12"
                  style={{
                    background: '#00E5FF',
                    boxShadow: '0 0 15px rgba(0, 229, 255, 0.6)'
                  }}
                />

                {/* Our Office Heading */}
                <h3 
                  className="text-3xl font-bold mb-6"
                  style={{ color: '#FFFFFF' }}
                >
                  Our Office
                </h3>

                {/* Office Block */}
                <div className="mb-10">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-3xl">🇮🇳</span>
                    <div>
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: '#9CA3AF' }}
                      >
                        414, Satyam-2, Amba Business Park<br />
                        ATPL, Adalaj, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6" style={{ color: '#00E5FF' }} />
                      <a 
                        href="mailto:info@jashom.com"
                        className="text-xl hover:underline transition-colors"
                        style={{ color: '#FFFFFF' }}
                      >
                        info@jashom.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6" style={{ color: '#00E5FF' }} />
                      <a 
                        href="tel:+919023906363"
                        className="text-xl hover:underline transition-colors"
                        style={{ color: '#FFFFFF' }}
                      >
                        +91 90239 06363
                      </a>
                    </div>
                  </div>
                </div>

                <p 
                  className="text-lg italic"
                  style={{ color: '#9CA3AF' }}
                >
                  Let's build something powerful together.
                </p>
              </motion.div>

              {/* RIGHT SIDE - Glassmorphism Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Form Header */}
                <div className="mb-20">
                  <h3 
                    className="text-3xl font-bold mb-4"
                    style={{ color: '#FFFFFF' }}
                  >
                    Get in touch
                  </h3>
                  <p 
                    className="text-base"
                    style={{ color: '#9CA3AF' }}
                  >
                    Our team will respond to you within 2 business days.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full border transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: focusedField === 'fullName' ? '#00E5FF' : 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        fontSize: '18px',
                        padding: '24px 28px',
                        boxShadow: focusedField === 'fullName' ? '0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full border transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: focusedField === 'email' ? '#00E5FF' : 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        fontSize: '18px',
                        padding: '24px 28px',
                        boxShadow: focusedField === 'email' ? '0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full border transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: focusedField === 'company' ? '#00E5FF' : 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        fontSize: '18px',
                        padding: '24px 28px',
                        boxShadow: focusedField === 'company' ? '0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={7}
                      className="w-full border transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: focusedField === 'message' ? '#00E5FF' : 'rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        fontSize: '18px',
                        padding: '24px 28px',
                        boxShadow: focusedField === 'message' ? '0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="font-semibold text-lg transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                      color: '#FFFFFF',
                      borderRadius: '14px',
                      boxShadow: '0 4px 25px rgba(0, 102, 255, 0.4)',
                      padding: '20px 128px'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 6px 35px rgba(0, 102, 255, 0.6)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - GOOGLE MAP */}
      <section style={{ padding: '100px 0' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden border"
              style={{
                borderRadius: '20px',
                borderColor: 'rgba(0, 229, 255, 0.3)',
                boxShadow: '0 0 40px rgba(0, 229, 255, 0.2)',
                height: '450px'
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=414,+Satyam-2,+Amba+Business+Park,+ATPL,+Adalaj,+Gujarat,+India&output=embed"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jashom Office Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FAQs */}
      <section style={{ padding: '120px 0', background: '#0B0F14' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left 40% - Heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <p 
                  className="text-sm font-semibold tracking-wider mb-4 uppercase"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  FAQs
                </p>
                <h2 
                  className="text-4xl sm:text-5xl font-bold leading-tight"
                  style={{ color: '#FFFFFF' }}
                >
                  Frequently
                  <br />
                  Asked Questions
                </h2>
              </motion.div>

              {/* Right 60% - Accordion */}
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border overflow-hidden"
                    style={{
                      background: '#0B0F14',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                        <h3 
                          className="text-lg font-semibold pr-4"
                          style={{ color: '#FFFFFF' }}
                        >
                          {faq.question}
                        </h3>
                        <svg 
                          className="w-6 h-6 transition-transform group-open:rotate-180" 
                          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-8 pb-8">
                        <p 
                          className="text-base leading-relaxed"
                          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
