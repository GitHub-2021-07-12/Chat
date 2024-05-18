<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/MessageFlow.php';


// {
//     $rest = new \Rest();

//     $messageFlow = new MessageFlow();
//     $messageFlow->_auth->token = $rest->_data['token'];

//     $rest->target = $messageFlow;
//     $rest->run();
// }


class MessageFlow__rest extends \Rest {
    public $_messageFlow = null;


    public function __construct() {
        parent::__construct();

        $this->_messageFlow = new MessageFlow();
        $this->_messageFlow->token = $this->_data['token'];

        $this->run();
    }

    public function message__add($message) {
        // if (!$this->_auth->_id) return false;
        $this->_auth->verify();

        return $this->_auth->_id;
    }
}


new MessageFlow__rest();
