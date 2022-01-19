import React from "react";
import Plx from "react-plx"

import MenuTitle from "./menu_title";
import Slick from "./slick";
import MenuItem from "./menuItem";

// import line from "../images/menuDrinks_lineFish.svg";
import LineDrinks from "../components/line_drinks";
import lineMobile from "../images/menuDrinks_lineMobile.svg";
import sauceRed from "../images/menuSides_sauceRed.png";
import limes from "../images/menuDrinks_limes.png";
import lemons from "../images/menuDrinks_lemons.png";




const Drinks = () => {

  const parallaxRotate = [
    {
      start:'self',
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate"
        },
      ],
    },
  ];
  
  return (
      <div className=" ">
      <MenuTitle title="DRINKS" reverse="flex-row-reverse"/>
      <div className="slickWrapMobile md:hidden  w-3/4  mx-auto mt-6 ">
      <Slick arrow="hidden">
        <MenuItem  pic="drinks1" name="COLA"  />
        <MenuItem
          pic="drinks1"
          name="COLA"
        />
      </Slick>
      </div>
      <div className="picsDiv relative  -mt-16 md:mt-16 ">
      <div className="slickWrap hidden md:block absolute w-full md:w-1/3 lg:w-1/4 -top-28  left-1/10">
      <Slick arrow="hidden" >
        <MenuItem  pic="drinks1" name="COLA"  />
        
      </Slick>
      </div>
      <div className=" hidden md:block w-1/3 ml-1/2">
          {/* <img src={line} alt="line" /> */}
          <LineDrinks/>
        </div>
        <div className=" w-3/4 mx-auto md:hidden">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className=" absolute md:hidden top-1/4 left-1/10 w-1/5 ">
          <img src={sauceRed} alt="sauceRed" />
        </div>
       
        <Plx parallaxData={parallaxRotate} className=" absolute md:hidden bottom-1/10  left-1/5  w-1/3 ">
          <img src={lemons} alt="lemons" />
        </Plx>
     
        <div className=" absolute bottom-1/5 -md:-bottom-1/10 lg:bottom-0 right-0 w-1/3 -lg:w-2/5">
          <img src={limes} alt="limes" className="" />
        </div>
      </div>
      </div>
    
  );
};

export default Drinks;
