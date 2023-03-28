
import React, {useState} from "react";
import {Link } from "react-router-dom";

import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function (props) {

    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

    if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/home"><button className="btn btn-primary"> Login </button></Link>
            </div>
            <p className="text-center mt-2">
              Forgot <Link to="/forgot-password">password?</Link>
              </p>
          </div>
        </form>
        <div id="cursor" className="Cursor"></div>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up!</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <Link to="/forgot-password">password?</Link>
            </p>
        </div>
      </form>
      <div id="cursor" className="Cursor"></div>
    </div>
  )
}
