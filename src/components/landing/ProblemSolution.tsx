import { AlertCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Leads scattered across spreadsheets and emails",
    "No visibility into team performance",
    "Missed follow-ups costing you deals",
  ];

  const solutions = [
    "Centralized lead management in one place",
    "Real-time dashboards for complete visibility",
    "Automated reminders that never let leads slip",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Chaos to Clarity
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop losing deals to disorganization. SalesFlow CRM transforms how your team works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="p-6 sm:p-8 rounded-xl border border-destructive/20 bg-destructive/5">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Without SalesFlow
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✕</span>
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-6 sm:p-8 rounded-xl border border-accent/20 bg-accent/5">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              With SalesFlow
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
