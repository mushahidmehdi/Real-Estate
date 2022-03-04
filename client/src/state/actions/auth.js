import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "../TYPE";

import { setAlert } from "./";

export const login = (email, password) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const body = JSON.stringify({ email, password });

  try {
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/token/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    dispatch(setAlert("success", "Loggin successfully"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert("error", "Email or Password is not correct"));
  }
};

export const signup =
  (name, email, password, confirm_password) => async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify({ name, email, password, confirm_password });
    try {
      const data = await axios.post(
        "http://http://127.0.0.1:8000/api/accounts/signup/",
        body,
        config
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data,
      });
      login({ email, password });
    } catch {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert("error", "Signup fail"));
    }
  };
