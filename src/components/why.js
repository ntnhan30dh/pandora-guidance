import React from "react";

import what from "../images/what.png";
import bg_mobile from "../images/bg_mobile.png";

const What = () => {
  return (
    <section className="What relative bg-pink">
      <div className="text">
        <h2 className="text-white text-center text-4xl py-10">What is Pandora?</h2>
        <div className="w-3/4 mx-auto">
        <img src={what} alt="what" className=" w-full" />
      </div>
      <p className="text-center text-white p-6">
      Pandora continues to expand rapidly. With more customers, orders, brands, and countries. To support that, we’re rapidly growing the number of contributors on that platform. Pandora is on track to be a 2,000 people organisation by the end of 2022. <br /> <br />

To get the most out of our scale - our organisation needs to optimise for both autonomy and alignment. Autonomy is the flexibility and freedom for collections of teams to understand opportunity spaces and how to execute against them. Alignment is the clear direction and priorities of the organisation, so those teams understand the context of their role.
      </p>

      </div>
      <div className="brand">

      </div>
    </section>
  );
};

export default What;
