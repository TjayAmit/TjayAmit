"use client";

import { useState, useEffect } from 'react';

export default function IntroductionSection() {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        // Typing duration (~2 seconds for "Software Developer")
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-gray-50 dark:bg-gray-950">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12">
                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tristan Jay
          </span>
                </h1>

                {/* Typing Role – only "Software Developer" */}
                <div className="h-16 flex items-center justify-center">
                    <p
                        className={`text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200 typing-text ${
                            isTypingComplete ? 'complete' : ''
                        }`}
                    >
                        Software Developer
                    </p>
                </div>

                {/* Bio – static, no typing */}
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Experienced software developer specializing in production-ready backend systems with Laravel and PHP.
                        Capable of delivering full-stack applications as needed.
                    </p>
                </div>

                {/* CTA Buttons */}
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

                {/* Social Links */}
                <div className="flex gap-6 justify-center pt-10">
                    {[
                        { name: 'GitHub', url: 'https://github.com/yourusername' },
                        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                        { name: 'Twitter', url: 'https://twitter.com/yourusername' },
                        { name: 'Email', url: 'mailto:your.email@example.com' },
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.name !== 'Email' ? '_blank' : undefined}
                            rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                            aria-label={social.name}
                        >
                            {social.name === 'GitHub' && (
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            )}
                            {social.name === 'LinkedIn' && (
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            )}
                            {social.name === 'Twitter' && (
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            )}
                            {social.name === 'Email' && (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            {/* Minimal scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            {/* Typing animation CSS – applied only to role */}
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
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: #4f46e5; }
                }
            `}</style>
        </section>
    );
}