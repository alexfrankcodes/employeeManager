import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType) => dispatch => {
  // Generate unique id
  const id = uuid.v4();
  // Send back payload
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
