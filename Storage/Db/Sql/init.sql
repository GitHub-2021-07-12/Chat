create table if not exists Messages (
    `data` text,
    `timeStamp` real,
    `user_id` int,

    foreign key (`user_id`)
);

create table if not exists Tokens (
    `data` text,
    `timeStamp` real,
    `user_id` int,

    foreign key (`user_id`)
);

create table if not exists Users (
    `avatar_hue` int default 0,
    `avatar_url` text,
    `id` int,
    `name` text,
    `password` text,
    `timeStamp` real,

    primary key (`id`)
);
