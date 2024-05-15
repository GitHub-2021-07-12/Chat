select `avatar_hue`, `name`, `password_hash`, `rowId` as 'rowId'
from Users
where `name` = :name;
