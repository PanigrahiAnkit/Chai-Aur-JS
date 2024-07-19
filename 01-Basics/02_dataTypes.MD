# JavaScript Data Types

## Introduction
This file provides an overview of the different data types in JavaScript and their characteristics.

## Strict Mode
The `"use strict;"` directive switches the JavaScript engine to strict mode. It helps in writing secure code and avoiding bugs. It also treats all JavaScript code as a newer version.

## Primitive/Value Types
1. **Number**: Represents numeric values.
2. **String**: Represents textual data.
3. **Boolean**: Represents true or false values.
4. **Undefined**: Represents a variable that has been declared but not assigned a value.
5. **Null**: Represents the intentional absence of any object value.
6. **Symbol**: Represents unique identifiers for objects.
7. **BigInt**: Represents large numbers.

## Reference Types
1. **Object**: Represents a collection of key-value pairs.
2. **Array**: Represents an ordered list of values.
3. **Function**: Represents a reusable block of code.

## Variables and Constants
JavaScript has two types of variables:
1. **let**: Used to declare a variable that can be reassigned.
2. **const**: Used to declare a variable that cannot be reassigned.

JavaScript also has two types of constants:
1. **const**: Used to declare a constant that cannot be reassigned.
2. **var**: Used to declare a variable that can be reassigned.

## Scopes
JavaScript has two types of scopes:
1. **Global Scope**: Variables declared outside a function are global variables.
2. **Local Scope**: Variables declared inside a function are local variables.

## Operators
JavaScript has six types of operators:
1. **Arithmetic Operators**: Perform mathematical operations.
2. **Assignment Operators**: Assign values to variables.
3. **Comparison Operators**: Compare values and return a boolean result.
4. **Logical Operators**: Perform logical operations on boolean values.
5. **Bitwise Operators**: Perform bitwise operations on numeric values.
6. **Type Operators**: Determine the type of a value.

## Typeof Operator
- The `typeof` operator returns the data type of a variable.
- When used with `null`, it returns "object" (which is a bug in JavaScript).
- When used with a function, it returns "function".
- When used with an array, it returns "object" (which is a bug in JavaScript).
- When used with a date, it returns "object" (which is a bug in JavaScript).
- When used with a symbol, it returns "symbol".
- When used with a BigInt, it returns "bigint".
- When used with a string, it returns "string".
- When used with a number, it returns "number".
- When used with a boolean, it returns "boolean".
- When used with undefined, it returns "undefined".
