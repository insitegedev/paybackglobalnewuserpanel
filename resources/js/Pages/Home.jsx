import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
// import { services, services2, steps, whatWeDo } from "../components/Data";
import Form from "../components/Form";
import { IoIosCheckmark } from "react-icons/io";
import Question from "../components/Question";
import Layout from "../Layouts/Layout";

const Home = ({ seo }) => {

    const sharedData = usePage().props.localizations;

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

    return (
        <Layout seo={seo}>
            <div className="homePage">
                <section className="heroSection relative min-h-screen md:pb-0 pb-20">
                    <img
                        src="/assets/images/bg/1.png"
                        className="w-screen	h-full md:h-screen object-cover absolute left-0 top-0 -z-10"
                        alt=""
                    />
                    <div className="wrapper flex justify-between relative pt-20 sm:pt-40 flex-col lg:flex-row">
                        <div className="max-w-xl pt-10 lg:mr-20 lg:mr-10 lg:mb-0 mb-8">
                            <div className="lg:text-5xl text-3xl mb-5">
                                {__("client.home_sec1_header", sharedData)}
                            </div>
                            <p>
                                {__("client.home_sec1_text", sharedData)}
                            </p>
                        </div>
                        <Form />
                    </div>
                </section>
                <section
                    className="bg-gray bg-cover pt-10 md:pt-0"
                    style={{ backgroundImage: `url('/assets/images/bg/2.png')` }}
                >
                    <div className="wrapper flex md:items-start items-center md:flex-row flex-col-reverse ">
                        <img src="/assets/images/home/1.png" className="lg:-translate-y-1/2 shadow-xl" alt="" />
                        <div className="md:ml-20 lg:ml-40 mt-8 pl-10 md:pl-0">
                            <h3 className="text-3xl relative pl-12 mb-10">
                                <img
                                    src="/assets/images/home/2.png"
                                    className="absolute lg:-left-24 lg:-top-20 w-24 lg:w-auto -top-10 -left-10"
                                    alt=""
                                />{" "}
                                {__("client.home_sec2_header", sharedData)}
                            </h3>
                            <p className="text-sm mb-10">
                                {__("client.home_sec2_text", sharedData)}
                            </p>
                            <div className=" border-l-2 " style={{ borderColor: "#C5CCE2" }}>
                                {steps.map((item, index) => {
                                    return (
                                        <div className="pl-10 mb-20 relative max-w-sm" key={index}>
                                            <div className="text-lg w-12 h-12 bg-purple rounded-full text-white flex items-center justify-center absolute -left-6 -top-2">
                                                {index + 1}
                                            </div>
                                            <h5 className="text-lg mb-2">{item.title}</h5>
                                            <p className="opacity-50 text-sm">{item.paragraph}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-20 lg:py-0">
                    <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
                        <div className=" max-w-md">
                            <div className="text-purple mb-3 text-xl"></div>
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
                <section className="bg-gray py-20">
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
                    style={{ backgroundImage: `url('/assets/images/bg/3.png')` }}
                >
                    <div className="wrapper">
                        <div className="max-w-md mx-auto mb-20 text-center">
                            <div className="text-purple mb-10 text-xl">{__("client.home_sec5_header1", sharedData)}</div>
                            <h3 className="text-3xl mb-5">
                                {__("client.home_sec5_header2", sharedData)}
                            </h3>
                            <p>
                                {__("client.home_sec5_text", sharedData)}
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 max-w-2xl m-auto gap-10">
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
                    </div>
                </section>
                <section className="bg-purple">
                    <div className="wrapper py-20 flex items-center justify-center flex-col lg:flex-row">
                        <img src="/assets/images/home/4.png" alt="" />
                        <div className="lg:mt-0 mt-10 lg:ml-20 text-white lg:max-w-xl">
                            <div className="text-lg">{__("client.home_sec6_header", sharedData)}</div>
                            <h2 className="text-3xl text-black my-5">
                                {__("client.home_sec6_text", sharedData)}
                            </h2>
                            <div className="text-5xl">{__("client.home_sec6_text2", sharedData)}</div>
                            <p className="opacity-50 mt-2 text-lg">{__("client.home_sec6_text3", sharedData)}</p>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
                        <Form />
                        <img className="lg:w-1/2 mt-2" src="/assets/images/home/5.png" alt="" />
                    </div>
                </section>
                <section className="pb-10 relative before:absolute before:block before:bg-black before:left-0 before:bottom-0 before:w-full before:h-1/2 before:-z-10 before:content-['']" >
                    <div className="wrapper bg-gray p-3 md:p-10 rounded-lg flex justify-between items-center flex-col-reverse lg:flex-row">
                        <div className="lg:w-2/3">
                            <div className="text-purple text-xl">{__("client.faq_title", sharedData)}</div>
                            <div className="text-2xl sm:text-3xl my-5">
                                {__("client.faq_title2", sharedData)}
                            </div>
                            <p className="opacity-50 mb-10">
                                {__("client.faq_text", sharedData)}
                            </p>
                            <Question
                                q={__("client.faq_q1", sharedData)}
                                a={__("client.faq_a1", sharedData)}
                            />
                            <Question
                                q={__("client.faq_q2", sharedData)}
                                a={__("client.faq_a2", sharedData)}
                            />
                            <Question
                                q={__("client.faq_q3", sharedData)}
                                a={__("client.faq_a3", sharedData)}
                            />
                            <Question
                                q={__("client.faq_q4", sharedData)}
                                a={__("client.faq_a4", sharedData)}
                            />
                        </div>
                        <img src="/assets/images/home/6.png" className="2xl:translate-x-40 w-1/3" alt="" />
                    </div>
                </section>
            </div>
        </Layout>

    );
};

export default Home;
