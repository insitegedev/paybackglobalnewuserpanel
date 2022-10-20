import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
        <div className="footer-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <span className="footer-copyright">
                            {__("footer_copyright")}
                        </span>
                    </div>

                    <div className="col-md-5 text-md-end">
                        <ul className="footer-links">
                            {/* <li>
                                <Link href="/policy">
                                    {__("footer_privatepolicy")}
                                </Link>

                            </li> */}
                            {/* <li>
                                <Link href="/policy">
                                    {__("footer_termsofsales")}
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
