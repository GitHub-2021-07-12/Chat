<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Json/Json.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';


class MessageFlow {
    public final function messages__get($a, $b) {
        // for ($i = 0; $i < 3; $i++) {
        //     echo $i;

        //     ob_flush();
        //     flush();

        //     sleep(1);
        // }

        throw new Exception('NoAuthorization');

        return [$a, $b];
    }
}


// $messageFlow = new MessageFlow();
// $rest = new Rest($messageFlow);

$rest = new Rest();
$rest->auth_checking = true;
$rest->object = new MessageFlow();
$rest->run();
