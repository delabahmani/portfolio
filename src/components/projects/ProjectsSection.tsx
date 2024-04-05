"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-4 mb-9">
        my projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-5 pb-6 md:py-6 md:gap-10">
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
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
