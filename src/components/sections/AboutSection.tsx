"use client";

import { useState } from 'react';
import profile from '@/assets/profile.jpeg';
import Image from '@/components/Image';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('overview');

  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Healthcare Technology Company',
      period: '2022 – Present',
      achievements: [
        'Led end-to-end development of a telemedicine platform serving 10,000+ monthly active users',
        'Designed hospital-to-hospital patient transfer navigation system, reducing transfer time by ~40%',
        'Mentored 5+ junior developers and established code review & testing standards',
        'Optimized backend services, improving response time under high load by 55%',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Agency',
      period: '2020 – 2022',
      achievements: [
        'Architected secure authentication & authorization system handling 50k+ daily requests',
        'Reduced average page load time by 60% through performance optimization & caching strategies',
        'Implemented automated CI/CD pipelines, cutting deployment time from hours to minutes',
        'Delivered 15+ client projects on time with high satisfaction ratings',
      ],
    },
  ];

  return (
      <section id="about" className="py-24 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">
              About Me
            </h2>
            <p className="mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experienced software developer focused on delivering reliable, production-ready systems — strong in backend with full-stack capability.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative max-w-xs md:max-w-sm lg:max-w-md group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                <Image
                    src={profile}
                    alt="Tristan Jay – Software Engineer"
                    width={520}
                    height={520}
                    className="w-full aspect-square object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-indigo-500/20"
                    priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-14">
              {/* Tabs Navigation */}
              <div>
                <div className="flex flex-wrap gap-3 border-b border-gray-200 dark:border-gray-800 pb-4 mb-8">
                  {[
                    { id: 'overview', label: 'Skills' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'soft-skills', label: 'Soft Skills' },
                  ].map((tab) => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`px-6 py-3 text-base font-medium transition-all duration-200 border-b-2 ${
                              activeTab === tab.id
                                  ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-700'
                          }`}
                      >
                        {tab.label}
                      </button>
                  ))}
                </div>

                {/* Tab Content – scrollable on small screens */}
                <div className="max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible smooth-scroll px-1">
                  {activeTab === 'overview' && (
                      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>
                          Experienced backend developer specializing in production-ready systems with Laravel and PHP.
                        </p>

                        <p>
                          Capable of delivering full-stack applications as needed.
                        </p>

                        <p>
                          Regularly work with Node.js, REST APIs, MySQL, PostgreSQL, Redis, secure authentication patterns, and performance optimization.
                        </p>

                        <p>
                          Comfortable delivering modern frontend with JavaScript/TypeScript, React, Next.js, Tailwind CSS, and cross-platform mobile apps with Flutter.
                        </p>

                        <p>
                          Solid hands-on experience deploying and managing applications on cloud VPS and Ubuntu servers.
                        </p>

                        <p>
                          Working knowledge of Docker, CI/CD (GitHub Actions), and Linux administration — supporting tools rather than primary daily focus.
                        </p>
                      </div>
                  )}

                  {activeTab === 'experience' && (
                      <div className="space-y-14">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
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
                                  {exp.achievements.map((ach, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                                        {ach}
                                      </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                        ))}
                      </div>
                  )}

                  {activeTab === 'soft-skills' && (
                      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>
                          <strong>Strong communicator</strong> — I explain technical concepts clearly, write precise documentation, and keep stakeholders aligned.
                        </p>

                        <p>
                          <strong>Effective problem solver</strong> — I approach complex challenges logically and consistently find practical, maintainable solutions.
                        </p>

                        <p>
                          <strong>Highly adaptable</strong> — I quickly learn new tools, frameworks, and domains when the project demands it.
                        </p>

                        <p>
                          <strong>Collaborative team player</strong> — experienced delivering value in agile environments alongside cross-functional teams.
                        </p>

                        <p>
                          <strong>Active mentor</strong> — I enjoy guiding junior developers, giving constructive code reviews, and helping the team grow.
                        </p>

                        <p>
                          <strong>High ownership</strong> — I take full responsibility for features, projects, and outcomes from planning through delivery.
                        </p>
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