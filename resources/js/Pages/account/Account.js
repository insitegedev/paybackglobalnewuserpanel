import React, { useState } from "react";
import {
    ChangePassword,
    Dashboard,
    EditProfile,
    VerifyProfile,
} from "./AccTabs";
import "./Account.css";
import Layout from "../../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";

const Account = ({ account }) => {

    // console.log(account, 'esa')
    const [activeTab, setActiveTab] = useState(0);
    const photo = account.file;

    const tabs = [
        {
            name: __("dashboard_dashboard_text_tab"),
            content: (
                <Dashboard
                    account={account}
                    balance={account.balances}
                    crypto_address={account.wallets}
                />
            ),
        },
        {
            name: __("dashboard_edit_profile_tab"),
            content: (
                <EditProfile profile={account.profile} photo={account.file} />
            ),
        },
        {
            name: __("verification_tab"),
            content: (
                <VerifyProfile profile={account.profile} photo={account.file} />
            ),
        },
        {
            name: __("dashboard_change_password_tab"),
            content: <ChangePassword />,
        },
    ];
    return (
        // <Layout>
        <div className="account ">
            <div className="wrapper flex">
                <div className="tabs">
                    <div className="hello">
                        <span>Hello</span>
                        <br />
                        <div className="name">
                            {account.profile.name + ' ' + account.profile.surname}
                        </div>
                    </div>
                    {tabs.map((tab, i) => {
                        return (
                            <button
                                className={
                                    activeTab === i ? "tab active" : "tab"
                                }
                                key={"tabs" + i}
                                onClick={() => setActiveTab(i)}
                            >
                                <span> {tab.name}</span>
                            </button>
                        );
                    })}
                    <Link href={route("client.logout")}>
                        <button className="logout">
                            {__("dashboard_log_out_button")}
                        </button>
                    </Link>
                </div>
                {tabs.map((tab, i) => {
                    return (
                        <div
                            className={
                                activeTab === i ? "content active" : "content"
                            }
                            key={"tabs_active" + i}
                        >
                            {tab.content}
                        </div>
                    );
                })}
            </div>
        </div>
        // </Layout>
    );
};

Account.layout = (page) => <Layout children={page} />;

export default Account;
