import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout = 4000) => dispatch => {
  // Generate unique id
  const id = uuid.v4();
  // Send back payload
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  // Remove alert after 4 seconds
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
