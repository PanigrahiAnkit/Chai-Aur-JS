# Call by Value and Call by Reference in JavaScript

In JavaScript, the concept of "call by value" and "call by reference" is often misunderstood due to the language's unique behavior with data types. Let's explore these concepts with examples:

## Call by Value:
When a primitive data type (such as number, string, or boolean) is passed as an argument to a function, a copy of the value is created and passed to the function. Any changes made to the parameter within the function do not affect the original value.

**Example:**
```javascript
function increment(num) {
    num += 1;
    console.log(num); // Output: 6
}

let number = 5;
increment(number);
console.log(number); // Output: 5
```

In the above example, the `increment` function receives a copy of the `number` variable. Any modifications made to `num` within the function do not affect the original `number` variable.

## Call by Reference:
When an object or an array is passed as an argument to a function, a reference to the memory location of the object or array is passed. This means that any changes made to the parameter within the function will affect the original object or array.

**Example:**
```javascript
function changeName(person) {
    person.name = 'John';
}

let user = { name: 'Alice' };
changeName(user);
console.log(user.name); // Output: John
```

In the above example, the `changeName` function receives a reference to the `user` object. Modifying the `name` property of `person` within the function also modifies the `name` property of the original `user` object.

It's important to understand the distinction between call by value and call by reference in JavaScript, as it can impact how data is manipulated within functions.
