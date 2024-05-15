<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/../../Units/Auth/Auth.php';


class AuthForm {

}


$rest = new Rest();
$rest->object = new AuthForm();
$rest->run();
