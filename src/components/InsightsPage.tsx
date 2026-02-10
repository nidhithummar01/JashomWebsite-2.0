import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { insightsData } from '../data/insightsData';

export function InsightsPage() {
  const insights = insightsData;

  const categories = ['All', 'Insights', 'Case study', 'News'];

  return (
    <div className="min-h-screen" style={{ background: '#0B0F14' }}>
      <SEO
        title="Insights & Case Studies | Jashom - AI & GPU Optimization Expertise"
        description="Explore the latest insights, case studies, and news from Jashom. Stay informed about AI, GPU optimization, CUDA development, and enterprise technology trends."
        keywords="AI insights, GPU optimization blog, CUDA development, case studies, technology news, machine learning, enterprise AI"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(14, 165, 233, 0.08)',
                borderColor: 'rgba(14, 165, 233, 0.25)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.875rem' }}>Insights & Resources</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#FAFAFA', letterSpacing: '-0.025em' }}>
              Latest <span style={{ color: '#0EA5E9' }}>Insights</span> & Case Studies
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
              Stay informed with the latest trends, best practices, and success stories in AI, GPU optimization, and enterprise technology.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-240"
                style={{
                  background: index === 0 ? 'rgba(14, 165, 233, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                  border: index === 0 ? '1px solid rgba(14, 165, 233, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: index === 0 ? '#0EA5E9' : '#9CA3AF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
                  e.currentTarget.style.color = '#0EA5E9';
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#9CA3AF';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Grid - iTtransition Style */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  insight.featured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 0 ? 'lg:row-span-2' : ''}`}
              >
                <Link to={insight.link} className="block h-full">
                  {/* Card Container */}
                  <div
                    className="relative h-full min-h-[320px] overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                      background: insight.color || '#1E293B',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${insight.image})`,
                          opacity: 0.3
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(180deg, ${insight.color || '#1E293B'}00 0%, ${insight.color || '#1E293B'} 100%)`
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                      {/* Top Section */}
                      <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold" style={{
                          background: 'rgba(14, 165, 233, 0.15)',
                          color: '#0EA5E9',
                          border: '1px solid rgba(14, 165, 233, 0.3)'
                        }}>
                          {insight.category}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-240" style={{ 
                          color: '#FAFAFA',
                          lineHeight: 1.3
                        }}>
                          {insight.title}
                        </h3>

                        <p className="text-sm sm:text-base mb-4" style={{ 
                          color: '#D1D5DB',
                          lineHeight: 1.6
                        }}>
                          {insight.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#9CA3AF' }}>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{insight.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{insight.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-240" style={{ color: '#0EA5E9' }}>
                          <span>Read more</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-240 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                      background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)'
                    }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3"
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#FAFAFA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.18)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.35)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>Load More Insights</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
              border: '1px solid rgba(14, 165, 233, 0.2)'
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                Stay Updated with Latest Insights
              </h2>
              <p className="text-lg mb-8" style={{ color: '#D1D5DB' }}>
                Get the latest AI, GPU optimization, and technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FAFAFA'
                  }}
                />
                <button
                  className="px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-240"
                  style={{
                    background: '#0EA5E9',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0284C7';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0EA5E9';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
