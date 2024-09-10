import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full h-full">
      <div className="relative flex-1 h-[80vh] w-[100vh]">
        <Image src="/images/hero-img.webp" alt="" quality={100} fill priority />
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        <div className="relative">
          <h1 className="text-center text-3xl fixedsys typewriter z-10">
            hi! i'm dela, an aspiring front end dev
          </h1>
          <div className="absolute top-2 -left-16 transform w-16 h-16 butterfly">
            <Image
              src="/images/butterfly.webp"
              alt="pink butterfly"
              quality={100}
              fill
              priority
            />
          </div>
          <div className="absolute -right-16 bottom-0 transform w-16 h-16 butterfly">
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
