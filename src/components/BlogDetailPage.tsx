import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

export function BlogDetailPage() {
  const { slug } = useParams();

  // Demo blog content
  const blog = {
    title: 'GPU Acceleration in AI: Transforming Machine Learning Performance',
    excerpt: 'Explore how GPU optimization is revolutionizing AI workloads, reducing training time from weeks to hours, and enabling real-time inference at scale.',
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    category: 'Insights',
    author: 'Jashom Team',
    image: '/images/service-hero-bg.jpg',
    content: `
      <h2>Introduction</h2>
      <p>In the rapidly evolving landscape of artificial intelligence, GPU acceleration has emerged as a game-changing technology that's fundamentally transforming how we approach machine learning workloads. What once took weeks of computational time can now be accomplished in mere hours, opening up new possibilities for real-time AI applications at unprecedented scales.</p>

      <h2>The Power of Parallel Processing</h2>
      <p>Graphics Processing Units (GPUs) were originally designed to handle the parallel processing demands of rendering complex graphics. However, their architecture—featuring thousands of smaller, efficient cores designed for simultaneous operations—makes them ideally suited for the matrix operations that form the backbone of machine learning algorithms.</p>

      <p>Unlike traditional CPUs that excel at sequential processing, GPUs can perform thousands of calculations simultaneously. This parallel processing capability is particularly valuable for training deep neural networks, where the same operations need to be applied across massive datasets.</p>

      <h2>Real-World Impact on Training Times</h2>
      <p>The impact of GPU acceleration on training times is nothing short of revolutionary. Consider these real-world examples:</p>

      <ul>
        <li><strong>Image Classification:</strong> Training a ResNet-50 model on ImageNet that would take 29 days on a CPU can be completed in just 4 hours on a modern GPU cluster.</li>
        <li><strong>Natural Language Processing:</strong> Large language models that required weeks of training time can now be trained in days with proper GPU optimization.</li>
        <li><strong>Computer Vision:</strong> Object detection models can be trained 50-100x faster with GPU acceleration compared to CPU-only approaches.</li>
      </ul>

      <h2>Enabling Real-Time Inference</h2>
      <p>Beyond training, GPU acceleration is crucial for deploying AI models in production environments where real-time inference is required. Applications like autonomous vehicles, real-time video analysis, and interactive AI assistants all depend on the ability to process data and generate predictions in milliseconds.</p>

      <p>Modern GPUs, particularly those designed for data center deployment like NVIDIA's A100 and H100, offer specialized tensor cores that can perform mixed-precision calculations at incredible speeds, making real-time inference not just possible but practical at scale.</p>

      <h2>Optimization Strategies</h2>
      <p>To fully leverage GPU acceleration, several optimization strategies are essential:</p>

      <h3>1. Memory Management</h3>
      <p>Efficient memory usage is critical. Techniques like gradient checkpointing, mixed-precision training, and careful batch size selection can dramatically improve GPU utilization and training speed.</p>

      <h3>2. Kernel Optimization</h3>
      <p>Custom CUDA kernels can be developed to optimize specific operations in your ML pipeline, potentially offering 2-10x speedups over generic implementations.</p>

      <h3>3. Multi-GPU Scaling</h3>
      <p>Distributed training across multiple GPUs requires careful consideration of communication patterns, data parallelism strategies, and synchronization methods to achieve near-linear scaling.</p>

      <h2>The Future of GPU-Accelerated AI</h2>
      <p>As AI models continue to grow in size and complexity, GPU acceleration will become even more critical. Emerging technologies like:</p>

      <ul>
        <li>Sparse neural networks that can leverage GPU capabilities more efficiently</li>
        <li>Quantum-inspired algorithms designed for parallel execution</li>
        <li>Neuromorphic computing architectures that mimic biological neural networks</li>
      </ul>

      <p>These innovations promise to push the boundaries of what's possible with GPU-accelerated AI even further.</p>

      <h2>Conclusion</h2>
      <p>GPU acceleration has transformed machine learning from an academic curiosity into a practical tool that's reshaping industries worldwide. By reducing training times from weeks to hours and enabling real-time inference at scale, GPUs have made it possible to deploy AI solutions that were previously impractical or impossible.</p>

      <p>As we look to the future, the continued evolution of GPU technology, combined with sophisticated optimization techniques, will unlock even more powerful AI applications. Organizations that invest in understanding and leveraging GPU acceleration today will be well-positioned to lead in the AI-driven future.</p>
    `
  };

  return (
    <div className="min-h-screen" style={{ background: '#0B0F14' }}>
      <SEO
        title={`${blog.title} | Jashom Insights`}
        description={blog.excerpt}
        keywords="GPU acceleration, AI, machine learning, CUDA, deep learning"
      />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${blog.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'rgba(11, 15, 20, 0.85)' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/insights"
              className="inline-flex items-center gap-2 text-base transition-colors"
              style={{ color: '#00E5FF' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: 'rgba(0, 229, 255, 0.1)',
                color: '#00E5FF',
                border: '1px solid rgba(0, 229, 255, 0.3)'
              }}
            >
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 leading-relaxed"
            style={{ color: '#D1D5DB' }}
          >
            {blog.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF' }}>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF' }}>{blog.readTime}</span>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <article 
            className="prose prose-lg prose-invert max-w-none"
            style={{
              color: '#D1D5DB'
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 text-center border"
            style={{
              background: 'rgba(0, 229, 255, 0.05)',
              borderColor: 'rgba(0, 229, 255, 0.2)'
            }}
          >
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Ready to Accelerate Your AI Projects?
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: '#9CA3AF' }}
            >
              Let's discuss how GPU optimization can transform your machine learning workflows.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #00E5FF 0%, #0EA5E9 100%)',
                color: '#000000'
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add custom styles for the article content */}
      <style>{`
        .prose h2 {
          color: #FFFFFF;
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .prose h3 {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #D1D5DB;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 2rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          color: #D1D5DB;
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }
        .prose strong {
          color: #00E5FF;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
