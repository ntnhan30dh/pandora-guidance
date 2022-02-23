import React from "react";
import { Link } from "gatsby"



const Story = () => {
  return (
    <section className="story relative">
      <div className=" storyDiv w-full h-screen /md:mt-20 brightness-75">
      </div>
      <div className=" absolute left-0  bottom-10 md:bottom-1/10 text-center text-white pb-20 ">
      <p> Welcome to Pandora Microsite</p>
      <h1 className="  text-6xl lg:text-9xl my-10 md:mb-20 md:w-3/4 md:mx-auto	">
        One platform for all customers
      </h1>
      <Link  to="/#what"  className=" text-white bg-pink py-3  md:py-4 px-6 md:px-8 rounded-3xl md:my-6 hover:text-green"> DISCOVER MORE </Link>
       </div>
    </section>
  );
};

export default Story;
