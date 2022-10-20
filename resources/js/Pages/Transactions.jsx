import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";
import {
    BsCheck2Circle,
    BsInfoCircle,
    BsArrowRightShort,
} from "react-icons/bs";
import { IoMdClose, IoMdAlarm } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";
import { FiAlertCircle, FiMoreVertical } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);

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
                                    Transactions
                                </h2>
                                {/* <div className="status status-empty">
                        <div className="status-icon">
                            <ImFilesEmpty />
                            <div className="status-icon-sm">
                                <IoMdClose />
                            </div>
                        </div>
                        <span className="status-text">You have not contributed yet! You should make some.</span>
                        <a href="tokens.html" className="btn btn-primary">Contribute Now</a>
                    </div> */}
                                <table className="data-table tranx-table">
                                    <thead>
                                        <tr>
                                            <th className="tranx-status"></th>
                                            <th className="tranx-no">
                                                <span>TNX NO</span>
                                            </th>
                                            <th className="tranx-token">
                                                <span>Tokens</span>
                                            </th>
                                            <th className="tranx-amount">
                                                <span>Amount</span>
                                            </th>
                                            <th className="tranx-from">
                                                <span>From</span>
                                            </th>
                                            <th className="tranx-action"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-pending">
                                                <span className="d-none">
                                                    Pending
                                                </span>
                                                <FiAlertCircle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxPending"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-cancled">
                                                <span className="d-none">
                                                    Canceled
                                                </span>
                                                <IoMdClose />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tranx-status tranx-status-approved">
                                                <span className="d-none">
                                                    Approved
                                                </span>
                                                <BsCheck2Circle />
                                            </td>
                                            <td className="tranx-no">
                                                <span>ICIYOW0102</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-token">
                                                <span>+5,600</span>ICOX
                                            </td>
                                            <td className="tranx-amount">
                                                <span>56.00</span>ETH
                                                <BsInfoCircle
                                                    data-bs-toggle="tooltip"
                                                    data-placement="bottom"
                                                />
                                            </td>
                                            <td className="tranx-from">
                                                <span>1F1t....4xqX</span>08 Jul,
                                                18 10:20PM
                                            </td>
                                            <td className="tranx-action">
                                                <a
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tranxApproved"
                                                >
                                                    <FiMoreVertical />
                                                </a>
                                            </td>
                                        </tr>
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
                                    <span className="tranx-copy-feedback copy-feedback"></span>
                                    <FaEthereum />
                                    <input
                                        type="text"
                                        className="tranx-payment-address copy-address"
                                        value="0x4156d3342d5c385a87d264f90653733592000581"
                                        disabled
                                    />
                                    <a
                                        href="#"
                                        className="tranx-payment-copy copy-trigger"
                                    >
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
                                            <a
                                                href="#"
                                                className="btn btn-light pay-done"
                                            >
                                                OK
                                            </a>
                                            <div className="gaps-1x"></div>
                                            <a
                                                href="#"
                                                className="btn btn-xs btn-uline btn-uline-danger"
                                            >
                                                Cancel Payment
                                            </a>
                                            <div className="gaps-2x d-sm-none"></div>
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

            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                id="tranxApproved"
                tabIndex="-1"
            >
                <div onClick={() => setShowModal(false)} className="bg"></div>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a
                            onClick={() => setShowModal(false)}
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
        </div>
    );
};

export default Transactions;
