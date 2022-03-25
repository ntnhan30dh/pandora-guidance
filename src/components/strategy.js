import React from "react";

import {useStyle} from '../components/styleContext'
import Pilar from "../components/pilar"


const Strategy = () => {
  const style = useStyle()
  return (
    <section className={`strategy relative  `} id='strategic'>
        <h2 className={`text-white bg-pink ${style.text.h2} ${style.px} py-10 md:py-24`}>Strategic pillars</h2>
     <Pilar name="Quality" state={true}/>
     <Pilar name="Consumer obsession" state={false}/>
     <Pilar name="Global Platform" state={false}/>
     <Pilar name="Team" state={false} />

    </section>
  );
};

export default Strategy;
