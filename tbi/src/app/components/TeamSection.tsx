import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: 'Dr. Geetha Kiran A',
      role: 'CEO',
      image: 'GK',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Dr. Mohana Lakshmi J',
      role: 'COO',
      image: 'MJ',
      gradient: 'from-cyan-500 to-cyan-600',
    },
      {
      name: 'Mr Darshan H D',
      role: 'Software Associate',
      image: 'DH',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Ms Madhurya',
      role: 'Innovation Associate',
      image: 'M',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Miss Ramya',
      role: 'Finance Associate',
      image: 'R',
      gradient: 'from-pink-500 to-pink-600',
    },
     {
      name: 'Ms Deeksha',
      role: 'Supporting Staff',
      image: 'D',
      gradient: 'from-pink-500 to-pink-600',
    },
   
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Meet The{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to nurturing your startup journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:border-blue-500/30 transition-all duration-300 text-center">
                <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mb-6 shadow-xl text-white text-4xl font-bold`}>
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-6">{member.role}</p>

                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
