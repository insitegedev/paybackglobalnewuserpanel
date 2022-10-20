import React, { useState } from "react";
import "./LangSwitcher.css";
import { Link, usePage } from "@inertiajs/inertia-react";

export const LangSwitcher = () => {
    const { locales, currentLocale, locale_urls } = usePage().props;
    const [showLang, setShowLang] = useState(false);

    let languages = [];
    // locales.map((locale, index) => {
    //     if (locale.locale !== currentLocale) {
    //         languages.push({
    //             name: locale.file ? "/"+locale.file.path+"/"+locale.file.title : "",
    //             link: locale_urls[locale],
    //             alt: locale.locale,
    //         });
    //     }
    // });
    // Object.keys(locales).map((name, index) => {
    //     if (locales[name] !== currentLocale) {
    //         languages.push({
    //             name: "/img/icons/header/" + locales[name] + ".svg",
    //             link: locale_urls[name],
    //             alt: locales[name],
    //         });
    //     }
    // });

    return (
        <div className="lang_switcher">
            {locales.map((locale, index) => {
                if (locale.locale === currentLocale) {
                    return (
                        <a
                            key={index}
                            href={null}
                            data-bs-toggle="dropdown"
                            onClick={() => setShowLang(!showLang)}
                        >
                            {locale.locale}{" "}
                            {/* <em className="ti ti-angle-down"></em> */}
                        </a>
                    );
                }
            })}
            <ul className={`dropdown ${showLang ? "active " : ""}`}>
                {locales.map((locale, i) => {
                    if (locale.locale !== currentLocale) {
                        return (
                            <li key={i}>
                                <Link
                                    type="button"
                                    method="get"
                                    href={locale_urls[locale.locale]}
                                >
                                    {locale["locale"]}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};
