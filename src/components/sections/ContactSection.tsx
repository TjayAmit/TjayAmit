"use client";

import { useState } from "react";
import { PROFILE } from "@/data/portfolio";

interface ContactFormState {
	email: string;
	message: string;
}

const initialFormState: ContactFormState = {
	email: "",
	message: "",
};

export default function ContactSection() {
	const [formData, setFormData] = useState<ContactFormState>(initialFormState);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
		null,
	);

	const validateForm = () => {
		const nextErrors: Record<string, string> = {};

		if (!formData.email.trim()) nextErrors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(formData.email))
			nextErrors.email = "Please enter a valid email";

		if (!formData.message.trim()) nextErrors.message = "Message is required";
		else if (formData.message.trim().length < 20)
			nextErrors.message = "Message should be at least 20 characters";

		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (submitStatus) setSubmitStatus(null);

		if (errors[name]) {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[name];
				return next;
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1200));
			setSubmitStatus("success");
			setFormData(initialFormState);
			setTimeout(() => setSubmitStatus(null), 4500);
		} catch (err) {
			console.error("Form submission error:", err);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 backdrop-blur-md overflow-hidden">
					<div className="grid lg:grid-cols-2">
						<div className="p-7 md:p-10 lg:p-12 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
							<p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/85 mb-4">
								Contact
							</p>
							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Bringing your ideas to life.
							</h2>
							<p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-md">
								Let&apos;s turn your vision into reality.
							</p>
						</div>

						<div className="p-7 md:p-10 lg:p-12">
							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Email Address *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/35 transition-all ${
											errors.email
												? "border-red-500 focus:border-red-500"
												: "border-gray-300 dark:border-gray-700 focus:border-indigo-500"
										}`}
										placeholder="your.email@example.com"
									/>
									{errors.email && (
										<p className="mt-1.5 text-sm text-red-600">
											{errors.email}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={5}
										className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/35 transition-all resize-y min-h-[130px] ${
											errors.message
												? "border-red-500 focus:border-red-500"
												: "border-gray-300 dark:border-gray-700 focus:border-indigo-500"
										}`}
										placeholder="Tell me what you want to build."
									/>
									{errors.message && (
										<p className="mt-1.5 text-sm text-red-600">
											{errors.message}
										</p>
									)}
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
										isSubmitting
											? "bg-gray-400 text-gray-700 cursor-not-allowed"
											: "bg-indigo-600 hover:bg-indigo-500 text-white"
									}`}
								>
									{isSubmitting ? "Sending..." : "Send Message"}
								</button>

								{submitStatus === "success" && (
									<p className="text-sm text-green-700 dark:text-green-400">
										Message sent successfully. I&apos;ll get back to you soon.
									</p>
								)}
								{submitStatus === "error" && (
									<p className="text-sm text-red-700 dark:text-red-400">
										Failed to send message. Please try again.
									</p>
								)}
							</form>
						</div>
					</div>
				</div>

				<div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
					<p>Developed by {PROFILE.fullName}</p>
					<p className="md:text-right">
						Tools: Next.js, TypeScript, Tailwind CSS | @2026 All rights
						reserved.
					</p>
				</div>
			</div>
		</section>
	);
}
