import React from "react";
import Plx from "react-plx"

import MenuTitle from "./menu_title";
import Slick from "./slick";
import MenuItem from "./menuItem";

// import line from "../images/menuCombos_lineFish.svg";
import LineCombos from "../components/line_combos";
import lineMobile from "../images/menuCombos_lineMobile.svg";
import salt from "../images/menuCombos_salt.png";
import olive from "../images/menuCombos_olive2.png";
import tomato from "../images/menuCombos_tomato.png";
import lemonSlide from "../images/menuCombos_lemonSlide.png";
import lemons from "../images/menuCombos_lemons.png";



const Combos = () => {

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
      <div className="relative  ">
      <MenuTitle title="COMBOS" reverse="flex-row-reverse"/>
      <div className="slickWrapMobile md:hidden mt-6">
      <Slick >
      <MenuItem
          pic="combosClassicCalamariChips"
          name="Classic Calamari Chips"
        />
        <MenuItem
          pic="combosSpicyFishChips"
          name="Spicy Fish Chips"
        /> <MenuItem
          pic="combosSpicyCalamariChips"
          name="Spicy Calamari Chips"
        /> <MenuItem
          pic="combosCaptainsChoice"
          name=" Captain Choice"
        />

       <MenuItem
          pic="combosChiefMatesChoice"
          name=" Chief Mate Choice"
        />
      </Slick>
      </div>
      <div className="picsDiv relative  md:mt-16 mb-10">

      <div className="slickWrap hidden md:block absolute w-1/2 /xl:w-1/3 -top-28 left-1/10">
      <Slick >
      <MenuItem  pic="combosClassicFishChips" name="Classic Fish Chips"  />
        <MenuItem
          pic="combosClassicCalamariChips"
          name="Classic Calamari Chips"
        />
        <MenuItem
          pic="combosSpicyFishChips"
          name="Spicy Fish Chips"
        /> <MenuItem
          pic="combosSpicyCalamariChips"
          name="Spicy Calamari Chips"
        /> <MenuItem
          pic="combosCaptainsChoice"
          name=" Captain Choice"
        />

       <MenuItem
          pic="combosChiefMatesChoice"
          name=" Chief Mate Choice"
        />
      </Slick>
      </div>
      
      <div className=" hidden md:block w-3/4 mx-auto">
          {/* <img src={line} alt="line" /> */}
          <LineCombos/>
        </div>
        <div className=" w-3/4 mx-auto md:hidden">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className=" absolute top-0 md:top-1/5 -left-1/10 md:left-0 w-1/2 md:w-2/5">
          <img src={salt} alt="salt" />
        </div>
        <div  className=" hidden md:block absolute top-1/2 left-0 w-1/4">
          <img src={lemons} alt="lemons" />
        </div>
        <Plx parallaxData={parallaxRotate} className=" absolute top-2/3 md:top-2/3 lg:top-3/4 -left-1/10  md:left-1/3 w-1/4 lg:w-1/6">
          <img src={lemonSlide} alt="lemonSlide" />
        </Plx>
        <Plx parallaxData={parallaxRotate} className=" absolute top-0 md:top-1/10 right-0 /md:-right-1/10 w-1/3">
          <img src={olive} alt="olive" />
        </Plx>
        <div className=" absolute bottom-0 md:-bottom-1/10 lg:bottom-0 right-0 w-1/2 md:pb-4 lg:w-2/5">
          <img src={tomato} alt="tomato" className="" />
        </div>
      </div>
      </div>
    
  );
};

export default Combos;
