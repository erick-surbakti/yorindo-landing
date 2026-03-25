import { Card } from "@/components/ui/card";
import { CalendarCheck, Ticket, Monitor, Target } from "lucide-react";

const cards = [
  {
    icon: CalendarCheck,
    title: "Event Management",
    description: "End-to-end event planning, scheduling, and coordination tools.",
  },
  {
    icon: Ticket,
    title: "Ticketing System",
    description: "Issue, manage, and track tickets across all events and platforms.",
  },
  {
    icon: Monitor,
    title: "Digital Platform Handling",
    description: "Control and maintain digital services and platform infrastructure.",
  },
  {
    icon: Target,
    title: "Operations Control",
    description: "Monitor KPIs, manage workflows, and ensure smooth operations.",
  },
];

const AboutSystem = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About the System</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
            Yorindo Communication's internal platform — designed for the admin team to manage, monitor, and control all operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <Card key={card.title} className="p-6 border bg-card hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSystem;
