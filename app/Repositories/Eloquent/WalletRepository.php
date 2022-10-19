<?php
/**
 *  app/Repositories/Eloquent/TranslationRepository.php
 *
 * Date-Time: 07.06.21
 * Time: 09:47
 * @author Decentralized Healthcare <Decentralized Healthcare>
 */

namespace App\Repositories\Eloquent;


use App\Models\Currency;
use App\Models\LanguageLine;
use App\Models\Wallet;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\TranslationRepositoryInterface;

/**
 * Class TranslationRepository
 * @package App\Repositories\Eloquent
 */
class WalletRepository extends BaseRepository
{

    public function __construct(Wallet $model)
    {
        parent::__construct($model);
    }
}
