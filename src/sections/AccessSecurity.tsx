import { ShieldCheck, Lock, KeyRound } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description: "Permissions are assigned based on admin roles — super admin, manager, and operator levels.",
  },
  {
    icon: Lock,
    title: "Admin Control Levels",
    description: "Each module enforces granular access policies to prevent unauthorized actions.",
  },
  {
    icon: KeyRound,
    title: "Data Handling",
    description: "All operational data is handled securely with audit trails and encryption at rest.",
  },
];

const AccessSecurity = () => {
  return (
    <section id="access" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="section-label mb-4">Security</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            Access & <span className="gradient-text">Security</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Built-in security measures to protect operations and data integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 card-elevated text-center"
            >
              <div className="icon-container h-14 w-14 mx-auto mb-5">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-[15px]">{item.title}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSecurity;
