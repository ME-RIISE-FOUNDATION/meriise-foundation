import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Let's Start{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              The Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your startup idea? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">Address</h4>
                      <p className="text-gray-600">
                        TBI - MCE, ME-RIISE Foundation 
                        <br />
                        Malnad College of Engineering, Hassan.
                        <br />
                        Hassan, Karnataka 560001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">Email</h4>
                      <p className="text-gray-600">contact@tbi-meriise.in</p>
                      <p className="text-gray-600">apply@tbi-meriise.in</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">Phone</h4>
                      <p className="text-gray-600">+91 80 1234 5678</p>
                      <p className="text-gray-600">+91 80 8765 4321</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Send Us a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Startup Idea
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of your idea"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your project..."
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group/btn"
                >
                  <span className="font-semibold">Send Message</span>
                  <Send className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
