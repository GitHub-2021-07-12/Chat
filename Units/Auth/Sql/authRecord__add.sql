-- pragma foreign_keys = on;


insert or ignore into AuthRecords (`token`, `user_rowId`)
values (:token, :user_rowId);
