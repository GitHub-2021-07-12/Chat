drop table if exists AuthRecords;
drop table if exists Messages;
drop table if exists Users;

create table if not exists AuthRecords (
    `date` dateTime default current_timeStamp,
    `token` text,
    `user_rowId` int,

    foreign key (`user_rowId`) references Users(`rowId`),
    unique (`token`),
    unique (`user_rowId`)
);

create table if not exists Messages (
    -- `date` dateTime default (strftime('%Y-%m-%d %H:%M:%f', 'now', 'localtime')),
    `text` text,
    `timeStamp` real,
    `user_rowId` int,

    foreign key (`user_rowId`) references Users(`rowId`)
);

create table if not exists Users (
    `avatar_hue` int default 0,
    `avatar_url` text,
    `date` dateTime default current_timeStamp,
    `name` text,
    `password_hash` text,

    unique (`name`)
);
