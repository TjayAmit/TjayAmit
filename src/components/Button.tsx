"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "flex items-center justify-center rounded-3xl font-semibold transition duration-300 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-teal-light text-navy hover:bg-teal-light/90 dark:bg-teal-light dark:text-navy dark:hover:bg-teal-light/90",
    secondary: "bg-teal text-cream hover:bg-teal-dark dark:bg-teal dark:text-cream dark:hover:bg-teal-dark",
    outline: "bg-transparent border border-teal text-teal hover:bg-teal/10 dark:border-teal-light dark:text-teal-light dark:hover:bg-teal-light/10",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";
  const sizeClasses = "h-10 px-6 text-lg";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${disabled ? disabledClasses : ''} ${className}`}
    >
      {children}
    </button>
  );
}
