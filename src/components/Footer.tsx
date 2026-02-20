import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about/team/' },
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
      { label: 'Blog & Insights', path: '/insights/' },
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
    { icon: Linkedin, href: 'https://www.linkedin.com/company/jashom/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/jashomtechnologies_', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@infojashom', label: 'YouTube' },
    { icon: 'reddit', href: 'https://reddit.com/r/jashom', label: 'Reddit' }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          
          {/* Column 1 - Map + Address */}
          <div>
            <div 
              className="w-full rounded-xl overflow-hidden cursor-pointer mb-4"
              style={{
                border: '1px solid rgba(16, 185, 129, 0.25)',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.12)',
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
            <ul className="space-y-2.5">
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
            <ul className="space-y-2.5">
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
            <ul className="space-y-2.5">
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
        <div className="border-t mt-10 pt-6" style={{ borderColor: 'rgba(16, 185, 129, 0.15)' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
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
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon === 'reddit' ? 'div' : social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#10B981] transition-colors"
                      whileHover={{ scale: 1.15, y: -2 }}
                      aria-label={social.label}
                    >
                      {social.icon === 'reddit' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </motion.a>
                  );
                })}
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
