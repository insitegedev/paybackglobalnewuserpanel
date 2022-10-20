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
use App\Models\Activity;
use App\Models\User;
use App\Models\UserProfile;
use App\Notifications\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Browser;


use Cache;
use Illuminate\Contracts\Auth\Authenticatable;
use App\Http\Requests\ValidateSecretRequest;

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
        $danger = $request->session()->get('danger', null);

        return \Inertia\Inertia::render("Login/SignIn", ["danger" => $danger]);
    }

    public function verifylogin($locale, Request $request)
    {
        $danger = $request->session()->get('danger', null);

        return \Inertia\Inertia::render("Verify/Verify", ["danger" => $danger]);
    }



    /**
     * Authenticate login user.
     *
     * @param LoginRequest $request
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */

    public function getValidateToken()
    {
        if (session('2fa:user:id')) {
            return view('2fa/validate');
        }

        return redirect('login');
    }


    public function postValidateToken(ValidateSecretRequest $request)
    {
        //get user id and create cache key
        $userId = $request->session()->pull('2fa:user:id');
        $key    = $userId . ':' . $request->totp;

        //use cache to store token to blacklist
        Cache::add($key, true, 4);

        //login and redirect user
        Auth::loginUsingId($userId);

        return redirect()->intended($this->redirectTo);
    }


    public function login(LoginRequest $request, User $user)
    {

        // if ($user->google2fa_secret) {
        //     Auth::logout();

        //     $request->session()->put('2fa:user:id', $user->id);

        //     return redirect('2fa/validate');
        // }

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

                //dd(Browser::deviceType(),$request->ip());
                if (Auth()->user()->google2fa_secret) {
                    $request->session()->put('2fa:user:id', Auth()->user()->id);
                    Auth::logout();
                    return redirect(route("getValidateToken"));
                };
                if (\auth()->user()->save_activity) {
                    Activity::query()->create([
                        'ip_address' => $request->ip(),
                        'user_id' => \auth()->id(),
                        'device' => Browser::deviceType() . ' - ' . Browser::platformName(),
                        'browser' => Browser::browserName()
                    ]);
                }

                return redirect(locale_route("client.home.index"))->with('success', __('client.success_login'));
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

    public function generateUniqueCode(): int
    {
        do {
            $code = random_int(100, 999);
        } while (User::where("unique_id", "=", $code)->first());

        return $code;
    }


    public function signup($locale, RegisterRequest $request)
    {
        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'is_admin' => 0,
            'balance' => "0",
            'unique_id' => $this->generateUniqueCode(),
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
