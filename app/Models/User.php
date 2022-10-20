<?php

namespace App\Models;

use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Searchable\SearchResult;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Notifications\VerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, ScopeFilter, Notifiable, SoftDeletes, HasApiTokens;

    // public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
        'verified',
        'google2fa_secret',
        'verification_proggress',
        'status',
        'balance',
        'crypto_address',
        'is_admin',
        'email_verified_at',
        'is_moderator',
        'is_send_email',
        'manager_name',
        'manager_email',
        'manager_phone',
        'link',
        'deleted_by',
        'can_withdraw',
        'save_activity',
        'verification_status',
        'unique_id',
        'requirements',
        'mail_verified'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        // 'google2fa_secret'
    ];


    // protected function google2faSecret()
    // {
    //     return new Attribute(
    //         get: fn ($value) =>  decrypt($value),
    //         set: fn ($value) =>  encrypt($value),
    //     );
    // }
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'unique_id' => [
                'hasParam' => true,
                'scopeMethod' => 'unique_id'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'name' => [
                'hasParam' => true,
                'scopeMethod' => 'firstName'
            ],
            'surname' => [
                'hasParam' => true,
                'scopeMethod' => 'lastName'
            ],
            'email' => [
                'hasParam' => true,
                'scopeMethod' => 'email'
            ],
            'moderator' => [
                'hasParam' => true,
                'scopeMethod' => 'moderator'
            ],
            'phone' => [
                'hasParam' => true,
                'scopeMethod' => 'phone'
            ],
            'admin' => [
                'hasParam' => true,
                'scopeMethod' => 'admin'
            ],
        ];
    }

    public function profile()
    {
        return $this->hasOne(UserProfile::class, 'user_id');
    }

    public function getSearchResult(): SearchResult
    {
        $url = locale_route('client.product.show', $this->slug);

        return new SearchResult(
            $this,
            $this->title,
            $url
        );
    }


    /**
     * @return MorphMany
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }

    /**
     * @return MorphMany
     */
    public function userFiles(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT]);
    }


    /**
     * @return MorphOne
     */
    public function file(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT])->orderBy('id', 'desc');
    }

    /**
     * @return MorphOne
     */
    public function bankStatement(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::BANK_STATEMENT])->orderBy('id', 'desc');
    }

    /**
     * @return MorphOne
     */
    public function passport(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::PASSPORT])->orderBy('id', 'desc');
    }

    /**
     * @return MorphOne
     */
    public function nationalId(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::NATIONAL_ID])->orderBy('id', 'desc');
    }

    /**
     * @return MorphOne
     */
    public function driverLicense(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::DRIVER_LICENSE])->orderBy('id', 'desc');
    }

    /**
     * @return MorphOne
     */
    public function selfieWithDocument(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::SELFIE_WITH_DOCUMENT])->orderBy('id', 'desc');
    }


    public function getBalanceByCurrency($currency)
    {
        $result = (array)json_decode($this->balance);
        if (isset($result[$currency])) {
            return $result[$currency];
        }
        return null;
    }

    public function getAddressByCrypto($crypto)
    {
        $result = (array)json_decode($this->crypto_address);
        if (isset($result[$crypto])) {
            return $result[$crypto];
        }
        return null;
    }

    /*public function getWalletAddressAttribute($value)
    {
        return (array)json_decode($value,true);

    }*/

    /*public function getBalanceAttribute($value){
        return (array)json_decode($value,true);
    }*/

    public function balances(): HasMany
    {
        return $this->hasMany(Balance::class);
    }

    public function wallets(): HasMany
    {
        return $this->hasMany(Wallet::class);
    }

    public function deletedBy()
    {
        return $this->hasOne(User::class, 'id', 'deleted_by');
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail); // my notification
    }

    public function activity(): HasMany
    {
        return $this->hasMany(Activity::class)->orderBy('created_at', 'desc');
    }

    public function withdrawals(): HasMany
    {
        return $this->hasMany(Withdrawal::class);
    }
}
