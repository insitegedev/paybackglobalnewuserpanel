<?php

namespace App\Models;

use App\Models\Translations\BlogTranslation;
use App\Models\Translations\ProductTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;



class Log extends Model
{
    use HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'logs';



    protected $fillable = [
        'user_id',
        'edit_user_id',
        'user_role',
        'email',
        'phone',
        'name',
        'surname',
        'action',
        'fields',
        'fields_original',
        'fields_updated',
        'details',
        'balance_original',
        'balance_updated',
        'wallet_original',
        'wallet_updated'
    ];




    public function user():HasOne{
        return $this->hasOne(User::class,'id','user_id');
    }

    public function client():HasOne{
        return $this->hasOne(User::class,'id','edit_user_id');
    }


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'slug' => [
                'hasParam' => true,
                'scopeMethod' => 'slug'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ],
            'category_id' => [
                'hasParam' => true,
                'scopeMethod' => 'categoryId'
            ]
        ];
    }


}
