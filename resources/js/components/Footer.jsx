import React from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { VscMail } from "react-icons/vsc";
import { IoIosPin, IoMdCall } from "react-icons/io";
// import { contactInfo } from "./Data";

const Footer = () => {
    const sharedData = usePage().props.localizations;

    const whatWeDo = [
        __("client.whatwedo1", sharedData),
        __("client.whatwedo2", sharedData),
        __("client.whatwedo3", sharedData),
        __("client.whatwedo4", sharedData),
        __("client.whatwedo5", sharedData),
        __("client.whatwedo6", sharedData),
    ];

    const contactInfo = [
        {
            title: 'email',
            icon: <VscMail />,
            address: __("client.footer_contact_email", sharedData),
            href: 'mailto:' + __("client.footer_contact_email", sharedData),
        },
        {
            title: 'phone',
            icon: <IoMdCall />,
            address: __("client.footer_contact_phone", sharedData),
            href: 'tel:' + __("client.footer_contact_phone", sharedData),
        },
        {
            title: 'address',
            icon: <IoIosPin />,
            address: __("client.footer_contact_address", sharedData),
            href: '#',
        },
    ]

    return (
        <footer className="bg-black pt-10 pb-16 text-white">
            <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                <div>
                    <div className="text-2xl mb-5">{__("client.footer_nav_services", sharedData)}</div>
                    <Link
                        href={route('client.service.show', 1)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_1", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 2)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_2", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 3)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_3", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 4)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_4", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 5)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_5", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 6)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_6", sharedData)}
                    </Link>
                    <Link
                        href={route('client.service.show', 7)}
                        className="opacity-50 hover:opacity-100 mb-2 text-md block"
                    >
                        {__("client.nav_service_7", sharedData)}
                    </Link>
                </div>
                <div>
                    <div className="text-2xl mb-5">{__("client.footer_nav_contact", sharedData)}</div>
                    {contactInfo.map((item) => {
                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center mb-3 text-xl opacity-50 hover:opacity-100"
                            >
                                {item.icon} <span className="pl-2 pb-1">{item.address}</span>
                            </a>
                        );
                    })}
                </div>
                <div className="">
                    <div className="text-2xl mb-5">{__("client.footer_nav_location", sharedData)}</div>
                    <div className="w-full h-52 grayscale">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.3193349562025!2d8.493937030552743!3d47.37929976128457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a2d49ef2d85%3A0xc25a568d85721959!2sAlbisriederstrasse%20207%2C%208047%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sge!4v1657266637284!5m2!1sen!2sge"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
