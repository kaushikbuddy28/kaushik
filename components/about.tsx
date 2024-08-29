"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello, I'm <span className="font-bold">Kaushik Chaturvedi</span>. I aim to enhance my professional skills, capabilities, and knowledge in an organization that values hard work and trusts me with responsibilities and challenges. With a background in{" "}
        <span className="font-medium">Android deployment</span> and{" "}
        <span className="font-medium">Artificial Intelligence and Machine Learning</span>, I have gained practical experience through internships at Wayspire and IBM. Currently pursuing a B.Tech in information Technology from Silver Oak University, I am passionate about{" "}
        <span className="italic">Java & AI</span> and skilled in{" "}
        <span className="underline">Front-End Technologies</span>. My core stack includes{" "}
        <span className="font-medium">React.js, Tailwind CSS, Material-UI (MUI)</span>, and I am proficient in{" "}
        <span className="font-medium">SQL and MongoDB</span>. I am always open to new opportunities and excited about{" "}
        <span className="font-medium">#TechEvolution</span>.
      </p>

      <p>
        I have worked on several projects, including designing a responsive{" "}
        <span className="font-medium">Modern Interior Design Website</span> using Figma and developing a <span className="font-medium">Personal Portfolio Website</span> using HTML, CSS, and JavaScript. My skills also include{" "}
        <span className="font-medium">HTML, CSS, Figma, Adobe Photoshop,</span> and{" "}
        <span className="font-medium">Adobe Illustrator</span>. I also hold a Diploma in Computer Application, which covered a range of programming and software skills.
      </p>

      <p>
        Outside of programming, I enjoy exploring new technologies and enhancing my knowledge. I am a firm believer in{" "}
        <span className="italic">continuous learning</span> and{" "}
        <span className="font-medium">adaptability</span>, which I consider crucial in the ever-evolving tech landscape. I am currently learning more about{" "}
        <span className="font-medium">UI/UX design</span> and <span className="font-medium">Android development</span>.
      </p>
    </motion.section>
  );
}
