<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/Auth.php';


class Auth__rest extends \Rest {
    public $_auth = null;


    public function _init() {
        $this->_auth = new Auth();
        $this->_auth->name = $this->_data['name'];
        $this->_auth->password = $this->_data['password'];
        $this->_auth->token = $this->_data['token'];
    }


    public function logIn() {
        return $this->_auth->logIn();
    }

    public function verify() {
        return $this->_auth->verify();
    }
}


new Auth__rest();
