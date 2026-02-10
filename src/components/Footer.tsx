import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about/team' },
      { label: 'Company Brochure', path: '/brochure' },
      { label: 'Case Studies', path: '/portfolio' },
      { label: 'Contact Us', path: '/contact' }
    ],
    services: [
      { label: 'GPU Optimization Service', path: '/gpu-optimization-service' },
      { label: 'CUDA Development Service', path: '/cuda-development-service' }
    ],
    hireExperts: [
      { label: 'Hire CUDA Developer', path: '/hire-cuda-developer' }
    ],
    resources: [
      { label: 'Blog & Insights', path: '/insights' },
      { label: 'Case Studies', path: '/portfolio' },
      { label: 'Documentation', path: '/docs' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security Policy', path: '/security' }
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Grid: Map Section (LEFT) + Navigation (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          
          {/* LEFT SECTION - Logo + World Map + Contact */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-block mb-8">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <img
                  src="/jashom-logo-header-70px.png"
                  alt="Jashom"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Map + Navigation Columns - Side by Side 50/50 */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* LEFT: Vertical Map */}
              <div className="flex items-start justify-center">
                <svg 
                  className="w-full h-auto" 
                  viewBox="0 0 300 600" 
                  preserveAspectRatio="xMidYMid meet"
                  style={{ maxHeight: '400px' }}
                >
                  <defs>
                    <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="#0EA5E9" strokeWidth="3"/>
                    </pattern>
                  </defs>
                  
                  {/* North America - Top */}
                  <path 
                    d="M 40 80 Q 60 60 100 70 L 120 95 Q 130 120 110 150 L 80 160 Q 55 150 45 130 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* South America - Below North America */}
                  <path 
                    d="M 100 190 Q 120 180 130 200 L 140 250 Q 130 270 110 260 L 90 225 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* Europe - Upper Middle */}
                  <path 
                    d="M 150 70 Q 180 60 200 80 L 210 110 Q 200 120 180 110 L 160 100 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* Africa - Middle */}
                  <path 
                    d="M 150 140 Q 180 130 200 150 L 210 220 Q 195 240 175 230 L 160 180 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* Asia - Large, Upper Right, PROMINENT */}
                  <path 
                    d="M 215 80 Q 255 70 280 90 L 290 130 Q 285 180 260 190 L 225 170 Q 218 130 215 100 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* Australia - Bottom Right */}
                  <path 
                    d="M 240 320 Q 260 310 270 330 L 265 360 Q 245 370 235 350 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.6"
                  />
                  
                  {/* Antarctica - Bottom */}
                  <path 
                    d="M 60 480 Q 150 470 240 480 L 250 510 Q 150 520 60 510 Z" 
                    fill="url(#diagonalLines)" 
                    opacity="0.4"
                  />
                  
                  {/* Location Marker - India (on Asia continent) */}
                  <g transform="translate(260, 140)">
                    {/* Outer glow */}
                    <circle cx="0" cy="0" r="15" fill="rgba(14, 165, 233, 0.3)">
                      <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    {/* Inner dot */}
                    <circle cx="0" cy="0" r="5" fill="#0EA5E9" filter="url(#glow)">
                      <animate attributeName="r" values="5;6.5;5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    {/* Pulse ring */}
                    <circle cx="0" cy="0" r="8" fill="none" stroke="#0EA5E9" strokeWidth="2">
                      <animate attributeName="r" values="8;20" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Glow filter for marker */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* RIGHT: Navigation Columns (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {/* Column 1 - Company */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-white">Company</h4>
                  <ul className="space-y-2.5">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-base text-gray-400 hover:text-[#0EA5E9] transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 - Services */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-white">Services</h4>
                  <ul className="space-y-2.5">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-base text-gray-400 hover:text-[#0EA5E9] transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 - Hire Experts */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-white">Hire Experts</h4>
                  <ul className="space-y-2.5">
                    {footerLinks.hireExperts.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-base text-gray-400 hover:text-[#0EA5E9] transition-colors inline-block"
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
                          className="text-base text-gray-400 hover:text-[#0EA5E9] transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Location Details - Below Map */}
            <div className="mb-8 space-y-6">
              {globalLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="border-l-2 pl-4"
                  style={{ borderColor: '#0EA5E9' }}
                >
                  <div className="mb-1">
                    <span className="text-lg font-bold text-white">{location.name}</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-lg font-semibold text-[#0EA5E9]">{location.city}</span>
                  </div>
                  <div className="text-base text-gray-400">
                    <div>{location.address}</div>
                    <div>{location.addressLine2}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[#0EA5E9] text-lg font-semibold">+91 90239 06363</span>
                <span className="text-gray-600">|</span>
                <a href="mailto:info@jashom.com" className="text-lg text-gray-400 hover:text-[#0EA5E9] transition-colors">
                  info@jashom.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon === 'reddit' ? 'div' : social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
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

          {/* RIGHT SECTION - Empty or Additional Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Optional Banner */}
            <div className="mb-8 p-4 rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm hidden lg:block">
              <div className="text-base font-medium text-white text-center">
                Enterprise AI & GPU Optimization Solutions
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright - Below Everything */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-base text-gray-500">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="hover:text-[#0EA5E9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-base text-gray-600">
              © {currentYear} Jashom. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
