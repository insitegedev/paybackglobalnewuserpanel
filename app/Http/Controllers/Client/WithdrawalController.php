<?php

/**
 *  app/Http/Controllers/WithdrawalController.php
 *
 * Date-Time: 21.05.21
 * Time: 14:18
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Http\Controllers\Client;


use App\Models\Withdrawal;
use App\Repositories\Eloquent\WithdrawRepository;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;

class WithdrawalController extends Controller
{


    private $withdrawRepository;

    public function __construct(WithdrawRepository $withdrawRepository)
    {
        $this->withdrawRepository = $withdrawRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return \Inertia\Inertia::render("Withdrawal", ['withdrawals' => Withdrawal::query()->where('user_id', auth()->id())->get()]);
    }

    /**
     * Display a listing of the resource.
     */
    public function show(Request $request, Withdrawal $withdrawal)
    {
        $withdrawal->with('user');
        //        dd($withdrawal);
        if ($request->post()) {
            //            dd(1);
            $model = $withdrawal;
            //            $model->user_id = 1121;
            $model->status = $request->status;
            $model->amount = $request->amount;
            $model->wallet = $request->wallet;
            $model->amount_credited = $request->amount_credited;
            $model->bank_name = $request->bank_name;
            $model->account_or_card = $request->account_or_card;
            $model->name_surname = $request->name_surname;
            $model->iban = $request->iban;
            $model->country_city = $request->country_city;
            $model->recipient_address = $request->recipient_address;
            $model->swift = $request->swift;
            $model->bank_recipient_address = $request->bank_recipient_address;
            $model->correspondent_bank_swift = $request->correspondent_bank_swift;
            $model->correspondent_bank = $request->correspondent_bank;
            $model->correspondent_bank_address = $request->correspondent_bank_address;
            $model->account_recipient_in_correspondent = $request->account_recipient_in_correspondent;
            $model->expiration_date = $request->expiration_date;
            $model->comment = $request->comment;
            $model->update();

            //            $data = [
            //                'full_name' => $user->name,
            //                'email' => $user->email,
            //                'wallet' => $request->withdraw_wallet,
            //
            //                'amount_payment' => $request->amount_payment,
            //            ];
            //            dd($data);

            //            Mail::to(env('SUPPORT_EMAIL'))
            //                ->queue(new WithdrawalMail($data));

            return back()->with('success', 'Withdrawal successfully updated');
        }
        return view('module.withdrawal.show', [
            'withdraw' => $withdrawal
        ]);
    }

    public function portal()
    {
        return view('client.module.my-portal.index', [
            'user' => auth()->user(),
            'withdraws' => Withdrawal::where("user_id", auth()->user()->id)->orderBy("created_at", "DESC")->get()
        ]);
    }
    //    public function portalShow(Withdrawal $withdrawal) {
    //        if ($withdrawal->user_id==auth()->user()->id){
    ////            dd($withdrawal);
    //            return view('client.module.my-portal.withdraw-detail', [
    //                'user' => auth()->user(),
    //                'withdraw' => $withdrawal
    //            ]);
    //        }
    //        return "error";
    //
    //    }




    /**
     * Display a listing of the resource.
     */
    public function btcStore(Request $request)
    {
        $request->validate([
            'withdraw_wallet' => 'required|string',
            'amount_payment_btc' => 'required|string',
            'method_btc' => 'required|string',
        ]);

        if ($request->post()) {
            $user = auth()->user();
            $model = new Withdrawal();
            $model->user_id = $user->id;
            $model->status = Withdrawal::WITHDRAWAL_VERIFY_PENDING;
            $model->wallet = $request->withdraw_wallet;
            $model->amount = $request->amount_payment_btc;
            $model->method = $request->input('method_btc');
            $model->save();

            $data = [
                'full_name' => $user->name,
                'email' => $user->email,
                'wallet' => $request->withdraw_wallet,
                'amount' => $request->amount_payment_btc,
                'method' => "BTC withdraw",
            ];

            //            Mail::to(env('SUPPORT_EMAIL'))
            //                ->queue(new WithdrawalMail($data));
            //            Mail::to($user->email)
            //                ->queue(new WithdrawalMail($data));

            return back()->with('success', 'Withdrawal successfully created');
        }

        return view('module.withdrawal.index', [
            'user' => auth()->user()
        ]);
    }
    public function bankStore(Request $request)
    {
        $request->validate([
            'amount_payment_bank' => 'required|string',
            'amount_credited_bank' => 'required|string',
            'bank_name' => 'required|string',
            'account_or_card_bank' => 'required|string',
            'name_surname_bank' => 'required|string',
            'iban' => 'required|string',
            'country_city' => 'required|string',
            'recipient_address' => 'required|string',
            'swift' => 'required|string',
            'bank_recipient_address' => 'required|string',
            'correspondent_bank_swift' => 'required|string',
            'correspondent_bank' => 'required|string',
            'correspondent_bank_address' => 'required|string',
            'account_recipient_in_correspondent' => 'required|string',
            'method_bank' => 'required|string',
        ]);

        if ($request->post()) {
            $user = auth()->user();
            $model = new Withdrawal();
            $model->user_id = $user->id;
            $model->status = Withdrawal::WITHDRAWAL_VERIFY_PENDING;
            $model->amount = $request->amount_payment_bank;
            $model->amount_credited = $request->amount_credited_bank;
            $model->bank_name = $request->bank_name;
            $model->account_or_card = $request->account_or_card_bank;
            $model->name_surname = $request->name_surname_bank;
            $model->iban = $request->iban;
            $model->country_city = $request->country_city;
            $model->recipient_address = $request->recipient_address;
            $model->swift = $request->swift;
            $model->bank_recipient_address = $request->bank_recipient_address;
            $model->correspondent_bank_swift = $request->correspondent_bank_swift;
            $model->correspondent_bank = $request->correspondent_bank;
            $model->correspondent_bank_address = $request->correspondent_bank_address;
            $model->account_recipient_in_correspondent = $request->account_recipient_in_correspondent;
            $model->method = $request->input('method_bank');
            $model->save();

            $data = [
                'full_name' => $user->name,
                'email' => $user->email,
                'amount' => $request->amount_payment_bank,
                'amount_credited' => $request->amount_credited_bank,
                'bank_name' => $request->bank_name,
                'account_or_card' => $request->account_or_card_bank,
                'name_surname' => $request->name_surname_bank,
                'iban' => $request->iban,
                'country_city' => $request->country_city,
                'recipient_address' => $request->recipient_address,
                'swift' => $request->swift,
                'bank_recipient_address' => $request->bank_recipient_address,
                'correspondent_bank_swift' => $request->correspondent_bank_swift,
                'correspondent_bank' => $request->correspondent_bank,
                'correspondent_bank_address' => $request->correspondent_bank_address,
                'account_recipient_in_correspondent' => $request->account_recipient_in_correspondent,
                'method' => "Bank withdraw",
            ];

            //            Mail::to(env('SUPPORT_EMAIL'))
            //                ->queue(new WithdrawalMail($data));
            //            Mail::to($user->email)
            //                ->queue(new WithdrawalMail($data));
            return back()->with('success', 'Withdrawal successfully created');
        }

        return view('module.withdrawal.index', [
            'user' => auth()->user()
        ]);
    }
    public function creditStore(Request $request)
    {
        $request->validate([
            'amount_payment_credit' => 'required|string',
            'amount_credited_credit' => 'required|string',
            'account_or_card_credit' => 'required|string',
            'name_surname_credit' => 'required|string',
            'expiration_date' => 'required|string',
            'method_credit' => 'required|string',
        ]);

        if ($request->post()) {
            $user = auth()->user();
            $model = new Withdrawal();
            $model->user_id = $user->id;
            $model->status = Withdrawal::WITHDRAWAL_VERIFY_PENDING;
            $model->amount = $request->amount_payment_credit;
            $model->amount_credited = $request->amount_credited_credit;
            $model->account_or_card = $request->account_or_card_credit;
            $model->name_surname = $request->name_surname_credit;
            $model->expiration_date = $request->expiration_date;
            $model->method = $request->input('method_credit');
            $model->save();

            $data = [
                'full_name' => $user->name,
                'email' => $user->email,
                'amount' => $request->amount_payment_credit,
                'amount_credited' => $request->amount_credited_credit,
                'account_or_card' => $request->account_or_card_credit,
                'name_surname' => $request->name_surname_credit,
                'expiration_date' => $request->expiration_date,
                'method' => "Credit card withdraw",
            ];

            //            Mail::to(env('SUPPORT_EMAIL'))
            //                ->queue(new WithdrawalMail($data));
            //            Mail::to($user->email)
            //                ->queue(new WithdrawalMail($data));
            return back()->with('success', 'Withdrawal successfully created');
        }

        return view('module.withdrawal.index', [
            'user' => auth()->user()
        ]);
    }

    public function withdrawalStore(Request $request)
    {
        $arr = [
            'user_id',
            'status',
            'method',
            'comment', 'amount', 'bank_name',
            'recipient_address', 'country_city'
        ];
        $request->except('_token');
        $data =  $request->all();
        $data['user_id'] = auth()->id();
        foreach ($data as $key => $val) {
            if ($data[$key] == null || in_array($key, $arr)) continue;
            $data[$key] = Crypt::encryptString($val);
        }
        Withdrawal::query()->create($data);
        return redirect()->back();
    }
}
