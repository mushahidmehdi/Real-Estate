import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { login } from "../state/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [loginAccount, setLoginAccount] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginAccount;

  const handleOnChange = (e) => {
    setLoginAccount({ ...loginAccount, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login into your Account</h1>
        <form onSubmit={submit}>
          <div className="login__container__item">
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleOnChange}
              autoComplete="on"
              required
            />
          </div>
          <div className="login__container__item">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              minLength="6"
              autoComplete="on"
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="login__container__item">
            <button>Login</button>
          </div>
        </form>
        <p>
          Register a new account?{" "}
          <span>
            <Link href="/signup">SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
