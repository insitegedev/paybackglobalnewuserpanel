import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import "./Header.css";
import { navbar } from "./NavData";
import { usePage } from "@inertiajs/inertia-react";

const Header = () => {
    const { pathname, userName, gemail, gphone } = usePage().props;
    let theme = "dark";
    let logoColor = "dark";

    // if (
    //     pathname === route("client.organization.index") ||
    //     pathname === route("client.efforts.index")
    // ) {
    //     theme = "white";
    //     logoColor = "light";
    // }

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div className={theme === "white" ? "header white " : "header "}>
            <div className="wrapper flex">
                <Link className="mobile_logo" href={route("client.home.index")}>
                    <img
                        src={`/img/logo/${logoColor === "light" ? "1" : "1"
                            }.png`}
                        // width="250px"
                        alt="logo"
                        width='177px'
                    />
                </Link>
                <div className={mobileMenu ? "bottom show" : "bottom"}>
                    <div className=" flex">
                        <Link
                            href={route("client.home.index")}
                            className="logo"
                        >
                            <img
                                src={`/img/logo/${logoColor === "light" ? "1" : "1"
                                    }.png`}
                                // width="250px"
                                alt="logo"
                                width='177px'
                            />
                        </Link>
                        <div className="navbar flex">
                            {navbar.map((nav, i) => {
                                let drop = nav.dropdown;
                                return (
                                    <div className="nav_link" key={i}>
                                        {drop ? (
                                            <Link
                                                href={nav.link}
                                                onClick={
                                                    drop
                                                        ? (e) =>
                                                            e.preventDefault()
                                                        : ""
                                                }
                                            >
                                                {nav.name}
                                            </Link>
                                        ) : (
                                            <Link href={nav.link}>
                                                {nav.name}
                                            </Link>
                                        )}
                                        {/*<Link*/}
                                        {/*    href={nav.link}*/}
                                        {/*    onClick={drop ? (e) => e.preventDefault() : ""}*/}
                                        {/*>*/}

                                        {/*{nav.name}*/}
                                        {/*</Link>*/}
                                        {drop ? (
                                            <div className="dropdown">
                                                {drop.map((drop, i) => {
                                                    if (drop) {
                                                        return (
                                                            <Link
                                                                key={i}
                                                                href={drop.link}
                                                            >
                                                                {drop.name}
                                                            </Link>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {!userName && (
                            <div className="flex buttons">
                                <Link
                                    className="sign_btn signup"
                                    href={route("client.signup.index")}
                                >
                                    {__("header_sign_up")}
                                </Link>
                                <Link
                                    className="sign_btn login"
                                    href={route("client.login.index")}
                                >
                                    {/* <img
                                        src="/img/icons/header/user.svg"
                                        alt=""
                                    />
                                    <img
                                        className="user_white"
                                        src="/img/icons/header/user2.svg"
                                        alt=""
                                    /> */}
                                    {__("header_sign_in")}
                                </Link>
                                <LangSwitcher />
                            </div>
                        )}
                        {userName && (
                            <div className="flex">
                                <Link
                                    className="login user_in"
                                    href={route("client.account.index")}
                                >
                                    <img
                                        src="/img/icons/header/user.svg"
                                        alt=""
                                    />
                                    <img
                                        className="user_white"
                                        src="/img/icons/header/user2.svg"
                                        alt=""
                                    />
                                    {userName}
                                </Link>
                                <LangSwitcher />
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className={mobileMenu ? "menu_btn clicked" : "menu_btn"}
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <div className="span"></div>
                    <div className="span"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
