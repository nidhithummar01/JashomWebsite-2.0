import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about/' },
      { label: 'Company Brochure', path: '/brochure/' },
      { label: 'Case Studies', path: '/portfolio/' },
      { label: 'Contact Us', path: '/contact/' }
    ],
    services: [
      { label: 'GPU Optimization Service', path: '/gpu-optimization-service/' },
      { label: 'CUDA Development Service', path: '/cuda-development-service/' }
    ],
    hireExperts: [
      { label: 'Hire CUDA Developer', path: '/hire-cuda-developer/' }
    ],
    resources: [
      { label: 'Blog', path: '/blogs/' },
      { label: 'Case Studies', path: '/portfolio/' },
      { label: 'Documentation', path: '/docs/' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy/' },
      { label: 'Terms of Service', path: '/terms/' },
      { label: 'Cookie Policy', path: '/cookies/' },
      { label: 'Security Policy', path: '/security/' }
    ]
  };

  const globalLocations = [
    { 
      name: 'India', 
      city: 'Ahmedabad',
      address: '414, Satyam-2, Amba Business Park',
      addressLine2: 'ATPL, Adalaj, Gujarat, India',
      position: { left: '75%', top: '32%' } 
    }
  ];

  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/company/jashom/', 
      label: 'LinkedIn',
      image: '/images/social-media/linkedin.png.png'
    },
    { 
      href: 'https://www.instagram.com/jashomtechnologies_', 
      label: 'Instagram',
      image: '/images/social-media/instagram.png.png'
    },
    { 
      href: 'https://youtube.com/@infojashom', 
      label: 'YouTube',
      image: '/images/social-media/youtube.png.png'
    },
    { 
      href: 'https://reddit.com/r/jashom', 
      label: 'Reddit',
      image: '/images/social-media/reddit.png.png'
    }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
      borderTop: '1px solid rgba(16, 185, 129, 0.2)'
    }}>
      {/* Large watermark text in background */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          fontSize: 'clamp(120px, 20vw, 280px)',
          fontWeight: '900',
          color: 'rgba(16, 185, 129, 0.02)',
          letterSpacing: '0.1em',
          userSelect: 'none',
          transform: 'translateY(-10%)'
        }}
      >
        JASHOM
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14 pb-0 w-full">
        
        {/* Logo */}
        <Link to="/" className="inline-block mb-10">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <img
              src="/jashom-logo-header-70px.png"
              alt="Jashom"
              className="h-10 w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 w-full">
          
          {/* Column 1 - Map + Address */}
          <div>
            <div 
              className="w-full rounded-xl overflow-hidden cursor-pointer mb-4 transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15), 0 0 40px rgba(16, 185, 129, 0.05)',
                height: '280px'
              }}
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=414+Satyam-2+Amba+Business+Park+ATPL+Adalaj+Gujarat+India', '_blank')}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.234!2d72.5840!3d23.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA5JzUyLjIiTiA3MsKwMzUnMDIuNCJF!5e0!3m2!1sen!2sin!4v1707734400000!5m2!1sen!2sin&z=16&gestureHandling=none&maptype=roadmap&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.icon|visibility:off&style=feature:all|element:labels.text.fill|color:0x757575&style=feature:all|element:labels.text.stroke|color:0x212121&style=feature:administrative|element:geometry|color:0x757575&style=feature:landscape|element:geometry|color:0x212121&style=feature:poi|element:geometry|color:0x212121&style=feature:road|element:geometry.fill|color:0x2c2c2c&style=feature:road|element:labels.text.fill|color:0x8a8a8a&style=feature:road.arterial|element:geometry|color:0x373737&style=feature:road.highway|element:geometry|color:0x3c3c3c&style=feature:road.highway.controlled_access|element:geometry|color:0x4e4e4e&style=feature:road.local|element:labels.text.fill|color:0x616161&style=feature:transit|element:labels.text.fill|color:0x757575&style=feature:water|element:geometry|color:0x000000&style=feature:water|element:labels.text.fill|color:0x3d3d3d"
                width="100%"
                height="280"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jashom Office Location"
              />
            </div>

            {/* Address */}
            <div style={{ marginTop: '24px' }}>
              <h4 className="text-base font-semibold mb-4 text-white">Our Location</h4>
              {globalLocations.map((location, index) => (
                <div key={index} className="text-sm" style={{ lineHeight: '1.6' }}>
                  <div 
                    className="font-medium" 
                    style={{ 
                      color: '#10B981',
                      marginBottom: '16px'
                    }}
                  >
                    {location.city}, {location.name}
                  </div>
                  <div 
                    style={{ 
                      color: '#9CA3AF',
                      marginBottom: '15px'
                    }}
                  >
                    {location.address}
                  </div>
                  <div 
                    style={{ 
                      color: '#9CA3AF',
                      marginBottom: '0'
                    }}
                  >
                    {location.addressLine2}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-400 hover:text-[#10B981] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-400 hover:text-[#10B981] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.hireExperts.map((link, index) => (
                <li key={`hire-${index}`}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-400 hover:text-[#10B981] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-400 hover:text-[#10B981] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10">
          {/* Centered divider line with glow */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-full max-w-4xl border-t" 
              style={{ 
                borderColor: 'rgba(16, 185, 129, 0.2)',
                boxShadow: '0 1px 3px rgba(16, 185, 129, 0.1)'
              }}
            ></div>
          </div>
          
          {/* Policy Row - Elevated with subtle background */}
          <div 
            className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 pb-6 px-6 rounded-lg -mx-6"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)'
            }}
          >
            
            {/* Left: Contact + Social */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-3 text-base">
                <span className="text-[#10B981] font-medium">+91 90239 06363</span>
                <span className="text-gray-600">|</span>
                <a href="mailto:info@jashom.com" className="text-gray-400 hover:text-[#10B981] transition-colors">
                  info@jashom.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.15, y: -2 }}
                    aria-label={social.label}
                    style={{
                      width: '28px',
                      height: '28px'
                    }}
                  >
                    <img 
                      src={social.image}
                      alt={social.label}
                      className="w-full h-full transition-all duration-300"
                      style={{ 
                        objectFit: 'contain'
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Legal + Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="hover:text-[#10B981] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">© {currentYear} Jashom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
