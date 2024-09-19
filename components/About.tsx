import Image from "next/image";
import React from "react";

const About = () => {
  const text =
    "I discovered my passion for web development in 2020 while taking a class in college. The thrill of seeing my first 'Hello World' come to life ignited my interest. Since then, as a self-taught developer, I've been captivated by designing and building responsive, user-friendly digital experiences.";

  return (
    <div className="fixedsys  flex min-h-screen w-full flex-col space-y-10 md:space-y-8 px-4 md:flex-row md:space-x-10 md:px-10">
      <div className="flex md:flex-1 justify-center md:justify-end">
        <div className="flex flex-col items-center justify-center lg:max-w-[70vh]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl ">a lil about me</h1>

          <div className="mt-4 w-full text-center text-md md:text-lg lg:text-2xl">
            <div className="w-72 md:w-auto md:max-w-xl whitespace-pre-line break-words">
              {text.split(/(\s+)/).map((part, i) => (
                <React.Fragment key={i}>
                  {part.trim() === "" ? (
                    <span
                      className="inline-block"
                      style={{ display: "inline-block", width: "0.5em" }}
                    >
                      &nbsp;
                    </span>
                  ) : (
                    <span
                      className="inline-block animate-text-reveal [animation-fill-mode:backwards]"
                      style={{ animationDelay: `${3 + i * 0.1}s` }}
                    >
                      {part}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex  md:flex-1 items-center justify-center md:justify-start">
        <div className="relative h-80 w-full max-w-[60vh] md:h-[90vh] lg:w-[500px]">
          <Image
            src="/images/about-img.webp"
            alt="About me image"
            quality={100}
            fill
            priority
            style={{ objectFit: "contain" }}
             sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About;