import React from "react";
import Y2kContainer from "./Y2kContainer";

const Projects = () => {
  return (
    <div className="mb-32 mt-60">
      <h1 className="fixedsys text-center text-4xl">projects</h1>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 md:mt-20 md:gap-20">
        <Y2kContainer title="pantheras" />
        <Y2kContainer title="hushposh" />
        <Y2kContainer title="product-page" />
      </div>
    </div>
  );
};

export default Projects;
