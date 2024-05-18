select Users.`rowId` as 'rowId'
from AuthRecords
join Users on AuthRecords.`user_rowId` = Users.`rowId`
where AuthRecords.`token` = :token;
