import React from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");
    const close = document.querySelector(".close");
    navbar.classList.toggle("open");
    close.classList.toggle("open");
  };
  return (
    <header className="header flex items-center justify-between w-full lg:flex-row">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <img
        onClick={handleClick}
        className="hamburger lg:hidden md:hidden"
        src={hamburger}
        alt=""
      />
      <nav className="navbar text-start text-white">
        <img
          onClick={handleClick}
          className="close lg:hidden md:hidden"
          src={close}
          alt=""
        />
        <ul>
          <li>
            <Link className="md:hover:border-b-2 pb-5" to="/">
              00 HOME
            </Link>{" "}
          </li>
          <li>
            <Link className="md:hover:border-b-2 pb-5" to="/destination">
              01 DESTINATION
            </Link>{" "}
          </li>
          <li>
            <Link className="md:hover:border-b-2 pb-5" to={"/crew"}>
              02 CREW
            </Link>{" "}
          </li>
          <li>
            <Link className="md:hover:border-b-2 pb-5" to={"/technology"}>
              03 TECHNOLOGY
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
