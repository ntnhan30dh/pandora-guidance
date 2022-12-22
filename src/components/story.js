import React from "react";
import { Link } from "gatsby"



const Story = () => {
  return (
    <section className="story relative">
      <div className=" storyDiv w-full h-screen /md:mt-20 brightness-75">
      </div>
      <div className=" absolute left-0  bottom-10 md:bottom-1/10 text-center text-white pb-20 w-full ">
      <p className="bold"> Welcome to Pandora Microsite</p>
      <h1 className="  text-6xl lg:text-9xl my-10 md:mb-20 md:w-3/4 md:mx-auto	max-w-1200">
        One platform for all consumers
      </h1>
      <Link  to="/#what"  className=" text-white bg-pink py-3  md:py-6 px-6 md:px-10 rounded-custom md:my-8 hover:text-green tracking-widest font-bold"> DISCOVER MORE </Link>
       </div>
    </section>
  );
};

export default Story;
