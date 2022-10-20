import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { MainButton } from "../../components/Button/MainButton";
import Form from "../../components/Form/Form";
import "./FinanceFraud.css";
import Layout from "../../Layouts/Layout";

const Recovery = () => {
    return (
        <Layout>
            <div className="finance_fraud pages">
                <img src="/img/ff/bg1.png" alt="" className="background" />
                <div className="wrapper flex">
                    <div className="left">
                        <div className="page_head">
                            <div className="f35">{__("fraud_recovery")}</div>
                        </div>
                        <p>{__("fraud_recovery_content_1")}</p>
                        <p>{__("fraud_recovery_content_2")}</p>
                        <Link
                            className="next_page flex centered"
                            href={route("client.fraud.detection.index")}
                        >
                            <span>{__("fraud_detection")}</span>{" "}
                            <img
                                src="/img/icons/other/arrow-right2.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            className="next_page flex centered"
                            href={route("client.fraud.expertise.index")}
                        >
                            <span>{__("our_epxertise")}</span>{" "}
                            <img
                                src="/img/icons/other/arrow-right2.svg"
                                alt=""
                            />
                        </Link>{" "}
                    </div>
                    <div className="right">
                        <img src="/img/ff/1-b.png" alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Recovery;
