import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { IoIosArrowDown } from "react-icons/io";
import { BsGlobe2, BsCheck } from "react-icons/bs";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import account from "@/Pages/account/Account";
//import user from "../assets/images/icons/auth/3.png";

const Navbar = () => {
    const sharedData = usePage().props.localizations;
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const { pathname, locales, currentLocale, locale_urls, _account } = usePage().props;

    const dropdownLinks = [
        {
            link: route('client.service.show', 1),
            text: __("client.nav_service_1", sharedData),
        },
        {
            link: route('client.service.show', 2),
            text: __("client.nav_service_2", sharedData),
        },
        {
            link: route('client.service.show', 3),
            text: __("client.nav_service_3", sharedData),
        },
        {
            link: route('client.service.show', 4),
            text: __("client.nav_service_4", sharedData),
        },
        {
            link: route('client.service.show', 5),
            text: __("client.nav_service_5", sharedData),
        },
        {
            link: route('client.service.show', 6),
            text: __("client.nav_service_6", sharedData),
        },
        {
            link: route('client.service.show', 7),
            text: __("client.nav_service_7", sharedData),
        },
    ];
    return (
        <div className="header absolute w-full left-0 top-0 bg-transparent z-50 lg:p-0 py-3">
            <div className="wrapper flex items-center justify-between">
                <Link href={route('client.home.index')} className="block w-32">
                    <img src="/assets/images/logo.png" alt="err" />
                </Link>
                <div
                    className="flex items-center text-md fixed w-screen h-screen bg-white flex-col top-0 left-0 justify-center lg:relative lg:bg-transparent lg:flex-row lg:left-auto lg:top-auto lg:w-auto lg:h-auto lg:!transform-none transition duration-500"
                    style={{
                        transform: showMenu ? "translateY(0)" : "translateY(-100%)",
                    }}
                >
                    <ul className="navigations block mr-50">
                        <li className="nav_item  lg:inline-block pb-5 lg:p-8">
                            <Link href={route('client.home.index')} className="hover:text-purple">
                                {__("client.nav_home", sharedData)}
                            </Link>
                        </li>
                        <li className="nav_item  lg:inline-block pb-5 lg:p-8">
                            <Link href={route('client.about.index')} className="hover:text-purple">
                                {__("client.nav_about", sharedData)}
                            </Link>
                        </li>
                        <li className="nav_item  lg:inline-block pb-5 lg:p-8 relative group">
                            <Link href="/" className="hover:text-purple">
                                {__("client.nav_services", sharedData)}{" "}
                                <IoIosArrowDown className="inline-block transition  group-hover:-rotate-180" />{" "}
                            </Link>
                            <div className="navDropdown absolute lg:left-5 left-1/2 -translate-x-1/2 lg:top-20 top-5 text-sm whitespace-nowrap bg-white rounded py-2 shadow-lg translate-y-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition z-50">
                                {dropdownLinks.map((item) => {
                                    return (
                                        <Link
                                            key={item.text}
                                            href={item.link}
                                            className="w-full px-5 py-2 hover:bg-gray block"
                                        >
                                            {item.text}
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                        <li className="nav_item  lg:inline-block pb-5 lg:p-8">
                            <Link href={route('client.scam.index')} className="hover:text-purple">
                                {__("client.nav_scams", sharedData)}
                            </Link>
                        </li>
                        <li className="nav_item  lg:inline-block pb-5 lg:p-8">
                            <Link href={route('client.contact.index')} className="hover:text-purple">
                                {__("client.nav_contact", sharedData)}
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <div className="languages relative mr-5 ml-10 group">
                            <div className="flex items-center ">
                                <BsGlobe2 className="mr-1" />
                                <IoIosArrowDown className="inline-block transition  group-hover:-rotate-180" />
                            </div>
                            <div className="langDropdown absolute -left-3 top-4 text-sm whitespace-nowrap bg-white rounded p-2 shadow-lg  translate-y-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition">
                                {locales.map((locale, index) => {

                                    if (locale.locale === currentLocale) {
                                        return <a href="javascript:void (0)" className="block p-1 pl-3 relative">
                                            <BsCheck className="absolute -left-1 top-2" /> {locale.title}
                                        </a>
                                    }
                                })}

                                {locales.map((locale, index) => {
                                    if (locale.locale !== currentLocale) {
                                        return (
                                            <a href={locale_urls[locale.locale]} className="block p-1 pl-3 relative opacity-50 ">
                                                {locale.title}
                                            </a>
                                        );
                                    }
                                })}


                            </div>
                        </div>
                        {!_account ? <Link href={route('client.login.index')} className="hover:text-purple">
                            {__("client.nav_login", sharedData)}
                        </Link> : null}
                        {!_account ? <Link
                            href={route('client.signup.index')}
                            className="text-white rounded p-3 bg-purple ml-5 hover:scale-95 transition"
                        >
                            {__("client.nav_signup", sharedData)}
                        </Link> : null}

                        {_account ? <Link href={route('client.account.index')} className="text-white rounded p-3 bg-purple ml-5 hover:scale-95 transition">
                            {__("client.account", sharedData)}
                        </Link> : null}

                        {/* if logged in 👇 */}

                        {/* <div className="group relative mr-4 py-5">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={user} alt="" />
              </div>
              <div className="navDropdown absolute lg:left-5 left-1/2 -translate-x-1/2 top-12 text-sm whitespace-nowrap bg-white rounded py-2 shadow-lg translate-y-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition z-50">
                <Link
                  to="/account"
                  className="w-full px-5 py-2 hover:bg-gray block"
                >
                  Dashboard
                </Link>
                <Link
                  to="/account"
                  className="w-full px-5 py-2 hover:bg-gray block"
                >
                  Account settings
                </Link>
                <Link
                  to="/account"
                  className="w-full px-5 py-2 hover:bg-gray block"
                >
                  Change password
                </Link>
              </div>
            </div>
            <button>Log out</button> */}
                    </div>
                </div>
                <div
                    className="z-50 text-4xl text-purple lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    {showMenu ? <CgClose /> : <CgMenuGridR />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
