import React, { useState } from "react";
import { MainButton, MainButtonSubmit } from "../Button/MainButton";
import "./Form.css";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export const FormBox = ({ imgSrc }) => {
    const { pathname, userName, gemail, gphone } = usePage().props;
    return (
        <div className="form_box">
            <div className="img">
                <img src={imgSrc} alt="" />
            </div>
            {userName? "":<Form />}
        </div>
    );
};

export const Form = () => {
    const inputs = [
        {
            placeholder: "Name",
            type: "text",
        },
        {
            placeholder: "Surname",
            type: "text",
        },
        {
            placeholder: "Email",
            type: "text",
        },
        {
            placeholder: "Phone number",
            type: "tel",
        },
        {
            placeholder: "Password",
            type: "password",
        },
        {
            placeholder: "Confirm password",
            type: "password",
        },
    ];
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password_repeat: "",
        checkbox: "",
        agree : true
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleChangeCheckbox(e) {
        const key = e.target.id;
        const value = e.target.checked;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("client.signup"), values);
    }

    return (
        <form onSubmit={handleSubmit} className="form" data-aos="fade-right">
            {/* <div className="f25" style={{ textTransform: "uppercase" }}>
                {__("get_in_touch")}
            </div>
            <p>{__("questions")}</p> */}

            {errors.name && <div>{errors.name}</div>}
            <input
                id="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder={ __("sign_up_form_name")}
            />
            {errors.surname && <div>{errors.surname}</div>}
            <input
                id="surname"
                value={values.surname}
                onChange={handleChange}
                type="text"
                placeholder={ __("sign_up_form_surname")}
            />
            {errors.phone && <div>{errors.phone}</div>}
            <input
                id="phone"
                value={values.phone}
                onChange={handleChange}
                type="phone"
                placeholder={ __("sign_up_form_phone")}
            />
            {errors.email && <div>{errors.email}</div>}
            <input
                id="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder={ __("sign_up_form_email")}
            />

            {errors.phone && <div>{errors.phone}</div>}
            <input
                id="phone"
                value={values.phone}
                onChange={handleChange}
                type="phone"
                placeholder={ __("sign_up_form_phone")}
            />
            {errors.password && <div>{errors.password}</div>}
            <input
                id="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                placeholder={ __("sign_up_form_password")}
            />
            {errors.password_repeat && (
                <div>{errors.password_repeat}</div>
            )}
            <input
                id="password_repeat"
                value={values.password_repeat}
                onChange={handleChange}
                type="password"
                placeholder={ __("sign_up_form_password_confirm")}
            />
            {/*<div className="check">
                {errors.agree && <div>{errors.agree}</div>}
                <input
                    type="checkbox"
                    id="agree"
                    onChange={handleChangeCheckbox}
                />
                <label htmlFor="checkbox">
                    {__("sign_up_i_am_old")}
                </label>
            </div>*/}
            <MainButtonSubmit text={ __("sign_up_register_button")} />
        </form>
    );
};
