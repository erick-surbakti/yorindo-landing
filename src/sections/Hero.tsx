import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="section-label mb-6">
            <Shield className="h-3.5 w-3.5" />
            Internal Admin Platform
          </div>

          <h1 className="text-4xl md:text-[56px] font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
            Yorindo Admin{" "}
            <span className="gradient-text">Platform</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Centralized system to manage events, platforms, and digital operations.
          </p>

          <p className="mt-3 text-sm text-muted-foreground/80 max-w-md leading-relaxed">
            Built for the internal admin team to manage, monitor, and control all Yorindo Communication services from a single dashboard.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button size="lg" className="h-12 px-7 text-sm font-semibold gap-2 rounded-xl shadow-lg shadow-primary/25">
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex items-center gap-10 md:gap-14">
            {[
              { value: "6", label: "Core Modules" },
              { value: "24/7", label: "System Uptime" },
              { value: "Secure", label: "Role-Based" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
