import React from "react";

import bg from "../images/bg.png";
import bg_mobile from "../images/bg_mobile.png";

const Story = () => {
  return (
    <section className="story relative">
      <div className="w-full">
        <img src={bg} alt="bg" className="hidden md:block w-full" />
        <img src={bg_mobile} alt="bg_mobile" className="md:hidden w-full" />
      </div>
      <h1 className="absolute left-10 md:left-1/10 bottom-10 md:bottom-1/10 text-green text-6xl lg:text-9xl p-8  lg:pr-1/4	">
        One platform for all customers
      </h1>
    </section>
  );
};

export default Story;
