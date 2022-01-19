import React, { useState }   from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Header = (props) => {
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change p-2 pr-3" : ""
  const link = " text-base sm:text-sm md:text-2xl  font-semibold	 w-full  py-6  "
  const span = "my-auto  text-black  hover:text-lipstick "
  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink  ">
      <nav className="nav /flex justify-between items-center w-full flex-col flex-row md:-mb-20">
        <div className="left w-28 md:w-32 lg:w-48">
          <Link to="/" className=" " >
            <img src={logo} alt="logo" />
          </Link>
        
        </div>
        <div className= {`header_rightDiv  hidden  justify-center  h-screen absolute top-0 right-0 bg-green ${menuActive}`}>
       <div className=" flex flex-col px-20 pt-44 ">
          <Link onClick={props.toggleMenu} to="/#what" className={link} activeClassName="bg-black">
            <span className={span}>What is Pandora?</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#why" className={link}>
            <span className={span}>Why do we need a guidance</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#strategic" className={link}>
            <span className={span}>Strategic pilars</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#principles" className={link} >
            <span className={span}>Our Principles</span>
          </Link>

         
       </div>
        </div>
        <div  className={`burgerMenu  absolute top-6 right-6 z-50 ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          
        </div>
      </nav>
    </header>
  )
}

export default Header
