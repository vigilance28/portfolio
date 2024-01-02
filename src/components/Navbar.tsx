import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },

    {
      id: "blog",
      title: "Blog",
    },
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex fixed top-0 sm:px-16 px-6 py-5 items-center z-20 ${
        scrolled ? "bg-inherit/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className=" w-9 h-9 object-contain" />
          <p className=" text-[18px] font-bold cursor-pointer">
            Vigilance Nyoni &nbsp;
          </p>
          <span className="sm:block hidden text-[18px] font-bold">
            {" "}
            | Portfolio{" "}
          </span>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[18px] transition duration-300 hover:text-[20px] hover:font-bold ${
                active === nav.title
                  ? "underline underline-offset-2"
                  : "text-inherit"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>{" "}
        <div className="sm:hidden flex flex-1 items-center justify-end">
          <input
            className="hidden"
            type="checkbox"
            onChange={() => setToggle(!toggle)}
            checked={toggle}
          />
          <label className="btn btn-circle swap swap-rotate">
            {/* DaisyUI close icon */}
            <svg
              className={`${toggle ? "block" : "hidden"} fill-current w-5 h-5`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setToggle(!toggle)}
            >
              <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>

            {/* DaisyUI hamburger icon */}
            <svg
              className={`${toggle ? "hidden" : "block"} fill-current w-5 h-5`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setToggle(!toggle)}
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>

          {/* hamburger menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute border opacity-100 bg-gradient-to-r shadow-md backdrop:blur-sm top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className=" list-none flex justify-end items-start flex-1 flex-col gap-4 ">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-bold  cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "underline underline-offset-2"
                      : "text-inherit"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
