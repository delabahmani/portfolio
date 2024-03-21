"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.Js</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>SASS</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Codecademy</li>
        <li>Udemy</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End Engineer from <span className="text-purple-500">Codecademy</span></li>
        <li>Web Development Bootcamp from <span className="text-purple-500">Angela Yu</span></li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  type Props = {
    id: string | any;
  };

  const handleTabChange = ({ id }: Props) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">about me</h2>
          <p className="text-[#ADB7BE] text-base lg:text-lg ">
            I&apos;m a passionate front-end developer based in Toronto,
            embarking on an exciting journey in the tech world. With a
            foundation in HTML, CSS, JavaScript, and a keen interest in modern
            frameworks and libraries like React, Next.js, and TailwindCSS, I
            strive to create seamless and dynamic user experiences. My skillset
            also includes TypeScript and SASS, allowing the development of
            maintainable and scalable applications. As I continue to explore and
            grow in this field, I look forward to diving into challenges and
            collaborating on projects that ignite my creativity and drive
            innovation.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange({ id: "skills" })}
              active={tab === "skills"}
            >
              Skills
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange({ id: "education" })}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange({ id: "certifications" })}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content ?? null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
