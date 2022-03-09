import React from "react";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import Alert from "../components/Alert";

const signup = () => {
  return (
    <div className="signup__page">
      <Header />
      <SignUp />
      <Alert />
    </div>
  );
};

export default signup;
