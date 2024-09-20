import React from "react";
import Y2kContainer from "./Y2kContainer";

const Projects = () => {
  return (
    <div className="mb-32 mt-60">
      <h1 className="fixedsys text-center text-4xl">projects</h1>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 md:mt-20 md:gap-20">
        <Y2kContainer
          title="https://pantheras.ca/"
          infoTitle="pantheras"
          image="/images/test.webp"
          description={[
            "designed in Figma and developed components using TypeScript and Tailwind",
            "partnered with team members to implement digital solutions, such as SEO optimization and custom web development",
            "designed to showcase our digital marketing services, boosting our online presence and attracting clients",
          ]}
          technologies={["React", "Next.js", "TailwindCSS"]}
          github="https://github.com/delabahmani/pantheras"
          link="https://pantheras.ca/"
        />
        <Y2kContainer
          title="https://tech-news.app/"
          infoTitle="technews"
          image="/images/tech2.webp"
          description={[]}
          technologies={[
            "Next.js",
            "TypeScript",
            "Mongodb",
            "Prisma",
            "NextAuth",
            "TailwindCSS",
          ]}
          github="https://github.com/delabahmani/technews"
          link="https://db-tech-news.vercel.app/"
        />
        <Y2kContainer
          title=""
          infoTitle=""
          image=""
          description={[]}
          technologies={[]}
          github=""
          link=""
        />
      </div>
    </div>
  );
};

export default Projects;
