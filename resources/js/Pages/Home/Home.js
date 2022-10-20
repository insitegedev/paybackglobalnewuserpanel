import React, { useState } from "react";
import {
    MainButton,
    MainButtonSubmit,
} from "../../components/Button/MainButton";
import {
    financeTabs,
    fraudTabs,
    hero,
    howFoundOut,
    partners,
    questions,
    users,
    whatWeDo,
    serviceBoxes,
} from "./HomeData.js";
import "./Home.css";
import Swal from "sweetalert2";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Form, FormBox } from "../../components/Form/Form";
import Layout from "../../Layouts/Layout";

const Home = ({ alert }) => {

    const { pathname, userName, gemail, gphone } = usePage().props;

    console.log(userName);
    if (alert) {
        Swal.fire({
            title: alert,
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
        });
    }
    const [showFraud, setShowFraud] = useState(1);
    const [showFinance, setShowFinance] = useState(2);

    const [showAnswer, setShowAnswer] = useState(0);
    const questionClick = (index) => {
        if (showAnswer === index) {
            setShowAnswer(0);
        } else {
            setShowAnswer(index);
        }
    };
    return (
        <Layout>
            <div className="homePage">
                <div className="hero">
                    <div className="wrapper">
                        <div className="flex main">
                            <img className="hero_img" src={hero.img} alt="" />
                            <div className="content">
                                <div className="bgd_text">
                                    {__("home_paragraph1_main")}
                                </div>
                                <div className="f35">
                                    {__("home_paragraph2_main")}
                                </div>
                                <p>{hero.paragraph}</p>
                                <div className="flex">
                                    <Link
                                        className="contact_btn flex centered"
                                        href={route("client.incident.index")}
                                    >
                                        {__("contact_us")}
                                        <img
                                            src="/img/icons/other/arrow-right.svg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="partners">
                            <div className="bgd_text">
                                {__("home_our_partners")}
                            </div>
                            <div className="grid">
                                {partners.map((partner, i) => {
                                    return (
                                        <div className="item" key={i}>
                                            <img src={partner.logo} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="users">
                    <div className="wrapper flex">
                        <div className="content" data-aos="slide-right">
                            <span style={{ color: "#942fdbc7" }}>{__("home_explore_our_services")}</span>
                            <br />{" "}
                            <div className="f35">{__("home_molding_fund_recovery")}</div>
                            <p>{__("home_molding_text_below_title")}</p>
                        </div>
                        <div className="boxes">
                            {serviceBoxes.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <img src={item.icon} alt="" />
                                        <h4>{item.title}</h4>
                                        <p>{item.para}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="what_we_do">
                    <img className="abs_bg" src="/img/bgs/2.png" alt="" />
                    <div className="wrapper flex">
                        <FormBox imgSrc="/img/form/1.svg" />
                        <div data-aos="fade-up" className="text">
                            <div className="f35">
                                {__("home_what_do_we_do")}
                            </div>
                            <p>{whatWeDo.p1}</p>
                            <p>{whatWeDo.p2}</p>
                            <div className="checks">
                                {whatWeDo.checks.map((check, index) => {
                                    return (
                                        <div key={index} className="item flex">
                                            {" "}
                                            <img
                                                src="/img/icons/other/check.svg"
                                                alt=""
                                            />{" "}
                                            <span> {check}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="we_aid_you wrapper">
                    <div className="f35">
                        <svg
                            width="52px"
                            height="52px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 447"
                            data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/list.svg"
                            class="svg-inject icon-svg icon-svg-md mb-4"
                        >
                            <path
                                fill="#36496d"
                                class="lineal-stroke"
                                d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
                            ></path>
                            <circle
                                fill="#942fdb"
                                class="lineal-fill"
                                cx="102.4"
                                cy="102.4"
                                r="87.8"
                            ></circle>
                            <path
                                class="lineal-stroke"
                                d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
                            ></path>
                        </svg>{" "}
                        <br /> {__("home_aid_we_are_here_to_aid_you")}
                    </div>
                    <div className="flex">
                        <div className="text">
                            <p>
                                <strong>
                                    {__("home_aid_scams_we_worked_the_way")}
                                </strong>
                            </p>
                            <p style={{ opacity: "1" }}>
                                {__("home_aid_scamers_are_prevalent")}
                            </p>
                            <p>{__("home_aid_number_of_ways")}</p>
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <div className="number">01</div>
                                <h4>{__("home_aid_option_1")}</h4>
                                <p>{__("home_aid_answer_1")}</p>
                            </div>
                            <div className="box">
                                <div className="number">02</div>
                                <h4>{__("home_aid_option_2")}</h4>
                                <p>{__("home_aid_answer_2")}</p>
                            </div>
                            <div className="box">
                                <div className="number">03</div>
                                <h4>{__("home_aid_option_3")}</h4>
                                <p>{__("home_aid_answer_3")}</p>
                            </div>
                            <div className="box">
                                <div className="number">04</div>
                                <h4>{__("home_aid_option_4")}</h4>
                                <p>{__("home_aid_answer_4")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="boxes">
                            <div className="box">
                                <div className="number">05</div>
                                <h4>{__("home_aid_option_5")}</h4>
                                <p>{__("home_aid_answer_5")}</p>
                            </div>
                            <div className="box">
                                <div className="number">06</div>
                                <h4>{__("home_aid_option_6")}</h4>
                                <p>{__("home_aid_answer_6")}</p>
                            </div>
                            <div className="box">
                                <div className="number">07</div>
                                <h4>{__("home_aid_option_7")}</h4>
                                <p>{__("home_aid_answer_7")}</p>
                            </div>
                        </div>
                        <div className="text">
                            <p style={{ opacity: "1" }}>
                                {__("home_aid_growing_buzz")}
                            </p>
                            <p>{__("home_aid_the_number_ways_con_work")}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="about_us_section">
                    <div className="wrapper">
                        <div className="f35">{ __("home_how_did_you_find_out")}</div>
                        <p>{ __("home_how_did_your_answer_helps")}</p>
                        <div className="box">
                            <p>{ __("home_how_did_select_answer")}</p>
                            {howFoundOut.map((option, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="radio_input flex centered"
                                    >
                                        <input
                                            type="radio"
                                            name="about_us"
                                            id={`about_us_${index}`}
                                        />
                                        <label htmlFor={`about_us_${index}`}>
                                            {option}
                                        </label>
                                    </div>
                                );
                            })}

                            <MainButtonSubmit text={ __("home_faq_submit_button")} />
                        </div>
                    </div>
                </div> */}
                <div className="faq_section">
                    <div className="wrapper">
                        <div className="flex content">
                            <div className="text">
                                <div
                                    style={{
                                        color: "#942fdb",
                                        position: "relative",
                                        zIndex: "100",
                                    }}
                                >
                                    FAQ
                                </div>
                                <div className="f35">
                                    {__("home_faq_main_title")}
                                </div>
                                <p>
                                {__("home_faq_sub_title1")}
                                </p>
                            </div>
                            <div className="faqs">
                                {questions.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                questionClick(index + 1)
                                            }
                                            className={
                                                showAnswer === index + 1
                                                    ? "question_box open"
                                                    : "question_box"
                                            }
                                        >
                                            <div className="question flex">
                                                <div className="number">
                                                    {index + 1}
                                                </div>
                                                <div>{item.question}</div>
                                                <img
                                                    src="/img/icons/other/arrow-down.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="answer">
                                                {item.answer}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>{" "}
                        </div>
                        {/* <div className="form_container">
                            <div className="title">Ask any question!</div>
                            <Form />
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
