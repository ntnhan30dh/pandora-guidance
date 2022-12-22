import React from "react";
import {useStyle} from '../components/styleContext'
import { useData } from "./context/dataContext";


import why from "../images/why.png";
import why_mobile from "../images/why_mobile.png";

const Why = () => {
  const style = useStyle()
  const data = useData();
  const page = data.data.allWpPage.edges.filter(page=>page.node.title==="Guidance")[0].node

  return (
    <section className="What relative bg-green" id='why'>
    <div className={`text text-center md:text-left md:pt-24 ${style.px}`}>
        <h2 className={` ${style.text.h2} py-10`}>Why do we need platform guidance? </h2>
        <div className="w-3/4 mx-auto">
        <img src={why_mobile} alt="why_mobile" className=" w-full md:hidden" />
      </div>
      <div className="md:flex ">

      <p  dangerouslySetInnerHTML={{ __html: page.content }} className={`p-6 ${style.text.p} my-10 md:p-0 md:w-2/3 md:pt-1/20 md:pr-1/20`}>
      {/* Why do we need platform guidance? <br /> <br />
      With more consumers, orders, brands, and countries, we’re rapidly growing the number of contributors on the global consumer platform. Pandora is on track to be a 1,500 people organisation by the end of 2022. <br /> <br />
      To get the most out of our scale, we need to optimise for both autonomy and alignment. Autonomy is the flexibility and freedom for teams to understand opportunities and be empowered to solve them. Alignment is the clear direction and priorities of the organisation, so those teams understand the context of their role. */}
    
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
