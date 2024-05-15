select *
from Tokens
join Users on Tokens.`user_rowId` = Users.`rowId`;
