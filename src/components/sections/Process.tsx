import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Think.",
    desc: "Strategy first. We break down the core problem and analyze the competition so we can completely bypass them."
  },
  {
    num: "02",
    title: "Design.",
    desc: "The visual architect phase. Merging typography, 3D, and grid systems into a cohesive, high-impact aesthetic."
  },
  {
    num: "03",
    title: "Refine.",
    desc: "Iterative polishing. We add the micro-interactions, adjust the neon glows, and perfect the conversion hooks."
  },
  {
    num: "04",
    title: "Deliver.",
    desc: "Launch time. Hand-off of all premium assets optimized for immediate deployment and maximum shock-value."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 relative z-10 bg-bg">
      <div className="container px-6 mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Protocol.
          </h2>
          <p className="text-white/60 max-w-lg text-lg">
            A ruthlessly efficient system to turn ideas into premium visual assets. No wasted time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 xl:top-8 left-[60%] w-full h-[1px] bg-white/10 overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileInView={{ x: "100%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), repeat: Infinity, repeatDelay: 2 }}
                     className="w-full h-full bg-brand"
                   />
                </div>
              )}
              
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center font-mono font-bold text-lg xl:text-xl text-brand mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-black transition-all duration-300">
                {step.num}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
