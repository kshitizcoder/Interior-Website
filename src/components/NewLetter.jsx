import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";

const NewLetter = () => {
  return (
    <section
      id="newsletter"
      className="contact container mx-auto mt-8 bg-primary rounded-lg text-pure py-10 px-5"
    >
      <div className="warpper text-center">
        <h2>Wanna join the interno?</h2>
        <p className="my-5">
          It is a long established fact will be distracted.
        </p>
        <div className="flex justify-center">
          <Button
            Style={
              "bg-secondary flex items-center justify-center text-pure py-2 mt-5 px-4 rounded-xl  md:w-[30%] lg:w-[20%] xl:w-[17%]"
            }
            Text={"Contact With Us"}
            Icon={<BsArrowRight className="text-primary text-base ms-3" />}
          />
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
