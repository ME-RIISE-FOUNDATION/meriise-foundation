import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { StatisticsSection } from './components/StatisticsSection';
import { StartupsSection } from './components/StartupsSection';
import { EventsSection } from './components/EventsSection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <StatisticsSection />
      <StartupsSection />
      <EventsSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}