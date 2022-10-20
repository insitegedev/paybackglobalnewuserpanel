import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";

const FAQ = () => {
    return (
        <div className="user-dashboard">
            <Topbar />
            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-panel">
                                <h2 className="user-panel-title">
                                    {/* Frequently Asked Questions */}
                                    {__("faq_frequentlyaskedquestions")}

                                </h2>
                                <div id="faqList">
                                    <h4 className="color-dark">
                                        {/* General */}
                                        {__("faq_general")}
                                    </h4>
                                    <div className="accordion-simple" id="faqList-1">
                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1-1"
                                            >
                                                {/* What is ICO Crypto? */}
                                                {__("faq_general_question1")}
                                            </h6>
                                            <div
                                                id="collapse-1-1"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_general_answer1")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1-2"
                                            >
                                                {/* What cryptocurrencies can I use to purchase? */}
                                                {__("faq_general_question2")}
                                            </h6>
                                            <div
                                                id="collapse-1-2"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_general_answer2")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1-3"
                                            >
                                                {/* How can I participate in the ICO Token sale? */}
                                                {__("faq_general_question3")}
                                            </h6>
                                            <div
                                                id="collapse-1-3"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_general_answer3")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1-4"
                                            >
                                                {/* How do I benefit from the ICO Token? */}
                                                {__("faq_general_question4")}
                                            </h6>
                                            <div
                                                id="collapse-1-4"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_general_answer4")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="color-dark">
                                        {/* KYC Application */}
                                        {__("faq_kyc_application")}
                                    </h4>
                                    <div className="accordion-simple" id="faqList-2">
                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2-1"
                                            >
                                                {/* Which of us ever undertakes laborious? */}
                                                {__("faq_kyc_qusetion1")}
                                            </h6>
                                            <div
                                                id="collapse-2-1"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_kyc_answer1")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2-2"
                                            >
                                                {/* Who do not know how to pursue rationally? */}
                                                {__("faq_kyc_qusetion2")}
                                            </h6>
                                            <div
                                                id="collapse-2-2"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_kyc_answer2")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2-3"
                                            >
                                                {/* Their separate existence is a myth? */}
                                                {__("faq_kyc_qusetion3")}
                                            </h6>
                                            <div
                                                id="collapse-2-3"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_kyc_answer3")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2-4"
                                            >
                                                {/* Pityful a rethoric question ran over her cheek? */}
                                                {__("faq_kyc_qusetion4")}
                                            </h6>
                                            <div
                                                id="collapse-2-4"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_kyc_answer4")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="color-dark">
                                        {/* Contribution */}
                                        {__("faq_contribution")}
                                    </h4>
                                    <div className="accordion-simple" id="faqList-3">
                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3-1"
                                            >
                                                {/* When she reached the first hills? */}
                                                {__("faq_contribution_question1")}
                                            </h6>
                                            <div
                                                id="collapse-3-1"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_contribution_answer1")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3-2"
                                            >
                                                {/* Which roasted parts of sentences fly into your mouth? */}
                                                {__("faq_contribution_question2")}
                                            </h6>
                                            <div
                                                id="collapse-3-2"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_contribution_answer2")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3-3"
                                            >
                                                {/* Vokalia and Consonantia, there live? */}
                                                {__("faq_contribution_question3")}
                                            </h6>
                                            <div
                                                id="collapse-3-3"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_contribution_answer3")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h6
                                                className="accordion-heading collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3-4"
                                            >
                                                {/* How do I benefit from the ICO Token? */}
                                                {__("faq_contribution_question4")}
                                            </h6>
                                            <div
                                                id="collapse-3-4"
                                                className="collapse"
                                                data-bs-parent="#faqList"
                                            >
                                                <div className="accordion-content">
                                                    <p>
                                                        {/* ICO Crypto - is unique platform; that is secure,
                                                        smart and easy-to-use platform, and completely
                                                        disrupting the way businesses raise capital. */}
                                                        {__("faq_contribution_answer4")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
