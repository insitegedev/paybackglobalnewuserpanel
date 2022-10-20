import React from "react";
import "./Organization.css";
import Layout from "../../Layouts/Layout";
import Partners from "../../components/Partners/Partners";
import { FormBox } from "../../components/Form/Form";

const Organization = () => {
    const timelines = [
        {
            title: __("organization_step_1_title"),
            para: __("organization_step_1_text"),
            alignLeft: false,
        },
        {
            title: __("organization_step_2_title"),
            para: __("organization_step_2_text"),
            alignLeft: true,
        },
        {
            title: __("organization_step_3_title"),
            para: __("organization_step_3_text"),
            alignLeft: false,
        },
        {
            title: __("organization_step_4_title"),
            para: __("organization_step_4_text"),
            alignLeft: true,
        },
        {
            title: __("organization_step_5_title"),
            para: __("organization_step_5_text"),
            alignLeft: false,
        },
    ];
    return (
        <Layout>
            <div className=" organization">
                <img src="/img/bgs/5.png" alt="" className="showcase_img" />
                <div className="container">
                    <div className="heading">
                        <div className="bgd_text">
                        { __("organization_text_above_title")}
                        </div>
                        <div className="f35">{ __("organization_first_title")}</div>
                    </div>
                    <p>{ __("organization_frist_text")}
                    </p>
                    <img src="/img/other/7.png" alt="" />
                    <p>{ __("organization_second_text")}
                    </p>
                </div>
                <div className="wrapper">
                    <div
                        style={{ color: "#942fdb" }}
                        className="heading bgd_text f35">
                        { __("organization_our_history_title")}
                    </div>
                    <div className="history">
                        <img
                            className="timeline"
                            src="/img/other/history.png"
                            alt=""
                        />
                        <div className="years">
                            {timelines.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            item.alignLeft
                                                ? "item left"
                                                : "item right"
                                        }
                                    >
                                        <div className="title">
                                            <span>{`0${index + 1}`}</span>{" "}
                                            {item.title}
                                        </div>
                                        <p>{item.para}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Partners />
                <div className="bottom_form">
                    <div className="wrapper ">
                        <img className="shape1" src="/img/ff/bg4.png" alt="" />
                        <div className="f35">
                            Still cant find an answer to your question? <br />
                            feel free to{" "}
                            <span style={{ color: "#942fdb" }}>
                                {" "}
                                Get in touch
                            </span>
                        </div>
                        <FormBox imgSrc="/img/form/1.svg" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Organization;
