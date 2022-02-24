import React from "react";
import {useStyle} from '../components/styleContext'

import what from "../images/what.png";
import brands_mobile from "../images/brands_mobile.png";
import brands from "../images/brands.png";


const What = () => {
const style = useStyle()
  return (
    <section className={`What relative bg-pink ${style.px}`} id='what'>
      <div className="text text-center md:text-left md:pt-24">
        <h2 className={`text-white ${style.text.h2} py-10`}>What is Pandora?</h2>
        <div className="w-3/4 mx-auto">
        <img src={what} alt="what" className=" w-full md:hidden" />
      </div>
      <div className="md:flex">
      <p className={`text-white p-6 ${style.text.p} my-10 md:p-0 md:w-2/3 md:pt-1/20 lg:pt-1/10 md:pr-1/20`}>
      We have a fundamental belief that a single, common consumer platform can meet our consumers' needs across a portfolio of brands and markets. We are helping Delivery Hero to consolidate learnings, avoid duplication of work, and allow teams to address a wider area of opportunities.      </p>
      <div className="w-1/3 mx-auto">
        <img src={what} alt="what" className=" w-full hidden md:block" />
      </div>
      </div>
<div className="opacity-0">hi</div>
      </div>
      <div className="brand my-10">
      <h2 className={`text-white ${style.text.h2} pt-10 mb-32 hidden  md:block`}>Our brands</h2>

      <div className="w-full mx-auto ">
        <img src={brands_mobile} alt="brands_mobile" className=" md:hidden w-full" />
        <img src={brands} alt="brands" className=" hidden w-full md:block" />
      </div>
      </div>
      <div className="opacity-0">hi</div>
    </section>
  );
};

export default What;
