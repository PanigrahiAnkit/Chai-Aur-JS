# Switch Statement in JavaScript

The switch statement is a control flow statement that allows you to execute different code blocks based on different conditions. It provides a concise way to write multiple if-else statements.

## Syntax

```javascript
switch (expression) {
    case value1:
        // Code to be executed if expression matches value1
        break;
    case value2:
        // Code to be executed if expression matches value2
        break;
    ...
    default:
        // Code to be executed if expression doesn't match any case
}
```

- The `expression` is evaluated once and compared with the values of each `case`.
- If a match is found, the corresponding block of code is executed.
- The `break` statement is used to exit the switch statement after a match is found. Without the `break` statement, execution will continue to the next case.
- The `default` case is optional and is executed if no match is found.

## Example

```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```

In the above example, the `switch` statement is used to assign the corresponding day name to the `dayName` variable based on the value of the `day` variable.

Note that the `break` statement is used after each case to prevent fall-through behavior, where execution continues to the next case even if a match is found.

If the value of `day` is 3, the output will be "Wednesday" because it matches the case `3`.

If the value of `day` is not 1, 2, 3, 4, 5, 6, or 7, the `default` case will be executed and the output will be "Invalid day".
