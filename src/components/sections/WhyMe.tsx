import { motion } from "motion/react";
import { Zap, Hexagon, Eye } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-brand" />,
    title: "Tech-Driven Creative Mind",
    description: "I merge classic design principles with the newest software (AI, advanced rendering, motion) to produce output that most traditional designers can't touch."
  },
  {
    icon: <Hexagon className="w-6 h-6 text-brand" />,
    title: "Emerging 3D Architect",
    description: "I don't just work in flat pixels. I build immersive 3D brand assets that make average products look like premium luxury goods."
  },
  {
    icon: <Eye className="w-6 h-6 text-brand" />,
    title: "Conversion-Focused Aesthetics",
    description: "Beautiful is useless if it doesn't sell. Every layout, shadow, and neon glow is architected to command attention and drive user action."
  }
];

export function WhyMe() {
  return (
    <section id="expertise" className="py-32 relative z-10 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why you need <span className="text-brand">this</span> standard.
          </h2>
          <p className="text-white/60 max-w-xl text-lg">
            I ignore the templates. I focus on raw visual authority. Here's what separates my work from generic freelancers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl glass-panel group hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center mb-8 border border-white/5 group-hover:border-brand/40 group-hover:glow-shadow transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
