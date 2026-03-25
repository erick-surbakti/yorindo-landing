import { Card } from "@/components/ui/card";
import { UserCog, Server, FileOutput, ArrowRight } from "lucide-react";

const nodes = [
  { icon: UserCog, label: "Admin", sub: "Internal Users" },
  { icon: Server, label: "Yorindo System", sub: "Core Platform" },
  { icon: FileOutput, label: "Output", sub: "Events · Platforms · Reports" },
];

const Architecture = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">System Architecture</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            Simplified view of how data flows through the platform.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-4 md:gap-6">
              <Card className="p-6 md:p-8 text-center border bg-card min-w-[160px]">
                <div className="mx-auto h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                  <node.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{node.label}</h3>
                <p className="text-[11px] text-muted-foreground mt-1">{node.sub}</p>
              </Card>
              {i < nodes.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
