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
class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * @param \App\Models\User $model
     */
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function create(array $attributes = [])
    {
        // dd($attributes);
        if (isset($attributes['balance'])) {
            $attributes['balance'] = json_encode($attributes['balance']);
        }
        if (isset($attributes['crypto_address'])) {
            $attributes['crypto_address'] = json_encode($attributes['crypto_address']);
        }
        $attributes['password'] = Hash::make($attributes['password']);

        $attributes['is_send_email'] = isset($attributes['is_send_email']) ?? 0;
        $attributes['can_withdraw'] = isset($attributes['can_withdraw']) ?? 0;

        $userAttributes = Arr::except($attributes, ['name', 'surname', 'phone']);

        try {
            $user = $this->model->create($userAttributes);
            UserProfile::create([
                'user_id' => $user->id,
                'name' => $attributes['name'],
                'surname' => $attributes['surname'],
                'phone' => $attributes['phone'],
            ]);

            $log = new Log([
                'user_id' => \auth()->id(),
                'edit_user_id' => $user->id,
                'user_role' => \auth()->user()->is_admin ? 'admin' : 'moderator',
                'email' => \auth()->user()->email,
                'name' => \auth()->user()->profile ? \auth()->user()->profile->name : '',
                'surname' => \auth()->user()->profile ? \auth()->user()->profile->surname : '',
                'action' => 'create',
                'details' => 'Created user: ' . $user->email
            ]);
            $log->save();

            $mail = \App\Models\Mail::first();

            if ($userAttributes['is_send_email']) {
                $sendData = [
                    'status' => $user->status == "approved",
                    'type' => 'create',
                    'subject' => $user->status == "approved" ? 'Your Account has been Approved' : "Your account has been created",
                    'view' => 'admin.email.status-change',
                ];
                Mail::to($user->email)->send(new ContactEmail($sendData));
            }


            return $user;
        } catch (\Illuminate\Database\QueryException $exception) {
            dd($exception->getMessage());
            return $exception->errorInfo;
        }
    }

    public function update(int $id, array $data = [])
    {

        global $request;
        function checkMail()
        {
            if ($GLOBALS['request']->email_verified_at == 'null') {
                return null;
            } else {
                return $GLOBALS['request']->email_verified_at;
            }
        }
        $this->model = $this->findOrFail($id);

        $data['balance'] = json_encode(isset($data['balance']) ? $data['balance'] : []);
        $data['crypto_address'] = json_encode(isset($data['crypto_address']) ? $data['crypto_address'] : []);
        if ($data['password']) {
            $data['password'] = Hash::make($data['password']);
        } else {
            $data['password'] = $this->model->password;
        }

        $data['is_send_email'] = isset($data['is_send_email']) ?? 0;
        $data['can_withdraw'] = isset($data['can_withdraw']) ?? 0;

        try {
            $this->model->profile->update([
                'name' => $data['name'],
                'surname' => $data['surname'],
                'phone' => $data['phone']
            ]);

            $mail = \App\Models\Mail::first();
            if ($data['status'] !== $this->model->getOriginal('status') && ($data['status'] == 'approved' || $data['status'] == 'rejected') && $data['is_send_email']) {
                if ($data['status'] == 'rejected') {
                    $sendData = [
                        'name' => $this->model->profile->name,
                        'subject' => 'Your Status is Changed',
                        'view' => 'admin.email.status-change',
                        'email' => $this->model->email,
                        'text' => $mail->status_reject
                    ];
                }
                if ($data['status'] == 'approved') {
                    $sendData = [
                        'name' => $this->model->profile->name,
                        'subject' => 'Your Status is Changed',
                        'view' => 'admin.email.status-change',
                        'email' => $this->model->email,
                        'text' => $mail->status_approve
                    ];
                }

                Mail::to($this->model->email)->send(new ContactEmail($sendData));
            }

            if ($data['verified'] !== $this->model->getOriginal('status') && $data['verified'] && $data['is_send_email']) {
                $sendData = [
                    'name' => $this->model->profile->name,
                    'subject' => 'Your Verification Status is Changed',
                    'email' => $this->model->email,
                    'view' => 'admin.email.verification-change',
                    'text' => $mail->verified
                ];
                Mail::to($this->model->email)->send(new ContactEmail($sendData));
            }

            return $this->model->update($data);
        } catch (\Illuminate\Database\QueryException $exception) {
            return $exception->errorInfo;
        }
    }
}
