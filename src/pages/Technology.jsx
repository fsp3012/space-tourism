import React, { useState } from "react";
import data from "../assets/data";

const Technology = () => {
  const [tech] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = tech[value];
  return (
    <div className="technology">
      <section>
        <h1 className="text-white text-1xl md:text-2xl pt-32 md:text-start md:mb-20 md:ps-5 lg:ms-20">
          <span className="text-gray-600 font-bold">03 </span> SPACE LAUNCH 101
        </h1>
        <div className="lg:flex flex-row-reverse justify-between">
          <div className="lg:w-1/3">
            <img className="py-10 lg:hidden" src={images.landscape} alt="" />
            <img
              className="hidden md:hidden lg:block"
              src={images.portrait}
              alt=""
            />
          </div>
          <div className="lg:flex lg:ms-24 lg:w-1/2">
            <div className="lg:flex flex-col gap-10">
              {tech.map((item, index) => (
                <button
                  key={index}
                  // onClick={() => setValue(index)}
                  onClick={() => {
                    setValue(index);
                  }}
                  className="text-white bg-transparent border rounded-full w-14 h-14 mr-5 hover:bg-white hover:text-black"
                >
                  {item.index}
                </button>
              ))}
            </div>
            <div className="mx-2 lg:text-start">
              <p className="text-purple-100 pt-5 pb-2 md:text-xl lg:pt-0">
                THE TERMINOLOGY ...
              </p>
              <h1 className="text-white uppercase text-2xl pb-5 md:text-5xl">
                {name}
              </h1>
              <p className="text-purple-100 md:text-xl md:mx-28 lg:mx-0">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
