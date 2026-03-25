import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  TicketCheck,
  Users,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const modules = [
  {
    icon: CalendarDays,
    name: "Event Management",
    description: "Create, schedule, and manage events with full lifecycle control.",
    badge: "Core",
  },
  {
    icon: TicketCheck,
    name: "Ticketing Control",
    description: "Issue and track tickets, manage quotas and validation.",
    badge: "Core",
  },
  {
    icon: Users,
    name: "User & Data Monitoring",
    description: "Monitor user activity, data flow, and system health in real-time.",
    badge: "Monitor",
  },
  {
    icon: FileText,
    name: "Content Management",
    description: "Manage platform content, media assets, and publications.",
    badge: "CMS",
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboard",
    description: "Visualize performance metrics, attendance, and engagement data.",
    badge: "Analytics",
  },
  {
    icon: Settings,
    name: "System Settings",
    description: "Configure system parameters, integrations, and preferences.",
    badge: "Config",
  },
];

const CoreModules = () => {
  return (
    <section id="system" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="section-label mb-4">Core Modules</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            Everything you need,{" "}
            <span className="gradient-text">one place</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Six integrated modules that power the entire Yorindo admin ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="group relative rounded-2xl border border-border/60 bg-card p-6 card-elevated"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="icon-container h-12 w-12">
                  <mod.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant="secondary"
                  className="text-[10px] font-semibold uppercase tracking-wider rounded-md px-2 py-0.5"
                >
                  {mod.badge}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground text-[15px]">{mod.name}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreModules;
