<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';

require_once __dir__ . '/../../Units/Auth/Auth.php';


class MessageFlow {
    public $_auth = null;
    public $_db = null;


    public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    public $sql_dir = __dir__ . '/Sql';


    public function __construct() {
        $this->_auth = new Chat\Auth();
        $this->_auth->id__define($token);

        $this->_db = new Db("sqlite:{$this->db_path}");
        $this->_db->sql_dir = $this->sql_dir;
    }

    public final function messages__get() {
        // return $this->db_path;

        if (!$this->_auth->_id) return false;
    }
}


$rest = new Rest();
$rest->object = new MessageFlow();
$rest->run();
