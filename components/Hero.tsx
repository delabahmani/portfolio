"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="fixedsys flex w-full flex-col-reverse items-center justify-center gap-20 md:gap-10 px-5 py-10 md:px-10 md:py-5 lg:h-screen lg:flex-row lg:p-20">
      <div className="relative mb-20 flex w-80 items-center justify-center md:w-[530px] lg:w-1/2">
        <Image
          src="/images/hero.webp"
          alt=""
          quality={100}
          height={1000}
          width={1000}
          priority
          className="aspect-square object-contain w-full lg:w-[1500px]"
        />
      </div>

      <div className="relative flex w-full mt-20 flex-col items-center justify-center lg:w-1/2">
        <h1 className="absolute z-10 p-2 text-center text-2xl mb-8 md:mb-3 md:w-[70%] md:text-4xl" >
          <Typewriter
            words={["hi my name is dela", "a front end dev"]}
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
            loop={0}
            cursor
            cursorBlinking={true}
          />
        </h1>

        {/* <h1 className="fixedsys typewriter z-10 mt-10 p-4 text-center md:w-[70%] text-3xl lg:text-4xl lg:w-[100%]">
          hi i&apos;m dela, an aspiring front end dev
        </h1> */}

        <div className="absolute flex w-full items-center justify-between lg:max-w-[450px]">
          <div className="butterfly relative -left-0 bottom-5 h-12 w-12 transform md:bottom-1 md:left-8 md:h-16 md:w-16 lg:-left-9 lg:bottom-1">
            <Image
              src="/images/butterfly.webp"
              alt="pink butterfly"
              quality={100}
              fill
              priority
              className="scale-x-[-1]"
            />
          </div>
          <div className="butterfly relative -right-0 bottom-5 h-12 w-12 transform md:bottom-1 md:right-8 md:h-16 md:w-16 lg:-right-9 lg:bottom-1">
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
  );
};
export default Hero;
