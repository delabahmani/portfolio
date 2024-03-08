import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Pantheras",
    description: "Digital Marketing Website",
    image: "/images/projects/panthera-landing-mock.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/delabahmani/pantheras",
    previewUrl: "https://pantheras.ca/",
  },
  {
    id: 2,
    title: "Product Design",
    description: "Product Preview Card Design",
    image: "/images/projects/product-mockup.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Quiz App",
    description: "Personalized React Quiz App",
    image: "/images/projects/quiz-mock.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/delabahmani/quiz-app-react",
    previewUrl: "https://quiz-app-react-jade.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-9">
        my projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-10 py-6">
        <button className="rounded-full border-2 border-violet-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-neutral-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
