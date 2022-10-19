import "./index.css";
import React, { useEffect } from "react";
// import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import setSeoData from "./SetSeoData";
import { usePage } from '@inertiajs/inertia-react'

// import {Fragment} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import Swal from "sweetalert2";

export default function Layout({ children, seo = null }) {
    const { flash } = usePage().props
    // Things to be translated
    // __("message_sent")
    // __("document_fail_upload")
    // __("document_success_upload")
    // __("your_information_saved")
    // __("document_success_upload")
    // __("password_changed")
    // __("password_was_not_changed")
    // __("success_login")
    // __("account_not_approved")
    if (seo) {
        //setSeoData(seo);
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    console.log(flash)

    if (flash.success) {
        Swal.fire({
            title: flash.success,
            text: __("client.do_you_want_continue"),
            icon: 'success',
            confirmButtonText: __("client.cool")
        })
    } else if (flash.fail) {
        Swal.fire({
            title: flash.fail,
            text: __("client.do_you_want_continue"),
            icon: 'fail',
            confirmButtonText: __("client.cool")
        })
    }

    return (
        <>
            {/*<Router>*/}
            {/*<Fragment>*/}
            <Navbar />
            {/*{flash.success && (*/}
            {/*    Swal.fire({*/}
            {/*    title: flash.success,*/}
            {/*    text: 'Do you want to continue',*/}
            {/*    icon: 'success',*/}
            {/*    confirmButtonText: 'Cool'*/}
            {/*})*/}
            {/*)}*/}
            {/*{flash.fail && (*/}
            {/*    Swal.fire({*/}
            {/*        title: flash.fail,*/}
            {/*        text: 'Do you want to continue',*/}
            {/*        icon: 'success',*/}
            {/*        confirmButtonText: 'Cool'*/}
            {/*    })*/}
            {/*)}*/}
            {children}
            <Footer />
            {/*</Fragment>*/}
            {/*</Router>*/}
        </>
    );
}
