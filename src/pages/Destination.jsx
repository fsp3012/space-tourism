import React, { useState } from "react";
import data from "../assets/data";

const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];
  return (
    <div className="destination px-5">
      <section>
        <h1 className="text-white text-1xl md:text-2xl pt-32 md:text-start md:mb-20 lg:ms-20">
          <span className="text-gray-600 font-bold">01 </span> PICK YOUR
          DESTINATION
        </h1>
        <div className="lg:flex items-center justify-evenly gap-3">
          <article className="lg:w-1/3">
            <img
              className="w-1/2 mx-auto mt-5 md:mb-8 animate-spin"
              src={images.png}
              alt={name}
            />
          </article>
          <article className="lg:text-start lg:w-1/3">
            {planets.map((item, index) => (
              <button
                className={`${
                  index === value ? "border-b-4" : ""
                } text-purple-100 text-1xl uppercase mr-4 mt-7 md:text-2xl hover:text-white hover:border-b-2 md:mb-8`}
                key={index}
                onClick={() => setValue(index)}
              >
                {item.name}
              </button>
            ))}
            <h1 className="text-white text-6xl md:text-8xl lg:text-8xl mt-5 mb-10 uppercase">
              {name}
            </h1>
            <p className="text-purple-100 pb-5 mb-3 border-b md:text-xl md:leading-10 lg:text-xl lg:leading-8 lg:pb-10">
              {description}
            </p>
            <div className="md:flex gap-3 items-center justify-evenly">
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-purple-100">AVG. DISTANCE</p>
                <h1 className="text-white text-4xl uppercase">{distance} </h1>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-purple-100">EST. TRAVEL TIME</p>
                <h1 className="text-white text-4xl uppercase">{travel} </h1>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Destination;
