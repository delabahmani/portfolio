import Image from "next/image";
import React from "react";

interface TechnologiesProps {
  title: string;
  icon: string;
}

const Technologies = ({ title, icon }: TechnologiesProps) => {
  return (
    <div className="fixedsys flex flex-col items-center gap-4 px-5 py-3  rounded-xl text-center">
      <div className="text-y2kpink text-7xl flex items-center justify-center ">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>

      <h1 className="text-xl text-center ">{title}</h1>
    </div>
  );
};

export default Technologies;
