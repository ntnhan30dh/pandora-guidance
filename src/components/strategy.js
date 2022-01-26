import React from "react";
import Pilar from "../components/pilar"


import what from "../images/what.png";
import brands_mobile from "../images/brands_mobile.png";
import brands from "../images/brands.png";

const Strategy = (props) => {
  return (
    <section className={`strategy relative  `} id='strategic'>
        <h2 className={`text-white bg-pink ${props.textStyle.h2} ${props.pxStyle} py-10 md:py-24`}>Strategic pilars</h2>
     <Pilar name="Quality" state={true} pxStyle={props.pxStyle} textStyle={props.textStyle}/>
     <Pilar name="Customers’ obsession / Contextualization" state={false} pxStyle={props.pxStyle} textStyle={props.textStyle}/>
     <Pilar name="Platform" state={false} pxStyle={props.pxStyle} textStyle={props.textStyle}/>
     <Pilar name="Team" state={false} pxStyle={props.pxStyle} textStyle={props.textStyle}/>

    </section>
  );
};

export default Strategy;
