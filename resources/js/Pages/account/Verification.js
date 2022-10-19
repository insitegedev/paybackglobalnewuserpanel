import React from "react";
import { Button } from "../../components/Shared";
import { Link, usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Verification = () => {
    const sharedData = usePage().props.localizations;
    const { errors } = usePage().props;
    const { data, setData, post, progress } = useForm({

        document_type: "",
        document: "",
        bank_statement: "",
        selfie_with_document: "",
    });

    function submit(e) {
        e.preventDefault()
        post(route("client.uploadDocument"));
    }

    return (
        <div className="m-auto max-w-lg">
            <div className="text-center mb-10">
                <h4 className="text-xl lg:text-2xl mb-2">{__("client.account_tab_verification_h", sharedData)}</h4>
            </div>
            <form onSubmit={submit}>
                <select onChange={e => setData("document_type", e.target.value)}>
                    <option value="">{__('client.sel_doc_type', sharedData)}</option>
                    <option value="3">{__('client.driver_license', sharedData)}</option>
                    <option value="4">{__('client.passport', sharedData)}</option>
                    <option value="5">{__('client.national_id', sharedData)}</option>
                </select>
                {errors.document_type && <div>{errors.document_type}</div>}
                <input type="file" name="document" onChange={(e) => setData('document', e.target.files[0])} />
                {errors.document && <div>{errors.document}</div>}
                <input type="file" name="bank_statement" onChange={(e) => setData('bank_statement', e.target.files[0])} />
                {errors.bank_statement && <div>{errors.bank_statement}</div>}
                <input type="file" name="selfie_with_document" onChange={(e) => setData('selfie_with_document', e.target.files[0])} />
                {errors.selfie_with_document && <div>{errors.selfie_with_document}</div>}
                <div className="mt-5 w-full">
                    <Button text={__("client.account_verify_btn", sharedData)} />
                </div>
            </form>
        </div>
    );
};

export default Verification;
