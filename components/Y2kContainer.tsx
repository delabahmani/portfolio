"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Y2kContainer = ({
  title,
  infoTitle,
  image,
  description,
  technologies,
  github,
  link,
}: {
  title: string;
  infoTitle: string;
  image: string;
  description: string[];
  technologies: string[];
  github: string;
  link: string;
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="fixedsys relative mt-10 flex w-72 flex-col border-b-4 border-r-4 border-b-y2kpink border-r-y2kpink md:h-96 md:w-96 lg:h-[600px] lg:w-[600px] text-offwhite dark:text-offwhite">
      
      <div className="h-12 border-l-2 border-t-2 border-l-pink-400 border-t-pink-400 bg-y2kpink">
        <div className="mb-1 mt-1 flex items-center justify-between px-2 text-lg">
          <Link href={link} target="_blank" className="hover:underline">
            {title}
          </Link>
          <span
            className="text-3xl hover:cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "-" : "+"} &#9746;
          </span>
        </div>
      </div>

      <div
        className={`relative h-full overflow-hidden border-b-4 border-l-4 border-r-4 border-t-4 border-l-gray-200 border-r-y2kpink border-t-gray-200 border-opacity-60 bg-y2kgray`}
      >
        <div
          className="flex h-full w-full items-center justify-center hover:cursor-pointer"
          onClick={() => setShowInfo(!showInfo)}
        >
          {image ? (
            <Image
              src={image}
              width={2000}
              height={2000}
              quality={100}
              priority
              alt={`mockup of ${infoTitle} landing page`}
              className="aspect-square object-contain lg:h-[400px] lg:w-full"
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-200 lg:h-[400px] lg:w-full">
              <p>No Image Available</p>
            </div>
          )}
        </div>
        <div
          className={`absolute inset-0 h-full w-full overflow-auto bg-black bg-opacity-95 transition-all duration-300 ${showInfo ? "translate-y-0" : "-translate-y-full"}`}
          onClick={() => setShowInfo(false)}
        >
          {showInfo && (
            <div className="h-full w-full p-4">
              <h3 className="mb-2 text-3xl">{infoTitle}</h3>
              <div className="mb-4 gap-3 flex flex-wrap">
                {description.map((desc, i) => (
                  <p className="text-sm md:text-lg" key={i}>
                    - {desc}
                  </p>
                ))}
              </div>

              <div className="px-4 py-4">
                <h4 className="mb-2 text-center text-xl">technologies</h4>
                <div className="flex flex-wrap-reverse justify-center gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded bg-y2kpink px-2 py-1 text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:px-32 px-14 py-8 text-2xl md:flex-row md:justify-between gap-2 md:gap-0">
                <Link
                  href={github}
                  target="_blank"
                  className="flex items-center gap-3 hover:text-y2kaccent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={25} /> github
                </Link>
                <Link
                  href={link}
                  target="_blank"
                  className="flex items-center gap-3 hover:text-y2kaccent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoIosLink size={25} /> site
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Y2kContainer;
