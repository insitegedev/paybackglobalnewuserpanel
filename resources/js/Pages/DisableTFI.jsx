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

const DisableTFI = ({ account, acc, err }) => {

        const [values, setValues] = useState({
          code: "",
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
          Inertia.post(route("verifyDisable"), values)
        }





    function saveActivity(e) {
        if (e.target.checked) {
            Inertia.post(route("client.save-activity"), { val: 1 });
        } else {
            Inertia.post(route("client.save-activity"), { val: 0 });
        }
    }

    const [authcontent, setAuthContent] = useState(true);
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
                                {__("security_settings")}
                                </h2>
                                <p>
                                {__("security_settings_text")}
                                </p>
                               

                                <div
                                    className="tab-content"
                                    id="security-opt-tab"
                                >
                                    <div
                                        className="tab-pane fade active show"
                                        id="security-opt"
                                    >
                                       
                                    
                                    
                                        <h5 className="user-panel-subtitle">
                                        {__("two_factor_security_option")}
                                        </h5>

                                        {/* <link href={route("enableTwoFactor")} className='btn btn-primary'>click me</link> */}

                                        {
                                            // acc.google2fa_secret != null ? <Link className="btn btn-danger" href={route("disableTwoFactor")}> disable 2fa </Link> : <Link className="btn btn-primary" href={route("enableTwoFactor")}> activate 2fa </Link>
                                        }



                                        <p>
                                        {__("two_factor_security_option_text")}
                                        </p>
                                        <div className="gaps-2x"></div>
                                        <div className="d-flex guttar-20px">
                                            <div>
                                                <span>{__("current_status")}:</span>
                                            </div>
                                            <div>
                                                <span className="alert alert-xs alert-dark">
                                        {
                                            acc.google2fa_secret != null ? __("enabled") : __("disabled")
                                        }
                                                </span>
                                            </div>
                                        </div>
                                       
                                        <div
                                            className={
                                                authcontent
                                                    ? "ath-content show"
                                                    : "ath-content"
                                            }
                                        >
                                            <div className="gaps-2x"></div>

                                            <div className="gaps-2x"></div>
                                            <h5>
                                            {__("enter_code_generated_by_app")}
                                            </h5>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-item input-with-label">
                                                            <input
                                                            required
                                                                className="input-bordered"
                                                                type="text"
                                                                id="code"
                                                                name="code"
                                                                onChange={handleChange}
                                                                value={values.code}
                                                            />
                                                        {err ? 'error' : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary">
                                                {__("disable_authentication")}
                                                </button>
                                            </form>
                                        </div>
                                        <div className="gaps-4x"></div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span></span>
                                        
                                        </div>
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

export default DisableTFI;
