import React from "react";
//import bg1 from '../assets/images/bg/4.png'
//import img1 from '../assets/images/home/7.png'
import { Button } from '../components/Shared'
// import { services, services2, steps, whatWeDo } from "../components/Data";
import Form from "../components/Form";
import { IoIosCheckmark } from "react-icons/io";
//import img3 from "../assets/images/home/3.png";
//import bg3 from "../assets/images/bg/5.png";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";

const AboutUs = ({ seo }) => {
    const sharedData = usePage().props.localizations;

    const steps = [
        {
            title: __("client.steps_1_title", sharedData),
            paragraph:
                __("client.steps_1_text", sharedData),
        },
        {
            title: __("client.steps_2_title", sharedData),
            paragraph:
                __("client.steps_2_text", sharedData),
        },
        {
            title: __("client.steps_3_title", sharedData),
            paragraph:
                __("client.steps_3_text", sharedData),
        },
        {
            title: __("client.steps_4_title", sharedData),
            paragraph:
                __("client.steps_4_text", sharedData),
        },
    ];



    const whatWeDo = [
        __("client.whatwedo1", sharedData),
        __("client.whatwedo2", sharedData),
        __("client.whatwedo3", sharedData),
        __("client.whatwedo4", sharedData),
        __("client.whatwedo5", sharedData),
        __("client.whatwedo6", sharedData),
    ];


    const services2 = [
        {
            icon: "/assets/images/icons/services/7.png",
            title: __("client.services2_1_title", sharedData),
            paragraph:
                __("client.services2_1_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/8.png",
            title: __("client.services2_2_title", sharedData),
            paragraph:
                __("client.services2_2_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/9.png",
            title: __("client.services2_3_title", sharedData),
            paragraph: __("client.services2_3_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/10.png",
            title: __("client.services2_4_title", sharedData),
            paragraph:
                __("client.services2_4_text", sharedData),
        },
    ];

    const services = [
        {
            icon: "/assets/images/icons/services/1.png",
            title: __("client.services1_title", sharedData),
            paragraph:
                __("client.services1_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/2.png",
            title: __("client.services2_title", sharedData),
            paragraph:
                __("client.services2_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/3.png",
            title: __("client.services3_title", sharedData),
            paragraph:
                __("client.services3_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/4.png",
            title: __("client.services4_title", sharedData),
            paragraph:
                __("client.services4_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/5.png",
            title: __("client.services5_title", sharedData),
            paragraph:
                __("client.services5_text", sharedData),
        },
        {
            icon: "/assets/images/icons/services/6.png",
            title: __("client.services6_title", sharedData),
            paragraph:
                __("client.services6_text", sharedData),
        },
    ];




    return (
        <Layout seo={seo}>
            <div className="aboutPage">
                <section className="lg:min-h-screen bg-cover pb-20" style={{ backgroundImage: `url('/assets/images/bg/4.png')` }}>
                    <div className="wrapper flex justify-between items-center  pt-20 sm:pt-40 flex-col lg:flex-row">
                        <div className="max-w-xl pt-10 lg:mr-20 lg:mr-10 lg:mb-0 mb-8">
                            <div className="lg:text-5xl text-3xl mb-5">
                                {__("client.about_sec1_title", sharedData)}
                            </div>
                            <div className="max-w-md">
                                <p className='mb-5'>
                                    {__("client.about_sec1_text", sharedData)}
                                </p>
                                <Link href={route('client.contact.index')}>
                                    <Button text={__("client.about_sec1_button", sharedData)} />
                                </Link>
                            </div>
                        </div>
                        <img className='' src="/assets/images/home/7.png" alt="" />
                    </div>
                </section>
                <section className="bg-gray py-20 lg:py-0">
                    <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
                        <div className=" max-w-md">
                            <div className="text-purple mb-3 text-xl">{__("client.home_sec3_header1", sharedData)}</div>
                            <h2 className="text-2xl mb-5">
                                {__("client.home_sec3_header2", sharedData)}
                            </h2>
                            <p>{__("client.home_sec3_text1", sharedData)}</p>
                            <p className="my-10 opacity-50">
                                {__("client.home_sec3_text2", sharedData)}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-5">
                                {whatWeDo.map((item, index) => {
                                    return (
                                        <div className="flex text-sm" key={index}>
                                            <div className="flex items-center justify-center w-5 h-5 bg-purple rounded-full shrink-0 mr-2 ">
                                                <IoIosCheckmark fill="white" />
                                            </div>
                                            <div>{item}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <img src="/assets/images/home/3.png" className="lg:w-1/2" alt="" />
                    </div>
                </section>
                <section className="bg-white py-20">
                    <div className="wrapper">
                        <div className="max-w-xl mb-10">
                            <h2 className="text-2xl mb-5">
                                {__("client.home_sec4_header", sharedData)}
                            </h2>
                            <p className="opacity-50">
                                {__("client.home_sec4_text", sharedData)}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 w-full gap-20 mt-20">
                            {services.map((item, index) => {
                                return (
                                    <div>
                                        <h3 className="text-xl relative pl-20 md:pl-14 mb-3">
                                            {" "}
                                            <img
                                                src={item.icon}
                                                alt=""
                                                className="absolute left-0 md:-left-7 -top-12"
                                            />
                                            {item.title}
                                        </h3>
                                        <p className="opacity-50">{item.paragraph}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section
                    className="bg-white py-20 bg-cover"
                    style={{ backgroundImage: `url('/assets/images/bg/5.png')` }}
                >
                    <div className="wrapper">
                        <div className="max-w-md mx-auto mb-20 text-center">
                            <div className="text-purple mb-10 text-xl">{__("client.home_sec5_header1", sharedData)}</div>
                            <h3 className="text-3xl mb-5">
                                {__("client.home_sec5_header2", sharedData)}
                            </h3>
                            <p>{__("client.home_sec5_text", sharedData)}
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 max-w-2xl m-auto gap-10  mb-20 mb-40">
                            {services2.map((item, index) => {
                                return (
                                    <div
                                        className="shadow-xl rounded-lg bg-white py-10 px-5"
                                        key={index}
                                    >
                                        <img src={item.icon} alt="" />
                                        <h6 className="text-xl mt-10 mb-5">{item.title}</h6>
                                        <p className="opacity-50">{item.paragraph}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <Form />
                    </div>
                </section>
            </div>
        </Layout>

    )
}

export default AboutUs
