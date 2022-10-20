<?php

namespace App\Http\Controllers;

use Crypt;
use Cache;
use Illuminate\Support\Facades\Auth;
use Google2FA;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use \ParagonIE\ConstantTime\Base32;
use App\Http\Requests\ValidateSecretRequest;
use Illuminate\Validation\Factory as ValidatonFactory;

class Google2FAController extends Controller
{
    use ValidatesRequests;

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('web');
    }

    public function enableTwoFactor(Request $request)
    {
        //generate new secret
        $secret = $this->generateSecret();

        //get user
        $user = $request->user();

        //encrypt and then save secret
        // $user->google2fa_secret = Crypt::encrypt($secret);
        // $user->save();

        //generate image for QR barcode
        $imageDataUri = Google2FA::getQRCodeInline(
            $request->getHttpHost(),
            $user->email,
            $secret,
            200
        );

        // return view('2fa/enableTwoFactor', [
        //     'image' => $imageDataUri,
        //     'secret' => $secret
        // ]);
        // return \Inertia\Inertia::render("TFI", [
        //     'image' => $imageDataUri,
        //     'secret' => $secret
        // ]);

        return json_encode(
            [
                'image' => $imageDataUri,
                'secret' => $secret
            ]
        );
    }

    public function verifyKey(Request $req, ValidatonFactory $factory)
    {
        // return json_encode(
        //     [
        //         'status' => $req->post()
        //     ]
        // );
        $crypted = Crypt::encrypt($req->secret);
        $secret = Crypt::decrypt($crypted);
        $user = $req->user();
        if (Google2FA::verifyKey($secret, $req->code)) {
            $user->google2fa_secret = Crypt::encrypt($secret);
            $user->save();
            return json_encode(
                [
                    'status' => 'success'
                ]
            );
        } else {
            return json_encode(
                [
                    'status' => 'error'
                ]
            );
        }
        // return redirect(route('client.security'));

    }

    /**
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function disableTwoFactor(Request $request)
    {
        // $user = $request->user();

        //make secret column blank
        // $user->google2fa_secret = null;
        // $user->save();

        // return view('2fa/disableTwoFactor');


        return \Inertia\Inertia::render("DisableTFI", [
            'err' => $request->session()->get('err'),
        ]);
    }

    public function verifyDisable(Request $request)
    {
        $user = $request->user();
        $secret = Crypt::decrypt($user->google2fa_secret);
        if (Google2FA::verifyKey($secret, $request->code)) {
            $user->google2fa_secret = null;
            $user->save();
            return redirect(route('client.security'));
        } else {
            return redirect(route('disableTwoFactor'))->with('err', 'err');
        }
    }

    /**
     * Generate a secret key in Base32 format
     *
     * @return string
     */
    private function generateSecret()
    {
        $randomBytes = random_bytes(10);

        return Base32::encodeUpper($randomBytes);
    }


    // public function getValidateToken()
    // {
    //     return view('2fa/validate');
    // }

    public function getValidateToken(Request $request)
    {
        if ($request->session()->get('2fa:user:id')) {
            // return view('2fa/validate');
            return \Inertia\Inertia::render("Verify/Verify");
        }

        return redirect('login');
    }

    public function postValidateToken(ValidateSecretRequest $request)
    // public function postValidateToken(Request $request)
    {
        //get user id and create cache key
        $userId = $request->session()->pull('2fa:user:id');
        $key    = $userId . ':' . $request->totp;

        //use cache to store token to blacklist
        Cache::add($key, true, 4);

        //login and redirect user
        Auth::loginUsingId($userId);

        return redirect(route('client.home.index'));
    }
}
