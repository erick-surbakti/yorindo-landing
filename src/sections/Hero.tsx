import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="overview" className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Internal Admin Platform
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Yorindo Admin Platform
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Centralized system to manage events, platforms, and digital operations.
        </p>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Built for the internal admin team to manage, monitor, and control all Yorindo Communication services and operations from a single dashboard.
        </p>
        <div className="mt-8">
          <Button size="lg" className="gap-2">
            Go to Dashboard <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
