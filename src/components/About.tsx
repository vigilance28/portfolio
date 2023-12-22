import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import backend from "../assets/backend.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import artificialIntelligence from "../assets/artificalIntelligence.png";

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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: artificialIntelligence,
  },
];

const ServiceCard: React.FC<{ index: number; title: string; icon: string }> = ({
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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <div className="p-2 mt-3">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-[#0696a3] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {" "}
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript, Python
        and JavaScript, and expertise in frameworks like React, Django, PyTorch,
        Keras, and Three.js. I'm a fast learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="flex flex-row flex-wrap gap-10 mt-20 p-4"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
