import React, { useState } from "react";

import pic1 from "../images/principle1.png";
import pic3 from "../images/principle2.png";
import pic2 from "../images/principle3.png";
import pic4 from "../images/principle4.png";
import pic5 from "../images/principle5.png";
import pic7 from "../images/principle6.png";
import pic6 from "../images/principle7.png";
import pic8 from "../images/principle8.png";

const Item = (props) => {
  const title = {
    1: "It’s better for us to build nothing than something *shitty.",
    2: "Understand the problem, validate your solution then scale. ",
    3: "Build something that customers need.",
    4: "Be good platform citizens and always prioritise the greatest good.",
    5: "Celebrate failed products, but kill them ",
    6: "Trust over control",
    7: "Don’t let failure or fear guide what you do",
    8: "Everyone has a voice",
  };

  const pic = {
    1: pic1,
    2: pic2,
    3: pic3,
    4: pic4,
    5: pic5,
    6: pic6,
    7: pic7,
    8: pic8,
  };

  const mainText = {
    1: "We don’t just create viable products, we create functional, loved products that don’t compromise on customer experience. We do not release final products with ‘broken windows’! When we ship it, we ship it really, really, $%cking good! ",
    2: "Don’t build for scale or global at the start. Build for creating value. Make it work for your use case, then scale. If it doesn’t prove value, we kill it.",
    3: "Be close to the customer. We don’t assume what customers want. We speak to our customers. Be specific and know who you build it for? And if it doesn’t prove value, we kill it.",
    4: "We help each other and we understand that the sum is greater than its parts. Do your part well to make the platform successful.",
    5: "If we can not measure the success of a product, we do not release the product. If the product does not solve a clear, measurable customer or business need, we kill it to keep the user experience clean and the code maintainable. Regardless of the size of the product.",
    6: "Decisions should be made by the people best equipped to make them. We believe that the more decisions the teams make, the better it is for us. Do what needs to be done, seek forgiveness later.",
    7: "We always test and tackle risks first. We fail fast and we learn from our failures. We resist the temptation to create unnecessary processes and rules… even when you have made a mistake!",
    8: "Simple. Everyone is treated equally. No one is given more conversational power than anyone else, and no one's power is diminished. We are all here to have a voice.",
  };
  return (
    <article
      className={`item relative my-16 bg-pink rounded-custom p-10  md:w-2/3  mx-auto   ${props.itemStyle}`}
    >
      <div className={`picText relative  w-1/2  mx-auto   bg-white p-6 rounded-lg lg:rounded-custom  z-20 ${props.picTextStyle}`}>
        <h5 className="text-pink text-xl lg:text-3xl text-center ">
          {title[props.name]}
        </h5>
        <div className="picDiv w-full mx-auto hidden md:block">
          <img src={pic[props.name]} alt="" className="w-full" />
        </div>
      </div>
      <div
        className={`mainText  text-white text-center lg:text-left ${props.textStyle.p}   mx-auto ${props.mainTextStyle} z-10 lg:p-10  mt-10 lg:mt-0`}
      >
        <p>{mainText[props.name]}</p>
      </div>
    </article>
  );
};

export default Item;
