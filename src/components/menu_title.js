import React from "react";
import Plx from "react-plx";

import fries from "../images/menu_friesIcon.png";

const MenuTitle = (props) => {
  const parallaxRight = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];

  const parallaxLeft = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];

  const reverse = props.reverse === "flex-row-reverse"

  return (
    <div
      className={`title   text-center ${reverse?'md:text-left':'md:text-right'}  md:flex items-center ${props.reverse}`}
    >
      <Plx
        parallaxData={reverse?parallaxRight:parallaxLeft}
        className={`relative bg-blue uppercase text-yellow font-bold text-sm md:text-xl lg:text-2xl py-1 md:py-2 md:w-1/3 md:-mb-4  ${reverse?'md:pl-6 lg:pl-8':'md:pr-6 lg:pr-8'}`}
      >
        {" "}
        {props.title}{" "}
      <div className={`absolute -top-6 md:top-0 ${reverse?'right-10 md:left-32 lg:left-36':'left-10 md:left-auto md:right-32'} md:h-full flex flex-col justify-center`}>
        <div className="w-16 md:w-24">
          <img src={fries} alt="fries" />
        </div>
      </div>
      </Plx>
    </div>
  );
};

export default MenuTitle;
