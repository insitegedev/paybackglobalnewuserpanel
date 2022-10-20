import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LayoutAccount from "../Layouts/LayoutAccount";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { IoMdCheckbox } from "react-icons/io";

const Withdrawal = () => {
    const { errors, account, withdrawals } = usePage().props;
    const profile = account.profile;
    const photo = account.file;

    const [methodTab, setMethodTab] = useState(0);
    const methods = ["BTC Withdraw",  "Credit Card WIthdraw", "Bank WIthdraw"];

    const { data, setData, post, progress } = useForm({
        amount: "",
        wallet: "",
        amount_credited: "",
        bank_name: "",
        account_or_card: "",
        name_surname: "",
        cvv: "",
        iban: "",
        country_city: "",
        country: "",
        recipient_address: "",
        swift: "",
        bank_recipient_address: "",
        correspondent_bank_swift: "",
        correspondent_bank: "",
        correspondent_bank_address: "",
        account_recipient_in_correspondent: "",
        expiration_date: "",
        method: "",
        comment: "",
        status: 2,
    });

    function submit(e) {
        e.preventDefault();
        post(route("client.withdrawal.store"));
    }


    console.log(methodTab, methods[methodTab], 'esaa');

    const statuses = [
        { 0: "not_verify" },
        { 1: "verify" },
        { 2: "pending" },
        { 3: "approved" },
        { 4: "rejected" },
        { 5: "canceled" },
        { 6: "manual check" },
        { 7: "under review" },
        { 8: "processing" },
    ];


    return (
        <div className="user-dashboard">
            <Topbar />

            <div className="user-wraper">
                <div className="container">
                    <div className="d-flex">
                        <Sidebar />
                        <div className="user-content">
                            <div className="user-panel">
                                <h2 className="user-panel-title">{__("withdrawal_section_title")}</h2>

                                <ul
                                    className="nav nav-tabs nav-tabs-line"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        onClick={() => setMethodTab(0)}
                                    >
                                        <a
                                            className={`nav-link ${
                                                methodTab === 0 ? "active" : ""
                                            }  `}
                                            data-bs-toggle="tab"
                                            href="#"
                                        >
                                            {__("withdrawal_section_crypto_tab")}
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item"
                                        onClick={() => setMethodTab(1)}
                                    >
                                        <a
                                            className={`nav-link ${
                                                methodTab === 1 ? "active" : ""
                                            }  `}
                                            data-bs-toggle="tab"
                                            href="#"
                                        >
                                            {__("withdrawal_section_card_tab")}
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item"
                                        onClick={() => setMethodTab(2)}
                                    >
                                        <a
                                            className={`nav-link ${
                                                methodTab === 2 ? "active" : ""
                                            }  `}
                                            data-bs-toggle="tab"
                                            href="#"
                                        >
                                            {__("withdrawal_section_bank_tab")}
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="personal-data"
                                    >
                                        <form
                                            className={`methodForm ${
                                                methodTab === 0 ? "active" : ""
                                            }`}
                                            action="#"
                                            onSubmit={submit}
                                        >
                                            <div className="input-item input-with-label">
                                                {errors.wallet && (
                                                    <div>{errors.wallet}</div>
                                                )}
                                                <label
                                                    htmlFor="sur-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_crypto_wallet")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="wallet"
                                                    name="wallet"
                                                    value={data.wallet}
                                                    onChange={(e) =>
                                                        setData(
                                                            "wallet",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_crypto_amount")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="amount"
                                                    name="amount"
                                                    value={data.amount}
                                                    onChange={(e) =>
                                                        setData(
                                                            "amount",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_crypto_currency")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="currency"
                                                    name="currency"
                                                    value={data.currency}
                                                    onChange={(e) =>
                                                        setData(
                                                            "currency",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.comment && (
                                                    <div>{errors.comment}</div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_crypto_comment")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="comment"
                                                    name="comment"
                                                    value={data.comment}
                                                    onChange={(e) =>
                                                        setData(
                                                            "comment",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary" onClick={()=>{data.method = methods[methodTab]}}>
                                                    {__("withdrawal_section_update_button")}
                                                </button>
                                            </div>
                                            <div className="gaps-3x"></div>
                                        </form>
                                        <form
                                            className={`methodForm ${
                                                methodTab === 1 ? "active" : ""
                                            }`}
                                            action="#"
                                            onSubmit={submit}
                                        >
                                            <div className="input-item input-with-label">
                                                {errors.name_surname && (
                                                    <div>
                                                        {errors.name_surname}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="name_surname"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_full_name")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="name_surname"
                                                    name="name_surname"
                                                    value={data.name_surname}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name_surname",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.account_or_card && (
                                                    <div>
                                                        {errors.account_or_card}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="account_or_card"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_card_number")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="account_or_card"
                                                    name="account_or_card"
                                                    value={data.account_or_card}
                                                    onChange={(e) =>
                                                        setData(
                                                            "account_or_card",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.expiration_date && (
                                                    <div>
                                                        {errors.expiration_date}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_expiration_date")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="expiration_date"
                                                    name="expiration_date"
                                                    value={data.expiration_date}
                                                    onChange={(e) =>
                                                        setData(
                                                            "expiration_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.account_or_card && (
                                                    <div>
                                                        {errors.account_or_card}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="account_or_card"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_cvv")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="cvv"
                                                    name="cvv"
                                                    value={data.cvv}
                                                    onChange={(e) =>
                                                        setData(
                                                            "cvv",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_amount")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="amount"
                                                    name="amount"
                                                    value={data.amount}
                                                    onChange={(e) =>
                                                        setData(
                                                            "amount",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_currency")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="currency"
                                                    name="currency"
                                                    value={data.currency}
                                                    onChange={(e) =>
                                                        setData(
                                                            "currency",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.comment && (
                                                    <div>{errors.comment}</div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_card_comment")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="comment"
                                                    name="comment"
                                                    value={data.comment}
                                                    onChange={(e) =>
                                                        setData(
                                                            "comment",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary" onClick={()=>{data.method = methods[methodTab]}}>
                                                    {__("withdrawal_section_card_update_button")}
                                                </button>
                                            </div>
                                            <div className="gaps-3x"></div>
                                        </form>
                                        <form
                                            className={`methodForm ${
                                                methodTab === 2 ? "active" : ""
                                            }`}
                                            action="#"
                                            onSubmit={submit}
                                        >
                                            <div className="input-item input-with-label">
                                                {errors.bank_name && (
                                                    <div>
                                                        {errors.bank_name}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_name")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="bank_name"
                                                    name="bank_name"
                                                    value={data.bank_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "bank_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.name_surname && (
                                                    <div>
                                                        {errors.name_surname}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="name_surname"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_full_name")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="name_surname"
                                                    name="name_surname"
                                                    value={data.name_surname}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name_surname",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.iban && (
                                                    <div>{errors.iban}</div>
                                                )}
                                                <label
                                                    htmlFor="iban"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_iban")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="iban"
                                                    name="iban"
                                                    value={data.iban}
                                                    onChange={(e) =>
                                                        setData(
                                                            "iban",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.country_city && (
                                                    <div>
                                                        {errors.country_city}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="country_city"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_country")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="country"
                                                    name="country"
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
                                                {errors.country_city && (
                                                    <div>
                                                        {errors.country_city}
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="country_city"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_city")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="country_city"
                                                    name="country_city"
                                                    value={data.country_city}
                                                    onChange={(e) =>
                                                        setData(
                                                            "country_city",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_amount")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="amount"
                                                    name="amount"
                                                    value={data.amount}
                                                    onChange={(e) =>
                                                        setData(
                                                            "amount",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="input-item input-with-label">
                                                {errors.amount && (
                                                    <div>{errors.amount}</div>
                                                )}
                                                <label
                                                    htmlFor="full-name"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_currency")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="currency"
                                                    name="currency"
                                                    value={data.currency}
                                                    onChange={(e) =>
                                                        setData(
                                                            "currency",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.recipient_address && (
                                                    <div>
                                                        {
                                                            errors.recipient_address
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="country_city"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_recepient_address")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="recipient_address"
                                                    name="recipient_address"
                                                    value={
                                                        data.recipient_address
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "recipient_address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.swift && (
                                                    <div>{errors.swift}</div>
                                                )}
                                                <label
                                                    htmlFor="swift"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_swift")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="swift"
                                                    name="swift"
                                                    value={data.swift}
                                                    onChange={(e) =>
                                                        setData(
                                                            "swift",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.bank_recipient_address && (
                                                    <div>
                                                        {
                                                            errors.bank_recipient_address
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_bank_recipient_address")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="bank_recipient_address"
                                                    name="bank_recipient_address"
                                                    value={
                                                        data.bank_recipient_address
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "bank_recipient_address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.correspondent_bank_swift && (
                                                    <div>
                                                        {
                                                            errors.correspondent_bank_swift
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                   {__("withdrawal_section_bank_correspondent_bank_swift")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="correspondent_bank_swift"
                                                    name="correspondent_bank_swift"
                                                    value={
                                                        data.correspondent_bank_swift
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "correspondent_bank_swift",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.correspondent_bank && (
                                                    <div>
                                                        {
                                                            errors.correspondent_bank
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                   {__("withdrawal_section_bank_correspondent_bank")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="correspondent_bank"
                                                    name="correspondent_bank"
                                                    value={
                                                        data.correspondent_bank
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "correspondent_bank",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.correspondent_bank_address && (
                                                    <div>
                                                        {
                                                            errors.correspondent_bank_address
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                   {__("withdrawal_section_bank_correspondent_bank_address")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="correspondent_bank_address"
                                                    name="correspondent_bank_address"
                                                    value={
                                                        data.correspondent_bank_address
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "correspondent_bank_address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="input-item input-with-label">
                                                {errors.account_recipient_in_correspondent && (
                                                    <div>
                                                        {
                                                            errors.account_recipient_in_correspondent
                                                        }
                                                    </div>
                                                )}
                                                <label
                                                    htmlFor="bank_recipient_address"
                                                    className="input-item-label"
                                                >
                                                    {__("withdrawal_section_bank_account_recipient_in_correspondent")}
                                                </label>
                                                <input
                                                    className="input-bordered"
                                                    type="text"
                                                    id="account_recipient_in_correspondent"
                                                    name="account_recipient_in_correspondent"
                                                    value={
                                                        data.account_recipient_in_correspondent
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "account_recipient_in_correspondent",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/*<div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-with-label">
                            <label
                              htmlFor="date-of-birth"
                              className="input-item-label"
                            >
                              Date of Birth
                            </label>
                            <input
                              className="input-bordered date-picker"
                              type="text"
                              id="date-of-birth"
                              name="date-of-birth"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-with-label">
                            <label
                              htmlFor="nationality"
                              className="input-item-label"
                            >
                              Nationality
                            </label>
                            <select
                              className="country-select input-bordered"
                              name="Nationality"
                              id="Nationality"
                            >
                              <option value="us">United State</option>
                              <option value="uk">United KingDom</option>
                              <option value="fr">France</option>
                              <option value="ch">China</option>
                              <option value="cr">Czech Republic</option>
                              <option value="cb">Colombia</option>
                            </select>
                          </div>
                        </div>
                      </div>*/}

                                            <div className="gaps-1x"></div>

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary" onClick={()=>{data.method = methods[methodTab]}}>
                                                    {__("withdrawal_section_bank_update_button")}
                                                </button>
                                            </div>
                                            <div className="gaps-3x"></div>
                                        </form>
                                    </div>
                                </div>
                                <table className="table">
                                    <tr>
                                        <th>{__("withdrawal_history_id")}</th>
                                        <th>{__("withdrawal_history_amount")}</th>
                                        <th>{__("withdrawal_history_method")}</th>
                                        <th>{__("withdrawal_history_date")}</th>
                                    </tr>
                                    {withdrawals.map((item, index) => {
                                        let date = item.created_at.split('.')[0];
                                        return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.method}</td>
                                                <td>{date.replace("T", " : ")}</td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Withdrawal;
