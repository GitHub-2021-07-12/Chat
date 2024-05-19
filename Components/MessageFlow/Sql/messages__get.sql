select
    Users.`avatar_hue` as 'avatar_hue',
    Messages.`timeStamp` as 'date',
    Users.`name` as 'name',
    Users.`rowId` = :user_rowId as 'own',
    Messages.`text` as 'text'
from
    Messages
    Join Users on Messages.`user_rowId` = Users.`rowId`
where messages.`timeStamp` >= :timeStamp_min;
