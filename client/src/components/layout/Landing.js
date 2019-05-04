import React from "react";
import { Link } from "react-router-dom";

// Landing page w/ option to login or sign up
const Landing = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Welcome to EmStar</h1>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-light">
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
