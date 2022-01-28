import React, { useEffect } from "react";
//import { Fragment } from "react";
import Auth from '../constants/auth';

const auth = new Auth();
const Login = (props) => {
  const  loginHandle  =  async () => {
  await  auth.login();
  props.setLoginState()
  }
  useEffect( () => {
      window.gapi.load('auth2', () => {
              window.gapi.auth2.init({
              client_id: process.env.GATSBY_APP_CLIENT_ID
          }).then(() => (error) => {
            console.log(error)
           }) 
          }) 
    
  })
    return (
      
      (typeof window !== 'undefined') && <div className="h-screen w-screen flex">
        <button onClick={loginHandle} className="text-black m-auto bg-green px-10 py-4 rounded-custom"> <h2> Login</h2></button>
      </div>
    )
  
}

export default Login;