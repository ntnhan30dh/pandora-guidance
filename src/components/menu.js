import React from "react";
import Plx from "react-plx";

import areYouReadyToBeHooked from "../images/menu_areYouReadyToBeHooked.png";
import icons from "../images/menu_shrimpFries.png";
import arrow from "../images/menu_doubleArrows.png";

import Combos from "./menu_combos";
import Fries from "./menu_sides";
import Drinks from "./menu_drinks";
import OrderNow from "../components/ordernow";


const Menu = () => {
  const parallaxMoveRight = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: -25,
          endValue: 20,
          property: "translateX",
          unit: '%',
        },
      ],
    },
  ];
  return (
    <section className="overflow-hidden   relative menuContainer w-full  bg-yellow" id="menu">
      <div className="topText p-1/10 lg:p-1/20">
      <div className="top md:flex justify-center relative">
      <Plx
        parallaxData={parallaxMoveRight}className="   absolute bottom-1/10 md:-bottom-2/5 xl:-bottom-1/2 md:left-0  z-10">
        <OrderNow />
      </Plx>

      
        <div className=" w-full md:w-1/2 lg:w-1/2 ">
          <img src={areYouReadyToBeHooked} alt="areYouReadyToBeHooked" />
        </div>
        <div className="right w-full md:w-1/2 lg:w-1/3 pl-1/10 xl:pr-10 mt-4">
          <p className="text-blue font-bold text-center md:text-left md:text-xl ">
          Hooked & Cooked has the freshest British-style fish & chips ready to deliver. Go on, get yourself a taste of comfort food today!
          </p>
          <div className=" w-1/3 mx-auto md:mr-10 py-8 md:py-0 lg:py-8">
          <img src={icons} alt="icons" />
        </div>
        </div>
      </div>
      <p className="w-full text-blue font-bold text-center md:text-xl md:-mt-10">
      Check out what’s on the menu!
      </p>
      <div className="hidden md:block mx-auto w-8 pt-10">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <Combos/>
      <Fries/>
      <Drinks/>
    </section>
  );
};

export default Menu;
