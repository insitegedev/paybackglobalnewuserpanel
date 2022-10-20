import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { navbar } from "../Header/NavData";
import "./Footer.css";

const Footer = () => {
    const { gfacebook, ginstagram, gphone, gaddress, gcity, gcountry } =
        usePage().props;

    const partners = Array.from(Array(8).keys());

    return (
        <div className="footer">
            <div className="wrapper">
                <div className="flex navs_part">
                    <div className="navbar ">
                        {navbar.map((nav, i) => {
                            let drop = nav.dropdown;
                            return (
                                <div className="nav_link" key={i}>
                                    {drop ? (
                                        <Link
                                            className={
                                                drop ? "head op" : "head"
                                            }
                                            href={nav.link}
                                            onClick={
                                                drop
                                                    ? (e) => e.preventDefault()
                                                    : ""
                                            }
                                        >
                                            {nav.name}
                                        </Link>
                                    ) : (
                                        <Link
                                            className={
                                                drop ? "head op" : "head"
                                            }
                                            href={nav.link}
                                        >
                                            {nav.name}
                                        </Link>
                                    )}

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
                    <div className="partner_grid">
                        {partners.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="part_img flex centered"
                                >
                                    <img
                                        src={`/img/partners/${index + 1}.png`}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="partners_footer flex">
                    <p>{__("footer_mllions_of_companies_of_all_sizes")}</p>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.83586887293!2d-122.40245908439836!3d37.79388607975602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858061c6a48e1f%3A0x738a5b8ac16eac11!2s275%20Battery%20St%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sde!4v1659610496407!5m2!1sen!2sde"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="contact_info_footer flex">
                    <div className="column">
                        <p>{__("footer_email_address_text")}</p>
                        <a>{__("footer_email_address_address")}</a>
                    </div>
                    <div className="column">
                        <p>{__("footer_email_phone_number_text")}</p>
                        <a>{__("footer_phone_number_number")}</a>
                    </div>
                    <div className="column">
                        <p>{__("footer_address_text")}</p>
                        <a>{__("footer_address_address")}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
