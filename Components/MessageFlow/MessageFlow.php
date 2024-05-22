<?php

namespace App;

require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Db/Db.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/Api/Units/Rest/Rest.php';

require_once __dir__ . '/../../Units/Auth/Auth.php';


class MessageFlow extends \Rest {
    static public $db_path = __dir__ . '/../../Storage/Db/Db.sqlite';
    static public $delay = 1e5;
    static public $gzip = -1;
    static public $sql_dir = __dir__ . '/Sql';
    static public $timeLimit = 30;


    public $_auth = null;
    public $_db = null;


    public function _init() {
        $this->_auth = new Auth();
        $this->_auth->token = $this->_data['token'];
        $this->_auth->verify();

        if (!$this->_auth->_id) {
            throw new \Error('Auth');
        }

        $this->_db = new \Db('sqlite:' . static::$db_path);
        $this->_db->statements_dir = static::$sql_dir;
    }


    public function message__add($message_text) {
        $message_data = [
            'text' => $message_text,
            'timeStamp' => $this->_timeStamp,
            'user_rowId' => $this->_auth->_id,
        ];
        $this->_db->execute('message__add', $message_data);

        return true;
    }

    public function messages__get($timeStamp_min = 0) {
        $message_data = [
            'timeStamp_min' => $timeStamp_min,
            'user_rowId' => $this->_auth->_id,
        ];
        $messages = $this->_db->fetch('messages__get', $message_data);

        return $messages;
    }

    public function messages_new__get() {
        $messages = null;

        while ($this->_timeLimit__check()) {
            $messages = $this->messages__get($this->_timeStamp);

            if ($messages) break;

            uSleep(static::$delay);
        }

        return $messages;
    }
}


new MessageFlow();
