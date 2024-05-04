create table if not exists Chat (
    `message` text,
    `timestamp` real default 0
);


insert into Chat (`message`) values ('');
