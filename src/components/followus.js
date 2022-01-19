import React from "react";
import { Link } from "gatsby";

import logo from "../images/followUs_logo.png";

const FollowUs = () => {
  const li = " font-bold text-blue text-xs ";
  const liStyle = {
    letterSpacing: "0.14em",
  };
  return (
    <section className="followUs bg-white md:flex items-center md:py-14 " id="followus">
      <div className="icon w-32 mx-auto pt-6 ">
        <img src={logo} alt="logo" />
      </div>

      <Link to="/" className="md:w-1/3">
        <h1 className="text-blue font-bold text-center my-8 ">FOLLOW US</h1>
      </Link>
      <ul className="w-full md:w-1/3 text-center mb-6 sm:my-0">
        <li>
          {" "}
          <Link to="/imprint" className={li} style={liStyle}>
            Imprint
          </Link>
        </li>
        <li>
        <li>
          <Link to="/privacy" className={li} style={liStyle}>
          Privacy Policy
          </Link>
        </li>
          <Link to="/disclaimer" className={li} style={liStyle}>
          Disclaimer
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default FollowUs;
