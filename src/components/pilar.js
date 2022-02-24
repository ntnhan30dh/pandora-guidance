import React, { useState } from "react";
import {useStyle} from '../components/styleContext'

import off from "../images/off.png";
import quality from "../images/quality.png";
import obsession from "../images/obsession.png";
import platform from "../images/platform.png";
import team from "../images/team.png";

const Pilar = (props) => {
  const style = useStyle()
  const [show, setShow] = useState(props.state);
  const rotate = show ? "rotate-90" : "";

  const pic = {
    "Quality" : quality,
    "Customer obsession" : obsession,
    "Platform" : platform,
    "Team" : team
  }
  const pText = {
    "Quality": (
      <p>
      We constantly improve our customer experience by delivering high-quality products and fixing broken windows. <br /> <br />

Broken windows are small customer experience issues that, if multiplied, significantly erode customer trust. If you encounter a broken window, it’s our responsibility to fix it so that our consumers' trust is not affected. <br /> <br />

We are obsessed with shipping an experience that is easy to use, functional and transpires love for the user in every detail. We make sure to guide users through screens with very smooth transitions, to deliver amazing moments through micro animations and videos, and we do all this without adding cognitive overload to the users or making the applications slower. 
      </p>
    ),
 "Customer obsession" : <p>
   <ul className="list-disc">
     <li>
   We are building a global product, not just shipping a product globally.
     </li>
     <li>
We design and build to solve customer problems. 
     </li>
     <li>
We don’t build anything for anyone.
     </li>
     <li>
We don’t think of location as our only customer dimension. 
     </li>
     <li>
We optimise for the customer, not for the market.
     </li>
     <li>
We strive for a one-to-one relationship with each customer, enabled by a global platform.
     </li>
   </ul>



 </p>,
     "Platform" : <p>
       Merging with platforms and launching new countries will remain a critical priority for Pandora. <br />  <br />

This global platform mentality is critical to Pandora’s architecture and future success. Thus, we should proactively prepare for more global growth through migrations and mergers.  <br />  <br />

Each successful merger increases our insights, diversity of thought within our teams, and ultimately customer value for our platform. <br />  <br />

We build a playbook and a set of products that allows every platform to merge effectively into Pandora and that will allow successful and fast new market launches.

     </p>,
     "Team" : <p>
      We are building an awesome product that people love, and for us to continue growing, we are looking for more awesome teammates to join us on our mission. <br /> <br />
      We are on the hunt for innovative people with fresh ideas who challenge the status quo. We want teammates who take on challenges, strive for a sense of ownership and are comfortable dealing with ambiguity and change. <br /> <br />
      In our supportive work environment you will be encouraged to celebrate failures as well as successes, as they both take an equally important role of shaping our path. <br /> <br />
      It’s true what they say, great teams make great products! 

     </p>
    
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
        <div className="md:w-2/3 md:pr-1/20 md:mt-10">
        { pText[props.name]}
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
