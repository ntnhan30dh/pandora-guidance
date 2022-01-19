import React from "react";
import Plx from "react-plx";

import MenuTitle from "./menu_title";
import Slick from "./slick";
import MenuItem from "./menuItem";
// import OrderNow from "../components/ordernow";


//import line from "../images/menuSides_lineFish.svg";
import LineSlides from "../components/line_sides";
import lineMobile from "../images/menuSides_lineMobile.svg";
import chili from "../images/menuSides_chili.png";
import chiliMobile from "../images/menuSides_chiliMobile.png";
import sauceYellow from "../images/menuSides_sauceYellow.png";
import sauceRed from "../images/menuSides_sauceRed.png";
import parsley from "../images/menuSides_parsley.png";
import onion from "../images/menuSides_onion.png";
import cucumber from "../images/menuSides_cucumber2.png";

const Sides = () => {
  const parallaxRotate = [
    {
      start: "self",
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate",
        },
      ],
    },
  ];

  return (
    <div className="relative  ">
    {/* <div className="  absolute top-3/4 md:top-1/2 right-1/2  z-10">
        <OrderNow />
      </div> */}
      <MenuTitle title="Sides" reverse="flex-row" />
      <div className="w-full md:flex justify-end md:pr-1/5">
        <div className="slickWrapMobile md:hidden mt-6">
          <Slick>
          <MenuItem pic="sidesFries" name="FRIES" />
            <MenuItem pic="sidesColeslaw" name="Coleslaw" />
            <MenuItem pic="sidesRise" name="Rice" />
            <MenuItem pic="sidesGarlicMayo" name="Garlic Mayo" />
          </Slick>
        </div>
      </div>
      <div className="picsDiv relative  md:mt-16  mb-8  ">

      <div className="slickWrap hidden md:block absolute -top-28 w-1/2 lg:w-1/3 right-1/10 lg:right-1/5 ">
          <Slick>
            <MenuItem pic="sidesFries" name="FRIES" />
            <MenuItem pic="sidesColeslaw" name="Coleslaw" />
            <MenuItem pic="sidesRise" name="Rice" />
            <MenuItem pic="sidesGarlicMayo" name="Garlic Mayo" />
          </Slick>
        </div>
        <div className=" hidden md:block w-3/4 mx-auto">
          {/* <img src={line} alt="line" /> */}
         <LineSlides/>

        </div>
        <div className=" w-3/4 mx-auto md:hidden">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className="hidden md:block absolute md:top-0 md:left-0 w-1/5 md:w-1/6 ">
          <img src={chili} alt="chili" />
        </div>
        <div className=" absolute md:hidden top-0 md:top-1/5 -left-1/10 md:left-0 w-1/2 md:w-2/5">
          <img src={chiliMobile} alt="chili" />
        </div>
        <div className=" absolute w-1/6 top-1/3 md:top-0 left-1/2 md:left-auto md:right-0">
          <img src={cucumber} alt="cucumber" />
        </div>

        <Plx
          parallaxData={parallaxRotate}
          className=" absolute top-0 md:top-3/5 right-0 md:right-auto md:left-1/5 w-1/3 md:w-1/6"
        >
          <img src={sauceYellow} alt="sauceYellow" />
        </Plx>
        <Plx
          parallaxData={parallaxRotate}
          className=" hidden md:block absolute bottom-0 right-0 left-6 w-1/6"
        >
          <img src={sauceRed} alt="sauceRed" />
        </Plx>
        <div className=" absolute  bottom-1/10 md:bottom-1/5 right-0 md:right-1/4 w-1/3 md:w-1/4">
          <img src={parsley} alt="parsley" className="" />
        </div>
        <div className=" hidden md:block absolute w-1/5 md:w-1/6 right-0 bottom-1/20">
          <img src={onion} alt="onion" className="" />
        </div>
      </div>
    </div>
  );
};

export default Sides;
