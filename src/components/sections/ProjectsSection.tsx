"use client";

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
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
      liveUrl: null,
      githubUrl: "https://github.com/yourusername/task-api",
      metrics: {
        coverage: "95%",
        uptime: "99.9%",
      },
    },
    // Add more real projects here...
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
      <section id="projects" className="py-20 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of recent work showcasing full-stack development, clean architecture, and real-world impact.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                        activeFilter === category.id
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  {category.label}
                </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
                <article
                    key={project.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-700 h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm md:text-base leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                        <div className="flex flex-wrap gap-4 mb-5 text-xs md:text-sm">
                          {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="capitalize font-medium">{key}:</span>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">{value}</span>
                              </div>
                          ))}
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                          <span
                              key={tag}
                              className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-100 dark:border-indigo-800/50"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      {project.liveUrl && (
                          <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                      )}

                      {project.githubUrl && (
                          <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 flex items-center justify-center gap-2 ${
                                  project.liveUrl
                                      ? 'bg-gray-800 hover:bg-gray-900 text-white'
                                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                              } px-5 py-2.5 rounded-lg font-medium transition-colors text-sm`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                              />
                            </svg>
                            Source Code
                          </a>
                      )}
                    </div>
                  </div>
                </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  No projects found in this category yet.
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-500">
                  Try selecting a different filter or check back soon!
                </p>
              </div>
          )}

          {/* CTA */}
          <div className="text-center mt-16 md:mt-20">
            <a
                href="https://github.com/yourusername?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              View All Projects on GitHub
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
  );
}