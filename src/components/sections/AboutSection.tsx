"use client";

import { useState } from "react";
import NextImage from "next/image";
import profile from "@/assets/profile.jpeg";
import { ABOUT_SKILLS, ABOUT_SOFT_SKILLS, EXPERIENCES } from "@/data/portfolio";

export default function AboutSection() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<section id="about" className="py-24 md:py-32 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">
						About Me
					</h2>
					<p className="mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Experienced software developer focused on delivering reliable,
						production-ready systems with strong backend depth and full-stack
						capability.
					</p>
				</div>

				<div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
					<div className="lg:col-span-5 flex justify-center lg:justify-start">
						<div className="relative max-w-xs md:max-w-sm lg:max-w-md group">
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
							<NextImage
								src={profile}
								alt="Tristan Jay - Software Engineer"
								width={520}
								height={520}
								className="w-full aspect-square object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-indigo-500/20"
								priority
							/>
						</div>
					</div>

					<div className="lg:col-span-7 space-y-14">
						<div>
							<div className="flex flex-wrap gap-3 border-b border-gray-200 dark:border-gray-800 pb-4 mb-8">
								{[
									{ id: "overview", label: "Skills" },
									{ id: "experience", label: "Experience" },
									{ id: "soft-skills", label: "Soft Skills" },
								].map((tab) => (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`px-6 py-3 text-base font-medium transition-all duration-200 border-b-2 ${
											activeTab === tab.id
												? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold"
												: "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-700"
										}`}
									>
										{tab.label}
									</button>
								))}
							</div>

							<div className="max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible smooth-scroll px-1">
								{activeTab === "overview" && (
									<div className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
										{ABOUT_SKILLS.map((item) => (
											<p key={item}>{item}</p>
										))}
									</div>
								)}

								{activeTab === "experience" && (
									<div className="space-y-14">
										{EXPERIENCES.map((exp) => (
											<div
												key={`${exp.role}-${exp.company}`}
												className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
											>
												<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
												<div>
													<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
														{exp.role}
													</h4>
													<div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm mb-4">
														<p className="font-medium text-indigo-600 dark:text-indigo-400">
															{exp.company}
														</p>
														<p className="text-gray-500 dark:text-gray-400">
															{exp.period}
														</p>
													</div>
													<ul className="space-y-3 text-gray-700 dark:text-gray-300">
														{exp.achievements.map((achievement) => (
															<li
																key={achievement}
																className="flex items-start"
															>
																<span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
																{achievement}
															</li>
														))}
													</ul>
												</div>
											</div>
										))}
									</div>
								)}

								{activeTab === "soft-skills" && (
									<div className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
										{ABOUT_SOFT_SKILLS.map((skill) => (
											<p key={skill}>{skill}</p>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
