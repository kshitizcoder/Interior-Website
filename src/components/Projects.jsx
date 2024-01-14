import React, { useEffect, useState } from "react";
import { ourProjects } from "../data/data";

import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(ourProjects);
  }, []);
  return (
    <section id="projects" className="mt-7 px-5 container mx-auto">
      <h2 className="text-primary text-center text-xl font-semibold md:text-4xl">
        Follow Our Projects
      </h2>
      {/* <p className="md:w-[30%]">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p> */}
      <div className="warpper mt-7 md:flex md:justify-between md:flex-wrap ">
        {project.map((pro, i) => {
          return (
            <div className=" mb-9 md:w-[48%] xl:w-[20%] " key={i}>
              <div>
                <img
                  src={pro.projectimg}
                  className={pro.style}
                  alt="projects"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h4 className="text-primary">Modern Kitchan</h4>
                  <p className="text-ternary">Decor / Artchitecture</p>
                </div>
                <div className="rounded-full bg-light p-5">
                  <IoIosArrowForward className="text-primary" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
