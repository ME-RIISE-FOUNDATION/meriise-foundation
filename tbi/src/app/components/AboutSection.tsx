import { motion } from 'motion/react';
import { Lightbulb, Target, Eye, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const roadmapSteps = [
    { title: 'Idea', color: 'from-blue-500 to-blue-600' },
    { title: 'Prototype', color: 'from-cyan-500 to-cyan-600' },
    { title: 'Validation', color: 'from-purple-500 to-purple-600' },
    { title: 'Incubation', color: 'from-pink-500 to-pink-600' },
    { title: 'Scaling', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">About TBI - MCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Transforming Ideas Into{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Successful Ventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TBI - MCE is a premier technology business incubator managed by ME-RIISE Foundation,Supported by KITS Government of Karnataka and Department of Electronics, IT, BT, S & T.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To empower entrepreneurs with resources, mentorship, and infrastructure needed to transform innovative ideas into scalable technology businesses that create lasting impact.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be a world-class innovation hub that catalyzes technological advancement and entrepreneurial excellence, fostering a thriving startup ecosystem in India.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
                <Lightbulb className="w-24 h-24 text-white relative z-10 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Your Journey With Us</h3>
            <p className="text-gray-600">From concept to market leader</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 via-purple-500 via-pink-500 to-orange-500 rounded-full -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-4">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 text-gray-300 w-8 h-8" />
                    )}
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-lg">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
