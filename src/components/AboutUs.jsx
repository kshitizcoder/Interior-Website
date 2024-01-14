import React, { useEffect, useState } from "react";
import { aboutUs } from "../data/data";
const AboutUs = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    setAbout(aboutUs);
  }, []);
  return (
    <section
      id="about-us"
      className="container px-5 bg-light mt-8 py-8 mx-auto rounded-lg"
    >
      <h2 className="text-center text-xl font-semibold md:text-4xl ">
        What the People Thinks About Us
      </h2>
      <div className="warpper md:flex md:justify-between md:flex-wrap">
        {about.map((about, i) => {
          return (
            <div
              className="mt-4 px-5 bg-pure py-8 text-center rounded-lg md:w-[48%] lg:w-[30%] md:text-left "
              key={i}
            >
              <div className="flex flex-col items-center my-6 md:flex-row">
                <div className="">
                  <img src={about.img} alt={about.name} />
                </div>
                <div className="ml-4 mt-5">
                  <h3 className="text-primary">{about.name}</h3>
                  <p className="text-ternary">{about.location}</p>
                </div>
              </div>
              <p className="text-ternary">
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
