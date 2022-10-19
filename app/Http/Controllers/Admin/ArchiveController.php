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
use App\Repositories\Eloquent\LogRepository;
use App\Repositories\Eloquent\UserRepository;
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

class ArchiveController extends Controller
{

    private $userRepository;


    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {

        return view('admin.nowa.views.archive.index', [
            'data' => User::onlyTrashed()->paginate(10)
        ]);
    }








    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Log $log
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, $user_id)
    {
        if (!User::onlyTrashed()->where('id',$user_id)->forceDelete()) {
            return redirect(locale_route('archive.index'))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('archive.index'))->with('success', __('admin.delete_message'));
    }


    public function restore($locale, $user_id){
        $user = User::onlyTrashed()->where('id',$user_id)->first();
        $user->update(['deleted_by' => null]);
        $user->restore();

        $log = new Log([
            'user_id' => \auth()->id(),
            'edit_user_id' => $user->id,
            'user_role' => \auth()->user()->is_admin ? 'admin' : 'moderator',
            'email' => \auth()->user()->email,
            'name' => \auth()->user()->profile ? \auth()->user()->profile->name : '',
            'surname' => \auth()->user()->profile ? \auth()->user()->profile->surname : '',
            'action' => 'restore',
            'details' => 'Restored user: '. $user->email
        ]);
        $log->save();

        return redirect(locale_route('archive.index'))->with('success', __('admin.restore_message'));
    }


}
