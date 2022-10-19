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
use App\Models\Currency;
use App\Models\Log;
use App\Models\Project;
use App\Notifications\ProfileUpdated;
use App\Rules\Balance;
use App\Rules\Wallet;
use Illuminate\Http\Request;
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
use App\Rules\MatchOldPassword;

class UserController extends Controller
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;


    /**
     * @param UserRepositoryInterface $userRepository
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(BlogRequest $request)
    {
        $request = $request->merge([
            'moderator' => 0,
            'admin' => 0
        ]);

        return view('admin.nowa.views.user.index', [
            'data' => $this->userRepository->getData($request, [])
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

        return view('admin.nowa.views.user.form', [
            'user' => $user,
            'currencies' => Currency::all(),
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

        if(isset($saveData['currency_id'])){
            $user->balances()->delete();
            foreach ($saveData['currency_id'] as $key => $item){
                $user->balances()->create([
                    'currency_id' => $item,
                    'value' => $saveData['value'][$key]
                ]);
            }
        }

        if(isset($saveData['wall_currency_id'])){
            $user->wallets()->delete();
            foreach ($saveData['wall_currency_id'] as $key => $item){
                $user->wallets()->create([
                    'currency_id' => $item,
                    'address' => $saveData['address'][$key]
                ]);
            }
        }

        // Save Files
        if ($request->hasFile('images')) {
            $user = $this->userRepository->saveFiles($user->id, $request);
        }

        return redirect(locale_route('user.index', $user->id))->with('success', __('admin.create_successfully'));
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

        return view('admin.nowa.views.user.form', [
            'user' => $user,
            'currencies' => Currency::all(),
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
    public function update(UserRequest $request, string $locale, User $user)
    {
        // dd($request->crypto_address['btc']);
        $request->validate([
            'currency_id.*' => new Balance($user->id),
            'wall_currency_id.*' => new Wallet($user->id)
        ]);
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['verified'] = isset($saveData['verified']) && (bool)$saveData['verified'];

        $balances = $user->balances;
        $o_balances = [];
        foreach ($balances as $balance){
            $o_balances[$balance->currency->code] = $balance->value;
        }
        $wallets = $user->wallets;
        $o_wallets = [];
        foreach ($wallets as $wallet){
            $o_wallets[$wallet->currency->code] = $wallet->address;
        }



        if(isset($saveData['currency_id'])){
            $user->balances()->delete();
            foreach ($saveData['currency_id'] as $key => $item){
                $user->balances()->create([
                    'currency_id' => $item,
                    'value' => $saveData['value'][$key]
                ]);
            }
        }

        if(isset($saveData['wall_currency_id'])){
            $user->wallets()->delete();
            foreach ($saveData['wall_currency_id'] as $key => $item){
                $user->wallets()->create([
                    'currency_id' => $item,
                    'address' => $saveData['address'][$key]
                ]);
            }
        }

        $original = array_merge($user->getRawOriginal(),$user->profile->getRawOriginal());



        $this->userRepository->update($user->id, $saveData);

        $updated = array_merge($this->userRepository->model->getRawOriginal(),$this->userRepository->model->profile->getRawOriginal());

       array_walk($updated,function (&$a,$b){

            if($b == 'verified' || $b == 'is_send_email'){
                $a = (int)$a;
            }

        });

        //dd($original,$updated,array_diff_assoc($updated,$original));

        $diff = array_diff_assoc($updated,$original);

        $balances = $this->userRepository->model->balances;
        $u_balances = [];
        foreach ($balances as $balance){
            $u_balances[$balance->currency->code] = $balance->value;
        }
        $wallets = $this->userRepository->model->wallets;
        $u_wallets = [];
        foreach ($wallets as $wallet){
            $u_wallets[$wallet->currency->code] = $wallet->address;
        }

        $b_diff = array_diff_assoc($u_balances,$o_balances);
        $w_diff = array_diff_assoc($u_wallets,$o_wallets);

        $b_diff_u = array_diff_assoc($o_balances,$u_balances);
        $w_diff_u = array_diff_assoc($o_wallets,$u_wallets);


        if(!empty($diff) || !empty($b_diff) || !empty($w_diff) || !empty($b_diff_u) || !empty($w_diff_u)){
            $log = new Log([
                'user_id' => \auth()->id(),
                'edit_user_id' => $user->id,
                'user_role' => \auth()->user()->is_admin ? 'admin' : 'moderator',
                'email' => \auth()->user()->email,
                'name' => \auth()->user()->profile ? \auth()->user()->profile->name : '',
                'surname' => \auth()->user()->profile ? \auth()->user()->profile->surname : '',
                'action' => 'update',
                'fields' => json_encode($diff),
                'fields_original' => json_encode($original),
                'fields_updated' => json_encode($updated),
                'balance_original' => json_encode($o_balances),
                'balance_updated' => json_encode($u_balances),
                'wallet_original' => json_encode($o_wallets),
                'wallet_updated' => json_encode($u_wallets)
            ]);
            $log->save();
        }

        $this->userRepository->saveFiles($user->id, $request);


        //$user->notify(new ProfileUpdated());


        return redirect(locale_route('user.index', $user->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param User $user
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, User $user)
    {
        if (!$this->userRepository->delete($user->id)) {
            return redirect(locale_route('user.show', $user->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('user.index'))->with('success', __('admin.delete_message'));
    }

    public function changePassword()
    {
        $user = User::where(['id' => auth()->user()->id])->first();
        return view('admin.nowa.views.user.change-password', [
            'user' => $user
        ]);
    }


    public function storePassword(Request $request)
    {

        $request->validate([
            'old_password' => ['required', new MatchOldPassword()],
            'password' => ['required','min:3'],
            'repeat_password' => ['same:password']
        ]);

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
