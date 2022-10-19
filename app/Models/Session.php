<?php

namespace App\Models;

use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Searchable\SearchResult;

class Session extends Model
{
    use HasFactory;




    public function user(){
        return $this->belongsTo(User::class);
    }

}
