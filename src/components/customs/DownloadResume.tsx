"use client";

import { useState } from "react";
import { RESUME } from "@/data/portfolio";

interface DownloadResumeProps {
	variant?: "desktop" | "mobile";
}

export default function DownloadResume({
	variant = "desktop",
}: DownloadResumeProps) {
	const [loading, setLoading] = useState(false);

	const downloadResume = () => {
		setLoading(true);
		const link = document.createElement("a");
		link.href = RESUME.path;
		link.download = RESUME.filename;
		link.click();
		setTimeout(() => setLoading(false), 800);
	};

	if (variant === "mobile") {
		return (
			<button
				onClick={downloadResume}
				disabled={loading}
				className="w-full px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
			>
				{loading ? (
					<>
						<LoadingIcon className="h-5 w-5" />
						Loading...
					</>
				) : (
					<>
						<ResumeIcon className="w-5 h-5" />
						Download Resume
					</>
				)}
			</button>
		);
	}

	return (
		<button
			onClick={downloadResume}
			disabled={loading}
			className="px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
		>
			<span className="flex items-center gap-2">
				{loading ? (
					<>
						<LoadingIcon className="h-4 w-4" />
						Loading...
					</>
				) : (
					<>
						<ResumeIcon className="w-4 h-4" />
						Resume
					</>
				)}
			</span>
		</button>
	);
}

function LoadingIcon({ className }: { className: string }) {
	return (
		<svg
			className={`animate-spin ${className}`}
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	);
}

function ResumeIcon({ className }: { className: string }) {
	return (
		<svg
			className={className}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
			/>
		</svg>
	);
}
