<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/../../Units/Auth/Auth.php';


class AuthForm {
    public $_auth = null;


    public function __construct() {
        $this->_auth = new Chat\Auth();
    }

    public final function logIn($name, $password) {
        // return $this->_auth->logIn($name, $password);
        return $this->_auth->logIn($name, $password) ?: $this->_auth->register($name, $password);
        // return 0 ?: 4;

        // $token = $this->_auth->logIn($name, $password);
    }

    // public final function register($name, $password) {
    //     return $this->_auth->register($name, $password);
    // }
}


$rest = new Rest();
$rest->object = new AuthForm();
$rest->run();
