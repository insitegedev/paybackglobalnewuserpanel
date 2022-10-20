<?php

namespace App\Models;

use App\Traits\ScopeFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    public const WITHDRAWAL_NOT_VERIFY = 0;
    public const WITHDRAWAL_VERIFY = 1;
    public const WITHDRAWAL_VERIFY_PENDING = 2;
    public const WITHDRAWAL_APPROVED = 3;
    public const WITHDRAWAL_REJECTED = 4;
    public const WITHDRAWAL_CANCELLED = 5;
    public const WITHDRAWAL_MANUAL_CHECK = 6;
    public const WITHDRAWAL_UNDER_REVIEW = 7;
    public const WITHDRAWAL_PROCESSING = 8;

    use HasFactory, ScopeFilter;
    protected $fillable = [
        'user_id',
        'amount',
        'amount_credited',
        'bank_name',
        'account_or_card',
        'name_surname',
        'iban',
        'cvv',
        'currency',
        'country',
        'country_city',
        'recipient_address',
        'swift',
        'bank_recipient_address',
        'correspondent_bank_swift',
        'correspondent_bank',
        'correspondent_bank_address',
        'account_recipient_in_correspondent',
        'expiration_date',
        'method',
        'comment',
        'status',
        'wallet'
    ];

    /**
     * @return array[]
     */
    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'name' => [
                'hasParam' => true,
                'scopeMethod' => 'FullName'
            ],
            'amount' => [
                'hasParam' => true,
                'scopeMethod' => 'amount'
            ],
            'method' => [
                'hasParam' => true,
                'scopeMethod' => 'WithdrawMethod'
            ],
            'verify' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ]
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
