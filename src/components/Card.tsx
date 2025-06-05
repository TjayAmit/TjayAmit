"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true 
}: CardProps) {
  return (
    <div 
      className={`
        rounded-xl p-6 
        bg-white/10 backdrop-blur-md 
        border border-white/10 
        ${hoverEffect ? "hover:bg-white/20 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
