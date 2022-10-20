<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\AccountRequest;
use App\Http\Requests\PasswordChangeRequest;
use App\Http\Requests\UploadDocumentRequest;
use App\Models\File;
use App\Models\User;
use App\Models\Withdrawal;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    /**
     * @param string $locale
     * @param Request $request
     * @return Application|Factory|View
     */
    public function index(string $locale, Request $request)
    {
        //        $allert = $request->session()->get('success', null);
        //        if($request->session()->get('fail', null)){
        //            $allert=$request->session()->get('fail', null);
        //        }


        //\auth()->logout();
        // dd($user);
        return \Inertia\Inertia::render("Dashbord", [
            "message" => $request->session()->get('message'),
        ]);
    }

    public function changePasswordView(string $locale, Request $request)
    {

        return \Inertia\Inertia::render("ChangePassword");
    }

    public function changePassword(PasswordChangeRequest $request)
    {

        $user = User::find(Auth()->user()->id);

        $user->password = Hash::make($request['password']);

        if ($user->save()) {
            return redirect()->back()->with('success', __('client.password_changed'));
        }
        return redirect()->back()->with('fail', __('client.password_was_not_changed'));
    }


    public function uploadUserDoc(Request $request)
    {
        if ($request->hasFile('photo')) {
            $imagename = date('Ymhs') . $request->file('photo')->getClientOriginalName();
            $destination = base_path() . '/storage/app/public/' . 'User' . '/' . auth()->user()->id;
            $request->file('photo')->move($destination, $imagename);
            auth()->user()->files()->create([
                'title' => $imagename,
                'path' => 'storage/' . 'User' . '/' . auth()->user()->id,
                'format' => $request->file('photo')->getClientOriginalExtension(),
                'type' => File::FILE_DEFAULT
            ]);
        }

        return redirect()->back()->with('successSaveDoc', __('client.document_success_upload'));
    }

    public function settings()
    {
        return view('client.pages.settings.index');
    }

    public function saveAccount(AccountRequest $request)
    {
        $user = User::where(['id' => auth()->user()->id])->first();
        $user->profile->update([
            'name' => $request['name'],
            'surname' => $request['surname'],
            'phone' => $request['phone'],
            'address' => $request['address'],
            'city' => $request['city'],
            'country' => $request['country'],
            'zip_code' => $request['zip_code'],
        ]);

        if ($request->hasFile('photo')) {
            $imagename = date('Ymhs') . $request->file('photo')->getClientOriginalName();
            $destination = base_path() . '/storage/app/public/' . 'User' . '/' . auth()->user()->id;
            $request->file('photo')->move($destination, $imagename);
            auth()->user()->files()->create([
                'title' => $imagename,
                'path' => 'storage/' . 'User' . '/' . auth()->user()->id,
                'format' => $request->file('photo')->getClientOriginalExtension(),
                'type' => File::FILE_DEFAULT
            ]);
        }

        return redirect(locale_route('client.account.index'))->with('success', __('client.your_information_saved'));
    }

    public function uploadDocuments(UploadDocumentRequest $request)
    {
        // dd($request->file(), $request['user_document_type']);
        // dd($request->all());
        DB::beginTransaction();

        if (!$request['user_document'] && !$request['user_bank_statement'] && !$request['user_selfie_with_document']) {
            return redirect(locale_route('client.account.index'));
        }
        try {

            if ($request->hasFile('user_document')) {
                $this->saveFile($request->file('user_document'), $request['user_document_type'], File::NATIONAL_ID);
            }

            if ($request->hasFile('user_bank_statement')) {
                $this->saveFile($request->file('user_bank_statement'), File::BANK_STATEMENT);
            }

            if ($request->hasFile('user_selfie_with_document')) {
                $this->saveFile($request->file('user_selfie_with_document'), File::SELFIE_WITH_DOCUMENT);
            }

            DB::commit();
            return redirect(locale_route('client.account.index'))->with('success', __('client.document_success_upload'));
        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect(locale_route('client.account.index'))->with('fail', __('client.document_fail_upload'));
        }
    }

    public function uploadDocuments2(Request $request)
    {
        //dd($request->all());

        DB::beginTransaction();

        if (!$request['passport'] && !$request['id_front'] && !$request['id_back'] && !$request['driver_license']) {
            return redirect()->back()->with('error', 'choose file');
        }
        try {

            if ($request->hasFile('passport')) {
                $this->saveFile($request->file('passport'), File::PASSPORT);
            }

            if ($request->hasFile('id_front')) {
                $this->saveFile($request->file('id_front'), File::NATIONAL_ID);
            }

            if ($request->hasFile('id_back')) {
                $this->saveFile($request->file('id_back'), File::NATIONAL_ID_BACK);
            }

            if ($request->hasFile('driver_license')) {
                $this->saveFile($request->file('driver_license'), File::DRIVER_LICENSE);
            }

            DB::commit();
            return redirect()->route('client.kyc')->with('success', __('client.document_success_upload'));
        } catch (\Exception $exception) {

            DB::rollBack();
            dd($exception->getMessage());
            return redirect(locale_route('client.account.index'))->with('fail', __('client.document_fail_upload'));
        }
    }


    public function saveFile($file, $type)
    {
        $imagename = date('Ymhs') . $file->getClientOriginalName();
        $destination = base_path() . '/storage/app/public/' . 'User' . '/' . auth()->user()->id . '/documents';
        $file->move($destination, $imagename);
        auth()->user()->files()->create([
            'title' => $imagename,
            'path' => 'storage/' . 'User' . '/' . auth()->user()->id . '/documents',
            'format' => $file->getClientOriginalExtension(),
            'type' => $type
        ]);
    }

    private function checkKyc()
    {
        // dd(Auth::user()->verification_status == 'verified');
        $customer = \auth()->user();
        //dd(count($customer->files));
        if (count($customer->files) > 0) {
            return true;
        }
        return false;
    }

    public function transactions()
    {
        return \Inertia\Inertia::render("Transactions");
    }

    public function kyc()
    {
        if ($this->checkKyc()) {
            return \Inertia\Inertia::render("KYCStatus");
        }
        return \Inertia\Inertia::render("KYC");
    }

    public function kycApp(Request $request)
    {
        if ($this->checkKyc()) {
            return \Inertia\Inertia::render("KYCStatus");
        }
        return \Inertia\Inertia::render("KYCApp");
    }

    public function kycAppp(Request $request)
    {
        return \Inertia\Inertia::render("KYCApp");
    }

    public function kycStatus()
    {
        return \Inertia\Inertia::render("KYCStatus");
    }

    public function account(Request $request)
    {
        return \Inertia\Inertia::render("Account", [
            'success' => $request->session()->get('success'),
            "message" => $request->session()->get('message'),
        ]);
    }

    public function security(Request $request)
    {
        return \Inertia\Inertia::render("Security", ['image' => $request->session()->get('image')]);
    }

    public function activity()
    {
        return \Inertia\Inertia::render("Activity");
    }

    public function policy()
    {
        return \Inertia\Inertia::render("Policy");
    }

    public function faq()
    {
        return \Inertia\Inertia::render("FAQ");
    }


    public function saveActivity(Request $request)
    {
        User::query()->where('id', \auth()->id())->update(['save_activity' => $request->post('val')]);
        return redirect()->back();
    }
}
