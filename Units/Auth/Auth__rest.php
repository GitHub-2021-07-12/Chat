<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/Auth.php';


$rest = new \Rest();

$auth = new Auth();
$auth->token = $rest->_data['token'];

$rest->target = $auth;
$rest->run();
