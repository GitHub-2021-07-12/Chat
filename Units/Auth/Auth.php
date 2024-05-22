<?php

namespace App;

require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Auth/Auth.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Db/Db.php';


class Auth extends \Auth {
    static public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    static public $sql_dir = __dir__ . '/Sql';


    public function __construct() {
        $this->db = new \Db('sqlite:' . static::$db_path);
        $this->db->statements_dir = static::$sql_dir;
    }

    public function logIn() {
        return parent::logIn() ?: $this->register();
    }

    public function register(...$args) {
        $data = ['avatar_hue' => rand(0, 359)];

        return parent::register($data);
    }
}
