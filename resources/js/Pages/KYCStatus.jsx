import React from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";

import { IoMdClose, IoMdAlarm } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import { FiAlertCircle } from "react-icons/fi";
import { Route } from "react-router-dom";

const KYCStatus = ({ account }) => {
    const { flash } = usePage().props;
    let type = ""

    console.log(account);
    return (
        <body className="user-dashboard">
            <Topbar />
            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-panel">
                                <h2 className="user-panel-title">
                                    {/* Status - KYC */}
                                    {__("kyc_status")}
                                </h2>
                                <p>
                                    {/* To comply with regulation each participant will have to go
                  through indentity verification (KYC). So please complete our
                  fast and secure verification process to participate in our
                  token sale. You can proceed from here to verify your indentity
                  and also you can check your application status if you submit
                  already. */}
                                    {__("kyc_status_text")}
                                </p>
                                <div className="gaps-2x"></div>
                                {flash.success ? (
                                    <div className="status status-thank">
                                        <div className="status-icon flex center">
                                            <ImFilesEmpty
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                }}
                                            />
                                            <div className="status-icon-sm flex center ">
                                                <IoMdAlarm />
                                            </div>
                                        </div>
                                        <span className="status-text">
                                            {/* Thank you! You have completed the process for your Identity
                                        verification. */}
                                            {__("kyc_success")}
                                        </span>
                                        <p>
                                            {/* We are still waiting for your identity verification. Once
                                        our team verified your indentity, you will be whitelisted
                                        and notified by email. */}
                                            {__("kyc_fail")}
                                        </p>
                                    </div>
                                ) : null}
                                {account.verification_status != "verified"? (
                                    // <div className="status status-process">
                                    //     <div className="status-icon flex center">
                                    //         <ImFilesEmpty
                                    //             style={{
                                    //                 width: "36px",
                                    //                 height: "36px",
                                    //             }}
                                    //         />
                                    //         <div className="status-icon-sm flex center">
                                    //             <IoMdAlarm />
                                    //         </div>
                                    //     </div>
                                    //     <span className="status-text">
                                    //         {/* Your Application under Process for Varification. */}
                                    //         {__(
                                    //             "kyc_your_application_under_process"
                                    //         )}
                                    //     </span>
                                    //     <p>
                                    //         {/* We are still working on your identity verification. Once our
                                    //     team verified your indentity, you will be whitelisted and
                                    //     notified by email. */}
                                    //         {__(
                                    //             "kyc_we_are_still_working_on_your_identity"
                                    //         )}
                                    //     </p>
                                    // </div>
                                    ""
                                ) : null}
                                {account.verification_status === "verified" ? (
                                    <div className="status status-verified">
                                        <div className="status-icon flex center">
                                            <ImFilesEmpty
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                }}
                                            />
                                            <div className="status-icon-sm flex center">
                                                <BsCheck2Circle />
                                            </div>
                                        </div>
                                        <span className="status-text">
                                            {/* Your Identity Verified. */}
                                            {__("kyc_your_identity_verified")}
                                        </span>
                                        <p>
                                            {/* One fo our team verified your indentity. */}
                                            {__("kyc_veridied_account")}
                                            <br className="d-none d-md-block" />
                                            {/* You are now in whitelisted for token sale. */}
                                            {__(
                                                "kyc_you_are_now_in_whitelisted"
                                            )}
                                        </p>
                                        <div className="gaps-2x"></div>
                                        {account.verification_status !=
                                        "verified" ? (
                                            <Link
                                                href="/kyc-app"
                                                className="ucap"
                                            >
                                                {" "}
                                                {__("kyc_resubmit_application")}
                                            </Link>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                ) : null}
                                {account.verification_status === "reject" ? (
                                    // <div className="status status-canceled">
                                    //     <div className="status-icon flex center">
                                    //         <ImFilesEmpty
                                    //             style={{
                                    //                 width: "36px",
                                    //                 height: "36px",
                                    //             }}
                                    //         />
                                    //         <div className="status-icon-sm flex center">
                                    //             <IoMdClose />
                                    //         </div>
                                    //     </div>
                                    //     <span className="status-text">
                                    //         {/* Your application rejected by admin. */}
                                    //         {__(
                                    //             "kyc_your_application_rejected"
                                    //         )}
                                    //     </span>
                                    //     <p>
                                    //         {/* In our verification process, we found information incurrect.
                                    //     It would great if you resubmit the form. If face problem in
                                    //     submission please contact us with support team. */}
                                    //         {__(
                                    //             "kyc_found_information_incorrect"
                                    //         )}
                                    //     </p>
                                    //     <Link
                                    //         to={route("client.kyc-app")}
                                    //         className="btn btn-primary"
                                    //     >
                                    //         {/* Resubmit */}
                                    //         {__("kyc_resubmit")}
                                    //     </Link>
                                    // </div>
                                    ""
                                ) : null}

                                {account.verification_status === "miss" ? (
                                    <div className="status status-warnning">
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
                                        <span className="status-text">
                                            {/* We found some information missing in application. */}
                                            {__("kyc_some_information_missing")}
                                        </span>
                                        <p>
                                            {/* In our verification process, we found information are
                                        missing. It would great if you resubmit the form. If face
                                        problem in submission please contact us with support team. */}

                                            {__(
                                                "kyc_some_information_missing1"
                                            )}
                                        </p>
                                        <Link
                                            href={route("client.kyc-appp")}
                                            className="btn btn-primary"
                                        >
                                            {/* Submit Again */}
                                            {__("kyc_submit_again")}
                                        </Link>
                                    </div>
                                ) : null}

<ul>
    {account.files.map((item, index) => {
        console.log(item);
        if(item.type == 3){
           type = __("driving_license")
        }else if(item.type == 4){
            type = __("passport")
        }else if(item.type == 5){
            type = __("id_front")
        }else{
            type = __("id_back")
        }

        return (
            <>
                                            <li>
                                                <span>{++index} :  </span>
                                            <a
                                                href={
                                                    "/" +
                                                    item.path +
                                                    "/" +
                                                    item.title
                                                }
                                                target="_blank"
                                            >
                                                {item.title.slice(0, 10)} - (Type :{" "}
                                                {type})
                                            </a>
    </li>
                                            </>
                                        );
                                    })}
</ul>
                                {/* <div>

                                </div> */}

                                <div className="note note-md note-info note-plane">
                                    {/* <em className="fas fa-info-circle"></em> */}
                                    <p>
                                        {/* Some of contries and regions will not able to pass KYC
                                        process and therefore are restricted from token sale. */}
                                        {__(
                                            "kyc_some_contries_willnt_able_to_pass"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    );
};

export default KYCStatus;
