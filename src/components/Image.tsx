"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

interface ImageProps extends NextImageProps {
  containerClassName?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  hoverEffect?: boolean;
}

export default function Image({
  src,
  alt,
  className = "",
  containerClassName = "",
  rounded = "md",
  hoverEffect = false,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName} ${roundedClasses[rounded]}`}>
      <NextImage
        src={src}
        alt={alt}
        className={`
          object-cover transition-all duration-300
          ${roundedClasses[rounded]}
          ${hoverEffect ? "hover:scale-105" : ""}
          ${className}
          ${!isLoaded ? "blur-md" : "blur-0"}
        `}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
