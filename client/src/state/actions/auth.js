import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  AUTH_LOADING_START,
  AUTH_LOADING_STOP,
  RESET_SIGINUP_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from "../TYPE";
import { setAlert } from "./";

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  dispatch({
    type: AUTH_LOADING_START,
  });
  try {
    const apiRes = await fetch("/api/accounts/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    const data = await apiRes.json();
    if (apiRes.ok && apiRes.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      dispatch(load_user());
      dispatch({
        type: RESET_SIGINUP_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert("error", "Email or Password is not correct"));
  }
  dispatch({
    type: AUTH_LOADING_STOP,
  });
};

export const signup =
  (name, email, password, re_password) => async (dispatch) => {
    const body = JSON.stringify({ name, email, password, re_password });
    dispatch({
      type: AUTH_LOADING_START,
    });
    try {
      const apiRes = await fetch("/api/accounts/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (
        apiRes.ok &&
        apiRes.status === 201 &&
        apiRes.statusText === "Created"
      ) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: data,
        });
        dispatch(
          setAlert("success", `Verification code send to ${data.success.email}`)
        );
      } else if (apiRes.status === 400 && apiRes.statusText === "Bad Request") {
        dispatch(
          setAlert(Object.keys(data)[0], Object.values(data)[0].email[0])
        );
      }
    } catch {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert("error", "Signup fail"));
    }
    dispatch({
      type: AUTH_LOADING_STOP,
    });
  };

export const load_user = () => async (dispatch) => {
  try {
    const resp = await fetch("/api/accounts/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export const user_auth_status = () => async (dispatch) => {
  try {
    const resp = await fetch("/api/accounts/verifyuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (resp.status === 200) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
      });
      dispatch(load_user());
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const apiRes = await fetch("/api/accounts/logout", {
      method: "POST",
      headers: { Accept: "application/json" },
    });
    if (apiRes.status === 200) {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
  } catch (err) {}
  dispatch({
    type: LOGOUT_FAIL,
  });
};
