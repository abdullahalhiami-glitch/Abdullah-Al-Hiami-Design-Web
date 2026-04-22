import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-32 relative z-10 bg-bg overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Massive subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
         <span className="text-[20vw] font-display font-bold whitespace-nowrap leading-none tracking-tighter">
            INITIATE
         </span>
      </div>
      
      <div className="container relative z-20 px-6 mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-brand mb-10"></div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Let's build something <br className="hidden md:block"/>
            <span className="text-gradient">people remember.</span>
          </h2>
          
          <p className="text-xl text-white/50 mb-12 max-w-2xl font-sans">
            Currently accepting 2 new clients for Q3. If you're ready to stop looking like everyone else, let's talk.
          </p>
          
          <Button size="lg" className="text-lg px-10 py-6">
            Start a Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="mt-8 text-sm font-mono text-white/30 uppercase tracking-widest">
            Fast Response / Global Availability
          </p>
        </motion.div>
      </div>
    </section>
  );
}
