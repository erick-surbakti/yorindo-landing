import { Separator } from "@/components/ui/separator";
import logo from "@/assets/yorindo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Yorindo Communication" className="h-8 w-8 rounded-full" />
            <span className="text-sm font-semibold text-foreground">Yorindo Communication</span>
          </div>
          <nav className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
            <a href="#system" className="hover:text-primary transition-colors">System</a>
            <a href="#workflow" className="hover:text-primary transition-colors">Workflow</a>
            <a href="#access" className="hover:text-primary transition-colors">Access</a>
          </nav>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} Yorindo Communication. Internal use only.</p>
          <p>v1.0.0 — Admin Platform</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
