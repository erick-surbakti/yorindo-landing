import { CalendarCheck, Ticket, Monitor, Target } from "lucide-react";

const cards = [
  {
    icon: CalendarCheck,
    title: "Event Management",
    description: "End-to-end event planning, scheduling, and coordination across all channels.",
  },
  {
    icon: Ticket,
    title: "Ticketing System",
    description: "Issue, manage, and track tickets for events and support operations.",
  },
  {
    icon: Monitor,
    title: "Digital Platforms",
    description: "Control digital services, platform health, and infrastructure status.",
  },
  {
    icon: Target,
    title: "Operations Control",
    description: "Monitor KPIs, manage workflows, and ensure operational efficiency.",
  },
];

const AboutSystem = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="section-label mb-4">About the System</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            What powers <span className="gradient-text">Yorindo</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            An internal platform designed for the admin team to manage, monitor, and control all operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-border/60 bg-card p-6 card-elevated"
            >
              <div className="icon-container h-11 w-11 mb-5">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-[15px]">{card.title}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                {card.description}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 group-hover:bg-primary/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSystem;
