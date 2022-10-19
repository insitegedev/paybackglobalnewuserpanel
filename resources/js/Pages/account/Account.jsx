import React, { useState } from "react";
//import user from "../../assets/images/icons/auth/3.png";
import ChangePassword from "./ChangePassword";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Verification from "./Verification";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Account = ({ seo, account }) => {
    const sharedData = usePage().props.localizations;
    const [activeTab, setActiveTab] = useState(0);

    // console.log(account)
    const tabs = [
        {
            button: __("client.account_dashboard", sharedData),
            content: <Dashboard />,
        },
        {
            button: __("client.account_settings", sharedData),
            content: <Settings />,
        },
        {
            button: __("client.account_change_pass", sharedData),
            content: <ChangePassword />,
        },
        {
            button: __("client.account_verification", sharedData),
            content: <Verification />,
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="accountPage relative md:before:block before:hidden">
                <div className="wrapper flex items-start md:flex-row flex-col">
                    <div className="md:bg-gray relative pr-5 lg:mr-20 mr-10 md:pb-20 pb-0 h-full md:min-h-screen md:w-auto w-full">
                        <div className="pt-20 lg:pt-40">
                            <div className="flex items-center md:mb-16 mb-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                    <img
                                        src="/client/assets/images/icons/auth/3.png"
                                        className="w-full h-full  object-cover"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <div className="text-purple text-lg ">{account.profile.name} {account.profile.surname}</div>
                                    {account.verified ? (
                                        <div className="text-green text-sm">{__("client.account_status", sharedData)}: {__("client.account_verified", sharedData)}</div>
                                    ) : (
                                        <div className="text-red text-sm">{__("client.account_status", sharedData)}: {__("client.account_not_verified", sharedData)}</div>
                                    )}

                                </div>
                            </div>
                            {tabs.map((tab, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`relative transition text-sm px-2 md:text-lg hover:bg-gray2 py-1 md:w-60 md:pl-12 cursor-pointer mb-1 inline-block md:block ${activeTab === index &&
                                            "!bg-white  before:absolute before:content-[''] md:before:h-full before:h-1 md:before:w-1 before:w-full before:bg-purple before:left-0 before:bottom-0 z-10"
                                            }`}
                                    >
                                        {tab.button}
                                    </div>
                                );
                            })}
                            <div className="hidden md:block relative transition text-lg hover:bg-gray2 py-1 w-60 pl-12 cursor-pointer mt-20 underline">
                                <Link href={route('client.logout')}>{__("client.account_logout", sharedData)}</Link>
                            </div>
                        </div>
                    </div>
                    {tabs.map((tab, index) => {
                        return (
                            <div
                                className={`pt-10 md:pt-20 lg:pt-40 pb-20 hidden mx-auto  ${activeTab === index && "!block"
                                    }`}
                            >
                                {tab.content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout >

    );
};

export default Account;
