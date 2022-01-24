import React from "react";

import why from "../images/why.png";
import why_mobile from "../images/why_mobile.png";

const Why = (props) => {
  return (
    <section className="What relative bg-green" id='why'>
    <div className={`text text-center md:text-left md:pt-24 ${props.pxStyle}`}>
        <h2 className={` ${props.textStyle.h2} py-10`}>Why do we need a platform guidance? </h2>
        <div className="w-3/4 mx-auto">
        <img src={why_mobile} alt="why_mobile" className=" w-full md:hidden" />
      </div>
      <div className="md:flex ">
      <p className={`p-6 ${props.textStyle.p} my-10 md:p-0 md:w-2/3 md:pt-1/20 md:pr-1/20`}>
      Pandora continues to expand rapidly. With more customers, orders, brands, and countries. To support that, we’re rapidly growing the number of contributors on that platform. Pandora is on track to be a 2,000 people organisation by the end of 2022. <br /> <br />

To get the most out of our scale - our organisation needs to optimise for both autonomy and alignment. Autonomy is the flexibility and freedom for collections of teams to understand opportunity spaces and how to execute against them. Alignment is the clear direction and priorities of the organisation, so those teams understand the context of their role.
      </p>
      <div className="w-1/3 mx-auto">
        <img src={why} alt="why" className=" w-full hidden md:block" />
      </div>
      </div>
<div className="opacity-0">hi</div>
      </div>
    </section>
  );
};

export default Why;
