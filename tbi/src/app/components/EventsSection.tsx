import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

export function EventsSection() {
  const upcomingEvents = [
    {
      title: 'Startup Pitch Day 2026',
      date: 'May 25, 2026',
      location: 'TBI Innovation Hub',
      attendees: '100+',
      type: 'Pitch Event',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Tech Founders Meetup',
      date: 'June 10, 2026',
      location: 'Virtual',
      attendees: '200+',
      type: 'Networking',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Innovation Workshop Series',
      date: 'June 20, 2026',
      location: 'TBI Campus',
      attendees: '75+',
      type: 'Workshop',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Incubator Award 2025',
      description: 'Recognized as the leading technology incubator in the region',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: '500+ Entrepreneurs Trained',
      description: 'Successfully mentored and guided over 500 aspiring entrepreneurs',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Trophy,
      title: 'Innovation Excellence',
      description: 'Awarded for fostering innovation and technological advancement',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Events & Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Stay Connected{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              With Innovation
            </span>
          </h2>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className={`w-full h-40 bg-gradient-to-br ${event.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                    {event.type}
                  </span>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-4">{event.title}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} Expected
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:border-yellow-500/30 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-3">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
