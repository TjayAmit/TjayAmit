import Navbar from '@/components/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import IntroductionSection from '@/components/sections/IntroductionSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream dark:bg-navy">
      <Navbar />
      <div className="pt-16">
        <IntroductionSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}