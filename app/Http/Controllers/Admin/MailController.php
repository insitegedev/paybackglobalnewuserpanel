<?php

/**
 *  app/Http/Controllers/Admin/ProjectController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author suspended values
 */


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BlogRequest;
use App\Http\Requests\Admin\ChangePasswordRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Http\Requests\Admin\UserRequest;
use App\Models\Blog;
use App\Models\Mail;
use App\Models\Project;
use App\Models\Session;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Repositories\BlogRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use ReflectionException;

class MailController extends Controller
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;



    public function __construct()
    {

        $this->middleware('isAdmin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(\Illuminate\Http\Request $request)
    {
        if(count(Mail::all()) > 0){
            $mail = Mail::first();
        } else {
            $mail = Mail::create([
                'status_approve' => '',
                'status_reject' => '',
                'verified' => '',
                'created' => ''
            ]);
        }

        $url = locale_route('mail.update', [$mail], false);
        $method = 'PUT';

        return view('admin.nowa.views.mail.form', [
            'mail' => $mail,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $user = $this->userRepository->model;

        $url = locale_route('user.store', [], false);
        $method = 'POST';

        return view('admin.pages.user.form', [
            'user' => $user,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BlogRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(UserRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['verified'] = isset($saveData['verified']) && (bool)$saveData['verified'];
        $user = $this->userRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images')) {
            $user = $this->userRepository->saveFiles($user->id, $request);
        }

        return redirect(locale_route('user.show', $user->id))->with('success', __('admin.create_successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Blog $project
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, User $user)
    {
        $user->with([
            "files",
        ])->firstOrFail();
        // dd($user->files);
        return view('admin.pages.user.show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Blog $project
     * @return Application|Factory|View
     */
    public function edit(string $locale, User $user)
    {
        $url = locale_route('user.update', $user->id, false);
        $method = 'PUT';

        return view('admin.pages.user.form', [
            'user' => $user,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BlogRequest $request
     * @param string $locale
     * @param Blog $project
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(\Illuminate\Http\Request $request, string $locale, Mail $mail)
    {

        //dd($request->all());

        $mail->update([
            'status_approve' => $request->post('status_approve'),
            'status_reject' => $request->post('status_reject'),
            'verified' => $request->post('verified'),
            'created' => $request->post('created'),
            'status_approve_subject' => $request->post('status_approve_subject'),
            'status_reject_subject' => $request->post('status_reject_subject'),
            'verified_subject' => $request->post('verified_subject'),
            'created_subject' => $request->post('created_subject'),
        ]);


        return redirect(locale_route('mail.index'))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param User $user
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, $id)
    {
        Session::query()->where('user_id',$id)->delete();
        return redirect(locale_route('session.index'))->with('success', __('admin.delete_message'));
    }

    public function changePassword()
    {
        $user = User::where(['id' => auth()->user()->id])->first();
        return view('admin.pages.user.change-password', [
            'user' => $user
        ]);
    }


    public function storePassword(ChangePasswordRequest $request)
    {
        $password = Hash::make($request['password']);
        $user = User::where(['id' => auth()->user()->id])->update([
            'password' => $password
        ]);

        if ($user) {
            return redirect(locale_route('change-password'))->with('success', __('password_success_change'));
        }
        return redirect(locale_route('change-password'))->with('fail', __('password_fail_change'));;
    }
}
