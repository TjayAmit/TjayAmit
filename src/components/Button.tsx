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
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  const sizeClasses = "h-10 px-6 text-lg";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}
