import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container px-6 mx-auto">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50' : 'bg-transparent border border-transparent'}`}>
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8">
            {['Work', 'Expertise', 'Process', 'Story'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button size="sm" className="hidden md:flex">
            Hire Me
          </Button>
          
          {/* Mobile Menu Button - simple placeholder */}
          <button className="md:hidden text-white p-2">
             <div className="w-6 h-[2px] bg-white mb-1.5"></div>
             <div className="w-4 h-[2px] bg-white"></div>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
