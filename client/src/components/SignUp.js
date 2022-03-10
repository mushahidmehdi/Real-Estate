import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertTriangle } from "react-feather";
import { useRouter } from "next/router";
import Link from "next/link";
import { signup, setAlert } from "../state/actions";
import { PWD_REGEX } from "../config";

const SignUp = () => {
  const [signUpform, setSignUpform] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { name, email, password, re_password } = signUpform;
  const [validPassword, setValidPassword] = useState(false);
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const signup_success = useSelector((state) => state.auth.signup_success);

  const router = useRouter();
  const dispatch = useDispatch();
  const userRef = useRef();

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    const matchPassword = password === re_password;
    setValidMatchPassword(matchPassword);
  }, [password, re_password]);

  const handleOnChange = (e) => {
    setSignUpform({ ...signUpform, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (password !== re_password) {
      dispatch(setAlert("error", "Password do not match"));
    } else {
      dispatch(signup(name, email, password, re_password));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/login");
  }
  if (signup_success) {
    router.push("/login");
  }

  return (
    <>
      <section className="signup">
        <div className="signup__container">
          <h1>Register a new account</h1>
          <form onSubmit={submit}>
            <div className="signup__container__item">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={handleOnChange}
                ref={userRef}
                autoComplete="off"
                required
              />
            </div>
            <div className="signup__container__item">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={handleOnChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="signup__container__item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                minLength="8"
                autoComplete="off"
                value={password}
                onChange={handleOnChange}
                aria-describedby="passwordNote"
                required
              />
              <div
                className={
                  password && !validPassword
                    ? "signup__container__item-pwd"
                    : "signup__container__item-offscreen"
                }
                id="passwordNote"
              >
                <AlertTriangle color="red" strokeWidth={1} size={22} />
                <p>
                  Must be 6 charater long: an uppercase, lowercase and a letter.
                </p>
              </div>
            </div>
            <div className="signup__container__item">
              <label htmlFor="re_password">Confirm password</label>
              <input
                type="password"
                name="re_password"
                id="re_password"
                placeholder="Confirm Password"
                minLength="8"
                autoComplete="off"
                value={re_password}
                onChange={handleOnChange}
                aria-describedby="passwordConfirmNote"
                required
              />
              <div
                className={
                  re_password && !validMatchPassword
                    ? "signup__container__item-pwd"
                    : "signup__container__item-offscreen"
                }
                id="passwordConfirmNote"
              >
                <AlertTriangle color="red" strokeWidth={1} size={19} />
                <p>Password do not match</p>
              </div>
            </div>
            {email && validPassword && validMatchPassword && name ? (
              <div className="signup__container__item-term">
                <input type="checkbox" />

                <div className="signup__container__item-term-body">
                  <p>Terms and Conditions</p>
                  <span>
                    Please check the input to indicate that you have read and
                    agreed the sign up conditions.
                    <Link href="/"> Read More..</Link>
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="signup__container__item">
              <button
                disabled={
                  !email || !validPassword || !validMatchPassword || !name
                    ? true
                    : false
                }
              >
                Sign Up
              </button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <span>
              <strong>
                <Link href="/login">Login</Link>
              </strong>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
