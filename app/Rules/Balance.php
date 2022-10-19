<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Balance implements Rule
{

    private $user_id;

    private static $count = 0;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        //
        $this->user_id = $id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        $r = \App\Models\Balance::where('user_id',$this->user_id)->get();
        $r2 = \App\Models\Balance::where('user_id',$this->user_id)->where('currency_id',$value)->first();
        if($r2) self::$count ++;
        //dump(count($r),self::$count);
        if(self::$count > count($r)){
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'already exists this currency balance.';
    }
}
