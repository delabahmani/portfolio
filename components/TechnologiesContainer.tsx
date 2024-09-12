import React from "react";
import { technologiesList } from "@/utils/icons";
import Technologies from "./Technologies";

const TechnologiesContainer = () => {
  return (
    <div className="mt-64 flex flex-col items-center justify-center fixedsys">
      <h2 className="text-4xl">technologies</h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-40 lg:gap-x-8 xl:gap-x-40 gap-y-16 min-h-[580px]">
        {technologiesList.map((i, index) => (
          <Technologies icon={i.icon} title={i.name} key={index} />
        ))}
        
      </div>
    </div>
  );
};

export default TechnologiesContainer;
