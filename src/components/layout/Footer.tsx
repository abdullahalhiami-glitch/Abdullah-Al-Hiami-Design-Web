import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="scale-90 opacity-80" />
        
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-brand transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand transition-colors">Behance</a>
          <a href="#" className="hover:text-brand transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
        </div>
        
        <div className="text-sm text-white/30 font-mono">
          &copy; {new Date().getFullYear()} AHD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
