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

class LogController extends Controller
{

    private $logRepository;


    public function __construct(LogRepository $logRepository)
    {
        $this->logRepository = $logRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {

        return view('admin.nowa.views.log.index', [
            'data' => $this->logRepository->getData($request, [])
        ]);
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
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Log $log
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Log $log)
    {
        if (!$this->logRepository->delete($log->id)) {
            return redirect(locale_route('log.index', $log->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('log.index'))->with('success', __('admin.delete_message'));
    }


}
