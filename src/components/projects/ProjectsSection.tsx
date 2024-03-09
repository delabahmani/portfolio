"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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
    tag: ["All", "Web", "Mobile"],
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
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-9">
        my projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-10 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
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
