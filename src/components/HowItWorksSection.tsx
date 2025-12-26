const steps = [
  {
    number: "1",
    title: "Write what's on your mind",
    description: "Put your thoughts into words, however messy they may be.",
  },
  {
    number: "2",
    title: "Tap Get Perspective",
    description: "Receive a short, grounded reflection on what you shared.",
  },
  {
    number: "3",
    title: "Pause and reflect",
    description: "Take a moment to sit with a new point of view.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-xl font-semibold text-foreground md:text-2xl">
          How it works
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-sm font-medium text-foreground">
                {step.number}
              </div>
              <h3 className="mb-2 text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
