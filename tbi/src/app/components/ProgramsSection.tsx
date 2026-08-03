import { motion } from 'motion/react';
import { Rocket, Lightbulb, Users, DollarSign, Building2, Wrench } from 'lucide-react';

export function ProgramsSection() {
  const programs = [
    {
      icon: Lightbulb,
      title: 'Pre-Incubation',
      description: 'Transform your ideas into viable business models with expert guidance and structured frameworks.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGlow: 'from-cyan-500/20 to-cyan-600/20',
    },
    {
      icon: Rocket,
      title: 'Incubation Program',
      description: 'Comprehensive support for startups from validation to market entry with dedicated resources and guidance.',
      gradient: 'from-blue-500 to-blue-600',
      bgGlow: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: Users,
      title: 'Mentorship Support',
      description: 'Connect with industry experts and successful entrepreneurs for personalized guidance and strategic advice.',
      gradient: 'from-purple-500 to-purple-600',
      bgGlow: 'from-purple-500/20 to-purple-600/20',
    },
    {
      icon: DollarSign,
      title: 'Funding Assistance',
      description: 'Access to seed funding, investor networks, and guidance for securing capital for growth.',
      gradient: 'from-pink-500 to-pink-600',
      bgGlow: 'from-pink-500/20 to-pink-600/20',
    },
    {
      icon: Building2,
      title: 'Co-working Space',
      description: 'Modern workspace with state-of-the-art facilities designed to foster collaboration and productivity.',
      gradient: 'from-orange-500 to-orange-600',
      bgGlow: 'from-orange-500/20 to-orange-600/20',
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: 'Access to cutting-edge technology infrastructure, tools, and technical expertise for development.',
      gradient: 'from-green-500 to-green-600',
      bgGlow: 'from-green-500/20 to-green-600/20',
    },
    {
      icon: Wrench,
      title: 'Consulting Services',
      description: 'Access to expert consulting services for strategic planning, business development, and operational support.',
      gradient: 'from-green-500 to-green-600',
      bgGlow: 'from-green-500/20 to-green-600/20',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Startup Support
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, launch, and scale your technology startup
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGlow} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-semibold group/btn"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
