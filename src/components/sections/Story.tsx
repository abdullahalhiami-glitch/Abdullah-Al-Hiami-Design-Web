import { motion } from "motion/react";

export function Story() {
  return (
    <section id="story" className="py-24 relative z-10 bg-surface">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 border border-white/10 bg-black/40 backdrop-blur-sm"
        >
          {/* Abstract glow inside */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-sm font-mono text-brand uppercase tracking-widest mb-6">The Architect behind AHD</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                Obsessed with the intersection of <br className="hidden md:block"/>
                <span className="italic text-white/50">design and technology.</span>
              </h3>
              <div className="space-y-4 text-white/70 font-sans">
                <p>
                  I didn't start by following templates. I started by breaking things to see how they worked. My background bridges traditional graphic design and emerging 3D architecture, giving me a unique lens on visual problem-solving.
                </p>
                <p>
                  My goal isn't just to make things look "nice." My goal is to build visual authority for brands that refuse to blend into the background. I leverage cutting-edge tools to produce work that dominates the feed and converts the viewer.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-full md:aspect-square rounded-full border border-white/10 overflow-hidden group">
                 {/* Placeholder for Abdullah's photo, currently an abstract cool gradient */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-black group-hover:scale-110 transition-transform duration-700"></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                   <span className="font-display font-bold text-6xl tracking-tighter">AHD</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
