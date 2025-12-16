import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "nsanity",
    description:
      "Full-featured e-commerce storefront featuring 44 print-on-demand products, with a conversion-focused UX and maintainable admin portal for publishing and management.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "TailwindCSS",
      "MongoDB",
      "Printful API",
      "NextAuth",
      "Gemini API",
      "UploadThing",
      "Prisma",
      "Google Auth",
      "Resend",
    ],
    github: "https://github.com/delabahmani/nsanity",
    demo: "https://www.nsanity.shop/",
  },
  {
    title: "woof",
    description:
      "Crypto tax and transaction tracking and tax management SaaS platform for managing multi-chain wallet transactions and generating tax reports.",
    tech: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "Docker",
      "PostgreSQL",
      "pgAdmin",
      "NextAuth",
      "Google Auth",
      "Neon",
      "Vercel",
      "Stripe",
      "MongoDB",
    ],
    github: "https://github.com/beagle-txn",
    demo: "https://beagle-server.vercel.app/",
  },
  {
    title: "windows xp portfolio",
    description:
      "A creative portfolio website with a nostalgic Windows XP theme. Features a retro desktop interface with draggable windows, interactive icons, and classic XP aesthetics to showcase frontend development in a unique and memorable way.",
    tech: ["React", "TypeScript", "CSS", "TailwindCSS", "Vite", "Resend"],
    github: "https://github.com/delabahmani/portfolio-windows-xp",
    demo: "https://delara-khaki.vercel.app/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center px-6 lg:px-16 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-foreground text-xs rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary group bg-transparent"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4 h-4 mr-2 group-hover:text-primary transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
