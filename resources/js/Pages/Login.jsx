//import Logo from "../assets/images/logo-sm.png";
import LayoutAccount from "../Layouts/LayoutAccount";

const Login = () => {
  return (
    <div className="user-ath-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8  text-center">
            <div className="user-ath-logo">
              <a href="#">
                <img src="/client/assets/images/logo-sm.png" srcSet="images/logo-sm2x.png 2x" alt="icon" />
              </a>
            </div>
            <div className="user-ath-box">
              <h4>Login to Your Account</h4>
              <form action="index.html" className="user-ath-form">
                {/* <div className="note note-lg note-no-icon note-danger">
                            <p>Your email and password is invalid.</p>
                        </div> */}

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
                <div className="gaps"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">Log in</button>
                  <a href="recovery.html" className="simple-link">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>
            <div className="gaps-2x"></div>
            <div className="form-note">
              {" "}
              Not a member? <a href="signup.html">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
