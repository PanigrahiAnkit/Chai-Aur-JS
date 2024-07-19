# Objects in JavaScript
In JavaScript, objects are one of the most important data types. They allow you to store and manipulate collections of key-value pairs. Objects can be created using object literals or the `Object` constructor. Here's an overview of objects in JavaScript, along with some commonly used methods and functions:

## Creating Objects

### Object Literals

```javascript
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer',
    sayHello: function() {
        return `Hello, my name is ${this.name}.`;
    }
};
```

### Using the `Object` Constructor

```javascript
const person = new Object();
person.name = 'John Doe';
person.age = 30;
person.occupation = 'Developer';
person.sayHello = function() {
    return `Hello, my name is ${this.name}.`;
};
```

## Accessing Object Properties

### Dot Notation

```javascript
console.log(person.name); // Output: John Doe
```

### Bracket Notation

```javascript
console.log(person['age']); // Output: 30
```

## Modifying Object Properties

```javascript
person.age = 35;
console.log(person.age); // Output: 35
```

## Adding and Deleting Object Properties

### Adding Properties

```javascript
person.location = 'New York';
console.log(person.location); // Output: New York
```

### Deleting Properties

```javascript
delete person.occupation;
console.log(person.occupation); // Output: undefined
```

## Object Methods

### Object.keys()

```javascript
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'location']
```

### Object.values()

```javascript
const values = Object.values(person);
console.log(values); // Output: ['John Doe', 35, 'New York']
```

### Object.entries()

```javascript
const entries = Object.entries(person);
console.log(entries);
// Output: [['name', 'John Doe'], ['age', 35], ['location', 'New York']]
```

## Object Functions

### Object.assign()

```javascript
const person2 = {
    name: 'Jane Smith',
    age: 25
};

const mergedPerson = Object.assign({}, person, person2);
console.log(mergedPerson);
// Output: { name: 'Jane Smith', age: 25, location: 'New York' }
```

### Object.freeze()

```javascript
Object.freeze(person);
person.age = 40; // This will have no effect
console.log(person.age); // Output: 35
```

### Object.seal()

```javascript
Object.seal(person);
person.age = 40; // This will modify the value
console.log(person.age); // Output: 40
```

### Accessing Functions in Objects

```javascript
console.log(person.sayHello()); // Output: Hello, my name is John Doe.
```

In JavaScript, functions can be declared inside an object and accessed using dot notation or bracket notation. The `this` keyword is used to refer to the current object when accessing the function within the object.
