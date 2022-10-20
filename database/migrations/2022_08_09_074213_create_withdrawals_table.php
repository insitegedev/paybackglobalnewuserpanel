<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWithdrawalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdrawals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('amount');
            $table->string("wallet")->nullable();

            $table->string("amount_credited")->nullable();
            $table->string("bank_name")->nullable();
            $table->string("account_or_card")->nullable();
            $table->string("name_surname")->nullable();
            $table->string("iban")->nullable();
            $table->string("country_city")->nullable();
            $table->string("recipient_address")->nullable();
            $table->string("swift")->nullable();
            $table->string("bank_recipient_address")->nullable();
            $table->string("correspondent_bank_swift")->nullable();
            $table->string("correspondent_bank")->nullable();
            $table->string("correspondent_bank_address")->nullable();
            $table->string("account_recipient_in_correspondent")->nullable();

            $table->string("expiration_date")->nullable();
            $table->tinyInteger("status")->default(2)->nullable();
            $table->string("method")->nullable();
            $table->string("comment")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('withdrawals');
    }
}
