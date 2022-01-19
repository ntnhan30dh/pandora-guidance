import React from "react";
import Plx from "react-plx";

import cravingSomeCrunchiness from "../images/cravingSomeCrunchiness.png";
import cravingIconsSet from "../images/cravingIconsSet.png";
import cravingIconsSetMobile from "../images/craving_iconsMobile.png";
import cravingIconsSetBottomMobile from "../images/craving_iconsBottomMobile.png";
import cravingSticker from "../images/cravingSticker.png";
import cravingFruit from "../images/cravingFruit.png";

const StoryCraving = () => {
  const parallaxScaleDown = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <div className="craving bg-blue flex md:p-1/10">
      <div className="left w-full p-1/10 md:p-0">
        <div className=" md:w-3/4">
          <img src={cravingSomeCrunchiness} alt="cravingSomeCrunchiness" />
        </div>
        <div className=" w-1/2 md:hidden mx-auto /mb-6">
          <img src={cravingIconsSetMobile} alt="cravingIconsSetMobile" />
        </div>
        <p className=" leading-160  text-center md:text-left text-white font-bold leading-relaxed text-base md:text-xl my-1/10 md:mb-0 md:-mt-1/20 ">
          We’ve got the perfect catch! British-style inspired fish and chips
          from Hooked & Cooked are made with perfectly crispy coating and a
          tender, moist interior. <br /> In our offer, you will find a great
          selection of fish menus, seafood and tasty sides and dips. Fried fish
          perfection, ready for delivery and just one tap away. It will be love
          at first bite!
        </p>
        <div className=" w-1/2 md:hidden mx-auto /my-6">
          <img
            src={cravingIconsSetBottomMobile}
            alt="cravingIconsSetBottomMobile"
          />
        </div>
      </div>
      <div className="right relative hidden md:block w-1/3 lg:w-2/5 pt-1/20 pl-1/20  ">
        <div className=" w-full ">
          <img src={cravingIconsSet} alt="cravingIconsSet" />
        </div>
        <Plx parallaxData={parallaxScaleDown} className={`w-full pl-10 py-6`}>
          <img src={cravingSticker} alt="cravingSticker" />
        </Plx>
        {/* <div className=" w-full pl-10 py-6">
                  <img
                    src={cravingSticker}
                    alt="cravingSticker"
                  />
                </div> */}
        <div className=" w-12 absolute right-0">
          <img src={cravingFruit} alt="cravingFruit" />
        </div>
      </div>
    </div>
  );
};

export default StoryCraving;
