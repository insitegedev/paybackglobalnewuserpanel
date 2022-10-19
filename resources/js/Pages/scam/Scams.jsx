import React from "react";
//import bg1 from "../../assets/images/bg/6.png";
//import img1 from "../../assets/images/scam/5.png";
import { Button } from '../../components/Shared';
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
// import { scamBoxes } from "../../components/Data";
import Form from "../../components/Form";
import Layout from "../../Layouts/Layout";

const Scams = ({ seo }) => {
    const sharedData = usePage().props.localizations;


    const scamBoxes = [
        {
            img: "/assets/images/scam/1.png",
            title: __("client.scam1_title", sharedData),
            paragraph: __("client.scam1_text", sharedData),
            link: route('client.scam.show', 'Bitcoin'),
        },
        {
            img: "/assets/images/scam/2.png",
            title: __("client.scam2_title", sharedData),
            paragraph: __("client.scam2_text", sharedData),
            link: route('client.scam.show', 'BinaryOptions'),
        },
        {
            img: "/assets/images/scam/3.png",
            title: __("client.scam3_title", sharedData),
            paragraph: __("client.scam3_text", sharedData),
            link: route('client.scam.show', 'Broker'),
        },
        {
            img: "/assets/images/scam/4.png",
            title: __("client.scam4_title", sharedData),
            paragraph: __("client.scam4_text", sharedData),
            link: route('client.scam.show', 'Forex'),
        },
    ]

    return (
        <Layout seo={seo}>
            <div className="scamPage">
                <section className="lg:min-h-screen bg-cover pb-20" style={{ backgroundImage: `url('/assets/images/bg/6.png')` }}>
                    <div className="wrapper flex justify-between items-center  pt-20 sm:pt-40 flex-col lg:flex-row">
                        <div className=" pt-10 lg:mr-20 lg:mr-10 lg:mb-0 mb-8">
                            <div className="text-purple text-xl mb-3">{__("client.scams_sec1_title", sharedData)}</div>
                            <div className=" lg:text-5xl text-3xl mb-5">
                                {__("client.scams_sec1_text", sharedData)}
                            </div>
                            <div className="max-w-md">
                                <p className='mb-5'>
                                    {__("client.scams_sec1_text2", sharedData)}
                                </p>
                                <Link href={route('client.contact.index')}>
                                    <Button text={__("client.scams_sec1_button", sharedData)} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray py-20">
                    <div className="wrapper">
                        <div className="grid md:grid-cols-2 gap-20 md:max-w-4xl">
                            {scamBoxes.map((item, index) => {
                                return <div className="w-full">
                                    <img src={item.img} alt="" />
                                    <h5 className="text-xl mt-6 mb-3">{item.title}</h5>
                                    <p className="mb-6 opacity-50">{item.paragraph}</p>
                                    <Link href={item.link} className='text-purple'>{__("client.learn_more", sharedData)}</Link>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
                <section className="bg-gray pt-20 pb-40">
                    <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
                        <div className="lg:mr-5 m-0 mb-10">
                            <div className="text-purple text-2xl ">{__("client.scams_sec2_title", sharedData)}</div>
                            <div className="text-5xl my-4">{__("client.scams_sec2_title2", sharedData)}</div>
                            <p className="opacity-50 max-w-xl mb-10">{__("client.scams_sec2_text", sharedData)}</p>
                            <img src="/assets/images/scam/5.png" alt="" />
                        </div>
                        <Form />
                    </div>
                </section>
            </div>
        </Layout>

    )
}

export default Scams
