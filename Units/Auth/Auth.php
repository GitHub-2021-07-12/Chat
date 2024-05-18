<?php

namespace App;

require_once __dir__ . '/../../../../Api/Units/Auth/Auth.php';
require_once __dir__ . '/../../../../Api/Units/Db/Db.php';


class Auth extends \Auth {
    // public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    // public $sql_dir = __dir__ . '/Sql';
    static public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    static public $sql_dir = __dir__ . '/Sql';
    // public $token = '';


    public function __construct() {
        // $this->db = new \Db("sqlite:{$this->db_path}");
        // $this->db->statements_dir = $this->sql_dir;
        $this->db = new \Db('sqlite:' . static::$db_path);
        $this->db->statements_dir = static::$sql_dir;
    }

    // public function logIn($name, $password) {
    //     return parent::logIn($name, $password) ?: $this->register($name, $password);
    // }
    public function logIn() {
        return parent::logIn() ?: $this->register();
    }

    // public function register($name, $password, ...$rest) {
    public function register(...$_) {
        $data = ['avatar_hue' => rand(0, 359)];

        // return parent::register($name, $password, $data);
        return parent::register($data);
    }

    // public function verify(...$rest) {
    //     return parent::verify($this->token);
    // }
}
