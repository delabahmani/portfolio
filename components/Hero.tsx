import Image from "next/image";
import React from "react";

const Hero = () => {
  const text =
    "I discovered my passion for web development in 2020 while taking a class in college. The thrill of seeing my first “Hello World” come to life ignited my interest. Since then, as a self-taught developer, I've been captivated by designing and building responsive, user-friendly digital experiences. My true love lies in turning blank canvases into visually stunning and user friendly websites.";

  return (
    <div className="flex w-full h-full fixedsys">
      <div className="relative flex-1 h-[80vh] w-[100vh]">
        <Image src="/images/hero.webp" alt="" quality={100} fill priority />
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center h-full p-4 mt-[30%]">
          <div className="relative mb-16 w-full">
            <h1 className="text-center text-3xl fixedsys typewriter z-10">
              hi! i'm dela, an aspiring front end dev
            </h1>

            <div className="text-center text-lg whitespace-pre-line break-words w-full max-w-xl mt-4">
              <div className="relative inline-block">
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

            <div className="absolute top-2 -left-[70px] transform w-16 h-16 butterfly">
              <Image
                src="/images/butterfly.webp"
                alt="pink butterfly"
                quality={100}
                fill
                priority
              />
            </div>
            <div className="absolute -right-16 -top-7 transform w-16 h-16 butterfly">
              <Image
                src="/images/butterfly.webp"
                alt=""
                quality={100}
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
