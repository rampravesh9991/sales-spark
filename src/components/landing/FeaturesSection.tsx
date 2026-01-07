import { Target, BarChart3, Mail, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Lead Management & Scoring",
      description:
        "Capture, organize, and prioritize leads with intelligent scoring. Track every interaction and never miss a follow-up opportunity.",
    },
    {
      icon: BarChart3,
      title: "Pipeline Visualization",
      description:
        "Get real-time insights into your sales pipeline with intuitive dashboards. Track conversion rates, deal stages, and team performance at a glance.",
    },
    {
      icon: Mail,
      title: "Email & SMS Integration",
      description:
        "Connect Gmail, Outlook, and Twilio for seamless communication tracking. See every email and message in one unified timeline.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Role-based access, document sharing, and team performance tracking. Empower your entire sales organization to work together.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Close More Deals</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed for modern sales teams. Built to scale from startup to enterprise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
