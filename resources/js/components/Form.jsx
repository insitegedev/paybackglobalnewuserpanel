import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Button } from "./Shared";
import { Inertia } from '@inertiajs/inertia'

const Form = () => {
    const sharedData = usePage().props.localizations;

    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        country: "",
        i_amount: "",
        message: ""
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const submit = () => { };
    const onSubmit = (e) => {
        e.preventDefault()
        Inertia.post(route('client.contact.mail'), values)
    };
    return (
        <div className=" mainFormBox relative bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-lg m-auto lg:m-0">
            <div className="heading mb-7 text-center">
                <h4 className="text-xl lg:text-2xl mb-2">{__("client.form_contact_title", sharedData)}</h4>
                <p className="text-sm text-center">
                    {__("client.form_contact_subtitle", sharedData)}
                </p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <input onChange={handleChange} type="text" name="name" placeholder={__("client.form_name", sharedData)} />
                    <input onChange={handleChange} type="text" name="surname" placeholder={__("client.form_surname", sharedData)} />
                </div>
                <input onChange={handleChange} type="tel" name="phone" placeholder={__("client.form_phone", sharedData)} />
                <input onChange={handleChange} type="text" name="email" placeholder={__("client.form_email", sharedData)} />
                <input onChange={handleChange} type="text" name="country" placeholder={__("client.form_country", sharedData)} />
                <input onChange={handleChange} type="text" name="i_amount" placeholder={__("client.form_i_amount", sharedData)} />
                <textarea onChange={handleChange} name="message" placeholder={__("client.form_message", sharedData)}></textarea>
                <Button text={__("client.form_contact_button", sharedData)} onClick={submit} />
            </form>
        </div>
    );
};

export default Form;
