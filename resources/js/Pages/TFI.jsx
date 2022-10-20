import React from "react";
import { useState } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
//import BarCode from "../assets/images/eth-qr.png";
import LayoutAccount from "../Layouts/LayoutAccount";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { FiCheckSquare } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
// import Convert from 'convert-svg-react'

const TFI = ({ account, acc, image,secret }) => {

        const [values, setValues] = useState({
          code: "",
          secret: secret,
        })

        function handleChange(e) {
          const key = e.target.id;
          const value = e.target.value
          setValues(values => ({
              ...values,
              [key]: value,
          }))
        }

        function handleSubmit(e) {
          e.preventDefault()
          Inertia.post(route("verifytfa"), values)
        }



    if(image){
        let position = image.search("<svg");
        var qrimg = image.slice(position);
    }

    function saveActivity(e) {
        if (e.target.checked) {
            Inertia.post(route("client.save-activity"), { val: 1 });
        } else {
            Inertia.post(route("client.save-activity"), { val: 0 });
        }
    }

    const [authcontent, setAuthContent] = useState(image!=null ? true : false);
    // const [authcontent, setAuthContent] = useState(false);
    // if (image && secret) {
    //     setAuthContent(true)
    // }
    return (
        <div className="user-dashboard">
            <Topbar />
            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-panel">
                                <h2 className="user-panel-title">
                                    Security Settings
                                </h2>
                                <p>
                                    You can control your password and
                                    account-access setting and toos that let you
                                    safe, protect your account.
                                </p>
                                <ul
                                    className="nav nav-tabs nav-tabs-line"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href={route("client.security")}
                                        >
                                            Security
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href={route(
                                                "client.changePassword"
                                            )}
                                        >
                                            Change Password
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/activity"
                                            className="nav-link"
                                        >
                                            Activity Log
                                        </Link>
                                    </li>
                                </ul>

                                <div
                                    className="tab-content"
                                    id="security-opt-tab"
                                >
                                    <div
                                        className="tab-pane fade active show"
                                        id="security-opt"
                                    >
                                        <h5 className="user-panel-subtitle">
                                            Genaral Security Options
                                        </h5>
                                        <div className="gaps-1x"></div>
                                        <ul className="notification-list">
                                            <li className="justify-content-start guttar-16px">
                                                <div>
                                                    <input
                                                        className="input-switch"
                                                        type="checkbox"
                                                        id="activitylog"
                                                        onChange={saveActivity}
                                                        checked={
                                                            account.save_activity
                                                        }
                                                    />
                                                    <label htmlFor="activitylog"></label>
                                                </div>
                                                <div>
                                                    <span>
                                                        Save my Activities Log
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="gaps-2x"></div>
                                        <div className="sap"></div>
                                        <h5 className="user-panel-subtitle">
                                            Two-Factor Security Option
                                        </h5>

                                        {/* <link href={route("enableTwoFactor")} className='btn btn-primary'>click me</link> */}

                                        {
                                            // acc.google2fa_secret != null ? <Link className="btn btn-danger" href={route("disableTwoFactor")}> disable 2fa </Link> : <Link className="btn btn-primary" href={route("enableTwoFactor")}> activate 2fa </Link>
                                        }



                                        <p>
                                            Two-factor authentication is a
                                            method for protection your web
                                            account. When it is activated you
                                            need to enter not only your
                                            password, but also a special code.
                                            You can receive this code by in
                                            mobile app. Even if third person
                                            will find your password, then can't
                                            access with that code.
                                        </p>
                                        <div className="gaps-2x"></div>
                                        <div className="d-flex guttar-20px">
                                            <div>
                                                <span>Current Status:</span>
                                            </div>
                                            <div>
                                                <span className="alert alert-xs alert-dark">
                                        {
                                            acc.google2fa_secret != null ? 'enabled' : 'disabled'
                                        }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="gaps-4x"></div>
                                        <a
                                            className="ath-trigger"
                                            onClick={() => {
                                                // setAuthContent(true)
                                                // Inertia.get(route("disableTwoFactor"))
                                                Inertia.visit('/security', { method: 'get' })
                                            }}
                                        >
                                            <span className="simple-switch active"></span>
                                            Enable and Use an authenticator App
                                        </a>
                                        <div className="gaps-1x"></div>
                                        <div
                                            className={
                                                authcontent
                                                    ? "ath-content show"
                                                    : "ath-content"
                                            }
                                        >
                                            <div className="gaps-2x"></div>
                                            <h5>
                                                1) Install an authentication app
                                                on your device. Any app that
                                                supports the Time-based One-Time
                                                Password (TOTP) protocol should
                                                work, including:
                                            </h5>
                                            <ul className="ath-content-sublist">
                                                <li>
                                                    <a href="#">
                                                        Google Authenticator
                                                    </a>{" "}
                                                    (Android/iOS)
                                                </li>
                                                <li>
                                                    <a href="#">Authy</a>{" "}
                                                    (Android/iOS)
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Microsoft Authenticator
                                                    </a>{" "}
                                                    (Windows Phone)
                                                </li>
                                            </ul>
                                            <h5>
                                                2) Use the authenticator app to
                                                scan the barcode below.
                                            </h5>
                                            {/* <img
                                                className="ath-content-qrimg"
                                                src={qrimg}
                                                alt="qr"
                                            /> */}


                                            <div dangerouslySetInnerHTML={{ __html: qrimg }} />
                                            <div className="gaps-2x"></div>
                                            <h5>
                                                3) Enter the code generated by
                                                the authenticator app.
                                            </h5>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-item input-with-label">
                                                            <input
                                                                className="input-bordered"
                                                                type="text"
                                                                id="code"
                                                                name="code"
                                                                onChange={handleChange}
                                                                value={values.code}
                                                            />
                                                        </div>

                                                        <input type="hidden" name='secret' value={secret} />
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary">
                                                    verify
                                                </button>
                                            </form>
                                        </div>
                                        <div className="gaps-4x"></div>
                                        <div className="note note-plane note-danger">
                                            <FaInfoCircle className="fa" />
                                            <p>
                                                Important! In case of loss of
                                                access to the mobile
                                                application, you can regain it
                                                using mobile number that
                                                specified in your profile. If
                                                you don't save that, we will not
                                                able to help you to regain.
                                            </p>
                                        </div>
                                        <div className="gaps-4x"></div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span></span>
                                            <span className="color-success">
                                                {" "}
                                                <FiCheckSquare
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                />{" "}
                                                Update Settings
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane fade"
                                        id="password-opt"
                                    >
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="swalllet"
                                                            className="input-item-label"
                                                        >
                                                            Old Password
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="old-password"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="date-of-birth"
                                                            className="input-item-label"
                                                        >
                                                            New Password
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="new-password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="date-of-birth"
                                                            className="input-item-label"
                                                        >
                                                            Confirm New Password
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="re-password"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="note note-plane note-info">
                                                <FaInfoCircle className="fa" />
                                                <p>
                                                    Password should be minmum 8
                                                    letter and include lower and
                                                    uppercase letter.
                                                </p>
                                            </div>
                                            <div className="gaps-3x"></div>
                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary">
                                                    Update
                                                </button>
                                                <div className="gaps-2x d-sm-none"></div>
                                                <span className="color-success">
                                                    <FiCheckSquare />
                                                    Changed Password
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TFI;
