import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Now with AI-powered lead scoring
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Streamline Your Sales.{" "}
            <span className="gradient-text">Close More Deals.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The modern CRM that helps sales teams organize leads, track customer interactions, 
            and visualize their pipeline—all in one intuitive platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-secondary/30 to-background">
              {/* Mock Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Leads", value: "2,847", change: "+12.5%" },
                  { label: "Conversion Rate", value: "24.8%", change: "+3.2%" },
                  { label: "Revenue", value: "$847K", change: "+18.7%" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-background border border-border">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                      <span className="text-sm text-accent">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mock Pipeline */}
              <div className="h-32 sm:h-48 rounded-lg bg-background border border-border flex items-end justify-around p-4 gap-2">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all hover:from-accent hover:to-accent/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
