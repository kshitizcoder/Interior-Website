import React, { useEffect, useState } from "react";
import { ourNews } from "../data/data";
import { IoIosArrowForward } from "react-icons/io";
const News = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    setArticle(ourNews);
  }, []);
  return (
    <section id="news" className=" blog mt-7 px-5 container mx-auto">
      <h2 className="text-primary text-xl md:text-4xl text-center font-semibold">
        Articles & News
      </h2>
      <div className="wrapper md:flex md:justify-between">
        {article.map((news, i) => {
          return (
            <div className="mt-7 md:w-[30%] xl:w-[20%]" key={i}>
              <div>
                <img
                  src={news.newsImg}
                  alt="news"
                  className="rounded-t-[10%]"
                />
              </div>
              <div className="my-5">
                <h4 className="text-primary font-semibold lg:w-3/4 xl:w-[90%]">
                  {news.title}
                </h4>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span>26 December,2022 </span>
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

export default News;
