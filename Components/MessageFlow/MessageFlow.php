<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Json/Json.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';


class MessageFlow {
    public final function messages__get() {


        return [1, 2, 3];
    }
}


$messageFlow = new MessageFlow();
$rest = new Rest($messageFlow);
$rest->run();
