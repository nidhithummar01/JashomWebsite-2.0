import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { SEO } from './SEO';
import { ArrowRight } from 'lucide-react';

export function ServicesPage() {
  // AI Services
  const aiServices = [
    { title: 'AI GPU Optimization & Attestation', path: '/services/ai-gpu-optimization' },
    { title: 'RAG Applications', path: '/services/rag-applications' },
    { title: 'AI Agentic Systems (N8N automation)', path: '/services/ai-agentic-systems' },
    { title: 'AI Integration & Workflow Automation', path: '/services/ai-automation' }
  ];

  // Cybersecurity
  const securityServices = [
    { title: 'Cybersecurity', path: '/services/cyber-security' },
    { title: 'VAPT', path: '/services/vapt' },
    { title: 'Compliance & Risk', path: '/services/cyber-security' }
  ];

  // Cloud & DevOps Engineering
  const cloudDevOpsServices = [
    { title: 'DevOps & DevSecOps', path: '/services/devops-devsecops' },
    { title: 'Cloud Computing', path: '/services/cloud-computing' },
    { title: 'Edge Computing', path: '/services/devops-cloud' },
    { title: 'CI/CD Automation', path: '/services/devops' }
  ];

  // Product Engineering
  const productServices = [
    { title: 'Product Engineering (Full-Stack Development)', path: '/services/product-engineering' },
    { title: 'Micro-SaaS Development', path: '/services/custom-development' },
    { title: 'Custom Development', path: '/services/custom-development' }
  ];


  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Our Services | AI, Cloud, DevOps, Product Engineering & Security | Jashom"
        description="Comprehensive technology services: AI & GPU Optimization, Cloud & DevOps Engineering, Product Development, Cybersecurity, and Staff Augmentation."
        keywords="AI services, cloud computing, DevOps, product engineering, cybersecurity, staff augmentation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">What We Offer</span>
          </motion.div>
          <h1 className="mb-6 text-gradient">Our Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to transform your business with cutting-edge innovation and domain expertise
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Services Grid - 3 Column Layout */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32">
            {/* Column 1: AI Services & Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-16 lg:space-y-20"
            >
              <div>
                <h2 className="text-white text-2xl font-bold mb-10">AI Services</h2>
                <div className="space-y-5">
                  {aiServices.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.path}
                      className="block text-white/80 hover:text-white transition-colors text-lg py-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {service.title}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="pt-8">
                <h2 className="text-white text-2xl font-bold mb-10">Cybersecurity</h2>
                <div className="space-y-5">
                  {securityServices.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.path}
                      className="block text-white/80 hover:text-white transition-colors text-lg py-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (aiServices.length + index) * 0.05 }}
                    >
                      {service.title}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Column 2: Cloud & DevOps Engineering & Product Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-16 lg:space-y-20"
            >
              <div>
                <h2 className="text-white text-2xl font-bold mb-10">Cloud & DevOps Engineering</h2>
                <div className="space-y-5">
                  {cloudDevOpsServices.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.path}
                      className="block text-white/80 hover:text-white transition-colors text-lg py-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      {service.title}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="pt-8">
                <h2 className="text-white text-2xl font-bold mb-10">Product Engineering</h2>
                <div className="space-y-5">
                  {productServices.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.path}
                      className="block text-white/80 hover:text-white transition-colors text-lg py-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (cloudDevOpsServices.length + index) * 0.05 }}
                    >
                      {service.title}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-20 md:p-24 border border-[#ffffff]/30">
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our services and expertise can address your specific business challenges and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
