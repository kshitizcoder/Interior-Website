import React, { useEffect, useState } from "react";
import Button from "./Button";
import { plan } from "../data/data";
import { BsArrowRight } from "react-icons/bs";
const Plan = () => {
  const [planning, setPlanning] = useState([]);
  useEffect(() => {
    setPlanning(plan);
  }, []);
  return (
    <section className=" container mx-auto mt-12 md:flex  px-5" id="plan">
      {planning.map((work, i) => {
        return (
          <div className="text-center mb-12 md:mb-0 lg:px-5" key={i}>
            <h3 className="text-primary font-medium">{work.title}</h3>
            <p className="my-3 ">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <Button
              Style={" flex items-center justify-center "}
              Text={"Read More"}
              Icon={<BsArrowRight className="text-secondary text-base ms-5" />}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Plan;
