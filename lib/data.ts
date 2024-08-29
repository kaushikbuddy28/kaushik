import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kaushikImg from "@/public/KAUSHIK1.jpg";
import kaushikImg2 from "@/public/kaushik2.jpg";
import kaushikImg3 from "@/public/kaushik3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "portfolio",
    description:
      "This project showcases my personal portfolio, where I highlight my skills, experiences, and projects. It includes interactive elements and responsive design.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind","Figma"],
    imageUrl: kaushikImg, 
  },
  {
    title: "Modern Interior Design Website",
    description:
      "A website focused on modern interior design concepts. I worked on the UI/UX design using Figma to create a visually appealing and user-friendly interface.",
    tags: ["Figma"],
    imageUrl: kaushikImg2, 
  },
  {
    title: "A sample of E-CommerceWebsite using HTML, CSS, JavaScript and API",
    description:
      "An e-commerce platform with product listings, shopping cart, and checkout, built using HTML, CSS, and JavaScript.",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: kaushikImg3, 
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Tailwind CSS",
  "Redux",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "SQL",
  "Python",
] as const;
