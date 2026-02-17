export type SocialPlatform = "github" | "linkedin" | "x" | "email";

export interface SocialLink {
	name: string;
	url: string;
	platform: SocialPlatform;
}

export interface NavItem {
	name: string;
	href: string;
}

export interface Experience {
	role: string;
	company: string;
	period: string;
	achievements: string[];
}

export interface ProjectMetrics {
	[key: string]: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	category: "fullstack" | "frontend" | "backend";
	image?: string;
	liveUrl?: string;
	githubUrl?: string;
	metrics?: ProjectMetrics;
}

export const PROFILE = {
	fullName: "Tristan Jay",
	shortName: "Tjay",
	role: "Software Developer",
	summary:
		"Experienced software developer specializing in production-ready backend systems with Laravel and PHP. Capable of delivering full-stack applications as needed.",
};

export const NAV_ITEMS: NavItem[] = [
	{ name: "About", href: "about" },
	{ name: "Projects", href: "projects" },
	{ name: "Side Projects", href: "side-projects" },
	{ name: "Contact", href: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/yourusername",
		platform: "github",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/yourusername",
		platform: "linkedin",
	},
	{ name: "Twitter", url: "https://twitter.com/yourusername", platform: "x" },
	{ name: "Email", url: "mailto:your.email@example.com", platform: "email" },
];

export const ABOUT_SKILLS = [
	"Experienced backend developer specializing in production-ready systems with Laravel and PHP.",
	"Capable of delivering full-stack applications as needed.",
	"Regularly work with Node.js, REST APIs, MySQL, PostgreSQL, Redis, secure authentication patterns, and performance optimization.",
	"Comfortable delivering modern frontend with JavaScript/TypeScript, React, Next.js, Tailwind CSS, and cross-platform mobile apps with Flutter.",
	"Solid hands-on experience deploying and managing applications on cloud VPS and Ubuntu servers.",
	"Working knowledge of Docker, CI/CD (GitHub Actions), and Linux administration as supporting tools rather than primary daily focus.",
];

export const ABOUT_SOFT_SKILLS = [
	"Strong communicator: explain technical concepts clearly, write precise documentation, and keep stakeholders aligned.",
	"Effective problem solver: approach complex challenges logically and find practical, maintainable solutions.",
	"Highly adaptable: quickly learn new tools, frameworks, and domains when projects demand it.",
	"Collaborative team player: experienced delivering value in agile environments with cross-functional teams.",
	"Active mentor: guide junior developers through constructive code reviews and growth plans.",
	"High ownership: take responsibility for features and outcomes from planning through delivery.",
];

export const EXPERIENCES: Experience[] = [
	{
		role: "Senior Software Engineer",
		company: "Healthcare Technology Company",
		period: "2022 - Present",
		achievements: [
			"Led end-to-end development of a telemedicine platform serving 10,000+ monthly active users.",
			"Designed a hospital-to-hospital patient transfer navigation system, reducing transfer time by about 40%.",
			"Mentored 5+ junior developers and established code review and testing standards.",
			"Optimized backend services, improving response time under high load by 55%.",
		],
	},
	{
		role: "Full-Stack Developer",
		company: "Digital Solutions Agency",
		period: "2020 - 2022",
		achievements: [
			"Architected secure authentication and authorization system handling 50k+ daily requests.",
			"Reduced average page load time by 60% through performance optimization and caching strategies.",
			"Implemented automated CI/CD pipelines, cutting deployment time from hours to minutes.",
			"Delivered 15+ client projects on time with high satisfaction ratings.",
		],
	},
];

export const PROJECT_CATEGORIES = [
	{ id: "all", label: "All Projects" },
	{ id: "fullstack", label: "Full Stack" },
	{ id: "frontend", label: "Frontend" },
	{ id: "backend", label: "Backend" },
] as const;

export const PROJECTS: Project[] = [
	{
		id: 1,
		title: "E-commerce Platform",
		description:
			"Full-stack e-commerce solution with real-time inventory, secure Stripe payments, admin analytics dashboard, and user-friendly shopping experience.",
		tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
		category: "fullstack",
		image: "/projects/ecommerce.jpg",
		liveUrl: "https://example.com/demo-ecommerce",
		githubUrl: "https://github.com/yourusername/ecommerce-platform",
		metrics: {
			users: "10k+",
			performance: "98/100",
		},
	},
	{
		id: 2,
		title: "Portfolio Website",
		description:
			"Modern, fast, SEO-optimized personal portfolio with dark mode, smooth animations, responsive design, and dynamic content management.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		category: "frontend",
		image: "/projects/portfolio.jpg",
		liveUrl: "https://yourportfolio.com",
		githubUrl: "https://github.com/yourusername/portfolio",
		metrics: {
			lighthouse: "100/100",
			loadTime: "<1s",
		},
	},
	{
		id: 3,
		title: "Task Management API",
		description:
			"Robust RESTful API with JWT authentication, role-based access control, comprehensive test suite, and clean architecture design.",
		tags: ["Node.js", "Express", "PostgreSQL", "Jest", "TypeScript"],
		category: "backend",
		githubUrl: "https://github.com/yourusername/task-api",
		metrics: {
			coverage: "95%",
			uptime: "99.9%",
		},
	},
];

export const SIDE_PROJECTS = [
	{
		title: "Personal Finance Dashboard",
		stack: "React - Node.js - PostgreSQL",
		description:
			"Self-hosted budgeting and expense tracking tool with bank account synchronization, category analysis, and monthly visualization reports.",
	},
	{
		title: "Local Job Portal (Zamboanga)",
		stack: "Laravel - Inertia.js - MySQL",
		description:
			"Regional job listing platform built for local businesses and job seekers in Zamboanga as part-time side work.",
	},
	{
		title: "Small Business CRM Mobile App",
		stack: "Flutter - Firebase",
		description:
			"Mobile-first customer relationship management tool created for local small businesses in freelance engagements.",
	},
	{
		title: "GraphQL Federation Layer Experiment",
		stack: "Node.js - Apollo Federation",
		description:
			"Explored combining multiple backend services into a unified GraphQL API gateway as a personal learning project.",
	},
	{
		title: "Serverless Background Scheduler",
		stack: "FastAPI - AWS Lambda",
		description:
			"Cron-style scheduler for delayed and recurring background jobs, built to deepen serverless workflow knowledge.",
	},
	{
		title: "Real-time Chat Prototype",
		stack: "Next.js - WebSockets - Redis",
		description:
			"Learning project exploring real-time features, Socket.IO integration, and Redis pub/sub patterns.",
	},
];

export const CONTACT_INFO = {
	email: "your.email@example.com",
	phone: "+63 912 345 6789",
	location: "Zamboanga City, Philippines",
	responseTime: "Usually within 24 hours",
};

export const RESUME = {
	path: "/assets/resume.pdf",
	filename: "Tristan_Jay_Resume.pdf",
};
