<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';

require_once __dir__ . '/../../Units/Auth/Auth.php';


class MessageFlow {
    public $_auth = null;
    public $_db = null;


    public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    public $sql_dir = __dir__ . '/Sql';
    public $token = '';


    public function __construct() {
        $this->_auth = new Auth();
        // $this->_auth->token = $this->token;
        // $this->_auth->verify();

        $this->_db = new \Db("sqlite:{$this->db_path}");
        $this->_db->statements_dir = $this->sql_dir;
    }

    public function message__add($message) {
        // if (!$this->_auth->_id) return false;
        $this->_auth->verify();

        return $this->_auth->_id;
    }

    public function messages__get() {
        if (!$this->_auth->_id) return false;


    }
}
