import LayoutAccount from "../Layouts/LayoutAccount";
import { BsCheck2Circle } from "react-icons/bs";
const SignupSuccess = () => {
    return (
        <body className="user-ath">
            <div className="user-ath-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8  text-center">
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
                                <div className="status status-thank">
                                    <div className="status-icon">
                                        <BsCheck2Circle />
                                    </div>
                                    <span className="status-text">
                                        Thank you! Your singup process is
                                        alomost done.
                                    </span>
                                    <p>Please check your mail and verify.</p>
                                </div>
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
        </body>
    );
};

export default SignupSuccess;
