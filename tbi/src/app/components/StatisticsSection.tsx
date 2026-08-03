import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
}

export function StatisticsSection() {
  const stats = [
    {
      icon: Briefcase,
      value: 0,
      suffix: '+',
      label: 'Startups Incubated',
      gradient: 'from-blue-500 to-blue-600',
      bgGlow: 'from-blue-500/30 to-blue-600/30',
    },
    {
      icon: TrendingUp,
      value: 10,
      prefix: '₹',
      suffix: ' Cr',
      label: 'Funds Raised',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGlow: 'from-cyan-500/30 to-cyan-600/30',
    },
    {
      icon: Users,
      value: 30,
      suffix: '+',
      label: 'Expert Mentors',
      gradient: 'from-purple-500 to-purple-600',
      bgGlow: 'from-purple-500/30 to-purple-600/30',
    },
    {
      icon: Award,
      value: 0,
      suffix: '+',
      label: 'Patents & Projects',
      gradient: 'from-pink-500 to-pink-600',
      bgGlow: 'from-pink-500/30 to-pink-600/30',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-50"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <span className="text-cyan-400 font-semibold">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Driving Innovation{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              With Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our numbers tell the story of transformation and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGlow} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.prefix}
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: '85%', label: 'Success Rate' },
            { value: '200+', label: 'Jobs Created' },
            { value: '15+', label: 'Industries' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
