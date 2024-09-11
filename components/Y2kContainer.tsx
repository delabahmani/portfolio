import React from "react";

const Y2kContainer = () => {
  return (
    <div className="relative p-4 w-80 md:w-[30rem]  text-xl fixedsys">
      <div className="relative bg-gray-100 border-4 border-pink-500 rounded-lg md:h-[25rem]">
        <div className="bg-pink-500 text-white px-2 py-1 flex justify-between items-center rounded-t-lg">
          <span>New Collection</span>
          <span className="cursor-pointer">&times;</span>
        </div>
        <div className="p-4">
          <div className="border-2 border-gray-300">
            <div className="h-40 flex items-center justify-center bg-gradient-to-b from-blue-100 to-green-100"></div>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-y2kpink">
          <button className="px-4 py-2 bg-y2kgray border-2 border-pink-500 cursor-pointer">
            Yes
          </button>
          <button className="px-4 py-2 bg-y2kgray border-2 border-pink-500 cursor-pointer">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};
export default Y2kContainer;
