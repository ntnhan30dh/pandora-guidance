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
      <h1 className="absolute left-10 md:left-20 bottom-10 md:bottom-20 text-green text-6xl md:text-7xl p-8 //font-extrabold	">
        One platform for all customers.
      </h1>
    </section>
  );
};

export default Story;
