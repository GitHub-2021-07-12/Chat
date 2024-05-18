<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/MessageFlow.php';


{
    $rest = new \Rest();

    $messageFlow = new MessageFlow();
    $messageFlow->_auth->token = $rest->_data['token'];

    $rest->target = $messageFlow;
    $rest->run();
}
