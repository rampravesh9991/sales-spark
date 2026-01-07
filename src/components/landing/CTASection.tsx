import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Join thousands of sales teams already using SalesFlow CRM to close more deals and grow faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto gap-2 bg-background text-foreground hover:bg-background/90"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule a Demo
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/60 mt-6">
          No credit card required • Setup in 5 minutes
        </p>
      </div>
    </section>
  );
};

export default CTASection;
