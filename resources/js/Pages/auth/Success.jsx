import React from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
//import bg from "../../assets/images/bg/9.png";
//import check from "../../assets/images/icons/auth/1.png";
import { Button } from "../../components/Shared";
import Layout from "../../Layouts/Layout";

const Success = ({seo}) => {
  return (
      <Layout seo={seo}>
          <div
              style={{ backgroundImage: `url('/client/assets/images/bg/9.png')` }}
              className="bg-cover w-full bg-bottom "
          >
              <div className="w-full h-full  pt-20 pb-24 md:pt-60 md:pb-60 ">
                  <div className="wrapper">
                      <div className="mainFormBox bg-white p-4 sm:p-10 rounded-lg shadow-lg max-w-lg m-auto ">
                          <div className="heading mb-10 text-center">
                              <h4 className="text-xl lg:text-2xl mb-2">{__('client.success_h')}</h4>
                              <p className="text-sm text-center mb-5 opacity-50">
                                  {__('client.success_t')}
                              </p>
                              <img className="m-auto" src="/client/assets/images/icons/auth/1.png" alt="" />
                          </div>

                          <Link href={route('client.login')}>
                              <Button text={__('client.login')} />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>

  );
};

export default Success;
