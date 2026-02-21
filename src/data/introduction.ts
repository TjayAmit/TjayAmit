export interface TechStackItem {
	key:
		| "laravel"
		| "php"
		| "typescript"
		| "fastapi"
		| "python"
		| "react"
		| "javascript"
		| "flutter"
		| "dart";
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
	{ key: "php", label: "PHP", colorClass: "text-[#777BB4]" },
	{ key: "typescript", label: "TypeScript", colorClass: "text-[#3178C6]" },
	{ key: "fastapi", label: "FastAPI", colorClass: "text-[#009688]" },
	{ key: "python", label: "Python", colorClass: "text-[#3776AB]" },
	{ key: "react", label: "React.js", colorClass: "text-[#61DAFB]" },
	{ key: "javascript", label: "JavaScript", colorClass: "text-[#F7DF1E]" },
	{ key: "fastapi", label: "FastAPI", colorClass: "text-[#009688]" },
	{ key: "flutter", label: "Flutter", colorClass: "text-[#02569B]" },
	{ key: "dart", label: "Dart", colorClass: "text-[#0175C2]" },
];
