# Conversion Operations
In JavaScript, you can perform various conversion operations to convert data from one type to another. These operations are useful when you need to manipulate or compare different types of data.

## String Conversion

To convert a value to a string, you can use the `toString()` method or the `String()` function. For example:

```javascript
let num = 42;
let str = num.toString(); // "42"
let str2 = String(num); // "42"
```

## Number Conversion

To convert a value to a number, you can use the `parseInt()` or `parseFloat()` functions. These functions parse a string and return a number. For example:

```javascript
let str = "42";
let num = parseInt(str); // 42
let num2 = parseFloat(str); // 42.0
```

## Boolean Conversion

To convert a value to a boolean, you can use the `Boolean()` function. This function returns `true` for truthy values and `false` for falsy values. For example:

```javascript
let num = 42;
let bool = Boolean(num); // true

let str = "";
let bool2 = Boolean(str); // false
```

## Implicit Conversion

JavaScript also performs implicit type conversion in certain situations. For example, when you use the `+` operator with a string and a number, JavaScript will convert the number to a string and concatenate them. 

```javascript
let num = 42;
let str = "The answer is " + num; // "The answer is 42"
```

It's important to be aware of implicit conversions to avoid unexpected behavior in your code.

Notes:
1. Number() function is used to convert the string to number.
2. If the string is not a number, it will return NaN.
3. If the string is empty, it will return 0.
4. If the string is null, it will return 0.
5. If the string is undefined, it will return NaN.
6. If the string is a number, it will return the number.
7. If the string is a number with some characters, it will return NaN.
8. If the string is a number with some characters, it will return NaN.

```javascript
let isLoggedIn = "abc"; // true

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);
```

Notes:
1. Boolean() function is used to convert the string to boolean.
2. If the string is not a number, it will return true.
3. If the string is empty, it will return false.
4. If the string is null, it will return false.
5. If the string is undefined, it will return false.
6. If the string is a number, it will return true.
7. If the string is a number with some characters, it will return true.

