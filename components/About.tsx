import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex w-screen h-screen fixedsys mt-10">
      <div className="relative flex-1 flex justify-end">
      <div className=" items-center justify-center flex-col flex lg:max-w-[70vh] ">
        <h1 className="text-4xl">a lil about me</h1>

        <div className="text-center text-xl w-full mt-4 px-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            ligula non ante hendrerit condimentum. Vivamus consectetur justo at
            libero tempor molestie. Integer id arcu ac augue laoreet molestie.
            Fusce tempor ultricies tempor. Morbi elit neque, pulvinar non
            condimentum a, congue ut elit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam
            interdum nulla ac ante accumsan iaculis.
          </p>
        </div>
      </div>
      </div>

      <div className="relative flex-1 w-1/2 flex justify-start">
        <div className="relative w-[60vh] h-[90vh]">
          <Image
            src="/images/about-img.webp"
            alt=""
            quality={100}
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
