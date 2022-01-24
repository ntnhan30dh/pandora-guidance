import React, { useState } from "react";

import off from "../images/off.png";
import quality from "../images/quality.png";
import obsession from "../images/obsession.png";
import platform from "../images/platform.png";
import team from "../images/team.png";

const Pilar = (props) => {
  const [show, setShow] = useState(props.state);

  const rotate = show ? "rotate-90" : "";

  const pic = {
    "Quality" : quality,
    "Customers’ obsession / Contextualization" : obsession,
    "Platform" : platform,
    "Team" : team
  }
  const pText = {
    "Quality": (
      <p>
        {" "}
        We strive for perfection and constantly improve our customer experience
        by shipping high-quality new products continuously and fixing broken
        windows. <br /> <br />
        Broken windows are small customer experience issues that, if multiplied,
        significantly erode the customer trust. If you encounter a broken
        window, it’s your job to fix it even if you had nothing to do with the
        broken window. <br />
        It’s our responsibility to fix it so that our customers' trust is not
        affected. <br /> <br />
        We are obsessed with shipping an experience that is easy to use,
        functional and that transpires love for the users in every single
        detail. We make sure to guide the users through screens with very smooth
        transitions, to deliver amazing moments through micro animations and
        videos, and we do all this without adding cognitive overload to the
        users or making the applications slower
      </p>
    ),
 "Customers’ obsession / Contextualization" : <p>
   We are building a global product, not just shipping a product globally. <br /> <br />

We design and build for solving customer problems. <br />
We don’t build everything for everyone.<br />
We don’t think of location as our only customer dimension. <br />
We optimise for the customer, not for the market.<br /><br />

We strive for a one-to-one relationship with each customer, enabled by a global platform.

 </p>,
     "Platform" : <p>
       Merging with platforms and launching new countries will remain a critical priority for Pandora. <br />  <br />

This global platform mentality is critical to Pandora’s architecture and future success. Thus, we should proactively prepare for more global growth through migrations and mergers.  <br />  <br />

Each successful merger increases our insights, diversity of thought within our teams, and ultimately customer value for our platform. <br />  <br />

We build a playbook and a set of products that allows every platform to merge effectively into Pandora and that will allow successful and fast new market launches.

     </p>,
     "Team" : <p>
       We are building a product that people love, and we are happy while doing it.  In order to do that, we need a great team. <br /><br />

We will need to continue growing our organisation while creating an environment where everyone can work towards their full potential. We are all involved in recruiting, and we continuously recruit to consistently bring fresh ideas and challenge the status quo. <br /><br />

We want to work with people that are willing to take on challenges, have a sense of ownership, and are comfortable with ambiguity and change. <br /><br />

We are looking to expand with talent that has had experience impacting customers at scale that has had exposure to great product culture. <br /><br />

Great teams make great products. Great individuals do not necessarily make a great team. <br /><br />

We celebrate failures and successes with the same intensity as they are the two sides of the same medal: learning.

     </p>
    
  }
  

  return (
    <article className={`pilar relative `}>
      <div className="border-b-2 border-pink pb-6 md:my-16 md:mx-20 mt-10">
        <button
          className=" nameDiv "
          onClick={() => setShow(!show)}
        >
      <div className=" relative flex items-center justify-between ">
          <div className="w-4 mx-4">
            <img
              src={off}
              alt="buttonImg"
              className={`w-full transform ${rotate}`}
            />
          </div>
          <div>

          <h4 className="text-xl md:text-5xl text-left"> {props.name}</h4>
          </div>
          
      </div>
        </button>
      </div>
     { show && <div className={`text text-center md:text-left md:flex ${props.pxStyle} ${props.textStyle.p} my-10`}>
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
