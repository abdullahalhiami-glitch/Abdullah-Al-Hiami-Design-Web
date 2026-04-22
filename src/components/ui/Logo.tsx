import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = true }: LogoProps) {
  // A sleek hover effect framing your uploaded logo
  return (
    <div className={cn("flex items-center gap-3 group relative cursor-pointer", className)}>
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
        {/*
          To use your exact uploaded logos:
          1. Create a folder named "public" in the root directory (if it doesn't exist).
          2. Drag and drop your uploaded logos into that folder using the file explorer.
          3. Rename the white-on-black one to "logo-white.png"
          4. Rename the black-on-white one to "logo-black.png"
        */}
        <img 
           src={light ? "/logo-white.png" : "/logo-black.png"} 
           alt="AHD Logo"
           className="w-full h-full object-cover z-10"
           onError={(e) => {
             // Fallback to our generated SVG if the user hasn't dropped the files in yet
             (e.currentTarget as HTMLImageElement).style.display = 'none';
             e.currentTarget.nextElementSibling?.classList.remove('hidden');
           }}
        />
        {/* Fallback SVG just in case the files aren't uploaded yet */}
        <div className="hidden absolute inset-0 w-full h-full border-[1.5px] border-current rounded-full p-2">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 10 L25 80 M50 10 L75 80 M35 55 L65 55" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
            <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="8" />
            <path d="M50 10 V90" stroke="currentColor" strokeWidth="8" />
            <path d="M75 20 C90 30 95 60 75 80" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
      </div>
      <span className={cn("font-display font-bold text-xl tracking-tight uppercase", light ? "text-white" : "text-black")}>
        AHD<span className="text-brand">.</span>
      </span>
    </div>
  );
}
