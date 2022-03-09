import React from "react";
import Alert from "../components/Alert";
import Login from "../components/Login";
import Header from "../components/Header";

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
