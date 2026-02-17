export interface TechStackItem {
	key: "laravel" | "fastapi" | "typescript" | "flutter" | "react" | "node" | "socket";
	label: string;
	colorClass: string;
}

export const INTRODUCTION_ABOUT = {
	title: "About Me",
	paragraphs: [
		"My journey in technology started from curiosity in 2017. I began by building small projects, and over time that curiosity became a serious, long-term passion for software development.",
		"I had the privilege of working at Zamboanga City Medical Center, where I delivered their first server deployment and built a deployment environment for project releases. I also mentored teammates and guided the team on practical implementation and delivery workflows.",
		"My main focus remains building reliable products like telemedicine systems that help connect underserved remote areas and extend hospital services.",
	],
	techTitle: "Tech stack:",
};

export const INTRODUCTION_TECH_STACK: TechStackItem[] = [
	{ key: "laravel", label: "Laravel", colorClass: "text-[#FF2D20]" },
	{ key: "fastapi", label: "FastAPI", colorClass: "text-[#009688]" },
	{ key: "typescript", label: "TypeScript", colorClass: "text-[#3178C6]" },
	{ key: "flutter", label: "Flutter", colorClass: "text-[#02569B]" },
	{ key: "react", label: "React.js", colorClass: "text-[#61DAFB]" },
	{ key: "node", label: "Node.js", colorClass: "text-[#5FA04E]" },
	{ key: "socket", label: "Socket", colorClass: "text-[#010101] dark:text-white" },
];
