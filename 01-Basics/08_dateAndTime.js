let myDate = new Date()
// console.log(myDate.toString()) // 2021-07-07T06:00:00.000Z
// console.log(myDate.toDateString()) // Wed Jul 07 2021
// console.log(myDate.toTimeString()) // 11:30:00 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()) // 7/7/2021, 11:30:00 AM
// console.log(myDate.toLocaleDateString()) // 7/7/2021
// console.log(myDate.toLocaleTimeString()) // 11:30:00 AM
// console.log(myDate.toUTCString()) // Wed, 07 Jul 2021 06:00:00 GMT
// console.log(myDate.toISOString()) // 2021-07-07T06:00:00.000Z
// console.log(myDate.toGMTString()) // Wed, 07 Jul 2021 06:00:00 GMT

// let myCreatedDate = new Date(2002, 5, 21)
// let myCreatedDate1 = new Date(2002, 0, 21) //In JS month starts from 0
// let myCreatedDate2 = new Date(2002, 5, 21, 9, 38) //In JS month starts from 0
let myCreatedDate3 = new Date("2002-06-21") //In JS when month is passed as string it should be in "YYYY-MM-DD" format, also the month starts from 1 if it is written as string or XXXX-XX-XX format.
// let myCreatedDate4 = new Date("21-06-2002");

// console.log(myCreatedDate.toDateString()) // Fri Jun 21 2002;
// console.log(myCreatedDate1.toDateString()) // Tue Jan 21 2002;
// console.log(myCreatedDate2.toLocaleString()) // Fri Jun 21 2002;
// console.log(myCreatedDate3.toDateString()) // Fri Jun 21 2002;
// console.log(myCreatedDate4.toLocaleString()) // Invalid Date;

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // 1625663400000
// console.log(myCreatedDate3.getTime())

// console.log(Date.now());
// console.log(Date.now() / 1000); // To convert milliseconds to seconds
// console.log(Math.floor(Date.now() / 1000)); // To convert milliseconds to seconds and round off the value

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime()); // It will return the milliseconds from 1970
// console.log(newDate.getDate()); // It will return the date of the month
// console.log(newDate.getDay()); // It will return the day of the week
// console.log(newDate.getFullYear()); // It will return the year
// console.log(newDate.getHours()); // It will return the hours
// console.log(newDate.getMinutes()); // It will return the minutes
// console.log(newDate.getSeconds()); // It will return the seconds
// console.log(newDate.getMilliseconds()); // It will return the milliseconds
// console.log(newDate.getMonth()); // It will return the month

// Using String interpolation

console.log(
  `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
);

let dateObject = newDate.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
});
    
console.log(dateObject); // July 7, 2021