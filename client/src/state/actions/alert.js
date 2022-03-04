import { SET_ALERT, REMOVE_ALERT } from "../TYPE";
import { v4 as uuid } from "uuid";

export const setAlert =
  (alertType, alertMessage, timeOut = 5000) =>
  (dispatch) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { alertType, alertMessage, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeOut
    );
  };
