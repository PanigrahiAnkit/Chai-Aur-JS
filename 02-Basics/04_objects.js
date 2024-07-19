// Singleton object

const tinderUser = new Object() // new Object() is optional
// const tinderUser2 = {} // This is the same as above

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.age = 25

// console.log(tinderUser)
// console.log(tinderUser2)

const regularUser = {
    email: "ankit@google.com",
    fullname: {
        firstName: "Ankit",
        lastName: "Panigrahi",
        DOB: {
            Date: 21,
            Month: "06",
            Year: 1997
        }
    }
}

// console.log(regularUser) 

// console.log(regularUser.fullname.firstName); // Ankit
// console.log(regularUser.fullname?.firstName); // Question mark is used to check if the property exists or not

const obj1 = {1: "Ankit", 2: "Panigrahi"}
const obj2 = {3: "Bani", 4: "Tripathi" }

// Syntax: Object.assign(target, source)
// const obj3 = Object.assign(obj1, obj2) // obj1 will be modified
const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2) // obj1 will not be modified
// console.log(obj3) // { '1': 'Bani', '2': 'Tripathi' }

const users = [
    {
        id: 1,
        name: "Ankit",
        age: 23
    },
    {
        id: 2,
        name: "Bani",
        age: 24
    },
    {
        id: 3,
        name: "Tripathi",
        age: 25
    }
]

users[1].age
// console.log(users[1].age) // 24
// console.log(tinderUser) 

// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'age' ];
// console.log(Object.values(tinderUser)) // [ '123abc', 'John Doe', 25 ];
// console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'John Doe' ], [ 'age', 25 ] ];

console.log(tinderUser.hasOwnProperty('id')) // true
console.log(tinderUser.hasOwnProperty('email')) // false

// console.log(Object.keys(regularUser)) // [ 'email', 'fullname' ]