import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { RiAlertLine } from "react-icons/ri";
import { FiCheckSquare } from "react-icons/fi";
import Swal from "sweetalert2";

const Account = ({ success, message }) => {
    const { errors, account } = usePage().props;
    if(message){
        Swal.fire({
            title: __("mail_verify_form_sent"),
            text: __("do_you_want_continue"),
            icon: __("mail_verify_form_sent"),
            confirmButtonText: __("cool")
        })
    }

    const profile = account.profile;

    const photo = account.file;

    const { data, setData, post, progress } = useForm({
        name: profile.name ?? "",
        email: account.email ?? "",
        surname: profile.surname ?? "",
        phone: profile.phone ?? "",
        address: profile.address ?? "",
        city: profile.city ?? "",
        country: profile.country ?? "",
        zip_code: profile.zip_code ?? "",
        photo: photo ? "/" + photo.path + "/" + photo.title : "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("client.changeAccount"));
    }

    function sendVerificationLink(e) {
        e.preventDefault();
        Inertia.get(route("verification.send"));
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
                                    {/* Account Information */}
                                    {__("dashboard_account_title")}
                                </h2>
                                {!account.email_verified_at ? (
                                    <div className="alert-box alert-primary">
                                        <div className="alert-txt">
                                            <div className="ti">
                                                <RiAlertLine />
                                            </div>
                                            {/* Confirm your email address */}
                                            {__("dashboard_account_confirm_email")}
                                        </div>
                                        <a
                                            onClick={sendVerificationLink}
                                            href="#"
                                            className="btn btn-sm btn-primary"
                                        >
                                            {__("dashboard_account_resend_email")}
                                            {/* Resend Email */}
                                        </a>
                                    </div>
                                ) : null}

                                <ul
                                    className="nav nav-tabs nav-tabs-line"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#personal-data"
                                        >
                                            {/* Personal Data */}
                                            {__("dashboard_account_personaldata")}
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="personal-data"
                                    >
                                        <form action="#" onSubmit={submit}>
                                            <div className="input-item input-with-label">
                                                {errors.name && (
                                                    <div>{errors.name}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {/* Full Name */}
                                                    {__("dashboard_account_fullname")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="full-name"
                                                    name="full-name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.surname && (
                                                    <div>{errors.surname}</div>
                                                )}
                                                <label
                                                    htmlFor="sur-name"
                                                    className="input-item-label"
                                                >
                                                    {/* Surname */}
                                                    {__("dashboard_account_surname")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="sur-name"
                                                    name="sur-name"
                                                    value={data.surname}
                                                    onChange={(e) =>
                                                        setData(
                                                            "surname",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                <label
                                                    htmlFor="email-address"
                                                    className="input-item-label"
                                                >
                                                    {/* Email Address */}
                                                    {__("dashboard_account_email")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="email-address"
                                                    name="email-address"
                                                    value={data.email}
                                                    disabled="disabled"
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.phone && (
                                                    <div>{errors.phone}</div>
                                                )}
                                                <label
                                                    htmlFor="mobile-number"
                                                    className="input-item-label"
                                                >
                                                    {/* Mobile Number */}
                                                    {__("dashboard_account_mobile")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="mobile-number"
                                                    name="mobile-number"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.country && (
                                                    <div>{errors.country}</div>
                                                )}
                                                <label
                                                    htmlFor="mobile-number"
                                                    className="input-item-label"
                                                >
                                                    {/* Country */}
                                                    {__("dashboard_account_country")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="address"
                                                    name="mobile-number"
                                                    value={data.country}
                                                    onChange={(e) =>
                                                        setData(
                                                            "country",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.city && (
                                                    <div>{errors.city}</div>
                                                )}
                                                <label
                                                    htmlFor="mobile-number"
                                                    className="input-item-label"
                                                >
                                                    {/* City */}
                                                    {__("dashboard_account_city")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="city"
                                                    name="mobile-number"
                                                    value={data.city}
                                                    onChange={(e) =>
                                                        setData(
                                                            "city",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.address && (
                                                    <div>{errors.address}</div>
                                                )}
                                                <label
                                                    htmlFor="mobile-number"
                                                    className="input-item-label"
                                                >
                                                    {/* Address */}
                                                    {__("dashboard_account_address")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="address"
                                                    name="mobile-number"
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData(
                                                            "address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.zip_code && (
                                                    <div>{errors.zip_code}</div>
                                                )}
                                                <label
                                                    htmlFor="mobile-number"
                                                    className="input-item-label"
                                                >
                                                    {/* Zip-code */}
                                                    {__("dashboard_account_zipcode")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="zip_code"
                                                    name="mobile-number"
                                                    value={data.zip_code}
                                                    onChange={(e) =>
                                                        setData(
                                                            "zip_code",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary">
                                                    {/* Update */}
                                                    {__("dashboard_account_update")}
                                                </button>
                                                <div className="gaps-2x d-sm-none"></div>
                                                <span className="color-success">

                                                    {/* All Changes are saved */}

                                                    {success ? < FiCheckSquare style={{ marginRight: "4px", }} /> : ""}
                                                    {success ? __("dashboard_account_all_changes_are_saved") : ""}

                                                </span>
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

export default Account;
