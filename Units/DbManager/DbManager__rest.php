<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/DbManager.php';


$rest = new \Rest();
$rest->target = new DbManager();
$rest->run();
