import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
    span: 1,
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js (App Router)",
      "TailwindCSS",
      "Zustand",
    ],
    span: 1,
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MongoDB"],
    span: 1,
  },
  {
    title: "DevOps & Tools",
    skills: [
      "AWS S3",
      "CloudFront",
      "Google Cloud",
      "Neon",
      "Docker",
      "Vercel",
      "Supabase",
    ],
    span: 1,
  },
  {
    title: "APIs & Integrations",
    skills: [
      "NextAuth",
      "JWT",
      "Google OAuth",
      "Resend API",
      "UploadThing API",
      "Printful API",
      "Stripe API",
      "Google Places API",
      "Gemini AI API",
      "Socket.IO",
      "Chart.js",
    ],
    span: 2,
  },
  {
    title: "AI & Productivity",
    skills: [
      "GitHub Copilot",
      "GPT Codex",
      "Claude",
      "Gemini",
      "Perplexity",
      "Grok Code",
      "v0",
    ],
    span: 2,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center px-6 lg:px-16 py-12"
    >
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className={`bg-card border-border hover:border-primary/50 transition-colors duration-300 ${
                category.span === 2 ? "md:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
