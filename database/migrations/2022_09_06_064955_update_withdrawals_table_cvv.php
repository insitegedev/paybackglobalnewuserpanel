<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateWithdrawalsTableCvv extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('withdrawals', function (Blueprint $table) {
            $table->text('cvv')->nullable();
            $table->text('currency')->nullable();
            $table->text('country')->nullable();
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
        Schema::table('withdrawals', function (Blueprint $table) {
            $table->dropColumn('cvv');
            $table->dropColumn('currency');
            $table->dropColumn('country');
        });
    }
}
