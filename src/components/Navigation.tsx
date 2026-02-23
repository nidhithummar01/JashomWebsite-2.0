import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import { ContactModal } from './ContactModal';

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    // NEW SERVICES NAVBAR (CLEAN)
    {
      label: 'Services',
      dropdown: [
        { path: '/gpu-optimization-service/', label: 'GPU Optimization Service' },
        { path: '/cuda-development-service/', label: 'CUDA Development Service' }
      ]
    },
    // HIRE EXPERT WITH HOVER DROPDOWN
    {
      label: 'Hire Expert',
      dropdown: [
        { path: '/hire-cuda-developer/', label: 'Hire CUDA Developer' }
      ]
    },
    {
      label: 'About Us',
      dropdown: [
        { path: '/about/team/', label: 'Team' },
        { path: '/about/portfolio/', label: 'Portfolio' },
        { path: '/insights/', label: 'Blog' },
        { path: '/about/career/', label: 'Career' }
      ]
    },
    { path: '/contact/', label: 'Contact Us' },
    // COMMENTED OUT - Old Services temporarily hidden from UI but preserved in codebase
    /*
    {
      label: 'Services',
      dropdown: [
        {
          label: 'AI Services',
          subItems: [
            { path: '/services/ai-gpu-optimization', label: 'AI GPU Optimization & Attestation' },
            { path: '/services/rag-applications', label: 'RAG Applications' },
            { path: '/services/ai-agentic-systems', label: 'AI Agentic Systems' },
            { path: '/services/ai-automation', label: 'AI Integration & Workflow Automation' }
          ]
        },
        {
          label: 'Cybersecurity',
          subItems: [
            { path: '/services/cyber-security', label: 'Cybersecurity' },
            { path: '/services/vapt', label: 'VAPT' },
            { path: '/services/compliance-risk', label: 'Compliance & Risk' }
          ]
        },
        {
          label: 'Cloud & DevOps Engineering',
          subItems: [
            { path: '/services/devops-devsecops', label: 'DevOps & DevSecOps' },
            { path: '/services/devops-cloud', label: 'Cloud Computing' },
            { path: '/services/edge-computing', label: 'Edge Computing' },
            { path: '/services/cicd-automation', label: 'CI/CD Automation' }
          ]
        },
        {
          label: 'Product Engineering',
          subItems: [
            { path: '/services/product-engineering', label: 'Product Engineering' },
            { path: '/services/custom-development', label: 'Custom Development' },
            { path: '/services/micro-saas', label: 'SaaS Development' }
          ]
        }
      ]
    },
    */
    // COMMENTED OUT - Solutions temporarily hidden from UI but preserved in codebase
    /*
    {
      label: 'Solutions',
      dropdown: [
        { path: '/solutions/healthtech', label: 'HealthTech' },
        { path: '/solutions/supply-chain', label: 'Supply Chain' },
        { path: '/solutions/fintech', label: 'FinTech' },
        { path: '/solutions/environmenttech', label: 'EnvironmentTech' },
        { path: '/solutions/legal-and-tax', label: 'Legal & Tax' },
        { path: '/solutions/retail-tech', label: 'RetailTech' },
        { path: '/solutions/foodtech', label: 'FoodTech' }
      ]
    },
    */
    // COMMENTED OUT - AI for Industry temporarily hidden from UI but preserved in codebase
    /*
    {
      label: 'AI for Industry',
      dropdown: [
        { path: '/ai-for-industry/sales', label: 'AI for Sales' },
        { path: '/ai-for-industry/legal', label: 'AI for Legal' },
        { path: '/ai-for-industry/accounting', label: 'AI for Accounting' },
        { path: '/ai-for-industry/healthcare', label: 'AI for Healthcare' },
        { path: '/ai-for-industry/marketing', label: 'AI for Marketing' },
        { path: '/ai-for-industry/rnd', label: 'AI for R&D' }
      ]
    },
    */
    // Thank You pages are accessible via routing but not shown in navbar (used for form redirects)
    // Contact Us will be handled separately as modal trigger
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333333]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/jashom-logo-header-70px.png"
                alt="Jashom"
                className="h-[35px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto transition-all duration-300 object-contain max-w-[120px] sm:max-w-none"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                    }}
                  >
                    <button
                      className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => {
                            setActiveDropdown(item.label);
                          }}
                          onMouseLeave={() => {
                            setActiveDropdown(null);
                          }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-black border border-white/20 rounded-lg shadow-xl py-2 ${
                            item.label === 'Hire Expert' ? 'whitespace-nowrap' : ''
                          }`}
                          style={{ minWidth: 'max-content' }}
                        >
                          {/* Pointer Arrow - All Dropdowns */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-black" />
                          
                          {item.label === 'Services' ? (
                            // SERVICES DROPDOWN - COMPACT BLACK BOX WITH CLEAN SPACING
                            item.dropdown.map((service) => (
                              <Link
                                key={(service as any).path}
                                to={(service as any).path}
                                onClick={handleLinkClick}
                                className={`block px-6 py-3 transition-colors whitespace-nowrap cursor-pointer ${
                                  location.pathname === (service as any).path
                                    ? 'text-white bg-white/10'
                                    : 'text-white hover:bg-white/5'
                                }`}
                              >
                                {service.label}
                              </Link>
                            ))
                          ) : (
                            // ALL OTHER DROPDOWNS - SAME BLACK STYLE AS SERVICES
                            item.dropdown.map((subItem) => (
                              <Link
                                key={(subItem as any).path}
                                to={(subItem as any).path}
                                onClick={handleLinkClick}
                                className={`block px-6 py-3 transition-colors whitespace-nowrap cursor-pointer ${
                                  location.pathname === (subItem as any).path
                                    ? 'text-white bg-white/10'
                                    : 'text-white hover:bg-white/5'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative transition-colors cursor-pointer ${location.pathname === item.path
                      ? 'text-white'
                      : 'text-white hover:text-gray-300'
                      }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
            
            {/* QUICK CONTACT ICON - Opens Modal */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              onClick={() => setIsContactModalOpen(true)}
              className="relative text-white hover:text-[#10B981] transition-colors cursor-pointer p-2 rounded-lg hover:bg-white/5"
              aria-label="Quick Contact"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white z-50 flex-shrink-0 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay to close menu when clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={handleLinkClick}
              />
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto', maxHeight: 'calc(100vh - 5rem)' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-[#333333] mt-2 relative z-50 bg-black"
                style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}
              >
                <div className="pb-4 space-y-1 pt-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        {item.label === 'Solutions' ? (
                          <Link
                            to="/solutions/"
                            onClick={handleLinkClick}
                            className={`block py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base font-medium ${location.pathname === '/solutions'
                              ? 'text-white bg-white/10'
                              : 'text-white hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <div className="py-3 px-4 text-white/60 text-sm font-medium">
                            {item.label}
                          </div>
                        )}
                        {item.dropdown.map((subItem, subIndex) => {
                          const hasSubItems = (subItem as any).subItems && (subItem as any).subItems.length > 0;
                          const subMenuKey = `${item.label}-${subItem.label}-${subIndex}`;
                          
                          if (hasSubItems && item.label === 'Services') {
                            // Services: Click-based behavior for mobile - show only clicked category
                            const isOpen = openSubMenus[subMenuKey];
                            const hasOpenCategory = Object.values(openSubMenus).some(v => v === true);
                            
                            // If a category is open, only show that category and its sub-items
                            if (hasOpenCategory && !isOpen) {
                              return null; // Hide other categories when one is open
                            }
                            
                            return (
                              <div key={subItem.label || subIndex}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Close all other service categories, toggle this one
                                    const newState: { [key: string]: boolean } = {};
                                    if (!isOpen) {
                                      newState[subMenuKey] = true;
                                    }
                                    setOpenSubMenus(newState);
                                  }}
                                  className={`w-full py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center justify-between text-sm sm:text-base text-white hover:bg-white/10 ${isOpen ? 'bg-white/10' : ''}`}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpen && (
                                  <div className="pl-4">
                                    {(subItem as any).subItems.map((subSubItem: any) => (
                                      <Link
                                        key={subSubItem.path}
                                        to={subSubItem.path}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleLinkClick();
                                        }}
                                        className={`block py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${location.pathname === subSubItem.path
                                          ? 'text-white bg-white/10'
                                          : 'text-white hover:bg-white/10 hover:text-white'
                                          }`}
                                      >
                                        {subSubItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }
                          
                          if (!(subItem as any).path) return null;
                          return (
                            <Link
                              key={(subItem as any).path}
                              to={(subItem as any).path}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLinkClick();
                              }}
                              className={`block py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${item.label === 'AI for Industry' ? 'whitespace-nowrap' : ''} ${location.pathname === (subItem as any).path
                                ? 'text-white bg-white/10'
                                : 'text-white hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`block py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base cursor-pointer ${location.pathname === item.path
                          ? 'text-white bg-white/10'
                          : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* QUICK CONTACT ICON - Mobile */}
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => {
                    setIsContactModalOpen(true);
                    handleLinkClick();
                  }}
                  className="flex items-center gap-3 py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] text-sm sm:text-base text-white hover:bg-white/10 hover:text-white w-full cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Quick Contact</span>
                </motion.button>
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    
    {/* Contact Modal */}
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
    </>
  );
}
