import React from "react";
import LayoutAccount from "../Layouts/LayoutAccount";

const Signup = () => {
  return (
    <div className="user-ath">
      <div className="user-ath-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="user-ath-logo">
                <a href="#">
                  <img
                    src="images/logo-sm.png"
                    srcSet="images/logo-sm2x.png 2x"
                    alt="icon"
                  />
                </a>
              </div>
              <div className="user-ath-box">
                <h4>Creat New Account</h4>
                <form action="signup-success.html" className="user-ath-form">
                  {/*
                            <div className="note note-lg note-no-icon note-danger">
                                <p>Please check your submited information for error.</p>
                            </div>
                            <div className="note note-lg note-no-icon note-success">
                                <p>Your registration is succesfull, please check you email to confirm.</p>
                            </div> */}
                  <div className="input-item">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input-bordered"
                    />
                  </div>
                  <div className="input-item">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="input-bordered"
                    />
                  </div>
                  <div className="input-item">
                    <input
                      type="password"
                      placeholder="Password"
                      className="input-bordered"
                    />
                  </div>
                  <div className="input-item">
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      className="input-bordered"
                    />
                  </div>
                  <div className="input-item text-start">
                    <input
                      className="input-checkbox"
                      id="term-condition"
                      type="checkbox"
                    />
                    <label htmlFor="term-condition">
                      I agree to <a href="#">Terms</a> and{" "}
                      <a href="#"> Policy.</a>
                    </label>
                  </div>
                  <div className="gaps"></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </form>
              </div>
              <div className="gaps-2x"></div>
              <div className="form-note">
                {" "}
                Already a member? <a href="login.html">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
