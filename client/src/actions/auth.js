import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register user
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Prepare date for POST request
  const body = JSON.stringify({ name, email, password });

  try {
    // Make POST request
    const res = await axios.post("/api/users", body, config);

    // Successful registration
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // Display all errors
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    // Unsuccessful registration
    dispatch({
      type: REGISTER_FAIL
    });
  }
};