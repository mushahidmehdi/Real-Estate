import React from "react";
import SignUp from "../src/components/SignUp";
import Header from "../src/components/Header";
import Alert from "../src/components/Alert";

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
