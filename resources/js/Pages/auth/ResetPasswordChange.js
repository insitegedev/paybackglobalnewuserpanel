import React, {useState} from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import bg from "../../assets/images/bg/8.png";
import { Button } from "../../components/Shared";
import Layout from "../../Layouts/Layout";
import {Inertia} from "@inertiajs/inertia";

const ResetPassword = ({seo}) => {

    const { errors, email, token } = usePage().props;
    console.log(errors)


    const [values, setValues] = useState({
        email: email,
        token: token,
        password: "",
        password_confirmation: ""
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
        Inertia.post(route('password.update'), values)
    }

  return (
      <Layout seo={seo}>
          <div
              style={{ backgroundImage: `url('/client/assets/images/bg/8.png')` }}
              className="bg-cover w-full bg-center "
          >
              <div
                  className="w-full h-full"
                  style={{ background: "rgba(255,255,255, .9)" }}
              >
                  <div className="w-full h-full gradient pt-20 sm:pt-60 pb-40">
                      <div className="wrapper">
                          <div className="mainFormBox bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-lg m-auto ">
                              <div className="heading mb-10 text-center">
                                  <h4 className="text-xl lg:text-2xl mb-2">{__('client.change_password')}</h4>

                              </div>
                              <form onSubmit={handleSubmit}>
                                  {errors.email && <div>{errors.email}</div>}
                                  {errors.password && <div>{errors.password}</div>}
                                  <input type="hidden" name="email" value={email}/>
                                  <input type="hidden" name="token" value={token}/>
                                  <input
                                      type="password"
                                      name="password"
                                      placeholder={__('client.form_pass')}
                                      className="!mb-10"
                                      onChange={handleChange}
                                  />
                                  <input
                                      type="password"
                                      name="password_confirmation"
                                      placeholder={__('client.form_r_pass')}
                                      className="!mb-10"
                                      onChange={handleChange}
                                  />
                                  <Button text={__('client.save_btn')} onClick={() => {}} />
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>

  );
};

export default ResetPassword;
