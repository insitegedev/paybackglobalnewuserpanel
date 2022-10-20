import LayoutAccount from "../Layouts/LayoutAccount";
import { BsArrowRightShort } from "react-icons/bs";

const Recovery = () => {
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
                                <h4>Request Your Password</h4>
                                <form action="#" className="user-ath-form">
                                    {/* <div className="note note-lg note-no-icon note-danger">
                                <p>There is no account with this email.</p>
                            </div>
                            <div className="note note-lg note-no-icon note-success">
                                <p>Password recovery instruction sent to your email, Please check.</p>
                            </div> */}

                                    <div className="input-item">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="input-bordered"
                                        />
                                    </div>
                                    <div className="gaps"></div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-primary">
                                            Reset
                                        </button>
                                        <span>
                                            {" "}
                                            <a
                                                href="login.html"
                                                className="simple-link"
                                            >
                                                <BsArrowRightShort /> Login Here
                                            </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="gaps-2x"></div>
                            <div className="form-note">
                                {" "}
                                Not a member?{" "}
                                <a href="signup.html">Sign up now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recovery;
