const accountId = 212588
let accountEmail = "ankitpanigrahi0@gmail.com"
var accountPass = "123456"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 212245 not allowed to change the const

accountEmail = "panigrahi@hotmail.com"
accountPass = "1234567"
accountCity = "Cuttack"

/*
    Prefer not to use var keyword as it is not block scoped and functional scoped, rather use let and const.
*/

console.log(accountEmail)

console.table([accountId, accountEmail, accountPass, accountCity, accountState])