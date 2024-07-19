# Object Destructuring and JSON API in JavaScript

## Object Destructuring

Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables. It provides a concise way to extract multiple values from an object.

### Syntax

```javascript
const { property1, property2 } = object;
```

### Example

```javascript
const person = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
};

const { name, age } = person;

console.log(name); // John Doe
console.log(age); // 25
```

## JSON API

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON APIs are commonly used to retrieve data from a server and send data to a server in JSON format.

### Fetching JSON Data

To fetch JSON data from an API, you can use the `fetch` function in JavaScript.

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Sending JSON Data

To send JSON data to an API, you can use the `fetch` function with the `POST` method and set the `Content-Type` header to `application/json`.

```javascript
const data = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
};

fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        // Process the response here
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```
