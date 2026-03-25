import { Separator } from "@/components/ui/separator";
import { Database, Gauge, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Input Data",
    description: "Set up events, configure systems, and input operational data.",
  },
  {
    icon: Gauge,
    step: "02",
    title: "Manage & Monitor",
    description: "Use dashboard tools to oversee and control all processes.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute & Track",
    description: "Run live operations and track progress in real-time.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Analyze Results",
    description: "Review reports and performance analytics post-execution.",
  },
];

const HowItWorks = () => {
  return (
    <section id="workflow" className="py-16 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">How The System Works</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            A streamlined four-step workflow from data input to insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">STEP {s.step}</span>
              <h3 className="mt-2 font-semibold text-foreground text-sm">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              {i < steps.length - 1 && (
                <Separator className="hidden md:block absolute top-7 left-[60%] w-[80%] bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
