<?php
/**
 *  app/Repositories/Eloquent/ProjectRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author suspended values
 */

namespace App\Repositories\Eloquent;


use App\Jobs\SendEmailJob;
use App\Mail\ContactEmail;
use App\Models\Log;
use App\Models\User;
use App\Models\UserProfile;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpKernel\Profiler\Profile;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class LogRepository extends BaseRepository
{

    public function __construct(Log $model)
    {
        parent::__construct($model);
    }



}
