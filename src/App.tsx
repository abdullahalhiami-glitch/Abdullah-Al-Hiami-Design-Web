import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyMe } from "@/components/sections/WhyMe";
import { Portfolio } from "@/components/sections/Portfolio";
import { SocialProof } from "@/components/sections/SocialProof";
import { Process } from "@/components/sections/Process";
import { Story } from "@/components/sections/Story";
import { CTA } from "@/components/sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <Portfolio />
        <SocialProof />
        <Process />
        <Story />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
