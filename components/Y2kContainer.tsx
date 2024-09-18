import Image from "next/image";
import React from "react";

const Y2kContainer = ({ title }: { title: string }) => {
  return (
    <div className="fixedsys mt-10 flex w-72 flex-col border-b-4 border-r-4 border-b-y2kpink border-r-y2kpink md:h-96 md:w-96">
      <div className="h-12 border-l-2 border-t-2 border-l-pink-400 border-t-pink-400 bg-y2kpink">
        <div className="mb-1 mt-1 flex items-center justify-between px-2 text-lg">
          {title}
          <span className="text-3xl hover:cursor-pointer">&minus; &#9746;</span>
        </div>
      </div>
      <div className="h-full border-b-4 border-l-4 border-r-4 border-t-4 border-l-gray-200 border-r-y2kpink border-t-gray-200 border-opacity-60 bg-y2kgray">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/panthera.png"
            height={400}
            width={350}
            alt="mockup of panthera landing page"
          />
        </div>
      </div>
    </div>
  );
};
export default Y2kContainer;
