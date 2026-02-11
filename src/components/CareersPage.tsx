import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Briefcase, Users, TrendingUp, Heart, Clock, MapPin } from 'lucide-react';

interface JobOpening {
  id: number;
  title: string;
  openings: number;
  description: string;
  postedDays: number;
  location?: string;
  type?: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Account Executive',
    openings: 1,
    description: 'We are seeking trustworthy candidates who work efficiently without sacrificing accuracy. Accountants can expect to work with multiple tasks with deadlines and provide transparent and complete reports to management. The ideal candidates will be innovative enough to suggest tailored solutions to common account problems.',
    postedDays: 3,
    location: 'Remote',
    type: 'Full-time'
  },
  {
    id: 2,
    title: 'iPhone App Developer',
    openings: 5,
    description: 'Are you iOS geek!! Sounds familiar with Mac system and iOS development. Looking for challenging work, Career Growth and Personal growth as well!! Here is the great Opportunity knocking the door of success, open the door and grab it with Feel at Home and friendly work environment. Well we here to hear you!! Together with our development...',
    postedDays: 5,
    location: 'Remote / Hybrid',
    type: 'Full-time'
  }
];

export function CareersPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <SEO
        title="Careers at Jashom | Join Our Team"
        description="Join the team to create digital products that the world has never seen before! Explore career opportunities at Jashom."
        keywords="careers, jobs, AI jobs, CUDA developer jobs, software engineer jobs, remote jobs"
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#1a1a1a', minHeight: '500px', paddingTop: '180px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8" 
              style={{ 
                color: '#FFFFFF', 
                letterSpacing: '-0.025em',
                fontWeight: 700
              }}
            >
              Find your big role In our purposeful team
            </h1>
            
            <p 
              className="text-lg sm:text-xl leading-relaxed max-w-3xl" 
              style={{ 
                color: '#D0D0D0'
              }}
            >
              Join the team to create digital products that the world has never seen before!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              Why Join <span style={{ color: '#FF8C00' }}>Jashom</span>?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              We're building the future of AI and GPU computing, and we want you to be part of it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.3)'
              }}>
                <Users className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Great Team</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                Work with talented professionals who are passionate about innovation
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.3)'
              }}>
                <TrendingUp className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Career Growth</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                Continuous learning opportunities and clear paths for advancement
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.3)'
              }}>
                <Heart className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Work-Life Balance</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                Flexible work arrangements and a supportive environment
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.3)'
              }}>
                <Briefcase className="w-8 h-8" style={{ color: '#FF8C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Cutting-Edge Projects</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                Work on innovative AI and GPU optimization projects
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              Current <span style={{ color: '#FF8C00' }}>Openings</span>
            </h2>
            <p className="text-lg" style={{ color: '#666666' }}>
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg"
                style={{ background: '#f5f5f5', borderColor: '#e0e0e0' }}
              >
                {/* Job Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
                      {job.title}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold" style={{
                      background: 'rgba(255, 140, 0, 0.1)',
                      color: '#FF8C00'
                    }}>
                      {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                    </div>
                  </div>
                  <div className="text-right text-sm" style={{ color: '#999999' }}>
                    {job.postedDays} days ago
                  </div>
                </div>

                {/* Job Meta */}
                {(job.location || job.type) && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {job.location && (
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    )}
                    {job.type && (
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Job Description */}
                <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>
                  {job.description}
                </p>

                {/* Apply Button */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                  style={{
                    background: '#FF8C00',
                    color: '#FFFFFF'
                  }}
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              Don't see the right role?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#666666' }}>
              We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our mission.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background: '#FF8C00',
                color: '#FFFFFF'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
