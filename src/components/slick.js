import Slider from "react-slick";
import React, { useRef } from "react";

import btnNext from "../images/menu_btnNext.png";
import btnPrev from "../images/menu_btnPrev.png";

const Slick = (props) => {

  const arrow = props.arrow === "hidden"?"hidden":""
  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          //centerPadding: '5%',
        },
      },
    ],
  };
  const btnStyle = "absolute  z-10 h-full flex flex flex-col justify-center";
  const arrowStyle = "w-4 xsm:w-6 lg:w-8 mt-12 md:mt-20  ";

  return (
    <div className={`relative sliderContainer  w-full /md:-mt-10`}>
      <button onClick={() => gotoNext()} className={`right-3 md:right-0 ${btnStyle} ${arrow} `}>
        <div className={arrowStyle}>
          <img src={btnNext} alt="next" />
        </div>
      </button>

      <button onClick={() => gotoPrev()} className={` left-3 md:left-0 ${btnStyle} ${arrow}`}>
        <div className={arrowStyle}>
          <img src={btnPrev} alt="prev" />
        </div>
      </button>
      <Slider {...settings} ref={customeSlider} className={` w-full`}>
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {
              next: gotoNext})   
         })} */}

      {props.children}
      </Slider>
    </div>
  );
};

export default Slick;
