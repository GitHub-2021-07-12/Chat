drop table if exists Messages;
drop table if exists Tokens;
drop table if exists Users;

create table if not exists Messages (
    `data` text,
    `date` datetime default current_timestamp,
    `user_rowId` int,

    foreign key (`user_rowId`) references Users(`rowId`),
    unique (`user_rowId`)
);

create table if not exists Tokens (
    `count` int,
    `date` datetime default current_timestamp,
    `token` text,
    `user_rowId` int,

    foreign key (`user_rowId`) references Users(`rowId`),
    unique (`token`),
    unique (`user_rowId`)
);

create table if not exists Users (
    `avatar_hue` int default 0,
    `avatar_url` text,
    `date` datetime default current_timestamp,
    `name` text,
    `password_hash` text,

    unique (`name`)
);
