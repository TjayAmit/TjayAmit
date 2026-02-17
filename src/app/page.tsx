import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SideProjects from "@/components/sections/SideProjects";
import ContactSection from "@/components/sections/ContactSection";
import IntroductionSection from "@/components/sections/IntroductionSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-cream dark:bg-navy">
			<Navbar />
			<div className="pt-16">
				<IntroductionSection />
				<ProjectsSection />
				<SideProjects />
				<ContactSection />
			</div>
		</main>
	);
}
