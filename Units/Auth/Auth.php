<?php

namespace Chat;

require_once __dir__ . '/../../../../Api/Units/Auth/Auth.php';
require_once __dir__ . '/../../../../Api/Units/Db/Db.php';


class Auth extends \Auth {
    public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    public $sql_dir = __dir__ . '/Sql';


    public function __construct() {
        $this->db = new \Db("sqlite:{$this->db_path}");
        $this->db->sql_dir = $this->sql_dir;
    }

    public function register($name, $password, ...$rest) {
        $data = ['avatar_hue' => rand(0, 359)];

        return parent::register($name, $password, $data);
    }
}
