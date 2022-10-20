import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { AiOutlineHome } from "react-icons/ai";
import {
    AiOutlineDashboard,
    AiOutlineFile,
    AiOutlineUser,
    AiOutlineLock,
} from "react-icons/ai";

const Topbar = () => {
    const { locales, currentLocale, locale_urls, acc, account ,pathname} =
        usePage().props;
    const balance = account.balances;
    const crypto_address = account.wallets;
    const [showAccDrop, setShowAccDrop] = useState(false);
    const [showLang, setShowLang] = useState(false);


    return (
        <div className="topbar">
            <div className="topbar-md d-lg-none">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="site-logo">
                            <Link href="/" className="site-brand">
                                <img
                                    src="/client/assets/images/logo.png"
                                    alt="logo"
                                    srcSet="images/logo2x.png 2x"
                                />
                            </Link>
                        </div>

                        <div className="dropdown topbar-action-item topbar-action-user">
                            <div
                                onClick={() => setShowAccDrop(!showAccDrop)}
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    className="icon"
                                    src="/client/assets/images/user-thumb-sm.png"
                                    alt="thumb"
                                    width="27px"
                                />
                            </div>
                            <div
                                className={`dropdown-menu dropdown-menu-end ${
                                    showAccDrop ? "show " : ""
                                }`}
                            >
                                <div className="user-dropdown">
                                    <div className="user-dropdown-head">
                                        <h6 className="user-dropdown-name">
                                            {acc.profile.name}{" "}
                                            {acc.profile.surname}{" "}
                                            <span>(IXIA1A{acc.unique_id})</span>
                                        </h6>
                                        <span className="user-dropdown-email">
                                            {/* useremail@example.com */}
                                            {acc.email}
                                        </span>
                                    </div>
                                    <div className="user-dropdown-balance">
                                        {/* <h6>ICO TOKEN BALANCE</h6>
                                            <h3>120,000,000 IC0X</h3> */}
                                        <ul>
                                            {balance.map((e, i) => {
                                                return (
                                                    <li key={i}>
                                                        {e.value}{" "}
                                                        {e.currency.name}{" "}
                                                    </li>
                                                );
                                            })}
                                            {/* <li>1.240 BTC</li>
                                                <li>19.043 ETH</li>
                                                <li>6,500.13 USD</li> */}
                                        </ul>
                                    </div>
                                    <ul className="user-dropdown-links">
                                        <li>
                                            <Link href="/account">
                                                {/* <i className="ti ti-id-badge"></i> */}
                                                <AiOutlineUser />
                                                {/* My Profile */}
                                                {__("topbar_profile")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="security">
                                                <AiOutlineUser />
                                                {/* Security */}
                                                {__("topbar_security")}
                                            </Link>
                                        </li>
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
                                        <li>
                                            <Link href="/activity">
                                                {/* <i className="ti ti-eye"></i> */}
                                                <AiOutlineFile />
                                                {/* Activity */}
                                                {__("topbar_activiry")}
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="user-dropdown-links">
                                        <li>
                                            <Link href={route("client.logout")}>
                                                {/* <i className="ti ti-power-off"></i> */}
                                                {/* Logout */}
                                                {__("dashboard_sidebar_logout")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                    <div className="topbar-lg d-none d-lg-block">
                        <div className="site-logo">
                            <Link href="/" className="site-brand">
                                <img
                                    src="/client/assets/images/logo.png"
                                    alt="logo"
                                    srcSet="images/logo2x.png 2x"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="topbar-action d-none d-lg-block">
                        <ul className="topbar-action-list">
                            <li className="topbar-action-item topbar-action-link">
                                <Link href="/">
                                    <AiOutlineHome
                                        style={{
                                            width: "20px ",
                                            height: "20px",
                                            marginRight: "5px ",
                                        }}
                                    />
                                    {/* Go to main site */}
                                    {__("dashboard_gotomainsite")}
                                </Link>
                            </li>

                            <li className="dropdown topbar-action-item topbar-action-language">
                                {locales.map((locale, index) => {
                                    if (locale.locale === currentLocale) {
                                        return (
                                            <a
                                                key={index}
                                                href={null}
                                                data-bs-toggle="dropdown"
                                                onClick={() =>
                                                    setShowLang(!showLang)
                                                }
                                            >
                                                {locale.locale}{" "}
                                                {/* <em className="ti ti-angle-down"></em> */}
                                            </a>
                                        );
                                    }
                                })}
                                <ul
                                    className={`dropdown-menu ${
                                        showLang ? "show " : ""
                                    }`}
                                >
                                    {locales.map((locale, i) => {

                                        if (locale.locale !== currentLocale) {
                                            return (
                                                <li key={i}>
                                                    <Link type='button' method="get" href={locale_urls[locale.locale]}>{locale['locale']}</Link>
                                                </li>
                                            );
                                        }

                                    })}
                                </ul>
                            </li>

                            <li className="dropdown topbar-action-item topbar-action-user">
                                <div
                                    onClick={() => setShowAccDrop(!showAccDrop)}
                                    data-bs-toggle="dropdown"
                                >
                                    <img
                                        className="icon"
                                        src="/client/assets/images/user-thumb-sm.png"
                                        alt="thumb"
                                        width="27px"
                                    />
                                </div>
                                <div
                                    className={`dropdown-menu dropdown-menu-end ${
                                        showAccDrop ? "show " : ""
                                    }`}
                                >
                                    <div className="user-dropdown">
                                        <div className="user-dropdown-head">
                                            <h6 className="user-dropdown-name">
                                                {acc.profile.name}{" "}
                                                {acc.profile.surname}{" "}
                                                <span>
                                                    (IXIA1A{acc.unique_id})
                                                </span>
                                            </h6>
                                            <span className="user-dropdown-email">
                                                {/* useremail@example.com */}
                                                {acc.email}
                                            </span>
                                        </div>
                                        <div className="user-dropdown-balance">
                                            {/* <h6>ICO TOKEN BALANCE</h6>
                                            <h3>120,000,000 IC0X</h3> */}
                                            <ul>
                                                {balance.map((e, i) => {
                                                    return (
                                                        <li key={i}>
                                                            {e.value}{" "}
                                                            {e.currency.name}{" "}
                                                        </li>
                                                    );
                                                })}
                                                {/* <li>1.240 BTC</li>
                                                <li>19.043 ETH</li>
                                                <li>6,500.13 USD</li> */}
                                            </ul>
                                        </div>
                                        <ul className="user-dropdown-links">
                                            <li>
                                                <Link href="/account">
                                                    {/* <i className="ti ti-id-badge"></i> */}
                                                    <AiOutlineUser />
                                                    {/* My Profile */}
                                                    {__("topbar_profile")}
                                                </Link>
                                            </li>
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

                                            <li>
                                                <Link href="security">
                                                    <AiOutlineLock />
                                                    {/* Security */}
                                                    {__("topbar_security")}
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="user-dropdown-links">
                                            <li>
                                                <Link href={route("client.logout")}>
                                                    {/* <i className="ti ti-power-off"></i> */}
                                                    {/* Logout */}
                                                    {__(
                                                        "dashboard_sidebar_logout"
                                                    )}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
