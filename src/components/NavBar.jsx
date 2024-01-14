import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";
const NavBar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar  container py-2 px-8 mx-auto flex justify-between items-center">
      <div className="logo">
        <img className=" w-1/2 md:w-1/4 xl:w-4/6" src={logo} alt="logo" />
      </div>
      <ul
        className={
          Mobile
            ? " py-5 absolute transition-all  ease-in-out flex flex-col items-center left-0 top-[7%] w-full bg-pure"
            : " hidden lg:flex  md:w-full md:items-center md:justify-end "
        }
        onClick={() => setMobile(false)}
      >
        <Link to="/" className=" mt-9 md:mt-0 md:mr-9 ">
          <li>Home</li>
        </Link>
        <Link to="/about" className=" mt-9 md:mt-0 md:mr-9">
          <li>About</li>
        </Link>
        <Link to="/services" className="mt-9 md:mt-0 md:mr-9">
          <li>Projects</li>
        </Link>
        <Link to="/projects" className="mt-9 md:mt-0 md:mr-9">
          <li>Blog</li>
        </Link>
        <Link to="/contact" className="mt-9 md:mt-0 md:mr-9">
          <li>Conatct</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon " onClick={() => setMobile(!Mobile)}>
        {Mobile ? (
          <ImCross className="lg:hidden" />
        ) : (
          <FaBars className="lg:hidden" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
