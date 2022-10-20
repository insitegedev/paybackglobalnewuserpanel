import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import Topbar from "../components/Topbar";
//import icon1 from "../assets/images/icon-ethereum.png";
//import icon2 from "../assets/images/icon-lightcoin.png";
import LayoutAccount from "../Layouts/LayoutAccount";

const Dashbord = ({ seo, account, message }) => {
    console.log(account, "esaa");

    if (message) {
        Swal.fire({
            title: __("mail_verify_form_sent"),
            text: __("do_you_want_continue"),
            icon: __("mail_verify_form_sent"),
            confirmButtonText: __("cool"),
        });
    }

    const managerArray = [
        account.manager_name,
        account.manager_email,
        account.manager_phone,
    ];

    const statusArray = [account.verification_proggress, account.requirements];
    const balance = account.balances;
    const crypto_address = account.wallets;

    return (
        <LayoutAccount seo={seo}>
            <div className="user-dashboard">
                <Topbar />
                <div className="user-wraper">
                    <div className="container">
                        <div className="d-flex">
                            <Sidebar />

                            <div className="user-content">
                                <div className="user-panel">
                                    <h2 className="user-panel-title">
                                        {/* Your Tokens */}
                                        {__("dashboard_your_tokens")}
                                    </h2>
                                    <form action="#">
                                        <h5 className="user-panel-subtitle">
                                            {/* 01. Some subtitle for your Tokens
                                            goes here in case of need */}
                                            {__("dashboard_title")}
                                        </h5>
                                        <div className="gaps-1x"></div>
                                        <div className="payment-list">
                                            <div className="row">
                                                {balance.map((item, index) => {
                                                    // console.log(item.currency.file, 'esaa');
                                                    if (
                                                        item.value != undefined
                                                    ) {
                                                        return (
                                                            <div className="col-md-3 col-sm-6">
                                                                <div className="payment-item">
                                                                    <input
                                                                        className="payment-check"
                                                                        type="radio"
                                                                        id="payeth"
                                                                        name="payOption"
                                                                        value="tranxETH"
                                                                        checked
                                                                    />
                                                                    <label htmlFor="payeth">
                                                                        <div className="payment-icon payment-icon-eth">
                                                                            <img
                                                                                src={
                                                                                    item
                                                                                        .currency
                                                                                        .file
                                                                                        ? "/" +
                                                                                          item
                                                                                              .currency
                                                                                              .file
                                                                                              .path +
                                                                                          "/" +
                                                                                          item
                                                                                              .currency
                                                                                              .file
                                                                                              .title
                                                                                        : null
                                                                                }
                                                                                alt="icon"
                                                                            />
                                                                        </div>
                                                                        <span className="payment-cur">
                                                                            {
                                                                                item
                                                                                    .currency
                                                                                    .name
                                                                            }
                                                                        </span>
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.value
                                                                        }{" "}
                                                                        {
                                                                            item
                                                                                .currency
                                                                                .code
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        <div className="input-item input-with-label">
                                            <h5 className="user-panel-subtitle">
                                                {/* 02. Your Address for tokens: */}
                                                02.{" "}
                                                {__(
                                                    "dashboard_Your_Address_for_tokens"
                                                )}
                                            </h5>
                                            {crypto_address.map(
                                                (item, index) => {
                                                    return (
                                                        <input
                                                            className="input-bordered"
                                                            type="text"
                                                            id="token-address"
                                                            name="token-address"
                                                            value={
                                                                item.currency
                                                                    .name +
                                                                " - " +
                                                                item.address
                                                            }
                                                        />
                                                    );
                                                }
                                            )}

                                            <span className="input-note">
                                                {/* Note: Address should be
                                                ERC20-compliant. */}
                                                {__(
                                                    "dashboard_adress_shouldbe"
                                                )}
                                            </span>
                                        </div>
                                        <h5 className="user-panel-subtitle">
                                            {managerArray.some((e) => e != null)
                                                ? "03." +
                                                  __("dashboard_your_manager")
                                                : ""}
                                        </h5>
                                        {managerArray.some(
                                            (e) => e != null
                                        ) && (
                                            <div className="refferal-statistics">
                                                {account.manager_name && (
                                                    <div className="col-md-4">
                                                        <div className="refferal-statistics-item">
                                                            <h6>
                                                                {__(
                                                                    "dashboard_your_manager_name"
                                                                )}
                                                                :
                                                            </h6>
                                                            <p>
                                                                {
                                                                    account.manager_name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                {account.manager_email && (
                                                    <div className="col-md-4">
                                                        <div className="refferal-statistics-item">
                                                            <h6>
                                                                {__(
                                                                    "dashboard_your_manager_mail"
                                                                )}
                                                                :
                                                            </h6>
                                                            <p>
                                                                {
                                                                    account.manager_email
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                {account.manager_phone && (
                                                    <div className="col-md-4">
                                                        <div className="refferal-statistics-item">
                                                            <h6>
                                                                {__("dashboard_your_manager_phone")}
                                                                :
                                                            </h6>
                                                            <p>
                                                                {
                                                                    account.manager_phone
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {statusArray.some(
                                            (e) =>
                                                e != null && e != "" && e != "0"
                                        ) && (
                                            <>
                                                <h5 className="user-panel-subtitle">
                                                    {statusArray.some(
                                                        (e) => e != null
                                                    )
                                                        ? "04." +
                                                          __(
                                                              "dashboard_verification_status_title"
                                                          )
                                                        : ""}
                                                    {/* 04. {__("dashboard_verification_status_title")} */}
                                                </h5>
                                                <p>
                                                    {" "}
                                                    <span
                                                        className="input-note"
                                                        style={{ opacity: 1 }}
                                                    >
                                                        {__(
                                                            "dashboard_verification_status_paragraph"
                                                        )}
                                                    </span>
                                                </p>
                                            </>
                                        )}

                                        {statusArray.some(
                                            (e) =>
                                                e != null && e != "" && e != "0"
                                        ) && (
                                            <div className="refferal-statistics">
                                                {account.verification_proggress && (
                                                    <div className="col-md-4">
                                                        <div className="refferal-statistics-item">
                                                            <h6>
                                                                {__(
                                                                    "dashboard_verification_status_title_1"
                                                                )}
                                                                :
                                                            </h6>
                                                            <p>
                                                                {
                                                                    account.verification_proggress
                                                                }{" "}
                                                                %
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {account.requirements && (
                                                    <div className="col-md-4">
                                                        <div className="refferal-statistics-item">
                                                            <h6>
                                                                {__(
                                                                    "dashboard_verification_status_title_2"
                                                                )}
                                                                :
                                                            </h6>
                                                            <p>
                                                                {
                                                                    account.requirements
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </LayoutAccount>
    );
};

export default Dashbord;
