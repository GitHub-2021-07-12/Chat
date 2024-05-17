<?php

require_once __dir__ . '/../../../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../../../Api/Units/Rest/Rest.php';


class DbManager {
    public $_db = null;
    public $_db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    public $_sql_dir = __dir__ . '/Sql';


    public function __construct() {
        $this->_db = new Db("sqlite:{$this->_db_path}");
        $this->_db->statements_dir = $this->_sql_dir;
    }

    public final function init() {
        $this->_db->execute_raw('init');
    }

    public final function query() {
        return $this->_db->fetch('query');
    }
}


$rest = new Rest();
$rest->object = new DbManager();
$rest->run();
