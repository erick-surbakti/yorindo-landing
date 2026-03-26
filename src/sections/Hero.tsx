import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section id="overview" className="relative overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />

        {/* DARK BASE */}
        <div className="absolute inset-0 bg-black/60" />

        {/* BLUE OVERLAY (INI YANG NGUBAH JADI BIRU) */}
        <div
          className="absolute inset-0"
          style={{
           background: `
  linear-gradient(
    135deg,
    hsl(217 73% 35% / 0.45) 0%,
    hsl(217 65% 20% / 0.6) 100%
  )
`,
          }}
        />
      </div>

      <div className="container relative py-24 md:py-36">
        <div className="max-w-2xl">

          {/* LABEL */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-white/10 text-white border border-white/20 mb-6 backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
            Internal Admin Platform
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-[56px] font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            Yorindo Admin{" "}
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          {/* DESC */}
          <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
            Centralized system to manage events, platforms, and digital operations.
          </p>

          <p className="mt-3 text-sm text-white/60 max-w-md leading-relaxed">
            Built for the internal admin team to manage, monitor, and control all Yorindo Communication services from a single dashboard.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-4">
            <Button
              size="lg"
              className="h-12 px-7 text-sm font-semibold gap-2 rounded-xl 
              bg-gradient-to-r from-blue-600 to-blue-700 
              hover:from-blue-500 hover:to-blue-600 
              text-white shadow-lg shadow-blue-900/30"
            >
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* STATS */}
          <div className="mt-14 flex items-center gap-10 md:gap-14">
            {[
              { value: "6", label: "Core Modules" },
              { value: "24/7", label: "System Uptime" },
              { value: "Secure", label: "Role-Based" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
