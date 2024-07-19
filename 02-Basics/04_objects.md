# Object Methods in JavaScript

In JavaScript, objects have built-in methods that allow you to perform various operations on them. Here are some commonly used object methods:

## Object.assign()
The `Object.assign()` method is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source); // Returns: { a: 1, b: 4, c: 5 }
```

## Object.keys()
The `Object.keys()` method is used to return an array of a given object's own enumerable property names.

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj); // Returns: ["a", "b", "c"]
```

## Object.values()
The `Object.values()` method is used to return an array of a given object's own enumerable property values.

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.values(obj); // Returns: [1, 2, 3]
```

## Object.entries()
The `Object.entries()` method is used to return an array of a given object's own enumerable property key-value pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.entries(obj); // Returns: [["a", 1], ["b", 2], ["c", 3]]
```

## Object.hasOwnProperty()
The `Object.hasOwnProperty()` method is used to check if a given property exists as a direct property of an object.

```javascript
const obj = { a: 1, b: 2 };

obj.hasOwnProperty("a"); // Returns: true
obj.hasOwnProperty("c"); // Returns: false
```

Please note that the code examples provided are for illustration purposes and may not cover all possible use cases.