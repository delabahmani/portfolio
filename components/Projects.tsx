import React from "react";
import Y2kContainer from "./Y2kContainer";

const Projects = () => {
  return (
    <div className="mb-32 mt-60">
      <h1 className="fixedsys text-center text-4xl">projects</h1>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 md:mt-20 md:gap-20">
        <Y2kContainer
          title="pantheras"
          image="/images/pantheras.webp"
          description={[]}
          technologies={["React", "Next.js", "TailwindCSS"]}
          github="https://github.com/delabahmani/pantheras"
          link="https://pantheras.ca/"
        />
        <Y2kContainer
          title="technews"
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
