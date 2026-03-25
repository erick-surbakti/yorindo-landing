import { UserCog, Server, FileOutput, ChevronRight } from "lucide-react";

const nodes = [
  { icon: UserCog, label: "Admin", sub: "Internal Users", color: "bg-primary/10" },
  { icon: Server, label: "Yorindo System", sub: "Core Platform", color: "bg-primary/15" },
  { icon: FileOutput, label: "Output", sub: "Events · Platforms · Reports", color: "bg-primary/10" },
];

const Architecture = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="section-label mb-4">Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            System <span className="gradient-text">architecture</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Simplified view of how data flows through the platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex items-center gap-3">
                <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8 text-center min-w-[180px] card-elevated">
                  <div className="icon-container h-14 w-14 mx-auto mb-4">
                    <node.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base">{node.label}</h3>
                  <p className="text-[12px] text-muted-foreground mt-1.5 font-medium">{node.sub}</p>
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-12">
                    <div className="flex items-center gap-0.5">
                      <div className="h-[2px] w-6 bg-primary/30 rounded-full" />
                      <ChevronRight className="h-4 w-4 text-primary/50" />
                    </div>
                  </div>
                )}
                {i < nodes.length - 1 && (
                  <div className="md:hidden flex flex-col items-center py-1">
                    <div className="w-[2px] h-4 bg-primary/30 rounded-full" />
                    <ChevronRight className="h-4 w-4 text-primary/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
