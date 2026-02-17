"use client";

import { useState } from 'react';
import SocialLinks from '@/components/ui/SocialLinks';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/portfolio';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo = [
    { title: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}`, icon: 'email' },
    { title: 'Phone', value: CONTACT_INFO.phone, link: 'tel:+639123456789', icon: 'phone' },
    { title: 'Location', value: CONTACT_INFO.location, link: null, icon: 'location' },
    { title: 'Response Time', value: CONTACT_INFO.responseTime, link: null, icon: 'clock' },
  ] as const;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message should be at least 20 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setSubmitStatus('success');
      setFormData(initialFormState);
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Open to new opportunities, collaborations, or a good technical conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-12">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether this is a project idea, job opportunity, or technical question, feel free to reach out. I usually respond within 24 hours on weekdays.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-gray-700 dark:text-gray-300">
                    <ContactIcon kind={info.icon} />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-5">Connect Online</h4>
              <SocialLinks items={SOCIAL_LINKS.filter((item) => item.platform !== 'email')} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-lg border bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-lg border bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
                  placeholder="e.g. Project Discussion, Opportunity, Question"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-5 py-3 rounded-lg border bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-y min-h-[140px] ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500'
                  }`}
                  placeholder="Please describe your project, question, or opportunity..."
                />
                {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-5 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-300">Message sent successfully</p>
                    <p className="text-sm text-green-700 dark:text-green-400">Thank you. I will get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-800 dark:text-red-300">Failed to send message</p>
                    <p className="text-sm text-red-700 dark:text-red-400">Please try again or email me directly.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ kind }: { kind: 'email' | 'phone' | 'location' | 'clock' }) {
  if (kind === 'email') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }

  if (kind === 'phone') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    );
  }

  if (kind === 'location') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }

  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
