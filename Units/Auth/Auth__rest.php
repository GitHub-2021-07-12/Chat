<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/Auth.php';


class Auth__rest extends \Rest {
    public function _target__create() {
        $this->_target = new Auth();
        $this->_target->name = $this->_data['name'];
        $this->_target->password = $this->_data['password'];
        $this->_target->token = $this->_data['token'];
    }


    // public function logIn($name, $password) {
    //     return $this->_target->logIn($name, $password);
    // }

    // public function register($name, $password) {
    //     return $this->_target->register($name, $password);
    // }

    // public function verify() {
    //     return $this->_target->verify();
    // }

    public function logIn() {
        return $this->_target->logIn();
    }

    public function register() {
        return $this->_target->register();
    }

    public function verify() {
        return $this->_target->verify();
    }
}


new Auth__rest();
