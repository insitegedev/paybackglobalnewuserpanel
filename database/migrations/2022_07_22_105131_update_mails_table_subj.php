<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMailsTableSubj extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('mails', function (Blueprint $table) {
            $table->string('status_approve_subject')->nullable();
            $table->string('status_reject_subject')->nullable();
            $table->string('verified_subject')->nullable();
            $table->string('created_subject')->nullable();
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
        Schema::table('mails', function (Blueprint $table) {
            $table->dropColumn("status_approve_subject");
            $table->dropColumn("status_reject_subject");
            $table->dropColumn("verified_subject");
            $table->dropColumn("created_subject");
        });
    }
}
