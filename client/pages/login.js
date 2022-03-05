import React from "react";
import Alert from "../src/components/Alert";
import Login from "../src/components/Login";
import Header from "../src/components/Header";

const login = () => {
  return (
    <div>
      <Header />
      <Login />
      <Alert />
    </div>
  );
};

export default login;
