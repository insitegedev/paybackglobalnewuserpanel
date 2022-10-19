import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
//import shape from "../../assets/images/bg/10.png";

const Dashboard = () => {
    const sharedData = usePage().props.localizations;

    const { account } = usePage().props;

    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] !== null && obj[key] != "") return false;
        }
        return true;
    }

    let balance = JSON.parse(account.balance);
    let crypto_address = JSON.parse(account.crypto_address);

    return (
        <>
            <div className="text-xl mb-10">Hi, {account.profile.name}</div>
            {!checkProperties(balance) ? (
                <div className="opacity-50 mb-5">{__("client.account_balance", sharedData)}</div>
            ) : null}

            <div className="block mb-10">
                {Object.keys(balance).map((item, i) => {
                    return (
                        balance[item] && (
                            <div
                                className="inline-block bg-purple rounded-xl mr-3 mb-3 shadow-xl relative text-right text-white lg:text-xl p-4 lg:h-32 lg:w-52 bg-cover"
                                style={{ backgroundImage: `url('/client/assets/images/bg/10.png')` }}
                            >
                                {item} <br />
                                <span className="text-2xl"> {balance[item]} </span>
                            </div>
                        )
                    );
                })}

                {/* displays balances here */}

       {
            account.balances.map((e,i)=>{
                return(
                    <div key={i}>
                        <div
                            className="inline-block bg-purple rounded-xl mr-3 mb-3 shadow-xl relative text-right text-white lg:text-xl p-4 lg:h-32 lg:w-52 bg-cover"
                            style={{ backgroundImage: `url('/client/assets/images/bg/10.png')` }}>
                            {e.currency.name} <br />
                            <span className="text-2xl"> {e.value} </span>
                       </div>
                    </div>
                )
            })
         }
            </div>
            <div className="flex justify-between lg:flex-row flex-col">
                <div className="mr-2 mb-10">


                    {Object.keys(crypto_address).map((item, i) => {
                        return (
                            crypto_address[item] && (
                                <div key={i}>
                                    <div className="opacity-50 mb-2">{item}{" "} {__("client.account_address", sharedData)}</div>
                                    <div className="bg-gray2 py-1 px-3 mb-3">
                                        {crypto_address[item]}
                                    </div>
                                </div>
                            )
                        );
                    })}


{/* displays wallets */}
          {
            account.wallets.map((e,i)=>{
                console.log(e, 'esaa');
                return(
                    <div>
                        <div className="opacity-50 mb-2">{e.currency.name} address</div>
                        <div className="bg-gray2 py-1 px-3 mb-3">
                        {e.address}
                        </div>
                    </div>
                )
            })
          }
                </div>
                <div>
                    <div className="opacity-50 mb-2">{__("client.account_verification", sharedData)}</div>
                    {!account.verified ? (
                        <div className="text-red">{__("client.account_not_verified_now", sharedData)}</div>
                    ) : (
                        <div className="text-green">{__("client.account_verified", sharedData)}</div>
                    )}

                    <div className="opacity-50 mb-2 mt-10"> {__("client.account_your_manager", sharedData)}</div>
                    <div> {account.manager_name}</div>
                    <div>{account.manager_email}</div>
                    <div> {account.manager_phone}</div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
