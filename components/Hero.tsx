import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="fixedsys flex h-auto w-full flex-col-reverse items-center justify-center gap-10 px-5 py-10 md:px-10 md:py-5 lg:h-screen lg:flex-row lg:px-20 lg:py-20">
      <div className="relative flex h-72 w-80 items-center justify-center md:h-full md:w-[530px] lg:w-[800px] lg:h-[500px] lg:flex-1">
        <Image
          src="/images/hero.webp"
          alt=""
          quality={100}
          height={1000}
          width={1000}
          priority
          className="aspect-square object-contain"
        />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-10  xl:w-1/2 lg:w-14 lg:flex-1">
        <h1 className="fixedsys typewriter z-10 mt-10 p-4 text-center md:w-[70%] text-3xl lg:text-4xl lg:w-[100%]">
          hi i&apos;m dela, an aspiring front end dev
        </h1>


        <div className="absolute flex w-full items-center justify-between">
          <div className="butterfly relative -left-0 bottom-5 h-12 w-12 transform md:left-8 md:bottom-1 md:h-16 md:w-16 lg:bottom-1 lg:-left-9">
            <Image
              src="/images/butterfly.webp"
              alt="pink butterfly"
              quality={100}
              fill
              priority
              className="scale-x-[-1]"
            />
          </div>
          <div className="butterfly relative -right-0 bottom-5 h-12 w-12 transform md:right-8 md:bottom-1 md:h-16 md:w-16 lg:bottom-1 lg:-right-9">
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
