import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const ChangePassword = () => {
    const sharedData = usePage().props.localizations;
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        old_password: "",
        password: "",
        password_repeat: "",
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("client.changePassword", sharedData), values);
    }

    return (
        <div className="m-auto max-w-lg">
            <div className="text-center mb-10">
                <h4 className="text-xl lg:text-2xl mb-2">{__("client.account_tab_change_pass_h", sharedData)}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="password" name="old_password" placeholder={__("client.form_old_pass", sharedData)} />
                {errors.old_password && <div>{errors.old_password}</div>}
                <input onChange={handleChange} type="password" name="password" placeholder={__("client.form_new_pass", sharedData)} />
                {errors.password && <div>{errors.password}</div>}
                <input onChange={handleChange} type="password" name="password_repeat" placeholder={__("client.form_r_pass", sharedData)} />
                {errors.password_repeat && <div>{errors.password_repeat}</div>}
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

export default ChangePassword;
