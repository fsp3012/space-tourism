import React, { useState } from "react";
import data from "../assets/data";

const Crew = () => {
  const [astronaut] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = astronaut[value];
  return (
    <div className="crew px-5">
      <section>
        <h1 className="text-white text-1xl md:text-2xl pt-32 md:text-start md:mb-20 lg:ms-20">
          <span className="text-gray-600 font-bold">02 </span> MEET YOUR CREW
        </h1>
        <div className="md:flex flex-col-reverse lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              className="w-1/2 mx-auto mt-10 animate-pulse"
              src={images.png}
              alt={name}
            />{" "}
            <hr className="md:hidden" />
          </div>
          <div className="md:flex flex-col-reverse lg:w-1/2 lg:text-start lg:ms-20">
            <div>
              {astronaut.map((item, index) => (
                <button key={index} onClick={() => setValue(index)}>
                  {" "}
                  <span
                    className={`${
                      index === value ? "border-b-2" : ""
                    } text-gray-500 text-8xl mr-4 md:text-9xl hover:text-white`}
                  >
                    .
                  </span>
                </button>
              ))}
            </div>
            <div>
              <p className="uppercase text-lg pb-2 pt-5 text-gray-500 md:text-3xl">
                {role}
              </p>
              <h1 className="uppercase text-white text-2xl pb-5 md:text-5xl">
                {name}
              </h1>
              <p className="text-purple-100 md:text-2xl md:mx-8 lg:mx-0">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
