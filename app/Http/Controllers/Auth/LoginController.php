<?php

/**
 *  app/Http/Controllers/Admin/Auth/AuthController.php
 *
 * Date-Time: 03.06.21
 * Time: 15:23
 * @author suspended values
 */

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Auth\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\ContactEmail;
use App\Models\User;
use App\Models\UserProfile;
use App\Notifications\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

/**
 * Class AuthController
 * @package App\Http\Controllers\Admin\Auth
 */
class LoginController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    /**
     * @param $locale
     * @param Request $request
     * @return \Inertia\Response
     */
    public function loginView($locale, Request $request)
    {
        // return 'asdsad';
        $danger = $request->session()->get('danger', null);

        return \Inertia\Inertia::render("auth/SignIn", ["danger" => $danger]);
    }

    /**
     * Authenticate login user.
     *
     * @param LoginRequest $request
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function login(LoginRequest $request)
    {
        // dd($request->post());
        if (!\Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ], $request->remember)) {
            $error = \Illuminate\Validation\ValidationException::withMessages([
                'auth' => [__('validation.wrong_email_or_password')],
            ]);
            throw $error;
        }

        if (auth()->user()->status == 'approved') {
            if (Auth()->user()->is_admin) {
                \Auth::logout();
                return redirect(locale_route("client.login.index"));
            } else {

                return redirect(locale_route("client.home.index"))->with('success', __('client.success_login'));;
            }
        } else {
            \Auth::logout();
            return redirect(locale_route("client.login.index"))->with('danger', __("client.account_not_approved"));
        }
    }


    public function signupView()
    {
        if (Auth::user()) {
            return redirect()->route('client.home.index', app()->getLocale());
        } else {
            return view('client.layout.auth.signup');
        }
    }

    public function signup($locale, RegisterRequest $request)
    {
        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'is_admin' => 0,
            'balance' => "0"
        ]);

        if ($user) {
            $profile = UserProfile::create([
                'user_id' => $user->id,
                'name' => $request['name'],
                'surname' => $request['surname'],
                'phone' => $request['phone']
            ]);
        }

        //$user->notify(new Registered());
        $mail = \App\Models\Mail::first();

        $sendData = [
            'name' => $user->profile->name,
            'subject' => 'Your Account Created',
            'view' => 'admin.email.status-change',
            'email' => $user->email,
            'text' => $mail->created
        ];


        Mail::to($user->email)->send(new ContactEmail($sendData));


        //        if ($user) {
        //            if (!Auth::attempt([
        //                'email' => $user->email,
        //                'password' => $request->password
        //            ])) {
        //                $error = \Illuminate\Validation\ValidationException::withMessages([
        //                    'auth' => [__('validation.wrong_email_or_password')],
        //                ]);
        //                throw $error;
        //            }
        //        }

        return redirect(route('client.home.index', app()->getLocale()))->with('success', __('client.success_register'));
    }


    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout()
    {
        \Auth::logout();
        return redirect(locale_route('client.home.index'));
    }
}
