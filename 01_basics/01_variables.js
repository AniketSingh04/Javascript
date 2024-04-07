const accountId = 14453 //constant declaration --> constant value
let accountEmail = "aniketrajsingh29@gmail.com" //variable declraration --> values can vary
var accountPassword = "12345abc" //variable declaration
accountCity = "Jaipur" //can also declare variable in this way (!!!bad practice)

let accountState;

//accountId = 2
accountEmail = "ansd@.com"
accountPassword = "23456df"
accountCity = "korba"
console.log(accountId);

/*
prefer to not use var for variable declaration because of issues in functional
and block scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
