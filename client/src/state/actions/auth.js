import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
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
    console.log(data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    dispatch(setAlert("success", "Loggin successfully"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert("error", "Email or Password is not correct"));
  }
};

export const signup =
  (name, email, password, confirm_password) => async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const body = JSON.stringify({ name, email, password, confirm_password });
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/accounts/signup/",
        body,
        config
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data,
      });
      dispatch(setAlert(Object.keys(data)[0], Object.values(data)[0]));
      if (Object.keys(data)[0] !== "error") {
        window.location.replace("/login");
        return;
      }
    } catch {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert("error", "Signup fail"));
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
