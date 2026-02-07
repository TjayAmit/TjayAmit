"use client";

export default function AdditionalProjectsSection() {
  return (
      <section id="side-projects" className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
              Additional Projects & Side Work
            </h2>
            <p className="mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Personal, freelance, and experimental projects that complement my professional experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Column 1 */}
            <div className="space-y-14">
              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Personal Finance Dashboard
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    React · Node.js · PostgreSQL
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Self-hosted budgeting and expense tracking tool with bank account synchronization, category analysis, and monthly visualization reports.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Local Job Portal (Zamboanga)
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Laravel · Inertia.js · MySQL
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Regional job listing platform built for local businesses and job seekers in Zamboanga — part-time side project.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Small Business CRM Mobile App
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Flutter · Firebase
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Mobile-first customer relationship management tool created for local small businesses (freelance / part-time work).
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-14">
              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    GraphQL Federation Layer Experiment
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Node.js · Apollo Federation
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Explored combining multiple backend services into a unified GraphQL API gateway — personal learning project.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Serverless Background Scheduler
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    FastAPI · AWS Lambda
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Cron-style task scheduler for delayed and recurring background jobs — built to deepen understanding of serverless workflows.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Real-time Chat Prototype
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Next.js · WebSockets · Redis
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Learning project exploring real-time features, Socket.IO integration, and Redis pub/sub pattern.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20 md:mt-28">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interested in discussing similar projects or opportunities?
            </p>

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