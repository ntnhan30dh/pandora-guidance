import React, { useState }   from "react"
import "../styles/index.scss"
import '../styles/global.css';
// import { useStaticQuery, graphql } from "gatsby"

 import 'semantic-ui-css/semantic.min.css'
 
 import Login from "../components/login";
 import Logout from "../components/logout";
import Auth from "../constants/auth";

import Header from "../components/header"
import Story from "../components/story"
import What from "../components/what"
import Why from "../components/why"
import Strategy from "../components/strategy"
import Principle from "../components/principle"




const auth = new Auth();
const IndexPage = () => {

  let [isAuthenticated, setstate] = useState(auth.isAuthenticated());

  const setLoginState = () => {
    setstate(auth.isAuthenticated());
  };

  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }

    const text = {
      h2: "text-4xl md:text-6xl lg:text-8xl", 
      p: "text-lg md:text-xl lg:text-2xl",
    }
  
    const px = "px-1/10"
    if (!window) {
      require('localstorage-polyfill');
  }
  return (
    
    isAuthenticated ? <div className="pageWrapper ">    
    <head>
      <title>Pandora Guidance</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/> 
    {/* <div className="py-20">

    <Logout setLoginState={setLoginState} />
    </div> */}

    <Story/>
    <What textStyle={text} pxStyle={px}/>
    <Why textStyle={text} pxStyle={px}/>
    <Strategy textStyle={text} pxStyle={px}/>
    <Principle textStyle={text} pxStyle={px}/>  
    
    </div> : <Login setLoginState={setLoginState} /> 
  )
}

export default IndexPage
