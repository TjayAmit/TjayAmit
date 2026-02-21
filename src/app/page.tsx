import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import IntroductionSection from "@/components/sections/IntroductionSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-cream dark:bg-navy">
			<Navbar />
			<div className="pt-16">
				<IntroductionSection />
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
			</div>
		</main>
	);
}
