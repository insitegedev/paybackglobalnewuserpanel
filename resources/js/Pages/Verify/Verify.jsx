import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import {
    MainButton,
    MainButtonSubmit,
} from "../../components/Button/MainButton";
import "./Login.css";
import Layout from "../../Layouts/Layout";

const Verify = ({ danger }) => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        totp: "",
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
        Inertia.post(route("postValidateToken"), values);
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit} className="pages login_page signin">
                <div className="wrapper">
                    <div className="login_form">
                        <p>{__("verify_code")}</p>
                        {danger && <p className="f35">{danger}</p>}
                        <div className="f35">{__("enter_one_time_password")}</div>

                        {errors.totp && <div>{errors.totp}</div>}
                        <input
                            id="totp"
                            name="totp"
                            value={values.totp}
                            onChange={handleChange}
                            type="password"
                            placeholder={__("sign_in_input_password")}
                        />

                        <div className="bottom">
                            <MainButtonSubmit text={__("sign_in_log_in_button")} />
                            {/*<MainButton link="/" text="Register" type={"submit"} />*/}
                            <p>
                                {__("have_no_account")}{" "}
                                <Link href={route("client.signup")}>
                                    {__("sign_up")}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default Verify;
