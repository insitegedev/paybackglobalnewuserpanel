import React from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import bg from "../../assets/images/bg/8.png";
import { Button } from "../../components/Shared";
//import check from "../../assets/images/icons/auth/2.png";
import Layout from "../../Layouts/Layout";

const LinkSent = ({seo}) => {
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
                                  <h4 className="text-xl lg:text-2xl mb-2">{__('client.link_sent_h')}</h4>
                                  <p className="text-sm text-center mb-5 opacity-50">
                                      {__('client.link_sent_t')}
                                  </p>
                                  <img className="m-auto" src="/client/assets/images/icons/auth/2.png" alt="" />
                                  <div className="text-sm opacity-50 mt-2">
                                      {__('client.link_sent_not_delivered')}
                                      <Link className="underline pl-1" href={route('password.request')}>
                                          {__('client.link_sent_resend')}
                                      </Link>
                                  </div>
                              </div>
                              <form>
                                  <Link href={route('client.login')}>
                                      <Button text={__('client.login')} />
                                  </Link>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>

  );
};

export default LinkSent;
