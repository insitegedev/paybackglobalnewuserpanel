<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('edit_user_id');
            $table->string('user_role');
            $table->string('email');
            $table->string('phone');
            $table->string('name');
            $table->string('surname');
            $table->string('action');
            $table->json('fields_original')->nullable();
            $table->json('fields_updated')->nullable();
            $table->json('fields')->nullable();
            $table->json('balance_original')->nullable();
            $table->json('balance_updated')->nullable();
            $table->json('wallet_original')->nullable();
            $table->json('wallet_updated')->nullable();
            $table->text('details')->nullable();
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
        Schema::dropIfExists('logs');
    }
}
