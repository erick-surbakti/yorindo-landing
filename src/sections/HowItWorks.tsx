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
    <section id="workflow" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="section-label mb-4">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            How the system <span className="gradient-text">works</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            A streamlined four-step workflow from data input to actionable insights.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] step-connector" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                {/* Step circle */}
                <div className="relative z-10 mx-auto h-[72px] w-[72px] rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center mb-5 shadow-sm">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>

                <span className="font-mono text-xs font-medium text-primary tracking-widest">
                  STEP {s.step}
                </span>
                <h3 className="mt-2 font-bold text-foreground text-base">{s.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
