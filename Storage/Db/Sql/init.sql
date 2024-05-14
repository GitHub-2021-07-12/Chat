create table if not exists Auth (
    `count` int,
    `timestamp` real,
    `token` text,
    `user_id` int,

    foreign key (`user_id`)
);

create table if not exists Messages (
    `data` text,
    `timestamp` real,
    `user_id` int,

    foreign key (`user_id`)
);

create table if not exists Users (
    `avatar_hue` int default 0,
    `avatar_url` text,
    `id` int,
    `name` text,
    `password` text,
    `timestamp` real,

    primary key (`id`)
);
