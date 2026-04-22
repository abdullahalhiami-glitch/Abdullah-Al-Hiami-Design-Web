import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = true }: LogoProps) {
  // A sleek geometric representation of AHD intertwined in a circle
  return (
    <div className={cn("flex items-center gap-3 group relative", className)}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-current overflow-hidden transition-transform duration-500 group-hover:scale-110">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-2">
          {/* Abstract A H D */}
          <path d="M50 10 L25 80 M50 10 L75 80 M35 55 L65 55" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
          <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="8" />
          <path d="M50 10 V90" stroke="currentColor" strokeWidth="8" />
          <path d="M75 20 C90 30 95 60 75 80" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
        </svg>
        <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
      </div>
      <span className={cn("font-display font-bold text-xl tracking-tight uppercase", light ? "text-white" : "text-black")}>
        AHD<span className="text-brand">.</span>
      </span>
    </div>
  );
}
