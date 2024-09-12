import Image from "next/image";
import React from "react";

const Y2kContainer = ({ title }: { title: string }) => {
  return (
    <div className="border-b-y2kpink border-r-y2kpink fixedsys border-r-4 border-b-4 w-96 h-96 flex flex-col">
      <div className="border-t-2 border-t-pink-400 border-l-2 border-l-pink-400 h-12 bg-y2kpink ">
        <div className="mt-1 mb-1 text-lg flex justify-between px-2 items-center ">{title}
          <span className="hover:cursor-pointer text-3xl">
            &minus;
          &#9746;
            </span>
        </div>
      </div>
      <div className="h-full bg-y2kgray border-t-4 border-l-4 border-l-gray-200 border-t-gray-200 border-r-4 border-b-4 border-r-y2kpink border-opacity-60">
        <div className="flex items-center justify-center w-full h-full">
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
