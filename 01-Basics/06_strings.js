const name = "ankit"
const age = 22

console.log(`My name is ${name} and I am ${age} years old.`); // use of backticks for string interpolation
// ${} is used to interpolate variables in strings, also called template literals.
// Also known as placeholders.

const gameName = new String("Ankit")
console.log(gameName); // String {"PUBG"}

// This string is not an array, it is an object.
// They are key-value pairs, where key is the index and value is the character at that index.

console.log(gameName[0]); // P
console.log(gameName.__proto__)

console.log(gameName.length); // 4
console.log(gameName.substring(0, 3));
console.log(gameName.split(''));
console.log(gameName.slice(-4, 2));

const newString = "  Ankit Panigrahi "
console.log(newString.trim()); // Ankit

const url = "https://www.google.com"
url.replace("https", "https")

console.log(url); // http://www.google.com

console.log(includes("https")); // true

console.log(newString.split(' ')); // ["", "", "Ankit", "Panigrahi", ""]