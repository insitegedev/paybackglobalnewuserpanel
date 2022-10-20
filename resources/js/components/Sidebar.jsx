import React from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import avatar from "../assets/images/user-thumb-lg.png";
import {
    AiOutlineDashboard,
    AiOutlineFile,
    AiOutlineUser,
    AiOutlineLock,
} from "react-icons/ai";
import { IoShuffleOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
    const { pathname, account, acc } = usePage().props;
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <a
                href="#"
                onClick={() => setOpenMenu(!openMenu)}
                className={`toggle-nav ${openMenu ? "active" : ""}`}
            >
                <div className="toggle-icon">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                </div>{" "}
            </a>
            <div
                className={`user-sidebar user-sidebar-mobile ${
                    openMenu ? "active" : ""
                } `}
            >
                <div className="user-sidebar-overlay"></div>
                <div className="user-box d-none d-lg-block">
                    <div className="user-image">
                        <img
                            src="/client/assets/images/user-thumb-lg.png"
                            alt="thumb"
                        />
                    </div>
                    <h6 className="user-name">
                        {account.profile
                            ? account.profile.name +
                              " " +
                              account.profile.surname
                            : ""}
                    </h6>
                    <div className="user-uid">
                        Unique ID: <span>IXIA1A{acc.unique_id}</span>
                    </div>
                    <ul className="btn-grp guttar-10px">
                        <li>
                            {account.email_verified_at ? (
                                <Link
                                    // href={null}
                                    className="btn btn-xs btn-success"
                                >
                                    {/* Email confirmed */}
                                    {__("dashboard_sidebar_emailconfirmed")}
                                </Link>
                            ) : (
                                <Link
                                    href={route("verification.send")}
                                    className="btn btn-xs btn-warning"
                                >
                                    {/* Confirm Email */}
                                    {__("dashboard_sidebar_emailconfirm")}
                                </Link>
                            )}
                        </li>

                        <li>
                            {account.verification_status == "verified" ?
                                <Link
                                    href="/kyc"
                                    className="btn btn-xs btn-success"
                                >
                                    {/* KYC Completed */}
                                    {__("dashboard_sidebar_kyccompleted")}
                                </Link>
                             : (
                                account.verification_status == "pending"?
                                <Link
                                href="/kyc"
                                className="btn btn-xs btn-warning"
                            >
                                {/* KYC Pending */}
                                {__("dashboard_sidebar_kycpending")}
                            </Link>
                                :
                                account.verification_status == "reject" ?
                                <Link
                                href="/kyc"
                                className="btn btn-xs btn-danger"
                            >
                                {/* KYC Pending */}
                                {__("dashboard_sidebar_rejected")}
                            </Link>
                             :
                             <Link
                             href="/kyc"
                             className="btn btn-xs btn-warning"
                         >
                             {__("dashboard_sidebar_missing")}
                         </Link>

                             )
                             }
                        </li>
                    </ul>
                </div>

                <ul className="user-icon-nav">
                    <li
                        className={
                            pathname === route("client.account.index")
                                ? "active "
                                : ""
                        }
                    >
                        <Link href={route("client.account.index")}>
                            <AiOutlineDashboard />
                            {/* Dashboard */}
                            {__("dashboard_sidebar_dashboard")}
                        </Link>
                    </li>
                    <li
                        className={
                            pathname === route("client.kyc") ? "active " : ""
                        }
                    >
                        <Link href={route("client.kyc")}>
                            <AiOutlineFile />
                            {/* KYC Application */}
                            {__("dashboard_sidebar_kycapp")}
                        </Link>
                    </li>
                    <li
                        className={
                            pathname === route("client.account")
                                ? "active "
                                : ""
                        }
                    >
                        <Link href={route("client.account")}>
                            <AiOutlineUser />
                            {/* Account */}
                            {__("dashboard_sidebar_account")}
                        </Link>
                    </li>
                    {/*<li className={pathname === route('client.transactions') ? "active " : ""}>
          <Link href={route('client.transactions')}>
            <IoShuffleOutline /> Transactions
          </Link>
        </li>*/}

                    {account.can_withdraw ? (
                        <li
                            className={
                                pathname === route("client.withdrawal")
                                    ? "active "
                                    : ""
                            }
                        >
                            <Link href={route("client.withdrawal")}>
                                <IoShuffleOutline />
                                {/* Withdrawal */}
                                {__("dashboard_sidebar_withdrawal")}
                            </Link>
                        </li>
                    ) : null}
                    <li className={pathname === "/security" ? "active " : ""}>
                        <Link href="/security">
                            <AiOutlineLock />
                            {/* Security */}
                            {__("dashboard_sidebar_security")}
                        </Link>
                    </li>
                    <li>
                        <Link href={route("client.logout")}>
                            {/* Logout */}
                            {__("dashboard_sidebar_logout")}
                        </Link>
                    </li>
                </ul>

                <div className="user-sidebar-sap"></div>

                <ul className="user-nav">
                    {/* <li>
                    <Link href="/faq">

                        {__("dashboard_sidebar_faqs")}
                    </Link>
                </li> */}
                    <li>
                        {/* Contact Support */}
                        {__("dashboard_sidebar_contactsupport")}
                        <span>
                            {__("dashboard_sidebar_contactsupport_email")}
                        </span>
                    </li>
                </ul>

                <div className="d-lg-none">
                    <div className="user-sidebar-sap"></div>
                    <div className="gaps-1x"></div>
                    <ul className="topbar-action-list">
                        <li className="topbar-action-item topbar-action-link">
                            <a href="#">
                                <AiOutlineHome
                                    style={{
                                        width: "20px ",
                                        height: "20px ",
                                        marginRight: "5px",
                                    }}
                                />
                                {/* Go to main site */}
                                {__("dashboard_gotomainsite")}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
