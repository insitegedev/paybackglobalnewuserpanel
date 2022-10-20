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
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;



class Activity extends Model
{
    use HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'activities';



    protected $fillable = [
        'ip_address',
        'user_id',
        'device',
        'browser'

    ];



    //protected $with = ['translation'];


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









    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }


}
