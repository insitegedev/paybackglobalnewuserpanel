import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";
import { Inertia } from "@inertiajs/inertia";
import { FiCheckSquare } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

const ChangePassword = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        old_password: "",
        password: "",
        password_repeat: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("client.changePassword"), values);
    }

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
                                    {__("security_settings")}
                                </h2>
                                <p>
                                    {__("security_settings_text")}
                                </p>
                                <ul
                                    className="nav nav-tabs nav-tabs-line"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link "
                                            data-bs-toggle="tab"
                                            href="/security"
                                        >
                                            {__("security")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="/change-password"
                                        >
                                             {__("changepassword")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/activity"
                                            className="nav-link"
                                        >
                                            {__("activitylog")}
                                        </Link>
                                    </li>
                                </ul>

                                <div
                                    className="tab-content"
                                    id="security-opt-tab"
                                >

                                    <div
                                        className="tab-pane fade active show"
                                        id="password-opt"
                                    >
                                        <form
                                            action="#"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    {errors.old_password && (
                                                        <div>
                                                            {
                                                                errors.old_password
                                                            }
                                                        </div>
                                                    )}
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="swalllet"
                                                            className="input-item-label"
                                                        >
                                                            {__("change_password_old_password")}
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="old-password"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            id="old_password"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    {errors.password && (
                                                        <div>
                                                            {errors.password}
                                                        </div>
                                                    )}
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="date-of-birth"
                                                            className="input-item-label"
                                                        >
                                                            {__("change_password_new_password")}
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="new-password"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            id="password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    {errors.password_repeat && (
                                                        <div>
                                                            {
                                                                errors.password_repeat
                                                            }
                                                        </div>
                                                    )}
                                                    <div className="input-item input-with-label">
                                                        <label
                                                            htmlFor="date-of-birth"
                                                            className="input-item-label"
                                                        >
                                                            {__("change_password_new_password_confirm")}
                                                        </label>
                                                        <input
                                                            className="input-bordered"
                                                            type="password"
                                                            name="re-password"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            id="password_repeat"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="note note-plane note-info">
                                                <FaInfoCircle className="fa" />
                                                <p>{__("change_password_password_requierments")}</p>
                                            </div>
                                            <div className="gaps-3x"></div>
                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary">
                                                    {__("change_password_password_update_button")}
                                                </button>
                                                <div className="gaps-2x d-sm-none"></div>
                                            </div>
                                        </form>
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

export default ChangePassword;
