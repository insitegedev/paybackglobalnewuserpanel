import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../Layouts/vendor.bundle.css";
// import 'themify-icons/themify-icons';
import { useState, useRef } from "react";
import { BsInfoCircle } from "react-icons/bs";

//import { Link } from "react-router-dom";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import LayoutAccount from "../Layouts/LayoutAccount";

const KYCApp = () => {
    const [showTab, setShowTab] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState(false);

    const { errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
        passport: "",
        id_front: "",
        id_back: "",
        driver_license: "",
    });

    function submit(e) {
        e.preventDefault();

        let checked = document.querySelectorAll(
            ".input-checkbox:checked"
        ).length;
        let count = document.querySelectorAll(".input-checkbox").length;

        if (checked < count) {
            setModalError(true)
        } else {
            post(route("client.uploadDocument2"));
        }
    }

    return (
        <div className="user-dashboard">
            <Topbar />
            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-kyc">
                                <form action="#">
                                    <div className="from-step">
                                        <div className="from-step-item">
                                            <div className="from-step-heading">
                                                {/*<div className="from-step-number">02</div>*/}
                                                <div className="from-step-head">
                                                    <h4>
                                                        {/* Indentity Verify */}
                                                        {__(
                                                            "kyc_identify_verify"
                                                        )}
                                                    </h4>
                                                    <p>
                                                        {/* Upload documents to
                                                        verify your indentity. */}
                                                        {__(
                                                            "kyc_upload_documents"
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="from-step-content">
                                                <div className="note note-md note-info note-plane">
                                                    <BsInfoCircle />

                                                    <p>
                                                        {/* Please upload any of the
                                                        following personal
                                                        document. */}
                                                        {__(
                                                            "kyc_please_upload_any_of_the_following"
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="gaps-2x"></div>
                                                <ul
                                                    className="nav nav-tabs nav-tabs-bordered"
                                                    role="tablist"
                                                >
                                                    <li
                                                        className="nav-item"
                                                        onClick={() =>
                                                            setShowTab(0)
                                                        }
                                                    >
                                                        <a
                                                            className={`nav-link ${
                                                                showTab === 0
                                                                    ? "active"
                                                                    : ""
                                                            } `}
                                                            data-bs-toggle="tab"
                                                        >
                                                            <div className="nav-tabs-icon">
                                                                <img
                                                                    src="/client/assets/images/icon-passport.png"
                                                                    alt="icon"
                                                                />
                                                                <img
                                                                    src="/client/assets/images/icon-passport-color.png"
                                                                    alt="icon"
                                                                />
                                                            </div>
                                                            <span>
                                                                {/* Passport */}
                                                                {__(
                                                                    "kyc_passport"
                                                                )}
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="nav-item"
                                                        onClick={() =>
                                                            setShowTab(1)
                                                        }
                                                    >
                                                        <a
                                                            className={`nav-link ${
                                                                showTab === 1
                                                                    ? "active"
                                                                    : ""
                                                            } `}
                                                            data-bs-toggle="tab"
                                                        >
                                                            <div className="nav-tabs-icon">
                                                                <img
                                                                    src="/client/assets/images/icon-national-id.png"
                                                                    alt="icon"
                                                                />
                                                                <img
                                                                    src="/client/assets/images/icon-national-id-color.png"
                                                                    alt="icon"
                                                                />
                                                            </div>
                                                            <span>
                                                                {/* National Card */}
                                                                {__(
                                                                    "kyc_nationalcard"
                                                                )}
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="nav-item"
                                                        onClick={() =>
                                                            setShowTab(2)
                                                        }
                                                    >
                                                        <a
                                                            className={`nav-link ${
                                                                showTab === 2
                                                                    ? "active"
                                                                    : ""
                                                            } `}
                                                            data-bs-toggle="tab"
                                                        >
                                                            <div className="nav-tabs-icon">
                                                                <img
                                                                    src="/client/assets/images/icon-licence.png"
                                                                    alt="icon"
                                                                />
                                                                <img
                                                                    src="/client/assets/images/icon-licence-color.png"
                                                                    alt="icon"
                                                                />
                                                            </div>
                                                            <span>
                                                                {/* Driver’s License */}
                                                                {__(
                                                                    "kyc_driversLicense"
                                                                )}
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>

                                                <div
                                                    className="tab-content"
                                                    id="myTabContent"
                                                >
                                                    <div
                                                        className={`tab-pane fade ${
                                                            showTab === 0
                                                                ? "show active"
                                                                : ""
                                                        }`}
                                                        id="passport"
                                                    >
                                                        <h5 className="kyc-upload-title">
                                                            {/* To avoid delays when
                                                            verifying account,
                                                            Please make sure
                                                            bellow: */}
                                                            {__(
                                                                "kyc_to_avoid_delays_makeSureBellow"
                                                            )}
                                                        </h5>
                                                        <ul className="kyc-upload-list">
                                                            <li>
                                                                {/* Chosen
                                                                credential must
                                                                not be expaired. */}
                                                                {__(
                                                                    "kyc_mustntBeExpired"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Document should
                                                                be good
                                                                condition and
                                                                clearly visible. */}
                                                                {__(
                                                                    "kyc_shouldBeVisible"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Make sure that
                                                                there is no
                                                                light glare on
                                                                the card. */}
                                                                {__(
                                                                    "kyc_noLightGlare"
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <div className="gaps-4x"></div>
                                                        <span className="upload-title">
                                                            {/* Upload Here Your
                                                            Passport Copy */}
                                                            {__(
                                                                "kyc_upload_passport_copy"
                                                            )}
                                                        </span>
                                                        <div className="row align-items-center">
                                                            <div className="col-8">
                                                                <div className="upload-box ">
                                                                    <div className="upload-zone dropzone dz-clickable  ">
                                                                        <div
                                                                            className="dz-message"
                                                                            data-dz-message
                                                                        >
                                                                            <span className="dz-message-text">
                                                                                {/* Drag
                                                                                and
                                                                                drop
                                                                                file */}
                                                                                {__(
                                                                                    "kyc_dragAndDrop"
                                                                                )}
                                                                            </span>
                                                                            <span className="dz-message-or">
                                                                                {/* or */}
                                                                                {__(
                                                                                    "kyc_or"
                                                                                )}
                                                                            </span>
                                                                            <butto type='button' className="btn btn-primary file_button">
                                                                                {/* SELECT */}
                                                                                {__(
                                                                                    "kyc_select"
                                                                                )}
                                                                                <input
                                                                                    onChange={
                                                                                        e =>
                                                                                        {
                                                                                            e.preventDefault();
                                                                                            setData(
                                                                                                "passport",
                                                                                                e
                                                                                                    .target
                                                                                                    .files[0]
                                                                                            )
                                                                                        }

                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            "block",
                                                                                    }}
                                                                                    className="file_input"
                                                                                    type="file"
                                                                                    name="passport"
                                                                                />
                                                                            </butto>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="kyc-upload-img">
                                                                    <img
                                                                        src="/client/assets/images/vector-passport.png"
                                                                        alt="vector"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gaps-1x"></div>
                                                    </div>
                                                    <div
                                                        className={`tab-pane fade ${
                                                            showTab === 1
                                                                ? "show active"
                                                                : ""
                                                        }`}
                                                        id="national-card"
                                                    >
                                                        <h5 className="kyc-upload-title">
                                                            {/* To avoid delays when
                                                            verifying account,
                                                            Please make sure
                                                            bellow: */}
                                                            {__(
                                                                "kyc_to_avoid_delays_makeSureBellow"
                                                            )}
                                                        </h5>
                                                        <ul className="kyc-upload-list">
                                                            <li>
                                                                {/* Chosen
                                                                credential must
                                                                not be expaired. */}
                                                                {__(
                                                                    "kyc_mustntBeExpired"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Document should
                                                                be good
                                                                condition and
                                                                clearly visible. */}
                                                                {__(
                                                                    "kyc_shouldBeVisible"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Make sure that
                                                                there is no
                                                                light glare on
                                                                the card. */}
                                                                {__(
                                                                    "kyc_noLightGlare"
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <div className="gaps-4x"></div>
                                                        <span className="upload-title">
                                                            {/* Upload Here Your
                                                            National id Front
                                                            Side */}
                                                            {__(
                                                                "kyc_upload_id_front"
                                                            )}
                                                        </span>
                                                        <div className="row align-items-center">
                                                            <div className="col-8">
                                                                <div className="upload-box">
                                                                    <div className="upload-zone dropzone dz-clickable  ">
                                                                        <div
                                                                            className="dz-message"
                                                                            data-dz-message
                                                                        >
                                                                            <span className="dz-message-text">
                                                                                {/* Drag
                                                                                and
                                                                                drop
                                                                                file */}
                                                                                {__(
                                                                                    "kyc_dragAndDrop"
                                                                                )}
                                                                            </span>
                                                                            <span className="dz-message-or">
                                                                                {/* or */}
                                                                                {__(
                                                                                    "kyc_or"
                                                                                )}
                                                                            </span>
                                                                            <button type='button' className="btn btn-primary file_button">
                                                                                {/* SELECT */}
                                                                                {__(
                                                                                    "kyc_select"
                                                                                )}
                                                                                <input
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "id_front",
                                                                                            e
                                                                                                .target
                                                                                                .files[0]
                                                                                        )
                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            "block",
                                                                                    }}
                                                                                    className="file_input"
                                                                                    type="file"
                                                                                    name="id_front"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="kyc-upload-img">
                                                                    <img
                                                                        src="/client/assets/images/vector-id-front.png"
                                                                        alt="vector"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gaps-3x"></div>
                                                        <span className="upload-title">
                                                            {/* Upload Here Your
                                                            National id Back
                                                            Side */}
                                                            {__(
                                                                "kyc_upload_id_back"
                                                            )}
                                                        </span>
                                                        <div className="row align-items-center">
                                                            <div className="col-8">
                                                                <div className="upload-box">
                                                                    <div className="upload-zone dropzone dz-clickable  ">
                                                                        <div
                                                                            className="dz-message"
                                                                            data-dz-message
                                                                        >
                                                                            <span className="dz-message-text">
                                                                                {/* Drag
                                                                                and
                                                                                drop
                                                                                file */}
                                                                                {__(
                                                                                    "kyc_dragAndDrop"
                                                                                )}
                                                                            </span>
                                                                            <span className="dz-message-or">
                                                                                {/* or */}
                                                                                {__(
                                                                                    "kyc_or"
                                                                                )}
                                                                            </span>
                                                                            <button type='button' className="btn btn-primary file_button">
                                                                                {/* SELECT */}
                                                                                {__(
                                                                                    "kyc_select"
                                                                                )}
                                                                                <input
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "id_back",
                                                                                            e
                                                                                                .target
                                                                                                .files[0]
                                                                                        )
                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            "block",
                                                                                    }}
                                                                                    className="file_input"
                                                                                    type="file"
                                                                                    name="id_back"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="kyc-upload-img">
                                                                    <img
                                                                        src="/client/assets/images/vector-id-back.png"
                                                                        alt="vector"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gaps-1x"></div>
                                                    </div>
                                                    <div
                                                        className={`tab-pane fade ${
                                                            showTab === 2
                                                                ? "show active"
                                                                : ""
                                                        }`}
                                                        id="driver-licence"
                                                    >
                                                        <h5 className="kyc-upload-title">
                                                            {/* To avoid delays when
                                                            verifying account,
                                                            Please make sure
                                                            bellow: */}
                                                            {__(
                                                                "kyc_to_avoid_delays_makeSureBellow"
                                                            )}
                                                        </h5>
                                                        <ul className="kyc-upload-list">
                                                            <li>
                                                                {/* Chosen
                                                                credential must
                                                                not be expaired. */}
                                                                {__(
                                                                    "kyc_mustntBeExpired"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Document should
                                                                be good
                                                                condition and
                                                                clearly visible. */}
                                                                {__(
                                                                    "kyc_shouldBeVisible"
                                                                )}
                                                            </li>
                                                            <li>
                                                                {/* Make sure that
                                                                there is no
                                                                light glare on
                                                                the card. */}
                                                                {__(
                                                                    "kyc_noLightGlare"
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <div className="gaps-4x"></div>
                                                        <span className="upload-title">
                                                            {/* Upload Here Your
                                                            Driving Licence Copy */}
                                                            {__(
                                                                "kyc_upload_driving_license"
                                                            )}
                                                        </span>
                                                        <div className="row align-items-center">
                                                            <div className="col-8">
                                                                <div className="upload-box">
                                                                    <div className="upload-zone dropzone dz-clickable  ">
                                                                        <div
                                                                            className="dz-message"
                                                                            data-dz-message
                                                                        >
                                                                            <span className="dz-message-text">
                                                                                {/* Drag
                                                                                and
                                                                                drop
                                                                                file */}
                                                                                {__(
                                                                                    "kyc_dragAndDrop"
                                                                                )}
                                                                            </span>
                                                                            <span className="dz-message-or">
                                                                                {/* or */}
                                                                                {__(
                                                                                    "kyc_or"
                                                                                )}
                                                                            </span>
                                                                            <button type='button' className="btn btn-primary file_button">
                                                                                {/* SELECT */}
                                                                                {__(
                                                                                    "kyc_select"
                                                                                )}
                                                                                <input
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "driver_license",
                                                                                            e
                                                                                                .target
                                                                                                .files[0]
                                                                                        )
                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            "block",
                                                                                    }}
                                                                                    className="file_input"
                                                                                    type="file"
                                                                                    name="driver_license"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="kyc-upload-img">
                                                                    <img
                                                                        src="/client/assets/images/vector-licence.png"
                                                                        alt="vector"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gaps-1x"></div>
                                                    </div>
                                                </div>
                                                <div className="gaps-2x"></div>
                                            </div>
                                        </div>

                                        <div className="from-step-item">
                                            <div className="from-step-content">
                                                <a
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kycConfirm"
                                                    onClick={(e) =>
                                                        {
                                                            e.preventDefault()
                                                            setShowModal(true)
                                                        }
                                                    }
                                                >
                                                    {/* Submit Details */}
                                                    {__("kyc_submitDetails")}
                                                </a>
                                                <div className="gaps-2x"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                id="kycConfirm"
                tabIndex="-1"
            >
                <div onClick={() => setShowModal(false)} className="bg"></div>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="kyc-popup">
                            <h2 className="text-center">
                                {/* Confirm Information */}
                                {__("kyc_confirmInformation")}
                            </h2>
                            {/* <div className="input-item">
                                <input
                                    className="input-checkbox"
                                    id="term-condition"
                                    type="checkbox"
                                />
                                <label htmlFor="term-condition">
                                    {__("kyc_i_have_read_the")}

                                    <a href="#">
                                        {__("kyc_terms_of_condition")}
                                    </a>
                                    {__("kyc_and")}
                                    <a href="#">
                                        {__("kyc_privacy_policy")}.
                                    </a>
                                </label>
                            </div> */}
                            <div className="input-item">
                                <input
                                    className="input-checkbox"
                                    id="info-currect"
                                    type="checkbox"
                                />
                                <label htmlFor="info-currect">
                                    {/* All the personal information I have entered
                                    is correct. */}
                                    {__(
                                        "kyc_all_the_personal_information_correct"
                                    )}
                                </label>
                            </div>
                            <div className="input-item">
                                <input
                                    className="input-checkbox"
                                    id="certification"
                                    type="checkbox"
                                />
                                <label htmlFor="certification">
                                    {/* I certify that, I am perticipating in the
                                    token distribution event in the capacity of
                                    an individual (and benificial owner) and not
                                    as an agent (or representative of a third
                                    party corporate entity. */}
                                    {__("kyc_i_certify_that")}
                                </label>
                            </div>
                            <div className="input-item">
                                <input
                                    className="input-checkbox"
                                    id="tokenKnow"
                                    type="checkbox"
                                />
                                <label htmlFor="tokenKnow">
                                    {/* I understand that, I can only in the token
                                    distribution event with the wallet address
                                    that was entered in the application form. */}
                                    {__("kyc_i_understand_that")}
                                </label>
                            </div>
                            <div className="gaps-2x"></div>
                            {modalError? <p className='alert alert-danger'>{__("modal_check_all")}</p> : ""}
                            <div className="text-center">
                                <a
                                    className="btn btn-primary"
                                    href="javascript:void(0)"
                                    onClick={submit}
                                >
                                    {/* Process for Verify */}
                                    {__("kyc_process_for_verify")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default KYCApp;
