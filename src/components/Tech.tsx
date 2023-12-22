import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import typescript from "../assets/tech/typescript.png";

const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (
  direction: string,
  type: string,
  delay?: number,
  duration?: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const techStack = [
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "docker",
    icon: docker,
  },
  {
    title: "figma",
    icon: figma,
  },
  {
    title: "git",
    icon: git,
  },
  {
    title: "html",
    icon: html,
  },
  {
    title: "javascript",
    icon: javascript,
  },
  {
    title: "mongodb",
    icon: mongodb,
  },
  {
    title: "nodejs",
    icon: nodejs,
  },
  {
    title: "reactjs",
    icon: reactjs,
  },
  {
    title: "redux",
    icon: redux,
  },
  {
    title: "tailwind",
    icon: tailwind,
  },
  {
    title: "threejs",
    icon: threejs,
  },
  {
    title: "typescript",
    icon: typescript,
  },
];

const Tech: React.FC = () => {
  const TechCard: React.FC<{ index: number; title: string; icon: string }> = ({
    index,
    title,
    icon,
  }) => (
    <Tilt {...{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-[#0696a3] p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <div className="p-2">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Tech
        </p>
        <h2 className="text-[#0696a3] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {" "}
          Technology Stack
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)} // Adjust animation properties here
        initial="hidden" // Set the initial animation state
        animate="show" // Set the target animation state
        className="flex flex-row flex-wrap gap-10 mt-20 p-4"
      >
        {techStack.map((tech, index) => (
          <TechCard key={tech.title} index={index} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
