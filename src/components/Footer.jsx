import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container py-10 mt-9 px-5 mx-auto">
      <div className="wrapper md:flex md:flex-wrap md:justify-between">
        <div className="md:w-[40%] lg:w-[25%]">
          <img className="w-[40%]" src={logo} alt="logo" />
          <p className="text-ternary my-5">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="flex items-center">
            <FaFacebookF className="text-secondary text-2xl" />
            <FaInstagram className="text-secondary text-2xl mx-5" />
            <FaTwitter className="text-secondary text-2xl" />
            <FaLinkedinIn className="text-secondary text-2xl ml-5" />
          </div>
        </div>

        <div className="mt-7 md:mt-0  md:w-[30%] lg:w-[25%]">
          <h4 className="text-primary text-xl font-semibold">Pages</h4>
          <ul>
            <li className="text-ternary mt-4 ">About Us</li>
            <li className="text-ternary mt-4 ">Our Projects</li>
            <li className="text-ternary mt-4 ">Our Team</li>
            <li className="text-ternary mt-4 ">Contact Us</li>
            <li className="text-ternary mt-4 ">Services</li>
          </ul>
        </div>

        <div className="mt-7 md:mt-0  md:w-[30%] lg:w-[25%]">
          <h4 className="text-primary text-xl font-semibold">Services</h4>
          <ul>
            <li className="text-ternary mt-4 ">Kitchan</li>
            <li className="text-ternary mt-4 ">Living Area</li>
            <li className="text-ternary mt-4 ">Bathroom</li>
            <li className="text-ternary mt-4 ">Dinning Hall</li>
            <li className="text-ternary mt-4 ">Bedroom</li>
          </ul>
        </div>

        <div className="mt-7 md:mt-0  md:w-[40%] lg:w-[25%]">
          <h4 className="text-primary text-xl font-semibold">Contact</h4>

          <div className="mt-5">
            <p>55 East Birchwood Ave.</p>
            <p>Brooklyn, New York 11201 </p>
          </div>
          <div className="mt-5">
            <p>contact@interno.com</p>

            <p className="mt-3">(123) 456 - 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
