import React, { useState } from "react";
import "../styles/index.scss";
import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";

import { MenuProvider } from "../components/menuContext";
import { StyleProvider } from "../components/styleContext";
import Login from "../components/login";
//import Logout from "../components/logout";
import Auth from "../constants/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Header from "../components/header";
import Story from "../components/story";
import What from "../components/what";
import Why from "../components/why";
import Strategy from "../components/strategy";
import Principle from "../components/principle";

const auth = new Auth();
const IndexPage = () => {
  let [isAuthenticated, setstate] = useState(
    typeof window !== "undefined" ? auth.isAuthenticated() : false
  );

  const setLoginState = () => {
    setstate(auth.isAuthenticated());
  };

  return (
    <GoogleOAuthProvider clientId={process.env.GATSBY_APP_CLIENT_ID}>
   { isAuthenticated ?
      <div className="pageWrapper ">
        <head>
          <title>Pandora Guidance</title>
        </head>
        <MenuProvider>
          <Header />
        </MenuProvider>
        {/* <div className="py-20">
    <Logout setLoginState={setLoginState} />
  </div> */}
        <Story />
        <StyleProvider>
          <What />
          <Why />
          <Strategy />
          <Principle />
        </StyleProvider>
      </div>     
      :
  <Login setLoginState={setLoginState} />}
    </GoogleOAuthProvider>
  );
};

export default IndexPage;
