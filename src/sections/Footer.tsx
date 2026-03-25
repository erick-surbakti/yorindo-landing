import { Separator } from "@/components/ui/separator";
import logo from "@/assets/yorindo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Yorindo Communication" className="h-9 w-9 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">Yorindo Communication</span>
              <span className="text-[10px] text-muted-foreground">Admin Platform</span>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            {["Overview", "System", "Workflow", "Access"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-[12px] text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} Yorindo Communication. Internal use only.</p>
          <p className="font-mono text-[11px]">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
