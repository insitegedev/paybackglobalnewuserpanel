import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";

import { IoMdClose } from "react-icons/io";
import { BsArrowRightShort, BsInfoCircle } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import { FaEthereum } from "react-icons/fa";

const Activity = ({ account }) => {
    return (
        <body className="user-dashboard">
            <Topbar />
            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-panel">
                                <h2 className="user-panel-title">
                                    {__("activity_section_main_title")}
                                </h2>
                                <p>
                                    {__("activity_section_main_title_text_below")}
                                </p>
                                <table className="data-table activity-table">
                                    <thead>
                                        <tr>
                                            <th className="activity-time">
                                                <span>
                                                    {__("activity_section_form_date")}
                                                </span>
                                            </th>
                                            <th className="activity-device">
                                                <span>
                                                    {__("activity_section_form_device")}
                                                </span>
                                            </th>
                                            <th className="activity-browser">
                                                <span>
                                                    {__("activity_section_form_browser")}
                                                </span>
                                            </th>
                                            <th className="activity-ip">
                                                <span>
                                                    {__("activity_section_form_ip_address")}
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {account.activity.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td className="activity-time">
                                                        {item.created_at}
                                                    </td>
                                                    <td className="activity-device">
                                                        {item.device}
                                                    </td>
                                                    <td className="activity-browser">
                                                        {item.browser}
                                                    </td>
                                                    <td className="activity-ip">
                                                        {item.ip_address}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="tranxPending" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a
                            href="#"
                            className="modal-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <IoMdClose />
                        </a>
                        <div className="tranx-popup">
                            <h5>View Transaction Details</h5>
                            <div className="tranx-purchase-details d-none active">
                                <p>
                                    Transaction <strong>ICIYOW0102</strong> was
                                    place on
                                    <strong>
                                        24-Jul-2022, 12:10 am
                                    </strong> and <br />
                                    is currently{" "}
                                    <strong>Pending Payment</strong>.
                                    <a href="#" className="make-pay">
                                        Please Make your payment{" "}
                                        <BsArrowRightShort />
                                    </a>
                                </p>
                                <h6>Purchase Details</h6>
                                <ul className="tranx-purchase-info">
                                    <li>
                                        <div className="tranx-purchase-head">
                                            Package Name
                                        </div>
                                        <div className="tranx-purchase-des">
                                            ICO Phace 3
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Payment Method
                                        </div>
                                        <div className="tranx-purchase-des">
                                            ETH
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Your Contribution
                                        </div>
                                        <div className="tranx-purchase-des">
                                            1
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Token (T)
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>4,780.00</span>
                                            <span>(4780 * 1)</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Bonus Tokens (B)
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>956.00</span>
                                            <span>(956 * 1)</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Total Tokens
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>5,736.00</span>
                                            <span>(T+B)</span>
                                        </div>
                                    </li>
                                </ul>

                                <h6>
                                    Payment Deposit From <BsArrowRightShort />
                                    <span>Ethereum Address</span>
                                </h6>
                                <div className="tranx-payment-info">
                                    <FaEthereum />
                                    <input
                                        type="text"
                                        className="tranx-payment-address"
                                        value="0x4156d3342d5c385a87d264f90653733592000581"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="tranx-payment-details d-none">
                                <p>
                                    Hi, Your transaction{" "}
                                    <strong>ICIYOW0102</strong> is still
                                    <strong>Pending Payment</strong>
                                    <br />
                                    You will receive <strong>
                                        5,470 ICOX
                                    </strong>{" "}
                                    tokens (incl. bonus of 450 ICOX) once paid.
                                </p>
                                <h6>
                                    Please make your Payment to the bellow
                                    Address
                                </h6>
                                <div className="tranx-payment-info">
                                    <span className="tranx-copy-feedback"></span>
                                    <FaEthereum />
                                    <input
                                        type="text"
                                        className="tranx-payment-address"
                                        value="0x4156d3342d5c385a87d264f90653733592000581"
                                        disabled
                                    />
                                    <a href="#" className="tranx-payment-copy">
                                        <ImFilesEmpty />
                                    </a>
                                </div>

                                <ul className="tranx-info-list">
                                    <li>
                                        <span>SET GAS LIMIT:</span> 120 000
                                    </li>
                                    <li>
                                        <span>SET GAS PRICE:</span> 95 Gwei
                                    </li>
                                </ul>

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="tranx-info-qr">
                                            <span>
                                                OR Scan bellow QR Code to pay
                                            </span>
                                            <img
                                                className="tranx-info-qrimg"
                                                src="images/eth-qr.png"
                                                alt="qr"
                                            />
                                            <div className="gaps-4x"></div>
                                            <ul className="btn-grp guttar-20px">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="btn btn-light pay-done"
                                                    >
                                                        OK
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="btn btn-xs btn-uline btn-uline-danger"
                                                    >
                                                        Cancel Payment
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-sm-7">
                                        <div className="note note-info">
                                            <BsInfoCircle />
                                            <p>
                                                Do not make payment through
                                                exchange (Kraken, Bitfinex). You
                                                can use MetaMask,
                                                MayEtherWallet, Mist wallets
                                                etc.
                                            </p>
                                        </div>
                                        <div className="gaps-1x"></div>
                                        <div className="note note-danger">
                                            <BsInfoCircle />
                                            <p>
                                                In case you send a different
                                                amount ETH, the number of ICOX
                                                tokens will update accordingly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="tranxApproved" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a
                            href="#"
                            className="modal-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <IoMdClose />
                        </a>
                        <div className="tranx-popup">
                            <h5>View Transaction Details</h5>
                            <p>
                                Transaction <strong>ICIYOW0102</strong> was
                                place on
                                <strong>24-Jul-2022, 12:10 am</strong> and{" "}
                                <br />
                                it’s <strong>Successfully Paid.</strong>
                            </p>
                            <div className="tranx-purchase-details">
                                <h6>Purchase Details</h6>
                                <ul className="tranx-purchase-info">
                                    <li>
                                        <div className="tranx-purchase-head">
                                            Package Name
                                        </div>
                                        <div className="tranx-purchase-des">
                                            ICO Phace 3
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Payment Method
                                        </div>
                                        <div className="tranx-purchase-des">
                                            ETH
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Your Contribution
                                        </div>
                                        <div className="tranx-purchase-des">
                                            1
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Token (T)
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>4,780.00</span>
                                            <span>(4780 * 1)</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Bonus Tokens (B)
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>956.00</span>
                                            <span>(956 * 1)</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="tranx-purchase-head">
                                            Total Tokens
                                        </div>
                                        <div className="tranx-purchase-des">
                                            <span>5,736.00</span>
                                            <span>(T+B)</span>
                                        </div>
                                    </li>
                                </ul>

                                <h6>
                                    Payment Deposit From <BsArrowRightShort />
                                    <span>Ethereum Address</span>
                                </h6>
                                <div className="tranx-payment-info">
                                    <FaEthereum />
                                    <input
                                        type="text"
                                        className="tranx-payment-address"
                                        value="0x4156d3342d5c385a87d264f90653733592000581"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    );
};

export default Activity;
