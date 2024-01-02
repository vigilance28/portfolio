import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" relative mt-20 md:mt-18 flex flex-col md:flex-row h-screen bg-inherit">
      {/* Left side */}
      <div className=" w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <p className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-[#7AB0C9]">Vigilance</span>
        </p>

        <p className=" font-medium lg:text-3xl sm:text-2xl xs:text-xl text-base lg:leading-40">
          I'm a coder and a student at the University of Zimbabwe.
        </p>

        <p className="my-2 text-white-100">
          I develop Machine Learning Models, User{" "}
          <br className="sm:block hidden" />
          interfaces and Web Applications
        </p>

        <button className="mt-5 h-9 md:h-12 lg:h-14 md:w-1/2 lg:w-50 mx-auto md:mx-0 bg-indigo-400 border-2  rounded-full flex items-center justify-center px-4 md:px-8 font-bold text-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-pink-100">
          Get In Touch
        </button>
      </div>

      {/* Right side */}
      <br />
      <div className="w-full md:w-1/2 bg-inherit p-6 md:flex md:items-center">
        <img
          src="/computer-sticker.png"
          alt="Computer Sticker"
          className="md:max-w-full md:h-auto mx-auto"
        />
        <br />
      </div>
    </div>
  );
};

export default Hero;
