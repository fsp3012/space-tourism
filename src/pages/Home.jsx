import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <html lang="en">
      <div>
        <section className="home px-5">
          <div className="overlay">
            <article role="home" className="lg:w-1/3 lg:mr-96">
              <h1 className="text-1xl md:text-2xl  text-purple-100">
                SO, YOU WANT TO TRAVEL TO{" "}
                <span className="block text-7xl md:text-9xl lg:text-9xl text-white mt-5 mb-10">
                  SPACE
                </span>
              </h1>
              <p className="text-purple-100 leading-loose md:w-1/2 mx-auto lg:w-full">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </article>
            <article className="mt-20">
              <button className="w-48 h-48 rounded-full bg-white text-gray-800 text-4xl lg:text-5xl animate-pulse">
                <Link to="/destination">EXPLORE</Link>
              </button>
            </article>
          </div>
        </section>
      </div>
    </html>
  );
};

export default Home;
