import logo from "@/assets/yorindo-logo.png";

const navItems = ["Overview", "System", "Workflow", "Access"];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Yorindo Communication" className="h-9 w-9 rounded-full" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Yorindo <span className="font-medium text-muted-foreground">Communication</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
