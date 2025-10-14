# JavaScript Lesson Plan: Loops and Control Flow

## Lesson Overview

**Topic:** Iterative Statements (for, while, do...while) and Loop Control
**Learning Objective:** Students will understand and apply different types of loops and control statements to manage repetition in code.

---

## Lesson Flow & Structure

### Recap

* Review control flow and conditionals.
* Discuss how conditionals make choices, while loops repeat actions.

---

### Iteration Introduction

**Concept:** Repetition in real life — counting steps, checking notifications, adding items repeatedly.

* Demonstrate manual repetition and convert it to a loop.

```js
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

→ Simplify with a loop:

```js
for (let i = 1; i <= 3; i++) {
  console.log(`Step ${i}`);
}
```

**Key Idea:** Loops make code shorter and easier to update.

---

### For Loop

**Concept:** The structure `for(initialization; condition; increment)`

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}
```

**Practice Examples:**

1. Print numbers 1–10.
2. Print only even numbers (use modulo `%`).
3. Print a multiplication table for 5.
4. Count backward from 10 to 1.

---

### Arrays and For Loop

**Concept:** Iterate through lists using loops.

```js
const fruits = ["Apple", "Banana", "Mango", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Activity:** Change `fruits` to favorite movies or hobbies.
**Example:**

```js
const numbers = [4, 7, 10, 3];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`Total: ${total}`);
```

---

### If Inside For Loop – Printing Even Numbers from an Array

**Concept:** Combine conditions with loops to filter data.

```js
const numbers = [4, 7, 10, 3, 12, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
```

**Key Idea:** The `if` statement inside the `for` loop checks each number and only prints even ones.

---

### Array Iteration Methods

**Concept:** Built-in array methods as alternatives to for loops.

```js
const scores = [80, 90, 70];

scores.forEach(function(score) {
  console.log(score);
});

const doubled = scores.map(function(score) {
  return score * 2;
});
console.log(doubled);

const highScores = scores.filter(function(score) {
  return score > 75;
});
console.log(highScores);

const total = scores.reduce(function(sum, score) {
  return sum + score;
}, 0);
console.log(total);
```

**Discussion:**

* `map` returns a new array; `forEach` does not.
* `filter` selects items that meet a condition.
* `reduce` combines all items into one result.

---

### While Loop

**Concept:** Run until a condition becomes false.

```js
const inputs = [10, 5, 7, "Finish"];
let i = 0;
let total = 0;

while (inputs[i] !== "Finish") {
  total += inputs[i];
  i++;
}

console.log(`Total sum: ${total}`);
```

**Key Idea:** The loop continues until the user says “Finish.” You don’t know how many items will be entered in advance, so `while` fits perfectly.


### Infinite Loop
If you forget the increment condition, then while loop can lead to an infinite loop !

---

### Do...While Loop

**Concept:** Run the loop at least once before checking the condition.

```js
let input;
let total = 0;

do {
  input = prompt("Enter a number or type 'Finish' to stop:");
  if (input !== "Finish") {
    total += Number(input);
  }
} while (input !== "Finish");

console.log(`Total sum: ${total}`);
```

**Key Idea:** Even if the user immediately types “Finish,” the loop still runs once — perfect for menus or user input.

---

### Break and Continue

**Concept:** Control loop execution.
**Break Example:**

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

**Continue Example:**

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
```

**Practice:** Print numbers 1–10 but skip 3 and 7.

---

### Practice Tasks

1. Print numbers 1–10 using all three loops.
2. Print multiplication table of 5 using each loop type.
3. Calculate the sum of even numbers between 1–20.
4. Use `break` when the sum exceeds 50.
5. Use `continue` to skip odd numbers.

---

### Common Errors

**Concept:** Infinite loops, off-by-one errors.

```js
for (let i = 1; i > 0; i++) {
  console.log("Oops! Infinite loop!");
}
```

**Discussion:**

* Always ensure your condition can become false.
* Check increments or decrements carefully.

---

### Wrap-Up and Next Lesson

**Recap:**

* `for`: Fixed number of repetitions.
* `while`: Repeat until a condition changes.
* `do...while`: Run once, then check.
* `break` and `continue`: Manage control flow.
* Array methods: Cleaner ways to loop.

**Next Lesson:** Introduction to Object-Oriented Programming (Encapsulation, Abstraction, Inheritance, Polymorphism).
