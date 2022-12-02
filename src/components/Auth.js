import React, { useState } from "react";
import SignIn from './SignIn';
import SignUp from "./SignUp";
import './Auth.css';


const Auth = () => {
    let [authMode, setAuthMode] = useState('signin')

    const toSignIn = () => setAuthMode('signin');

    const toSignUp = () => setAuthMode('signup');
  
    if (authMode === "signin") {
      return (
        <SignIn onChangeAuthMode={toSignUp}></SignIn>
      );
    }
    
    return (
        <SignUp onChangeAuthMode={toSignIn}></SignUp>
    );
};

export default Auth;
