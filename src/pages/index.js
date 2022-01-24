import React, { useState }   from "react"
import "../styles/index.scss"
import '../styles/global.css';
// import { useStaticQuery, graphql } from "gatsby"

 import 'semantic-ui-css/semantic.min.css'


import Header from "../components/header"
import Story from "../components/story"
import What from "../components/what"


// const codeStyles = {
//   //color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const IndexPage = () => {

  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }

    const text = {
      h2: "text-4xl md:text-6xl lg:text-8xl", 
      p: "text-lg md:text-xl lg:text-3xl",
    }
  
    const px = "px-1/10"
  return (
    <div className="pageWrapper ">
    <head>
      <title>Pandora Guidance</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
   
    <Story/>
    <What textStyle={text} pxStyle={px}/>
   
   
    </div>
    
  )
}

export default IndexPage
