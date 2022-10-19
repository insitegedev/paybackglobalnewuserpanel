<?php
/**
 *  app/Mail/ContactEmail.php
 *
 * User:
 * Date-Time: 21.12.20
 * Time: 13:49
 * @author suspended values
 */
namespace App\Mail;

use App\Models\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {


        if (isset($this->data['view'])){

            return $this->subject($this->data['subject'])->view($this->data['view'])->with(['data' => $this->data]);

        }
        return $this->subject($this->data['subject'])->view('client.email.contact')->with(['data' => $this->data]);

    }
}
