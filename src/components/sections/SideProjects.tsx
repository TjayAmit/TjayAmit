"use client";

import { SIDE_PROJECTS } from '@/data/portfolio';

export default function AdditionalProjectsSection() {
  const firstColumn = SIDE_PROJECTS.slice(0, 3);
  const secondColumn = SIDE_PROJECTS.slice(3);

  return (
    <section id="side-projects" className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">Additional Projects & Side Work</h2>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Personal, freelance, and experimental projects that complement my professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-14">
            {firstColumn.map((project) => (
              <SideProjectTimelineItem key={project.title} {...project} />
            ))}
          </div>

          <div className="space-y-14">
            {secondColumn.map((project) => (
              <SideProjectTimelineItem key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-20 md:mt-28">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Interested in discussing similar projects or opportunities?</p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
            >
              View Main Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SideProjectTimelineItemProps {
  title: string;
  stack: string;
  description: string;
}

function SideProjectTimelineItem({ title, stack, description }: SideProjectTimelineItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
      <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{stack}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
