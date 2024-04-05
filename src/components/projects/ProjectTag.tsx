import React from "react";

type ProjectTagProps = {
  name: string;
  isSelected: boolean;
  onClick: (tagName: string) => void;
}

const ProjectTag = ({ name, onClick, isSelected } :ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={` ${buttonStyles} rounded-full border-2 px-[1rem] py-2 cursor-pointer text-lg md:text-xl md:px-6 md:py-6`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
