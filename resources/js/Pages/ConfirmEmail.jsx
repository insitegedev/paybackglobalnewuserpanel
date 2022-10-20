//import Logo from "../assets/images/logo-sm.png";


const ConfirmEmail = () => {
  return (
    <body className="user-ath">
      <div className="user-ath-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="user-ath-logo">
                <a href="#">
                  <img src="/client/assets/images/logo-sm.png" srcSet="images/logo-sm2x.png 2x" alt="icon" />
                </a>
              </div>
              <div className="user-ath-box">
                <div className="note note-no-icon note-success">
                  <p>Your email is successfully verified.</p>
                </div>
                <div className="gaps-2x"></div>
                <span className="small-heading">You can Login Now</span>
                <a href="login.html" className="btn btn-primary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ConfirmEmail;
