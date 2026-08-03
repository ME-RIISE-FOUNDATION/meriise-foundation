import { motion } from 'motion/react';
import { Rocket, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-8 shadow-2xl shadow-blue-500/50"
          >
            <Rocket className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's build it together.
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our ecosystem of innovators and transform your vision into a thriving technology startup.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 font-semibold flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300"
            >
              <span className="font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: 'Free', label: 'Initial Consultation' },
              { value: '24/7', label: 'Support Available' },
              { value: '100%', label: 'Commitment' },
            ].map((item, index) => (
              <div key={item.label} className="relative group">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{item.value}</div>
                  <div className="text-gray-300">{item.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
