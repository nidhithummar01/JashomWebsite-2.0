import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ContactPage() {
  const navigate = useNavigate();
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
    // Redirect to thank you page
    navigate('/thank-you');
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
    <>
      <Helmet>
        <title>Contact Jashom | GPU & CUDA Development Consultation</title>
        <meta
          name="description"
          content="Get in touch with Jashom for expert GPU optimization and CUDA development services. Contact our team to discuss your performance challenges and project requirements"
        />
      </Helmet>

      <div className="contact">
        <div className="min-h-screen" style={{ background: '#000000' }}>

          {/* SECTION 1 - HERO SECTION */}
          <section
            className="relative overflow-hidden"
            style={{
              minHeight: '100vh',
              backgroundImage: 'url(/images/contact.hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark Gradient Overlay - Left to Right fade for readability */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(11, 15, 20, 0.95) 0%, rgba(11, 15, 20, 0.85) 40%, rgba(11, 15, 20, 0.6) 70%, rgba(11, 15, 20, 0.4) 100%)'
              }}
            />

            {/* Content - Premium Spacing */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                  style={{ maxWidth: '620px' }}
                >
                  {/* Heading */}
                  <h1
                    className="font-bold text-white leading-tight"
                    style={{
                      fontSize: 'clamp(36px, 5vw, 64px)',
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                      letterSpacing: '-0.02em',
                      marginBottom: '32px'
                    }}
                  >
                    Let's Discuss Your AI Project
                  </h1>

                  {/* Paragraph */}
                  <p
                    className="text-white/90"
                    style={{
                      fontSize: 'clamp(17px, 2vw, 20px)',
                      lineHeight: '1.75',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
                      marginBottom: '48px',
                      maxWidth: '560px'
                    }}
                  >
                    Ready to transform your AI infrastructure? Our team of experts is here to help you leverage GPU acceleration and cutting-edge AI solutions for your business.
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
                    style={{
                      background: '#10B981',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2 - CONTACT FORM + OFFICE INFO */}
          <section id="contact-form" style={{ padding: '120px 0', background: '#000000' }}>
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
                      <span style={{ color: '#10B981' }}>smarter systems</span>.
                    </h2>

                    {/* Cyan Divider */}
                    <div
                      className="h-1 w-32 rounded-full mb-12"
                      style={{
                        background: '#10B981',
                        boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)'
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
                      <div className="flex items-start gap-4" style={{ marginBottom: '28px' }}>
                        <span className="text-3xl">🇮🇳</span>
                        <div>
                          <p
                            className="text-lg leading-relaxed"
                            style={{ color: '#9CA3AF', marginBottom: '0' }}
                          >
                            414, Satyam-2, Amba Business Park
                          </p>
                          <p
                            className="text-lg leading-relaxed"
                            style={{ color: '#9CA3AF', marginTop: '18px', marginBottom: '0' }}
                          >
                            ATPL, Adalaj, Gujarat, India
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: '28px' }}>
                        <div className="flex items-center gap-3" style={{ marginBottom: '16px' }}>
                          <Mail className="w-6 h-6" style={{ color: '#10B981' }} />
                          <a
                            href="mailto:info@jashom.com"
                            className="text-xl hover:underline transition-colors"
                            style={{ color: '#FFFFFF' }}
                          >
                            info@jashom.com
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-6 h-6" style={{ color: '#10B981' }} />
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
                      style={{ color: '#9CA3AF', marginTop: '24px' }}
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

                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            borderColor: focusedField === 'fullName' ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                            borderRadius: '10px',
                            fontSize: '15px',
                            padding: '14px 18px',
                            boxShadow: focusedField === 'fullName' ? '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.1)' : 'none'
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
                            borderColor: focusedField === 'email' ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                            borderRadius: '10px',
                            fontSize: '15px',
                            padding: '14px 18px',
                            boxShadow: focusedField === 'email' ? '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.1)' : 'none'
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
                            borderColor: focusedField === 'company' ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                            borderRadius: '10px',
                            fontSize: '15px',
                            padding: '14px 18px',
                            boxShadow: focusedField === 'company' ? '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.1)' : 'none'
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
                          rows={5}
                          className="w-full border transition-all duration-300 resize-none"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderColor: focusedField === 'message' ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                            borderRadius: '10px',
                            fontSize: '15px',
                            padding: '14px 18px',
                            boxShadow: focusedField === 'message' ? '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.1)' : 'none'
                          }}
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        className="font-semibold text-sm transition-all duration-300 px-6 py-3 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 25px rgba(0, 102, 255, 0.4)'
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
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)',
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
                      className="text-xs font-semibold tracking-wider mb-3 uppercase"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      FAQs
                    </p>
                    <h2
                      className="text-3xl sm:text-4xl font-bold leading-tight"
                      style={{ color: '#FFFFFF' }}
                    >
                      Frequently
                      <br />
                      Asked Questions
                    </h2>
                  </motion.div>

                  {/* Right 60% - Accordion */}
                  <div className="lg:col-span-8 space-y-3">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-xl border overflow-hidden"
                        style={{
                          background: '#0B0F14',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <details className="group">
                          <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                            <h4
                              className="font-semibold pr-3"
                              style={{ color: '#FFFFFF' }}
                            >
                              {faq.question}
                            </h4>
                            <svg
                              className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180"
                              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                            <p
                              className="text-xs leading-relaxed"
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
      </div>
    </>
  );
}



