"use client";

import { useEffect, useRef, useState } from "react";
import HeroPortrait from "@/components/customs/HeroPortrait";
import IntroductionPanel from "@/components/customs/IntroductionPanel";
import { PROFILE } from "@/data/portfolio";
import { INTRODUCTION_ABOUT, INTRODUCTION_TECH_STACK } from "@/data/introduction";

export default function IntroductionSection() {
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const [aboutRevealProgress, setAboutRevealProgress] = useState(0);
	const sectionRef = useRef<HTMLElement | null>(null);
	const contentScrollRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsTypingComplete(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const sectionEl = sectionRef.current;
		const scrollEl = contentScrollRef.current;
		if (!sectionEl || !scrollEl) return;

		const onWheel = (event: WheelEvent) => {
			const rect = sectionEl.getBoundingClientRect();
			const sectionActive =
				rect.top <= 80 && rect.bottom >= window.innerHeight - 80;
			if (!sectionActive) return;

			const atTop = scrollEl.scrollTop <= 0;
			const atBottom =
				Math.ceil(scrollEl.scrollTop + scrollEl.clientHeight) >=
				scrollEl.scrollHeight;
			const scrollingDown = event.deltaY > 0;
			const scrollingUp = event.deltaY < 0;
			const shouldConsume =
				(scrollingDown && !atBottom) || (scrollingUp && !atTop);

			if (shouldConsume) {
				event.preventDefault();
				scrollEl.scrollTop += event.deltaY;
			}
		};

		sectionEl.addEventListener("wheel", onWheel, { passive: false });
		return () => sectionEl.removeEventListener("wheel", onWheel);
	}, []);

	useEffect(() => {
		const scrollEl = contentScrollRef.current;
		if (!scrollEl) return;

		const onPanelScroll = () => {
			const maxScrollable = Math.max(
				1,
				scrollEl.scrollHeight - scrollEl.clientHeight,
			);
			const revealStart = Math.max(16, maxScrollable * 0.08);
			const revealDistance = Math.max(420, maxScrollable * 0.7);
			const nextProgress = Math.max(
				0,
				Math.min(1, (scrollEl.scrollTop - revealStart) / revealDistance),
			);
			setAboutRevealProgress(nextProgress);
		};

		onPanelScroll();
		scrollEl.addEventListener("scroll", onPanelScroll, { passive: true });
		return () => scrollEl.removeEventListener("scroll", onPanelScroll);
	}, []);

	return (
		<section
			ref={sectionRef}
			id="introduction"
			className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-gray-50 dark:bg-gray-950"
		>
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto w-full">
				<div className="relative">
					<div className="relative z-20 flex justify-center mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-8">
						<HeroPortrait />
					</div>

					<div
						ref={contentScrollRef}
						className="max-h-[76vh] overflow-y-auto no-scrollbar pr-1 sm:pr-2 lg:pl-[20rem] xl:pl-[25.5rem] lg:pt-20"
					>
						<IntroductionPanel
							isTypingComplete={isTypingComplete}
							revealProgress={aboutRevealProgress}
							role={PROFILE.role}
							summary={PROFILE.summary}
							aboutTitle={INTRODUCTION_ABOUT.title}
							aboutParagraphs={INTRODUCTION_ABOUT.paragraphs}
							techTitle={INTRODUCTION_ABOUT.techTitle}
							techStack={INTRODUCTION_TECH_STACK}
						/>
					</div>
				</div>
			</div>

			<style jsx>{`
				.typing-text {
					overflow: hidden;
					display: inline-block;
					white-space: nowrap;
					border-right: 3px solid #4f46e5;
					animation:
						typing 2s steps(18) forwards,
						blink-caret 0.75s step-end infinite;
				}

				.typing-text.complete {
					border-right-color: transparent;
				}

				.no-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}

				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}

				@keyframes typing {
					from {
						width: 0;
					}
					to {
						width: 100%;
					}
				}

				@keyframes blink-caret {
					from,
					to {
						border-color: transparent;
					}
					50% {
						border-color: #4f46e5;
					}
				}
			`}</style>
		</section>
	);
}
