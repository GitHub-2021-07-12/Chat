<?php

namespace App;

require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Db/Db.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Rest/Rest.php';


class DbManager extends \Rest {
    static public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    static public $sql_dir = __dir__ . '/Sql';


    public $_db = null;


    public function _init() {
        $this->_db = new \Db('sqlite:' . static::$db_path);
        $this->_db->statements_dir = static::$sql_dir;
    }


    public function init() {
        $this->_db->execute_raw('init');

        return true;
    }

    public function query() {
        return $this->_db->fetch('query');
    }
}


new DbManager();
