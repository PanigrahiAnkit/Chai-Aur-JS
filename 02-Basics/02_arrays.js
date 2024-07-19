const marvel_heroes = ["thor", "ironman", "spiderman", "blackwidow"];
const DC_heroes = ["batman", "superman", "wonderwoman", "flash"];

// marvel_heroes.push(DC_heroes);

// console.log(marvel_heroes); // Output: [ 'thor', 'ironman', 'spiderman', 'blackwidow', [ 'batman', 'superman', 'wonderwoman', 'flash' ] ]

// console.log(marvel_heroes[4][1]); // Output: superman

// const allHeroes = marvel_heroes.concat(DC_heroes);
// console.log(allHeroes); // Output: [ 'thor', 'ironman', 'spiderman', 'blackwidow', 'batman', 'superman', 'wonderwoman', 'flash' ]

const allHeroes = [...marvel_heroes, ...DC_heroes]; // Spread operator
// console.log(allHeroes); // Output: [ 'thor', 'ironman', 'spiderman', 'blackwidow, 'batman', 'superman', 'wonderwoman', 'flash' ]

const allHeroes1 = [...marvel_heroes]; // Spread operator

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]];

const real_another_array = another_array.flat(Infinity); // flat() method
// console.log(real_another_array); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

Array.isArray(real_another_array); // true
console.log(Array.isArray("Ankit")); // false
console.log(Array.from("Ankit")); // [ 'A', 'n', 'k', 'i', 't' ]
console.log(Array.from({ name: "Ankit" })); // [], interesting case to remember
// Works as key-value pair, so it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

