import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { signup, setAlert } from "../state/actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, password, confirm_password } = signUp;

  const handleOnChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      setAlert("error", "Password Not match");
    } else {
      dispatch(signup(name, email, password, confirm_password));
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Register a New Account</h1>
        <form onSubmit={submit}>
          <div className="signup__container__item">
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={handleOnChange}
              autoComplete="on"
              required
            />
          </div>
          <div className="signup__container__item">
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
          <div className="signup__container__item">
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
          <div className="signup__container__item">
            <span>Confirm password</span>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              minLength="6"
              autoComplete="on"
              value={confirm_password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="signup__container__item">
            <button>Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
