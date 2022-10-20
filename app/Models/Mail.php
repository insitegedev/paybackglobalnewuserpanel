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

class Mail extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status_approve',
        'status_reject',
        'verified',
        'created',
        'status_approve_subject',
        'status_reject_subject',
        'verified_subject',
        'created_subject',
        'mail_verified',
        'mail_verified_subject'
    ];
}
