import React, { useState } from "react";
import { Button } from "../../components/Shared";
import { usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Settings = () => {
    const { account, errors } = usePage().props;
    const sharedData = usePage().props.localizations;
    // console.log(errors)
    const { data, setData, post, progress } = useForm({
        name: account.profile.name ?? "",
        surname: account.profile.surname ?? "",
        phone: account.profile.phone ?? "",
        email: account.email ?? "",
    });



    function handleChange(e) {
        setData(
            e.target.name,
            e.target.value
        )
    }

    function submit(e) {
        e.preventDefault();
        post(route("client.changeAccount"));
    }


    return (
        <div className="m-auto max-w-lg">
            <div className="text-center mb-10">
                <h4 className="text-xl lg:text-2xl mb-2">{__("client.account_tab_settings_h", sharedData)}</h4>
                <p className="text-sm text-center">
                    {__("client.account_tab_settings_t", sharedData)}
                </p>
            </div>
            <form onSubmit={submit}>
                <input type="text" placeholder={__("client.form_name", sharedData)} name="name" onChange={handleChange} value={data.name} />
                {errors.name && <div>{errors.name}</div>}
                <input type="text" placeholder={__("client.form_surname", sharedData)} name="surname" onChange={handleChange} value={data.surname} />
                {errors.surname && <div>{errors.surname}</div>}
                <input type="tel" placeholder={__("client.form_phone", sharedData)} name="phone" onChange={handleChange} value={data.phone} />
                {errors.phone && <div>{errors.phone}</div>}
                <input type="text" placeholder={__("client.form_email", sharedData)} name="email" onChange={handleChange} value={data.email} />
                {errors.email && <div>{errors.email}</div>}
                {/*<input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat password" />*/}
                <div className="grid grid-cols-2 w-full gap-2 mt-5">
                    <button className=" p-3 bg-purple text-white text-md rounded  border border-purple">
                        {__("client.save_changes", sharedData)}
                    </button>
                    <button type="button" className=" p-3 text-purple bg-gray  text-md rounded  border border-purple">
                        {__("client.cancel", sharedData)}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
