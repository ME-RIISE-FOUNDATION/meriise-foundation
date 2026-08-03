import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export function StartupsSection() {
  const categories = ['All', 'Health', 'Agriculture', 'Renewable Energy', 'Smart Systems', 'Others'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const startups = [
    {
      name: 'AI Vision Tech',
      category: 'AI',
      description: 'Advanced computer vision solutions for industrial automation',
      tags: ['AI', 'Machine Learning'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'SmartGrid IoT',
      category: 'IoT',
      description: 'Smart energy management systems for sustainable living',
      tags: ['IoT', 'Energy'],
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      name: 'EcoCharge',
      category: 'EV',
      description: 'Innovative EV charging infrastructure and battery solutions',
      tags: ['EV', 'Clean Tech'],
      gradient: 'from-green-500 to-green-600',
    },
    {
      name: 'HealthAI',
      category: 'Healthcare',
      description: 'AI-powered diagnostic tools for early disease detection',
      tags: ['Healthcare', 'AI'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'RoboAssist',
      category: 'Robotics',
      description: 'Collaborative robots for manufacturing and logistics',
      tags: ['Robotics', 'Automation'],
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      name: 'CloudSync Pro',
      category: 'Software',
      description: 'Enterprise cloud synchronization and data management platform',
      tags: ['Software', 'Cloud'],
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  const filteredStartups =
    selectedCategory === 'All'
      ? startups
      : startups.filter((startup) => startup.category === selectedCategory);

  return (
    <section id="startups" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Startups We've{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Empowered
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative companies building the future of technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${startup.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${startup.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">
                    {startup.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{startup.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{startup.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-semibold group/btn"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
