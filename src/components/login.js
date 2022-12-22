import React from "react";
//import { Fragment } from "react";
import Auth from "../constants/auth";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const auth = new Auth();
const Login = (props) => {
  const login2handle = async (credentialResponse) =>{
    const decoded = jwt_decode(credentialResponse.credential);
    const exp = decoded.exp
    await auth.login(exp);
    props.setLoginState();
    // console.log("credentialResponse",credentialResponse);
  }
 
  return (
    typeof window !== "undefined" && (
      <div className="h-screen w-screen flex justify-center items-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            login2handle(credentialResponse)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
        
      </div>
    )
  );
};

export default Login;
