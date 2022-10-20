import React from "react";
import "./Organization.css";
import Layout from "../../Layouts/Layout";
import Partners from "../../components/Partners/Partners";
import { FormBox } from "../../components/Form/Form";
const Efforts = () => {
    return (
        <Layout>
            <div className=" organization efforts">
                <img src="/img/bgs/6.png" alt="" className="showcase_img" />
                <div className="container">
                    <div className="heading">
                        <div className="bgd_text">
                        { __("our_efforts_above_first_title")}
                        </div>
                        <div className="f35">{__("our_efforts_first_title")}</div>
                    </div>
                    <p>
                    { __("our_efforts_first_text")}
                    </p>
                    <img src="/img/other/7.png" alt="" />
                    <p>{ __("our_efforts_second_text")}
                    </p>
                </div>
                <div style={{ background: "#F1F3F9", padding: "25px 0" }}>
                    <div className="container" style={{ margin: "0 auto" }}>
                        <img src="/img/other/8.png" alt="" />
                    </div>
                </div>
                <div className="we_understand">
                    <img src="/img/bgs/7.png" className="background" alt="" />
                    <div className="wrapper flex">
                        <div className="text">
                            <div className="f35">{ __("our_efforts_we_understand_title")}</div>
                            <p>{ __("our_efforts_we_understand_text")}
                            </p>
                        </div>
                        <img src="/img/other/9.png" alt="" />
                    </div>
                </div>

                <Partners />
                <div className="bottom_form">
                    <div className="wrapper ">
                        <img className="shape1" src="/img/ff/bg4.png" alt="" />
                        <div className="f35">{ __("our_efforts_can_not_find_the_answer")}</div>
                        <FormBox imgSrc="/img/form/1.png" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Efforts;
