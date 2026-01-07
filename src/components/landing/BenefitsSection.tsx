import { TrendingUp, Clock, Eye, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      metric: "32%",
      label: "Higher Conversion Rates",
      description: "Teams using SalesFlow see significant improvements in lead-to-customer conversion.",
    },
    {
      icon: Clock,
      metric: "5hrs",
      label: "Saved Per Week",
      description: "Automated workflows and centralized data eliminate repetitive manual tasks.",
    },
    {
      icon: Eye,
      metric: "100%",
      label: "Pipeline Visibility",
      description: "Real-time dashboards give managers complete insight into every deal and rep.",
    },
    {
      icon: Zap,
      metric: "2x",
      label: "Faster Response Time",
      description: "Smart notifications ensure your team responds to hot leads immediately.",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of sales teams who've transformed their performance with SalesFlow CRM.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-background border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">
                {benefit.metric}
              </div>
              <div className="text-sm font-medium text-primary mb-2">
                {benefit.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
