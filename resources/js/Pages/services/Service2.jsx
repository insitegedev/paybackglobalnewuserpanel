import React from "react";
//import img from "../../assets/images/services/2.png";
import { FiChevronRight } from "react-icons/fi";
import Form from "../../components/Form";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Layout";

const Service2 = ({ seo }) => {
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div className="bg-gray lg:pt-24 pt-16">
                <div
                    className=" sm:h-96 w-full relative py-4 mb-10"
                    style={{ background: "#F5ECDD" }}
                >
                    <div className="wrapper  flex flex-col justify-between items-start h-full ">
                        <div
                            style={{ color: "#08122b80" }}
                            className="flex items-center text-xs sm:text-sm"
                        >
                            <span>{__("client.nav_home", sharedData)}</span> <FiChevronRight className="mx-2" />{" "}
                            <span>{__("client.nav_services", sharedData)}</span> <FiChevronRight className="mx-2" />{" "}
                            <span style={{ color: "#08122b" }}>{__("client.nav_service_2", sharedData)}</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-purple text-xl mb-3 mt-5">
                                {__("client.nav_service_2", sharedData)}
                            </div>
                            <h1 className="sm:text-5xl text-3xl mb-3">{__("client.nav_service_2_subtitle", sharedData)}</h1>
                        </div>
                    </div>

                    <img
                        src="/assets/images/services/2.png"
                        className="sm:absolute  sm:-bottom-6 sm:left-1/2 sm:-translate-x-1/2 "
                        alt=""
                    />
                </div>
                <div className="wrapper flex justify-between items-start pb-40 flex-col lg:flex-row">
                    <div className="lg:mr-10 lg:w-2/3 shrink-1">
                        <div className="text-xl mb-5">{__("client.nav_service2_title1", sharedData)}</div>
                        <p className="mb-10">
                            {__("client.nav_service2_text1_p1", sharedData)}
                        </p>
                        <div className="text-xl mb-5">{__("client.nav_service2_title2", sharedData)}</div>
                        <p className="mb-10">
                            {__("client.nav_service2_text2_p1", sharedData)}
                        </p>
                        <p className="mb-10">
                            {__("client.nav_service2_text2_p2", sharedData)}
                        </p>
                        {/* <div className="text-xl mb-5">{__("client.nav_service2_title3")}</div>
                      <p className="mb-10">
                          {__("client.nav_service2_text3_p1")}
                      </p>
                      <p className="mb-10">
                          {__("client.nav_service2_text3_p2")}
                      </p>
                      <p className="mb-10">
                          {__("client.nav_service2_text3_p3")}
                      </p> */}
                    </div>
                    <div className="lg:-mt-52 z010 relative">
                        <Form />
                        <div className="mt-10 text-purple text-2xl mb-5">{__("client.nav_service_other", sharedData)}</div>
                        <Link href={route('client.service.show', 1)} className="mb-3 block">
                            {__("client.nav_service_1", sharedData)}
                        </Link>
                        <Link href={route('client.service.show', 3)} className="mb-3 block">
                            {__("client.nav_service_3", sharedData)}
                        </Link>
                        <Link href={route('client.service.show', 4)} className="mb-3 block">
                            {__("client.nav_service_4", sharedData)}
                        </Link>
                        <Link href={route('client.service.show', 5)} className="mb-3 block">
                            {__("client.nav_service_5", sharedData)}
                        </Link>
                        <Link href={route('client.service.show', 6)} className="mb-3 block">
                            {__("client.nav_service_6", sharedData)}
                        </Link>
                        <Link href={route('client.service.show', 7)} className="mb-3 block">
                            {__("client.nav_service_7", sharedData)}
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default Service2;
