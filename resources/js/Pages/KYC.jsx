import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import LayoutAccount from "../Layouts/LayoutAccount";
import { ImFilesEmpty } from "react-icons/im";
import { BsInfoCircle } from "react-icons/bs";

import { IoMdClose, IoMdAlarm } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

const KYC = () => {
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
                                    {/* Identity Verification - KYC */}
                                    {__("KYC_title")}
                                </h2>
                                <p>
                                    {__("KYC_text")}
                                    {/* To comply with regulation each participant will have to go
                                    through indentity verification (KYC). So please complete our
                                    fast and secure verification process to participate in our
                                    token sale. You can proceed from here to verify your indentity
                                    and also you can check your application status if you submit
                                    already. */}
                                </p>
                                <div className="gaps-2x"></div>
                                <div className="status status-empty">

                                <div className="status-icon flex center">
                                            <ImFilesEmpty
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                }}
                                            />
                                            <div className="status-icon-sm flex center">
                                                <FiAlertCircle />
                                            </div>
                                        </div>
                                    {/* <div className="status-icon">
                                        <ImFilesEmpty />
                                        <div className="status-icon-sm">
                                            <IoMdClose />
                                        </div>
                                    </div> */}
                                    <span className="status-text">
                                        {/* You have not submitted your KYC Application */}
                                        {__("KYC_upload_text")}
                                    </span>
                                    <Link
                                        href={route("client.kyc-app")}
                                        className="btn btn-primary"
                                    >
                                        {/* CLick to proceed */}
                                        {__("KYC_upload_btn")}
                                    </Link>
                                </div>
                                <div className="note note-md note-info note-plane">
                                    <BsInfoCircle />
                                    <p>
                                        {__("KYC_bottom_text")}
                                        {/* Some of contries and regions will not able to pass KYC
                                        process and therefore are restricted from token sale. */}
                                    </p>
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

export default KYC;
