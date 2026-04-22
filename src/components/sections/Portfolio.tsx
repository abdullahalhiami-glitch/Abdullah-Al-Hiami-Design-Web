import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Identity",
    category: "Branding",
    problem: "A tech startup looked like every other SaaS—forgettable and corporate.",
    transformation: "Injected dark mode aesthetics, neon accents, and a distinct cyber-aesthetic.",
    impact: "Increased user perception of 'premium' by 300%.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop", // Abstract 3D
  },
  {
    title: "Neuro 3D Concepts",
    category: "Experimental 3D",
    problem: "Client needed a visual hook for an AI product launch.",
    transformation: "Created impossible, floating glassmorphism shapes inside a dark void.",
    impact: "Generated 50k+ organic views on announcement.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Retro PC or abstract tech
  },
  {
    title: "Apex Social Campaign",
    category: "Social Media Design",
    problem: "Low engagement on Instagram for an athletic brand.",
    transformation: "Designed a disruptive, heavy-hitting typography layout with futuristic UI elements.",
    impact: "45% increase in click-through rates.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070&auto=format&fit=crop", // Dark abstract
  },
  {
    title: "Quantum Web Interface",
    category: "Tech-Inspired Design",
    problem: "Complex data dashboard overwhelmed users.",
    transformation: "Built a 'mission control' style UI with sharp contrast and electric green accents.",
    impact: "Reduced user friction and time-to-task.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop", // Abstract shapes
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 relative z-10 bg-bg">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              The Work.
            </h2>
            <p className="text-white/60 max-w-lg text-lg">
              Not just pretty pictures. Strategic visual interventions that solve hard problems.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="text-sm font-mono text-brand uppercase tracking-widest border border-brand/20 px-4 py-2 rounded-full bg-brand/5">
                // Selected Cases
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
            >
              {/* Image side */}
              <div className={`col-span-1 lg:col-span-7 rounded-2xl overflow-hidden relative aspect-[4/3] lg:aspect-[16/10] bg-surface ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                />
                {/* Floating category badge */}
                <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-white">
                  {project.category}
                </div>
              </div>

              {/* Content side */}
              <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 group-hover:text-brand transition-colors duration-300 flex justify-between items-center cursor-pointer">
                  {project.title}
                  <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </h3>
                
                <div className="space-y-6 text-white/70">
                  <div>
                    <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-2">The Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                  <div>
                    <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-2">Transformation</h4>
                    <p>{project.transformation}</p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                  <div>
                    <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-brand"></span>
                       Impact
                    </h4>
                    <p className="font-medium text-white">{project.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
