import React, { useState } from "react";
import {useStyle} from '../components/styleContext'

import off from "../images/off.png";
import quality from "../images/quality.png";
import obsession from "../images/obsession.png";
import platform from "../images/platform.png";
import team from "../images/team.png";
import { useData } from "./context/dataContext";


const Pilar = (props) => {
  const style = useStyle()
  const [show, setShow] = useState(props.state);
  const rotate = show ? "rotate-90" : "";
  const data = useData();
  const pilarItem =(name)=>{
    return data.data.allWpStrategy.edges.filter(p=>p.node.title===name)[0].node
   }

  const pic = {
    "Quality" : quality,
    "Consumer obsession" : obsession,
    "Global Platform" : platform,
    "Team" : team
  }
  

  return (
    <article className={`pilar relative `}>
      <div className="border-b-2 border-pink pb-6 md:my-16 md:mx-20 mt-10">
        <button
          className=" nameDiv w-full "
          onClick={() => setShow(!show)}
        >
      <div className=" relative flex items-center /justify-between /md:justify-start ">
          <div className="w-4 mx-4">
            <img
              src={off}
              alt="buttonImg"
              className={`w-full transform ${rotate}`}
            />
          </div>
          <div className="w-4/5 lg:w-full text-center lg:text-left">
          <h4 className="text-xl md:text-5xl "> {props.name}</h4>
          </div>
          
      </div>
        </button>
      </div>
     { show && <div className={`text text-center md:text-left md:flex ${style.px} ${style.text.p} my-10`}>
        <div className="md:w-2/3 md:pr-1/20 md:mt-10"
         dangerouslySetInnerHTML={{ __html:   pilarItem(props.name).titleandcontent.content }}
        
        >
        </div>
      <div className="w-1/3">
            <img
              src={pic[props.name]}
              alt= {props.name}
              className={`w-full hidden md:block `}
            />
          </div>
      </div>}
    </article>
  );
};

export default Pilar;
