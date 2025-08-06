import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { PainPointsSection } from '../components/sections/PainPointsSection';
import { SolutionSection } from '../components/sections/SolutionSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { WaitlistSection } from '../components/sections/WaitlistSection';

/**
 * Main landing page for Primr Events
 * Features a compelling story-driven structure to drive waitlist conversions
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
