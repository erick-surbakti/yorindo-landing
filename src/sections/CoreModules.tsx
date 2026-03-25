import { Card } from "@/components/ui/card";
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
    <section id="system" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Core Modules</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            Key modules that power the Yorindo admin ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <Card
              key={mod.name}
              className="p-6 border bg-card group hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center">
                  <mod.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-[10px] font-semibold uppercase tracking-wider">
                  {mod.badge}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground">{mod.name}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{mod.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreModules;
