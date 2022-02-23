import React from "react";
import logo from "../images/logo.png";
import { Link } from "gatsby";
import { useMenu, useMenuUpdate } from "../components/menuContext";
import Scrollspy from "react-scrollspy";

const Header = (props) => {
  const menuState = useMenu();
  const toggleMenu = useMenuUpdate();

  let menuActive = menuState ? "is-inactive" : "";
  let change = menuState ? "change p-2 pr-3" : "";
  const link = " text-base sm:text-sm md:text-xl  font-semibold	 w-full  py-6  ";
  const link1 =
    " text-base sm:text-sm md:text-xl  font-semibold	 /w-full  h-full opacity-60 hover:opacity-100 pt-4";
  const span = "my-auto  text-black  hover:text-lipstick ";
  const span1 = "my-auto  text-white   h-full  ";

  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink  ">
      <nav className="nav md:flex justify-between items-center /w-full /flex-col flex-row /md:-mb-20">
        <div className="left w-28 md:w-32 lg:w-48">
          <Link to="/" className=" ">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* desktop */}

        <Scrollspy
          className={` desktop hidden md:flex  justify-around w-3/4 h-full `}
          items={["what", "why", "strategic", "principles"]}
          currentClassName="opacity-100 border-t-4 border-white "
        >
       
            <Link to="/#what" href="what" className={link1}>
              <span className={span1}>What is Pandora?</span>
            </Link>
         
       
            <Link to="/#why" href="why" className={link1}>
              <span className={span1}>Guidance</span>
            </Link>
         
       
            <Link to="/#strategic" href="strategic" className={link1}>
              <span className={span1}>Strategic pilars</span>
            </Link>
         
       
            <Link to="/#principles" href="principles" className={link1}>
              <span className={span1}>Our Principles</span>
            </Link>
         
        </Scrollspy>

        {/* mobile  */}
        <div
          className={`mobile header_rightDiv  hidden  justify-center  h-screen absolute top-0 right-0 bg-green ${menuActive}`}
        >
          <div className=" flex flex-col px-20 pt-44 ">
            <Link
              onClick={toggleMenu}
              to="/#what"
              className={link}
              activeClassName="bg-black"
            >
              <span className={span}>What is Pandora?</span>
            </Link>
            <Link onClick={toggleMenu} to="/#why" className={link}>
              <span className={span}>Guidance</span>
            </Link>

            <Link onClick={toggleMenu} to="/#strategic" className={link}>
              <span className={span}>Strategic pilars</span>
            </Link>

            <Link onClick={toggleMenu} to="/#principles" className={link}>
              <span className={span}>Our Principles</span>
            </Link>
          </div>
        </div>
        <div
          className={`md:hidden burgerMenu  absolute top-1 md:top-4 right-4 md:right-8 z-50 ${change}`}
          onClick={toggleMenu}
          onKeyDown={props.toggleMenu}
          role="button"
          tabIndex={-1}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
