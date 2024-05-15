-- pragma foreign_keys = on;


insert or ignore into Tokens (`token`, `user_rowId`)
values (:token, :user_rowId);
