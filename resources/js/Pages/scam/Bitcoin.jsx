import React from "react";
import { FiChevronRight } from "react-icons/fi";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import img1 from "../../assets/images/scam/6.png";
//import img2 from "../../assets/images/scam/7.png";
//import img3 from "../../assets/images/scam/8.png";
//import img5 from "../../assets/images/scam/5.png";
import Form from "../../components/Form";
import Layout from "../../Layouts/Layout";

const BitcoinScam = ({ seo }) => {
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div className="bitcoinScamPage  pt-20 sm:pt-40 relative overflow-hidden">
                <div
                    style={{ color: "#08122b80" }}
                    className="!flex items-center wrapper  text-xs sm:text-sm"
                >
                    <span>{__("client.nav_home", sharedData)}</span> <FiChevronRight className="mx-2" /> <span>{__("client.nav_scams", sharedData)}</span>{" "}
                    <FiChevronRight className="mx-2" />{" "}
                    <span style={{ color: "#08122b" }}>{__("client.scams_bitcoin", sharedData)}</span>
                </div>
                <div className="flex justify-between items-top pt-10  flex-col lg:flex-row wrapper">
                    <div className="max-w-xl pt-10 lg:mr-20 lg:mr-10 lg:mb-0 mb-8">
                        <div className="text-purple text-xl mb-3">{__("client.scams_bitcoin", sharedData)}</div>
                        <div className="lg:text-5xl text-3xl mb-5">{__("client.scams_bitcoin_sec1_title", sharedData)}</div>
                        <ul className="list-disc pl-6">
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#whatIsBC">{__("client.scams_bitcoin_nav_#1", sharedData)}</a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#howWork">{__("client.scams_bitcoin_nav_#2", sharedData)}</a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#isSafe">{__("client.scams_bitcoin_nav_#3", sharedData)}</a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#scamCause">{__("client.scams_bitcoin_nav_#4", sharedData)}</a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#howAvoid">{__("client.scams_bitcoin_nav_#5", sharedData)}</a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#howRecover">
                                    {__("client.scams_bitcoin_nav_#6", sharedData)}
                                </a>
                            </li>
                            <li className="opacity-50 hover:opacity-100 hover:text-purple mb-2">
                                <a href="#assistVictims">
                                    {__("client.scams_bitcoin_nav_#7", sharedData)}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src="/assets/images/scam/6.png" alt="" />
                </div>
                <div className="wrapper">
                    <div className="max-w-3xl ">
                        <div className="text-2xl mb-5" id="whatIsBC">
                            {__("client.scams_bitcoin_title_#1", sharedData)}
                        </div>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text_#1", sharedData)}
                        </p>
                        <div className="text-2xl mb-5" id="howWork">
                            {__("client.scams_bitcoin_title_#2", sharedData)}
                        </div>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text1_#2", sharedData)}
                        </p>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text2_#2", sharedData)}
                        </p>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text3_#2", sharedData)}
                        </p>
                    </div>
                    <div className="flex justify-between items-center flex-col lg:flex-row">
                        <img src="/assets/images/scam/7.png" alt="" />
                        <div className="lg:ml-5 max-w-2xl">
                            <div className="text-2xl mb-5" id="isSafe">
                                {__("client.scams_bitcoin_title_#3", sharedData)}
                            </div>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text1_#3", sharedData)}
                            </p>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text2_#3", sharedData)}
                            </p>
                            <div className="text-2xl mb-5" id="scamCause">
                                {__("client.scams_bitcoin_title_#4", sharedData)}
                            </div>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text1_#4", sharedData)}
                            </p>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text2_#4", sharedData)}
                            </p>
                            <div className="text-2xl mb-5" id="howAvoid">
                                {__("client.scams_bitcoin_title_#5", sharedData)}
                            </div>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text1_#5", sharedData)}
                            </p>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text2_#5", sharedData)}
                            </p>
                            <p className="mb-12">
                                {__("client.scams_bitcoin_text3_#5", sharedData)}
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <div className="text-2xl mb-5 " id="howRecover">
                            {__("client.scams_bitcoin_title_#6", sharedData)}
                        </div>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text1_#6", sharedData)}
                        </p>
                        {/* <p className="mb-12">
                          {__("client.scams_bitcoin_text2_#6")}
                      </p> */}
                        <div className="text-2xl mb-5" id="assistVictims">
                            {__("client.scams_bitcoin_title_#7", sharedData)}
                        </div>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text1_#7", sharedData)}
                        </p>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text2_#7", sharedData)}
                        </p>
                        <p className="mb-12">
                            {__("client.scams_bitcoin_text3_#7", sharedData)}
                        </p>
                    </div>
                    <section className=" pt-20 pb-40">
                        <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
                            <div className="lg:mr-5 m-0 mb-10">
                                <div className="text-purple text-2xl ">
                                    {__("client.scams_single_sec2_title", sharedData)}
                                </div>
                                <div className="text-5xl my-4">{__("client.scams_single_sec2_title2", sharedData)}</div>
                                <p className="opacity-50 max-w-xl mb-10">
                                    {__("client.scams_single_sec2_text", sharedData)}
                                </p>
                                <img src="/assets/images/scam/5.png" alt="" />
                            </div>
                            <Form />
                        </div>
                    </section>
                </div>
                <img
                    src="/assets/images/scam/8.png"
                    alt=""
                    className="absolute  2xl:bottom-20 sm:bottom-96 bottom-0 right-0 -z-10 2xl:w-auto w-1/3 opaity-50"
                />
            </div>
        </Layout>

    );
};

export default BitcoinScam;
