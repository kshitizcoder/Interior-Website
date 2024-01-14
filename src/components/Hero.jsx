import React from "react";
import background from "../assets/background.jpg";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";

const Hero = () => {
  const backgroundimg = {
    backgroundImage: ` url(${background})`,
    backgroundRepeat: "no-repeat",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      style={backgroundimg}
      className="hero md:container mt-6 md:mx-auto md:rounded-[2rem]  "
    >
      <div className="h-4/5 flex flex-col justify-center px-4 md:w-1/2 lg:w-[80%]">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Let Your Home Be Unique
        </h1>
        <p className="my-4 text-ternary">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <Button
          Style={
            "bg-primary flex items-center justify-center text-pure py-2 mt-5 px-5 rounded-xl w-[60%] md:w-1/2 lg:w-[22%]"
          }
          Text={"Get Started"}
          Icon={<BsArrowRight className="text-secondary text-base ms-3" />}
        />
      </div>
    </section>
  );
};

export default Hero;
