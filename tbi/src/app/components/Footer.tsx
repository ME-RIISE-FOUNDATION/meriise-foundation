import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="font-bold text-white text-xl">TBI</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">TBI</div>
                <div className="text-xs text-gray-400">ME-RIISE Foundation</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering innovation and building the next generation of technology startups.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Twitter, color: 'hover:bg-cyan-600' },
                { icon: Linkedin, color: 'hover:bg-blue-700' },
                { icon: Instagram, color: 'hover:bg-pink-600' },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Infrastructure', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {['Incubation', 'Pre-Incubation', 'Mentorship', 'Funding'].map((program) => (
                <li key={program}>
                  <a
                    href="#programs"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and opportunities.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-lg flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2026 TBI - ME-RIISE Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
