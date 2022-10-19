import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import bg from "../../assets/images/bg/8.png";
import { Button } from "../../components/Shared";
import Layout from "../../Layouts/Layout";
import { Inertia } from '@inertiajs/inertia'

const SignIn = ({ seo }) => {
    const sharedData = usePage().props.localizations;

    const { errors } = usePage().props;


    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: null
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('client.login'), values)
    }

    function handleChangeRemember(e) {
        const key = 'remember';
        const value = e.target.checked;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    return (
        <Layout seo={seo}>
            <div
                style={{ backgroundImage: `url('/assets/images/bg/8.png')` }}
                className="bg-cover w-full bg-center "
            >
                <div
                    className="w-full h-full"
                    style={{ background: "rgba(255,255,255, .9)" }}
                >
                    <div className="w-full h-full gradient pt-20 sm:pt-60 pb-40">
                        <div className="wrapper">
                            <div className="!mainFormBox bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-lg m-auto ">
                                <div className="heading mb-10 text-center">
                                    <h4 className="text-xl lg:text-2xl mb-2">{__('client.login_page', sharedData)}</h4>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    {errors.auth && <div>{errors.auth}</div>}
                                    <input onChange={handleChange} type="text" name="email" placeholder={__('client.form_email', sharedData)} />
                                    <input onChange={handleChange} type="password" name="password" placeholder={__('client.form_pass', sharedData)} />
                                    <div className="flex items-start mb-6 text-sm">
                                        {/* <input onChange={handleChangeRemember} type="checkbox" name="remember" id="remember" className="mr-2 mt-1" /> */}
                                        <input type="checkbox" className="!default:ring-2 ..." />
                                        <label htmlFor="remember">{__('client.form_remember', sharedData)}</label>
                                    </div>
                                    <Button text={__('client.sign_in_btn', sharedData)} onClick={() => { }} />
                                    <div className="text-sm opacity-50 mt-2">
                                        {__('client.login_reset_pass_text', sharedData)}{" "}
                                        <Link className="underline" href={route('password.request')}>
                                            {__('client.form_reset_pass', sharedData)}
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-10 text-sm">
                            {__('client.login_signup_text', sharedData)}{" "}
                            <Link href={route('client.signup.index')} className="text-purple underline">
                                {" "}
                                {__('client.signup', sharedData)}{" "}
                            </Link>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default SignIn;
