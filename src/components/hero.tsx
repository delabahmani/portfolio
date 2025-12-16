import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="flex items-center justify-center py-20 mt-4 md:mt-0 px-6 lg:px-16">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
          Delara Bahmani
        </h1>

        <p className="text-base lg:text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
          Full-stack developer with 2+ years of experience building
          production-ready applications. Proven success delivering SaaS and
          e-commerce platforms using Next.js, TypeScript, React, and
          TailwindCSS.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
