select AuthRecords.`token`
from AuthRecords
join Users on AuthRecords.`user_rowId` = Users.`rowId`
where Users.`name` = :name;
