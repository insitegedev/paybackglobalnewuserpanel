<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersBalancesTableChange1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('balances', function (Blueprint $table) {
            //$table->dropPrimary('id');
            $table->dropColumn('id');
            $table->primary(['user_id','currency_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('balances', function (Blueprint $table) {
            $table->dropPrimary(['user_id','currency_id']);
            $table->id();
        });
    }
}
