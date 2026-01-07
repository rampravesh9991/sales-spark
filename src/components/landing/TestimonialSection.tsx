import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-border">
          <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
          
          <div className="text-center">
            <blockquote className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-8 relative z-10">
              "Before SalesFlow, I was drowning in spreadsheets and losing track of leads daily. 
              Now, our entire team has visibility into the pipeline, follow-ups are automated, 
              and we've increased our close rate by 40%. It's transformed how we work."
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xl font-bold mb-4">
                JM
              </div>
              <div className="text-foreground font-semibold">Jason Mitchell</div>
              <div className="text-muted-foreground text-sm">Sales Manager, TechScale Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
