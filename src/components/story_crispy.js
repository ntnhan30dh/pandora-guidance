import React from "react";
import Plx from "react-plx";

import soo from "../images/soo.png";
import crispy from "../images/crispy.png";
import crispyPics from "../images/crispy_pics.png";
import crispyPicsLeft from "../images/crispyPics_left.png";
import crispyCacth from "../images/crispy_catchOfTheDay.png";
import crispyDrink from "../images/crispyDrink.png";
import crispyFries from "../images/crispyFries.png";
import crispyIconsSetMobile from "../images/crispy_iconsSetMobile.png";

import OrderNow from "../components/ordernow";

const StoryCrispy = () => {
  const parallaxScaleDown = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 35,
          endValue: 0,
          property: "translateX",

        },
      ],
    },
  ];

  const parallaxOpacity = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: -500,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];

  const parallaxOpacity1 = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 500,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];


  const parallaxMoveUp = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 50,
          endValue: -50,
          property: "translateY",
          unit: '%',
        },
      ],
    },
  ];

  return (
    <div className="crispy bg-yellow p-1/10 relative ">
      <Plx
        parallaxData={parallaxMoveUp}
        className="  absolute bottom-0 md:bottom-1/20 right-2 md:right-1/10  z-10"
      >
        <OrderNow />
      </Plx>
      <div className="top flex">
        <div className="text md:w-2/3 md:pr-1/10">
          <Plx
            parallaxData={parallaxOpacity}
            className="  w-1/2 mx-auto md:ml-0"
          >
            <img src={soo} alt="soo" />
          </Plx>
          <Plx
            parallaxData={parallaxOpacity1}
            className="w-full -mt-2 md:-mt-4 md:ml-16"
          >
            <img src={crispy} alt="crispy" />
          </Plx>
        </div>
        <div className="icons relative hidden md:block w-1/3  ">
          <div className="top flex justify-end">
            <Plx parallaxData={parallaxScaleDown} className="  w-3/4 ">
              <img src={crispyCacth} alt="crispyCacth" />
            </Plx>
            {/* <div className="  w-3/4">
                  <img
                    src={crispyCacth}
                    alt="crispyCacth"
                  />
                </div> */}
            <div className=" hidden md:block w-1/6">
              <img src={crispyDrink} alt="crispyDrink" />
            </div>
          </div>
          <div className="start-element"></div>
          <div className=" hidden md:block absolute  w-1/4 ml-1/4 -mt-10 z-10">
            <img src={crispyFries} alt="crispyFries" />
          </div>
        </div>
      </div>
      <div className="iconsSetMobile w-full mt-1/5 md:hidden">
        <img src={crispyIconsSetMobile} alt="crispyIconsSetMobile" />
      </div>
      <div className="bottom relative">
        <div className=" hidden md:block absolute w-1/5 -bottom-10 -left-10">
          <img src={crispyPicsLeft} alt="crispyPicsLeft" />
        </div>
        <div className=" text md:w-1/2 mx-auto">
          <img src={crispyPics} alt="crispyPics" />
        </div>
      </div>
    </div>
  );
};

export default StoryCrispy;
