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

const Security = ({ account, acc }) => {

    function saveActivity(e) {
        if (e.target.checked) {
            Inertia.post(route("client.save-activity"), { val: 1 });
        } else {
            Inertia.post(route("client.save-activity"), { val: 0 });
        }
    }

    const [authcontent, setAuthContent] = useState(false);
    const [image, setImage] = useState(null);
    const [secret, setSecret] = useState(null);
    const [status, setStatus] = useState("");

    var data = [];

    if(image){
        let position = image.search("<svg");
        var qrimg = image.slice(position);
    }

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


    //   function handleSubmit(e) {
    //     e.preventDefault()
    //     Inertia.post(route("verifytfa"), { code: 'asdsad', secret:'asdsad' });
    //   }


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
                                    {__("security_settings")}
                                </h2>
                                <p>
                                    {__("security_settings_text")}
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
                                            {/* Security */}
                                            {__("security")}
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
                                            {/* Change Password */}
                                            {__("changepassword")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/activity"
                                            className="nav-link"
                                        >
                                            {/* Activity Log */}
                                            {__("activitylog")}
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
                                            {/* Genaral Security Options */}
                                            {__("general_security_options")}
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
                                                        {/* Save my Activities Log */}
                                                        {__("save_my_activities_log")}
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="gaps-2x"></div>
                                        <div className="sap"></div>
                                        <h5 className="user-panel-subtitle">
                                            {/* Two-Factor Security Option */}
                                            {__("two_factor_security_option")}
                                        </h5>
                                        <p>
                                            {__("two_factor_security_option_text")}
                                        </p>
                                        <div className="gaps-2x"></div>
                                        <div className="d-flex guttar-20px">
                                            <div>
                                                <span>
                                                    {/* Current Status: */}
                                                    {__("current_status")}
                                                    </span>
                                            </div>
                                            <div>
                                            {
                                            acc.google2fa_secret != null ? <span className="alert alert-xs alert-success">
                                                {/* enabled */}
                                                {__("enabled")}
                                                </span> : <span className="alert alert-xs alert-dark">
                                                    {/* Disabled */}
                                                    {__("disabled")}
                                                    </span>
                                            }

                                            </div>
                                        </div>
                                        <div className="gaps-4x"></div>

                                        {
                                            acc.google2fa_secret != null ?   <a
                                            className="ath-trigger"
                                            onClick={() => {
                                                setAuthContent(false)

                                                // Inertia.get(route("disableTwoFactor"))
                                                Inertia.visit(route("disableTwoFactor"), { method: 'get' })
                                            }}
                                        >
                                            <span className="simple-switch active"></span>
                                            {/* Disable an authenticator App */}
                                            {__("disable_authentication")}
                                        </a>
                                                :
                                                <a
                                                className="ath-trigger"
                                                onClick={() => {
                                                    setAuthContent(!authcontent)
                                                    document.querySelector('.simple-switch').classList.toggle('active')
                                                    if(!authcontent){
                                                        axios.get(route("enableTwoFactor"), {
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },

                                                        })
                                                            .then(res => {
                                                                data = res.data;
                                                                setImage(data.image)
                                                                setSecret(data.secret)
                                                            })
                                                    }


                                                    // Inertia.get(route("disableTwoFactor"))
                                                    // Inertia.visit(route("disableTwoFactor"), { method: 'get' })
                                                }}
                                            >
                                                <span className="simple-switch"></span>
                                                {/* Disable an authenticator App */}
                                                {__("enable_authentication")}
                                            </a>
                                        }




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
                                                {__("install_authentication_app")}
                                            </h5>

                                            <h5>
                                                {__("use_authenticator_app")}
                                            </h5>


                             <div dangerouslySetInnerHTML={{ __html: qrimg }} />
                                            <div className="gaps-2x"></div>
                                            <h5>
                                                {__("enter_code_generated_by_app")}

                                            </h5>
                                            <form onSubmit={(e)=>{
                                                      e.preventDefault()
                                                //  Inertia.post(route("verifytfa"),{ code: values.code, secret:secret } )

                                                axios.get(route("verifytfa"), {
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    params: {
                                                        code: values.code, secret:secret
                                                    }
                                                })
                                                    .then(res => {
                                                        data = res.data;
                                                        setStatus(res.data.status)
                                                        if(res.data.status == 'success'){
                                                            setAuthContent(false);
                                                            Inertia.visit(route("client.security"), { method: 'get' })
                                                        }
                                                    })
                                                }
                                                 }>
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
                                                            {
    status != ""?<p class="alert alert-danger">{status}</p>:""
}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary">
                                                    {/* verify */}
                                                    {__("verify")}
                                                </button>


                                            </form>
                                        </div>
                                        <div className="gaps-4x"></div>
                                        <div className="note note-plane note-danger">
                                            <FaInfoCircle className="fa" />
                                            <p>
                                                {__("regain")}
                                            </p>
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
                                                            {/* Old Password */}
                                                            {__("old_password")}
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
                                                            {/* New Password */}
                                                            {__("new_password")}
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
                                                            {/* Confirm New Password */}
                                                            {__("confirm_new_password")}
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
                                                {__("password_validation")}
                                                </p>
                                            </div>
                                            <div className="gaps-3x"></div>
                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary">
                                                    {__("update")}
                                                </button>
                                                <div className="gaps-2x d-sm-none"></div>
                                                <span className="color-success">
                                                    <FiCheckSquare />
                                                    {__("changed_password")}
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

export default Security;
