import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTH_LOADING_START,
  AUTH_LOADING_STOP,
  RESET_SIGINUP_SUCCESS,
} from "../TYPE";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  signup_success: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup_success: true,
      };

    case RESET_SIGINUP_SUCCESS:
      return {
        signup_success: false,
      };

    case AUTH_LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
