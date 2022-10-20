<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Lang;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailBase;
use App\Models\Mail;


class VerifyEmail extends VerifyEmailBase
{
    public function toMail($notifiable)
    {
        // dd(Mail::get()->first());
        // dd($data->mail_verified);
        $data = Mail::get()->first();
        if (static::$toMailCallback) {
            return call_user_func(static::$toMailCallback, $notifiable);
        }
        return (new MailMessage)
            ->subject(Lang::get($data->mail_verified_subject))
            ->action(
                Lang::get($data->mail_verified),
                $this->verificationUrl($notifiable)
            )
            ->line(Lang::get(''))->view('client.email.verify', [
                // 'subject' => $data->mail_verified_subject,
                'text' => $data->mail_verified,
                'link' => $this->verificationUrl($notifiable)
            ]);

        // return (new MailMessage)
        //     ->line('The introduction to the notification.')
        //     ->action('Notification Action', url('/'))
        //     ->line('Thank you for using our application!')->view('client.login.reset-pass-email', ['url' => $this->url]);
    }
}
