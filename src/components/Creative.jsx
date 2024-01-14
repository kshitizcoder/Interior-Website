import React from "react";
import { IoMdCall } from "react-icons/io";
import creative from "../assets/creative.jpg";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
const Creative = () => {
  return (
    <section
      id="creative"
      className=" about mt-12 px-5 py-4 container mx-auto md:flex md:justify-between"
    >
      <div className="md:w-[45%] md:mt-20">
        <h2 className="font-semibold text-primary text-xl md:w-4/7 md:text-4xl">
          We Create The Art Of Stylish Living Stylishly
        </h2>
        <p className="my-5 text-ternary">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>

        <div className="mt-5 flex">
          <div className="p-5 rounded-full mr-5 bg-light">
            <IoMdCall className="text-secondary " />
          </div>
          <div className="no">
            <p>012345678</p>
            <span>Call Us Anytime</span>
          </div>
        </div>
        <Button
          Style={
            "bg-primary flex items-center justify-center text-pure py-2 mt-5 px-5 rounded-xl w-4/5 md:w-9/12 lg:w-[60%] xl:w-[40%]"
          }
          Text={"Get Free Estimate"}
          Icon={<BsArrowRight className="text-secondary text-base ms-3" />}
        />
      </div>
      <div className="md:w-1/2 mt-7 md:mt-0">
        <img
          className="rounded-tr-[35%] rounded-bl-[35%]"
          src={creative}
          alt="interior"
        />
      </div>
    </section>
  );
};

export default Creative;
