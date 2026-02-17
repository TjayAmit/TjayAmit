"use client";

import NextImage from "next/image";
import profile from "@/assets/profile_no_bg.png";
import arrow from "@/assets/images/arrow.png";
import { PROFILE } from "@/data/portfolio";

export default function HeroPortrait() {
	return (
		<div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]">
			<div className="absolute -inset-8 rounded-full bg-indigo-500/25 blur-3xl" />
			<div className="absolute -inset-10 rounded-full bg-purple-500/20 blur-3xl" />
			<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,rgba(99,102,241,0.12)_45%,rgba(0,0,0,0)_75%)] dark:bg-[radial-gradient(circle,rgba(30,41,59,0.4)_0%,rgba(99,102,241,0.18)_45%,rgba(0,0,0,0)_75%)]" />

			<div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 lg:-top-4 lg:-right-6 z-30 pointer-events-none">
				<NextImage
					src={arrow}
					alt="Arrow pointing to profile"
					width={200}
					height={180}
					className="w-28 h-20 sm:w-32 sm:h-24 lg:w-40 lg:h-28 object-contain [image-rendering:pixelated]"
					priority
				/>
				<div className="absolute sm:-right-36 sm:top-16 lg:-right-20 lg:top-5 text-md font-semibold whitespace-nowrap">
					<span className="text-white">Hi, I am </span>
					<span className="text-indigo-600 dark:text-indigo-400">Tristan</span>
				</div>
			</div>

			<div className="relative z-10 w-full h-full rounded-full overflow-hidden">
				<NextImage
					src={profile}
					alt={`${PROFILE.fullName} profile photo`}
					fill
					priority
					className="relative object-contain scale-110"
				/>
			</div>
		</div>
	);
}
