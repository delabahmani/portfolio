const experiences = [
  {
    title: "Founder & Full Stack Developer",
    company: "nsanity",
    period: "Apr 2025 - Oct 2025",
    achievements: [
      "Developed a complete platform using Next.js (App Router), TypeScript, Prisma, MongoDB, and deployed on Vercel",
      "Integrated Stripe API and webhooks for orders and Printful API for automated fulfillments and store syncing",
      "Built a full admin panel with product management and a drag-and-drop mock-up editor for artwork uploads, positioning, and resizing",
      "Implemented NextAuth (credentials and Google OAuth) with JWT sessions, persistent cart and favourites synced via React Context, local storage, and database",
      "Integrated Gemini-powered Chatbot using Google Cloud services; implemented UploadThing for media handling and Resend for email operations",
    ],
  },
  {
    title: "Front-End Developer",
    company: "woof",
    period: "Oct 2024 - Jun 2025",
    achievements: [
      "Led TypeScript-based frontend development across multiple Next.js repos, collaborating with engineers to deliver pixel-perfect, responsive UI from Figma across 5 blockchain networks",
      "Built a 5-page marketing site (Home, About, Pricing, Benefits, FAQ) and completed authenticated dashboard interface",
      "Implemented core product systems: contacts management for labelling wallet addresses with auto-populate, and custom transaction categories spanning multiple taxonomies",
      "Developed comprehensive settings for managing connected wallets and adding/removing supported blockchain networks, plus a global theme provider with light/dark mode",
      "Integrated frontend with backend APIs via Docker environments and PostgreSQL using Prisma, Neon, and pgAdmin",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Pantheras",
    period: "Mar 2023 - Oct 2024",
    achievements: [
      "Developed RESTful APIs and database schemas for web applications",
      "Contributed to frontend development using modern JavaScript frameworks",
      "Participated in agile development process and daily standups",
      "Maintained legacy codebases and implemented new features based on user feedback",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20"
    >
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Professional Experience & Projects
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3.5 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
