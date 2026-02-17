"use client";

import { useEffect, useState } from 'react';
import SocialLinks from '@/components/ui/SocialLinks';
import { PROFILE, SOCIAL_LINKS } from '@/data/portfolio';

export default function IntroductionSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTypingComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {PROFILE.fullName}
          </span>
        </h1>

        <div className="h-16 flex items-center justify-center">
          <p
            className={`text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200 typing-text ${
              isTypingComplete ? 'complete' : ''
            }`}
          >
            {PROFILE.role}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">{PROFILE.summary}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            View My Work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        <SocialLinks items={SOCIAL_LINKS} iconClassName="w-7 h-7" className="flex gap-6 justify-center pt-10" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600">
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        .typing-text {
          overflow: hidden;
          display: inline-block;
          white-space: nowrap;
          border-right: 3px solid #4f46e5;
          animation: typing 2s steps(18) forwards, blink-caret 0.75s step-end infinite;
        }

        .typing-text.complete {
          border-right-color: transparent;
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
