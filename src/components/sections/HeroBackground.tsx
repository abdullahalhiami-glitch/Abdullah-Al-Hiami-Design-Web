import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Normalized mouse position (-1 to 1) for SVG parallax
  const mouseNX = useMotionValue(0);
  const mouseNY = useMotionValue(0);
  const smoothNX = useSpring(mouseNX, { damping: 40, stiffness: 100, mass: 1 });
  const smoothNY = useSpring(mouseNY, { damping: 40, stiffness: 100, mass: 1 });

  // Absolute mouse position for the ambient glow tracker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const glowY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Parallax transform bindings
  const parallaxX = useTransform(smoothNX, [-1, 1], [-50, 50]);
  const parallaxY = useTransform(smoothNY, [-1, 1], [-50, 50]);
  const rotateY = useTransform(smoothNX, [-1, 1], [-15, 15]);
  const rotateX = useTransform(smoothNY, [-1, 1], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set absolute pixels (centered anchor)
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);

      // Set normalized values
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseNX.set(nx);
      mouseNY.set(ny);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A1210] via-bg to-bg"></div>
      
      {/* Precision cursor glow tracking the mouse exactly */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -ml-[300px] -mt-[300px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,163,0.12) 0%, rgba(0,0,0,0) 60%)',
          x: glowX,
          y: glowY
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.9]">
        <motion.svg
          viewBox="0 0 1000 1000"
          className="w-full h-full max-w-[120vw] min-w-[100vw] object-cover origin-center"
          preserveAspectRatio="xMidYMid slice"
          style={{ x: parallaxX, y: parallaxY }}
        >
          <defs>
            <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00B8FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00FFA3" stopOpacity="0.8" />
            </linearGradient>
            
            <filter id="neon-glow" x="-20%" y="-20%" w="140%" h="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            <filter id="heavy-blur" x="-50%" y="-50%" w="200%" h="200%">
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>

          {/* Abstract deep blurred background blob */}
          <motion.circle
            cx="500"
            cy="500"
            r="300"
            fill="url(#neon-grad)"
            filter="url(#heavy-blur)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Interactive Wireframe Rings */}
          <motion.g filter="url(#neon-glow)" style={{ rotateX, rotateY }}>
            {Array.from({ length: 14 }).map((_, i) => {
              const radius = 150 + i * 25;
              const opacity = Math.max(0.1, 1 - (i / 15));
              const strokeWidth = 0.5 + (Math.sin(i) * 0.5); 

              return (
                <motion.ellipse
                  key={i}
                  cx="500"
                  cy="500"
                  rx={radius}
                  ry={radius * 0.3}
                  fill="none"
                  stroke="url(#neon-grad)"
                  strokeWidth={strokeWidth}
                  strokeOpacity={opacity}
                  initial={{ rotateZ: 0 }}
                  animate={{ rotateZ: 360 }}
                  transition={{
                     duration: 60 + i * 5,
                     repeat: Infinity,
                     ease: "linear",
                     direction: i % 2 === 0 ? "normal" : "reverse"
                  }}
                />
              );
            })}
          </motion.g>
          
          {/* Constellation / Tech Nodes Effect */}
          <motion.g style={{ x: parallaxX, y: parallaxY }}>
             {Array.from({ length: 30 }).map((_, i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={100 + Math.random() * 800}
                  cy={100 + Math.random() * 800}
                  r={Math.random() > 0.8 ? 2 : 1}
                  fill="#00FFA3"
                  initial={{ opacity: Math.random() * 0.5 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ 
                    duration: 2 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: Math.random() * 2 
                  }}
                />
             ))}
          </motion.g>
        </motion.svg>
      </div>
    </div>
  );
}
