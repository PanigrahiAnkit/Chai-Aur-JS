console.log(2 > 1) //true
console.log(2 < 1) //false
console.log(2 >= 1) //true
console.log(2 <= 1) //false
console.log(2 == 1) //false
console.log(2 != 1) //true
console.log(2 === 1) //false
console.log(2 !== 1) //true
console.log(2 === "2") //false
console.log(2 !== "2") //true
console.log(2 == "2") //true
console.log(2 != "2") //false
console.log(2 > "1") //true
console.log(2 < "1") //false
console.log(2 >= "1") //true
console.log(2 <= "1") //false
console.log(2 == "1") //false
console.log(2 != "1") //true

console.log(null == undefined) //true
console.log(null === undefined) //false
console.log(null == 0) //false
console.log(null === 0) //false
console.log(null == "") //false
console.log(null === "") //false
console.log(null == NaN) //false
console.log(null === NaN) //false
console.log(null == false) //false
console.log(null === false) //false
console.log(null == true) //false
console.log(null === true) //false
console.log(null == null) //true
console.log(null === null) //true
console.log(null == {}) //false

console.log(null > 0) //false
console.log(null < 0) //false Reason: In comparison null is converted to 0
console.log(null >= 0) //true Reason: In comparison null is converted to 0
console.log(null <= 0) //true
console.log(null == 0) //false Reason: Comparisons convert null to a number, treating it as 0.

//Strict equality (===) doesn't do type coercion, while == does.
console.log(2 == "2") //true
console.log(2 === "2") //false 
