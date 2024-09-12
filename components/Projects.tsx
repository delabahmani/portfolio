import React from "react";
import Y2kContainer from "./Y2kContainer";

const Projects = () => {
  return (
    <div className="mt-60 mb-32 ">
      <h1 className="fixedsys text-4xl text-center">projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40 lg:gap-x-8  gap-y-16 min-h-[580px] place-items-center">
        <Y2kContainer title="pantheras" />
        <Y2kContainer title="hushposh" />
        <Y2kContainer title="product-page" />
      </div>
    </div>
  );
};

export default Projects;
