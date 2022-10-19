import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import bg from "../../assets/images/bg/7.png";
import { Button } from "../../components/Shared";
import Layout from "../../Layouts/Layout";
import { Inertia } from '@inertiajs/inertia'

const SignUp = ({ seo }) => {
    const sharedData = usePage().props.localizations;

    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password_repeat: "",
        agree_tc: true
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleChangeCheckbox(e) {
        const key = e.target.name;
        const value = e.target.checked;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('client.register'), values)
    }

    console.log(errors)
    return (
        <Layout seo={seo}>
            <div
                style={{ backgroundImage: `url('/client/assets/images/bg/7.png')` }}
                className="bg-cover w-full bg-center "
            >
                <div className="w-full h-full gradient pt-20 sm:pt-40 pb-24">
                    <div className="wrapper">
                        <div className="mainFormBox bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-lg m-auto ">
                            <div className="heading mb-7 text-center">
                                <h4 className="text-xl lg:text-2xl mb-2">{__('client.signin_title', sharedData)}</h4>
                                <p className="text-sm text-center">
                                    {__('client.signin_text', sharedData)}
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} type="text" name="name" placeholder={__('client.form_name', sharedData)} />
                                {errors.name && <div>{errors.name}</div>}
                                <input onChange={handleChange} type="text" name="surname" placeholder={__('client.form_surname', sharedData)} />
                                {errors.surname && <div>{errors.surname}</div>}
                                <input onChange={handleChange} type="tel" name="phone" placeholder={__('client.form_phone', sharedData)} />
                                {errors.phone && <div>{errors.phone}</div>}
                                <input onChange={handleChange} type="text" name="email" placeholder={__('client.form_email', sharedData)} />
                                {errors.email && <div>{errors.email}</div>}
                                <input onChange={handleChange} type="password" name="password" placeholder={__('client.form_pass', sharedData)} />
                                {errors.password && <div>{errors.password}</div>}
                                <input onChange={handleChange} type="password" name="password_repeat" placeholder={__('client.form_r_pass', sharedData)} />
                                {errors.password_repeat && <div>{errors.password_repeat}</div>}
                                {/*<div className="flex items-start mb-10 text-sm">
                                  <input
                                      type="checkbox"
                                      id="terms-conditions"
                                      className="mr-2 mt-1"
                                      onChange={handleChangeCheckbox}
                                      name="agree_tc"
                                  />
                                  <label htmlFor="terms-conditions">
                                      {__('client.form_term_policy')}{" "}
                                      <a href="#" className="text-purple">
                                          {" "}
                                          {__('client.form_term_policy2')}
                                      </a>
                                  </label>
                                  {errors.agree_tc && <div>{errors.agree_tc}</div>}
                              </div>*/}
                                <Button text={__('client.register_btn', sharedData)} onClick={() => { }} />
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-10 text-sm">
                        {__('client.signup_login_text', sharedData)}{" "}
                        <Link href={route('client.login.index')} className="text-purple underline">
                            {" "}
                            {__('client.login', sharedData)}
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default SignUp;
