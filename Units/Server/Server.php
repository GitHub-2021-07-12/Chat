<?php

require_once __dir__ . '/../../Api/Units/Db/Db.php';
require_once __dir__ . '/../../Api/Units/Json/Json.php';
require_once __dir__ . '/../../Api/Units/Rest/Rest.php';


class Server {
    static public $delay = 10;


    public $_db = null;


    public function __construct() {
        $this->_db = new Db('sqlite:Storage/Storage.sqlite');
        $this->_db->sql_dir = './Storage';
    }


    public final function init() {
        $this->_db->exec_sql('init');
    }

    public final function state__get($any = false) {
        $timestamp = microtime(true);
        $db_statement = $this->_db->prepare_sql('state_get');

        while (microtime(true) - $timestamp < static::$delay) {
            $db_statement->execute();
            $data = $db_statement->fetchAll();

            if ($any || $data[0]['timestamp'] > $timestamp) {
                return $data[0]['message'];
            }

            usleep(1e5);
        }
    }

    public final function state__set($message) {
        $db_statement = $this->_db->prepare_sql('state_set');
        $db_statement->execute([
            ':message' => $message,
            ':timestamp' => microtime(true),
        ]);

        return $message;
    }
}


$server = new Server();
$rest = new Rest($server);
$rest->run();
