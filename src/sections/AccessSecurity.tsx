import { Card } from "@/components/ui/card";
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
    <section id="access" className="py-16 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Access & Security</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            Built-in security measures to protect operations and data integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <Card key={item.title} className="p-6 border bg-card">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSecurity;
