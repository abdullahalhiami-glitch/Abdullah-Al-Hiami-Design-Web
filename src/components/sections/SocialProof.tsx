import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Abdullah completely reimagined our brand. It went from looking like a standard startup to feeling like a premium tech powerhouse.",
    name: "Alex V.",
    role: "Founder, NeuroSync"
  },
  {
    quote: "The 3D assets he created for our campaign scroll-stopped our entire audience. Best ROI on design we've ever had.",
    name: "Sarah M.",
    role: "Creative Director"
  }
];

const tools = ["Figma", "Blender", "Cinema 4D", "Adobe Creative Suite", "Spline", "Webflow"];

export function SocialProof() {
  return (
    <section className="py-24 relative z-10 bg-surface overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Testimonials */}
          <div className="w-full md:w-1/2 space-y-12">
            <div>
               <h2 className="text-3xl font-display font-bold mb-4">Don't take my word for it.</h2>
               <div className="w-12 h-1 bg-brand"></div>
            </div>
            
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="pl-6 border-l-2 border-white/10"
                >
                  <p className="text-lg md:text-xl font-medium text-white/80 mb-4 italic">"{t.quote}"</p>
                  <div>
                    <span className="block font-bold text-white">{t.name}</span>
                    <span className="block text-sm text-brand">{t.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools / Authority */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-2xl bg-bg border border-white/5"
            >
              <h3 className="text-xl font-mono uppercase tracking-widest text-white/60 mb-8 border-b border-white/10 pb-4">Tech & Tools Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-brand hover:text-black hover:border-brand transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
