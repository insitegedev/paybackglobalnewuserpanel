<?php
/**
 *  app/Repositories/Eloquent/UserRepository.php
 *
 * Date-Time: 19.05.21
 * Time: 10:54
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;

use App\Mail\ContactEmail;

use App\Models\User;

use App\Models\Wallet;
use App\Models\Withdrawal;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\UserRepositoryInterface;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

/**
 * Class UserRepository
 * @package App\Repositories\Eloquent
 */
class WithdrawRepository extends BaseRepository
{
    /**
     * UserRepository constructor.
     *
     * @param Withdrawal $model
     */
    public function __construct(Withdrawal $model)
    {
        parent::__construct($model);
    }


    public function updateW($verification, $data)
    {
        $user = User::where(['id' => $verification->user_id])->first();


        $status = $verification->status;

        $verification = $verification->update([
            'status' => $data['status'],
        ]);

        $text = 'Verification status was not changed';
        $type = 'danger';

        if ($verification) {
            $model = $user->update([
                'verify' => $data['status'],
                'liquidity' => $data['liquidity']
            ]);
            if ($model) {
                $text = 'Verification status was successfully changed';
                $type = 'success';
            }

            if ($data['status'] != $status) {
                Mail::to($user->email)
                    ->queue(new ContactEmail($data->all()));
            }
        }
        return redirect()->back();


    }

}
