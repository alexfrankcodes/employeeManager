import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Use a useState hook to handle state
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Destructure out components of formData
  const { email, password } = formData;

  // When user fills in field, update that field in the state
  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  // Handle form submission
  const onSubmit = async event => {
    event.preventDefault();
    console.log("Success");
  };

  return (
    <Fragment>
      <div className="alert alert-danger">Invalid credentials</div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign into Your Account
      </p>
      <form className="form" onSubmit={event => onSubmit(event)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={event => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={event => onChange(event)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
