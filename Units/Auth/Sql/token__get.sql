select Tokens.`token`
from Tokens
join Users on Tokens.`user_rowId` = Users.`rowId`
where Users.`name` = :name;
