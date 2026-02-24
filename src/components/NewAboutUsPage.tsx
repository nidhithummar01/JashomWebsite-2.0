import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { 
  Mail,
  Phone
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

export function NewAboutUsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to thank you page
    navigate('/thank-you/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>About Jashom | GPU Optimization & AI Development Experts</title>
        <meta
          name="description"
          content="Learn about Jashom - a technology-driven company specializing in GPU optimization, CUDA development, and AI solutions. Building epic digital solutions with cutting-edge technology."
        />
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* Hero Section with Background Image */}
        <section
          className="relative overflow-hidden w-full"
          style={{
            minHeight: '100vh',
            backgroundImage: 'url(/images/About%20Us/about-us-hero.jpg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '100vw'
          }}
        >
          {/* Dark Gradient Overlay - Left to Right fade for readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(11, 15, 20, 0.95) 0%, rgba(11, 15, 20, 0.85) 40%, rgba(11, 15, 20, 0.6) 70%, rgba(11, 15, 20, 0.4) 100%)'
            }}
          ></div>

          {/* Content - Premium Spacing */}
          <div className="relative z-10 min-h-screen flex items-center overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full" style={{ paddingTop: '140px', paddingBottom: '100px', maxWidth: '100%' }}>
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
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                    letterSpacing: '-0.02em',
                    marginBottom: '32px'
                  }}
                >
                  Building Epic Digital Stuff With Latest Tech
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
                  At Jashom – we are curious to help you turn your impressive ideas into digital reality.
                  We build fast, think smart, and collaborate with brands that dare to lead.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section - "We Create Software Solutions" */}
        <section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{
            background: 'linear-gradient(180deg, #0B0F14 0%, #0F1419 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Side - Title and Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>About</p>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
                  style={{ color: '#FAFAFA' }}
                >
                  We Create Software Solutions<br />That Shape{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    The Future
                  </span>
                </h2>
                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: '#D1D5DB' }}>
                    Jashom has pioneered in delivering the most important software solutions backed by the power of AI development and AI consulting. With our team of passionate developers and data thinkers, you will get nothing less than excellence and innovation.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#D1D5DB' }}>
                    With our specialization in providing services, namely custom software development, AI Development, and AI consulting, we aim to build projects with clarity, precision, and passion. As a trusted software development and AI consulting company, our products are fast, future-ready, and scalable.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#D1D5DB' }}>
                    We build better code with the world-class tools, right talent, and dedication to provide the best.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div 
                  className="rounded-2xl overflow-hidden w-full max-w-md aspect-square"
                  style={{
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.15)'
                  }}
                >
                  <img 
                    src="/images/About%20Us/about-us-Software-Solutions.jpg.jpg" 
                    alt="Software Solutions"
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Decorative glow effect */}
                <div 
                  className="absolute -inset-4 -z-10 rounded-2xl opacity-30 blur-2xl max-w-md aspect-square"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Bento Grid Style */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {/* Team Image - Spans 2 rows on desktop */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img 
                  src="/images/About%20Us/about-us-team-collaboration.jpg.jpg" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Social Icons - Facebook */}
              <motion.a
                variants={staggerItem}
                href="https://www.facebook.com/jashom"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  background: '#1877F2',
                  borderColor: '#1877F2',
                  scale: 1.05
                }}
                transition={{ duration: 0 }}
              >
                <img 
                  src="/images/social-media/facebook.png.png"
                  alt="Facebook"
                  className="w-16 h-16 object-cover transition-all duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </motion.a>

              {/* Social Icons - Twitter */}
              <motion.a
                variants={staggerItem}
                href="https://twitter.com/jashom"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  background: '#FFFFFF',
                  borderColor: '#000000',
                  scale: 1.05
                }}
                transition={{ duration: 0 }}
              >
                <img 
                  src="/images/social-media/twitter.png.png"
                  alt="Twitter"
                  className="w-16 h-16 object-cover transition-all duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </motion.a>

              {/* Industries Served - Jashom Theme */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>30+</h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Industries Served</h4>
                <p className="text-sm" style={{ color: '#D1D5DB' }}>
                  Multiple domains utilize our expertise to build solutions that resonate.
                </p>
              </motion.div>

              {/* Social Icons - LinkedIn (Clickable) */}
              <motion.a
                variants={staggerItem}
                href="https://www.linkedin.com/company/jashom/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  background: '#006192',
                  borderColor: '#006192',
                  scale: 1.05
                }}
                transition={{ duration: 0 }}
              >
                <img 
                  src="/images/social-media/linkedin.png.png"
                  alt="LinkedIn"
                  className="w-16 h-16 object-cover transition-all duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </motion.a>

              {/* Social Icons - Instagram (Clickable) */}
              <motion.a
                variants={staggerItem}
                href="https://www.instagram.com/jashomtechnologies_"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden instagram-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  background: 'radial-gradient(circle at 30% 110%, #feda75, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)',
                  borderColor: '#d62976',
                  scale: 1.05
                }}
                transition={{ duration: 0 }}
              >
                <img 
                  src="/images/social-media/instagram.png.png"
                  alt="Instagram"
                  className="w-16 h-16 object-cover transition-all duration-300"
                  style={{ objectFit: 'cover' }}
                />
              </motion.a>

              {/* Lines of Code */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>150k+</h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Lines of Code Shipped</h4>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  Our codes are clean, smart, and scalable, driving products to perform in high-demand situations.
                </p>
              </motion.div>

              {/* 6 Weeks */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>6 Weeks</h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Average Project Kickoff</h4>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  Our projects kickoff in under 6 weeks, covering phases with speed and focus.
                </p>
              </motion.div>

              {/* 24/7 Support */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>24/7</h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Support Available</h4>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  We are always on for bug fixing, crucial updates, or advice, globally.
                </p>
              </motion.div>

              {/* Bottom Image */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img 
                  src="/images/About%20Us/about-us-team-working.jpg.jpg" 
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Client Retention */}
              <motion.div
                variants={staggerItem}
                className="sm:col-span-2 rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>95%</h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Client Retention Rate</h4>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  Our clients stay with us. Our projects finish on time without compromising the impact they create in market.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{
            background: 'linear-gradient(180deg, #0B0F14 0%, #000000 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>We dream big and smart</p>
                <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#FAFAFA' }}>
                  Vision
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
                  Our vision is to be a global leader in digital transformation, empowering businesses with cutting-edge technology and AI-driven innovation.
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>Jashom is made to impact</p>
                <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#FAFAFA' }}>
                  Mission
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
                  At Jashom, our mission is to transform businesses through innovative digital solutions, intelligent automation, and seamless user experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Values Section - Side by Side 50/50 */}
        <section className="py-0 bg-black pb-20">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Side - Image and CTA (50%) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden min-h-[600px]"
                style={{
                  backgroundImage: 'url(/images/About%20Us/about-us-contact-us.jpg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                
                <div className="relative h-full flex flex-col justify-between p-8 md:p-12 xl:p-16">
                  {/* Bottom Content */}
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
                      Want to create something impactful?
                    </h3>
                    <p className="text-white/90 mb-8 text-base md:text-lg">
                      Let us talk about your ideas, strategies, and how to execute.
                    </p>
                    <div className="flex justify-start">
                      <button
                        onClick={() => {
                          const formSection = document.getElementById('contact-form');
                          formSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                          color: '#FFFFFF',
                          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
                        }}
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Brand Values (50%) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 xl:p-16 flex flex-col justify-center min-h-[600px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                  borderLeft: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 md:mb-12" style={{ color: '#10B981' }}>
                  Brand Values
                </h2>

                <div className="space-y-8 md:space-y-10">
                  {/* Innovation-Driven Excellence */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#FAFAFA' }}>
                      Innovation-Driven Excellence
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base lg:text-lg" style={{ color: '#D1D5DB' }}>
                      We embrace cutting-edge technology and AI-driven solutions to create impactful digital experiences that drive business growth.
                    </p>
                  </div>

                  {/* Customer-Centric Approach */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#FAFAFA' }}>
                      Customer-Centric Approach
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base lg:text-lg" style={{ color: '#D1D5DB' }}>
                      Our solutions are tailored to meet unique business needs, ensuring seamless integration, scalability, and long-term success.
                    </p>
                  </div>

                  {/* Collaboration & Integrity */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#FAFAFA' }}>
                      Collaboration & Integrity
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base lg:text-lg" style={{ color: '#D1D5DB' }}>
                      We foster strong partnerships built on trust, transparency, and teamwork, delivering value with honesty and accountability.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider Section - Add Space */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/10"></div>
          </div>
        </section>

        {/* Contact Form Section - 50/50 Split */}
        <section 
          id="contact-form"
          className="py-20"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0B0F14 100%)'
          }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Contact Info & Office Details (50%) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 p-8 md:p-10 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div>
                  <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>Contact Us</p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#FAFAFA' }}>
                    Jashom is ready to help you grow.
                  </h2>
                </div>

                {/* Our Office */}
                <div className="space-y-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">Our Office</h3>
                  
                  <div className="flex items-start gap-3">
                    <img 
                      src="/images/inidan.flag.jpg" 
                      alt="India" 
                      className="w-8 h-6 object-cover rounded mt-1"
                    />
                    <div>
                      <p className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg">
                        414, Satyam-2, Amba Business Park,
                      </p>
                      <p className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg">
                        ATPL, Adalaj, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <Mail className="w-5 h-5" style={{ color: '#10B981' }} />
                    <a 
                      href="mailto:info@jashom.com" 
                      className="text-white/90 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
                    >
                      info@jashom.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#10B981' }} />
                    <a 
                      href="tel:+919854412744" 
                      className="text-white/90 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
                    >
                      +91 985 441 2744
                    </a>
                  </div>

                  <div className="pt-6">
                    <p className="text-white/70 text-sm md:text-base">
                      Pay us a visit for a cup of coffee. We'll be more than happy to welcome you.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Form (50%) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 p-8 md:p-10 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                  Let's Work On Your Goals Together
                </h3>
                <p className="text-white/70 mb-8 text-sm md:text-base">
                  ...that drop a message. We are here to listen to your ideas or vision, provide AI solutions, or provide guidance.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Business Email ID"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      placeholder="Message"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-50"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
