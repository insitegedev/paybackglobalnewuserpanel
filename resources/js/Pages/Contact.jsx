import React from "react";
// import { contactInfo } from "../components/Data"
import Form from "../components/Form"
import { Link, usePage } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";
import { VscMail } from "react-icons/vsc";
import { IoIosPin, IoMdCall } from "react-icons/io";

const Contact = ({ seo }) => {
    const sharedData = usePage().props.localizations;

    const contactInfo = [
        {
            title: 'email',
            icon: <VscMail />,
            address: __("client.footer_contact_email", sharedData),
            href: 'mailto:' + __("client.footer_contact_email", sharedData),
        },
        {
            title: 'phone',
            icon: <IoMdCall />,
            address: __("client.footer_contact_phone", sharedData),
            href: 'tel:' + __("client.footer_contact_phone", sharedData),
        },
        {
            title: 'address',
            icon: <IoIosPin />,
            address: __("client.footer_contact_address", sharedData),
            href: '#',
        },
    ]
    return (
        <Layout seo={seo}>
            <div className="contactPage gradient">
                <div
                    className="wrapper flex items-center xl:justify-center justify-between lg:flex-row flex-col  pt-20 sm:pt-40 pb-20">
                    <div className="mr-10 mb-20 lg:mb-0">
                        <div className="text-purple text-xl mb-3">{__("client.contact_title", sharedData)}</div>
                        <div className=" lg:text-5xl text-3xl mb-5">{__("client.contact_subtitle", sharedData)}</div>
                        <p className="mb-10 lg:max-w-lg">{__("client.contact_text", sharedData)}</p>
                        {contactInfo.map(item => {
                            return <a key={item.title} href={item.href} className='!flex items-center mb-5 text-xl'>
                                <div className="rounded-full flex items-center justify-center mr-3 shrink-0 w-10 h-10"
                                    style={{ background: '#747dd115' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-sm ">{item.title}</span> <br />
                                    <div className='text-xl -mt-1 opacity-50'>{item.address}</div>
                                </div>
                            </a>
                        })}
                    </div>
                    <Form />
                </div>
                <div className="w-full h-96 grayscale">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41805.44663499177!2d26.10979875341577!3d62.41474241482151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1656862543364!5m2!1sen!2sge"
                        width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </Layout>

    )
}

export default Contact
