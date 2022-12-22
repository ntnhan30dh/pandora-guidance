import React from "react";
import { useData } from "./context/dataContext";


import pic1 from "../images/principle1.png";
import pic3 from "../images/principle2.png";
import pic2 from "../images/principle3.png";
import pic4 from "../images/principle4.png";
import pic5 from "../images/principle5.png";
import pic7 from "../images/principle6.png";
import pic6 from "../images/principle7.png";
import pic8 from "../images/principle8.png";

const Item = (props) => {
  const data = useData();
 // const principle = data.data.allWpPrinciple.edges.filter(p=>p.node.title==="Principle1")[0].node
 const principle =(name)=>{
  // console.log("data", data)
  return data.data.allWpPrinciple.edges.filter(p=>p.node.title===name)[0].node
 }


  const pic = {
    Principle1: pic1,
    Principle2: pic2,
    Principle3: pic3,
    Principle4: pic4,
    Principle5: pic5,
    Principle6: pic6,
    Principle7: pic7,
    Principle8: pic8,
  };


  return (
    <article
      className={`item relative my-16 bg-pink rounded-custom p-10  md:w-2/3  mx-auto   ${props.itemStyle}`}
    >
      <div className={`picText relative  w-1/2  mx-auto   bg-white p-6 rounded-lg lg:rounded-custom  z-20 ${props.picTextStyle}`}>
        <h5 className="text-pink text-xl lg:text-3xl text-center ">
          {principle(props.name).titleandcontent.title}
        </h5>
        <div className="picDiv w-full mx-auto hidden md:block">
          <img src={pic[props.name]} alt="" className="w-full" />
        </div>
      </div>
      <div
      dangerouslySetInnerHTML={{ __html:   principle(props.name).titleandcontent.content }}
        className={`mainText  text-white text-center lg:text-left ${props.textStyle.p}   mx-auto ${props.mainTextStyle} z-10 lg:p-10  mt-10 lg:mt-0`}
      >
      </div>
    </article>
  );
};

export default Item;
