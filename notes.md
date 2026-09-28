# JavaScript Notes for Freshers

## 1. What is JavaScript?

JavaScript (JS) is a **high-level scripting and programming language** used to add interactivity and functionality to web pages. It is widely used for both **frontend** and **backend** development.

> **Scripting Language vs Programming Language**
> A **scripting language** is generally executed by an interpreter or runtime. A **programming language** may be compiled, interpreted, or both. Modern JavaScript engines (such as Google's **V8**) use **Just-In-Time (JIT) compilation**, so JavaScript is no longer purely interpreted.

JavaScript tells the browser *what actions to perform and how to perform them*.

---

## 2. History of JavaScript

- JavaScript was invented by **Brendan Eich** in **1995**.
- At the time, **Netscape Communications Corporation** had developed the **Netscape Navigator** web browser.
- Initially, the browser mainly displayed **static web pages** — built with HTML and CSS, without interactivity.
- Netscape wanted to make web pages dynamic by adding a scripting language to the browser.

**Two approaches were considered:**
1. Collaborate with **Sun Microsystems**, which had introduced the **Java** programming language.
2. Hire **Brendan Eich** to create a lightweight scripting language inspired by **Scheme**.

Netscape hired Brendan Eich, who developed the first version of JavaScript in **just 10 days** (often incorrectly stated as 9–14 days).

| Milestone | Detail |
|---|---|
| Mocha | The language's original working name |
| LiveScript | The name it was renamed to shortly after |
| JavaScript (Dec 1995) | Renamed again to ride on Java's popularity at the time |
| 1997 | Standardized by ECMA International as ECMAScript (ES); ES1 released |
| ES6 / ECMAScript 2015 | Introduced many modern JavaScript features |
| ES2024 / ES15 | Latest edition — ECMAScript continues to be updated annually |

---

## 3. Characteristics of JavaScript

1. **High-Level Language** — Easy to read, write, and understand.
2. **Interpreted / JIT Compiled** — JavaScript engines parse, compile, and execute code efficiently.
3. **Single-Threaded** — JavaScript has a single call stack and executes one task at a time.
4. **Dynamically Typed** — Variables do not require explicit data types.
5. **Loosely Typed** — A variable can store different data types during execution.
6. **Synchronous by Default** — Code executes line by line. Asynchronous operations are handled using callbacks, Promises, and async/await.
7. **Object-Oriented and Prototype-Based** — JavaScript supports Object-Oriented Programming using prototypes and classes.

---

## 4. Adding JavaScript to a Page

### 4.1 Internal JavaScript
Code is written inside the HTML file using the `<script>` tag, usually placed inside `<head>` or before the closing `</body>` tag.

```html
<script>
  console.log("Hello from internal JS");
</script>
```

### 4.2 External JavaScript
Code is written in a separate `.js` file and linked into the HTML page.

```html
<script src="script.js"></script>
```

---

## 5. Output Methods

| Method | Purpose |
|---|---|
| `console.log()` | Prints messages to the browser console. |
| `console.error()` | Displays error messages in red. |
| `console.warn()` | Displays warning messages in yellow. |
| `document.write()` | Writes content directly to the webpage. |
| `document.writeln()` | Writes content followed by a newline. |
| `alert()` | Displays a popup message. |
| `confirm()` | Displays a confirmation dialog with OK and Cancel buttons. |
| `prompt()` | Displays an input dialog to receive user input. |

---

## 6. Tokens in JavaScript

**Tokens** are the smallest meaningful units of a JavaScript program.

Types of tokens: Keywords, Identifiers, Literals (Values), Operators, Statements.

### 6.1 Keywords
Reserved words with predefined meanings in JavaScript.

```
var   let    const   if
else  switch return  function
```

### 6.2 Identifiers
Names given to variables, functions, classes, etc.

**Rules:**
- Cannot be a keyword.
- Cannot start with a number.
- May contain letters, numbers, `_`, and `$`.
- Cannot contain spaces.
- Use **camelCase** or **snake_case** for readability.

| Valid | Invalid |
|---|---|
| `studentName` | `123name` |
| `student_name` | `let` |
| `$total` | `student name` |

### 6.3 Literals (Values)
Values assigned directly to variables.

```js
100
"Hello"
true
null
```

---

## 7. Operators in JavaScript

Operators are symbols used to perform operations on operands.

**Arithmetic Operators**
```
+  -  *  /  %  **  ++  --
```

**Assignment Operators**
```
=  +=  -=  *=  /=  %=
```

**Comparison Operators**
```
==  ===  !=  !==  >  <  >=  <=
```

**Logical Operators**
```
&&  ||  !
```

**Ternary Operator**
```
condition ? value1 : value2
```

---

## 8. Difference Between `==` and `===`

**`==` (Loose Equality)**
Compares only values. Performs type conversion if necessary.
```js
5 == "5"      // true
```

**`===` (Strict Equality)**
Compares both value and data type. No type conversion.
```js
5 === "5"     // false
```

---

## 9. Statements in JavaScript

**Conditional Statements**
- `if`
- `if...else`
- `else if`
- Nested `if`
- `switch`

**Looping Statements**
- `while`
- `do...while`
- `for`
- `for...of`
- `for...in`

---

## 10. Data Types in JavaScript

### 10.1 Primitive Data Types

| Type | Example |
|---|---|
| Number | `10` |
| String | `"JavaScript"` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| BigInt | `100n` |
| Symbol | `Symbol()` |

### 10.2 Non-Primitive (Reference) Data Types

- **Object** — Stores data as key-value pairs. Denoted by curly brackets `{}`.
- **Array** — Stores multiple values in a single variable. Denoted by square brackets `[]`.
- **Function** — A reusable block of code that performs a specific task.

---

## 11. `typeof` Operator

The `typeof` operator returns the data type of a value.

```js
typeof 10             // "number"
typeof "Hello"        // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof {}              // "object"
typeof []              // "object"
typeof function(){}    // "function"
```

> **Note:** `typeof null` returns `"object"`. This is a well-known historical bug in JavaScript and has been retained for backward compatibility.

---

## 12. Hoisting & Temporal Dead Zone

### 12.1 What is Hoisting?
Hoisting is JavaScript's default behavior of moving **declarations** (not initializations) to the top of their scope before execution.

Written as:
```js
console.log(a);
var a = 10;
```

Interpreted internally as:
```js
var a;
console.log(a);
a = 10;
```

### 12.2 Temporal Dead Zone (TDZ)
The **Temporal Dead Zone (TDZ)** is the period between entering a block scope and the declaration of a `let` or `const` variable. Accessing the variable during this period results in a **ReferenceError**.

---

## 13. Scope in JavaScript

**Scope** is the region of a program where a variable is accessible. It determines the visibility and lifetime of variables.

1. **Global Scope** — Variables declared outside all functions and blocks are globally accessible.
2. **Function Scope** — Variables declared inside a function can only be accessed within that function.
3. **Block Scope** — Variables declared with `let` and `const` inside `{}` are accessible only within that block.
4. **Lexical Scope** — A child function can access variables from its parent function because JavaScript uses lexical (static) scoping.

```js
function outer() {
    let name = "John";

    function inner() {
        console.log(name);
    }

    inner();
}
```
`inner()` can access `name` because it is lexically inside `outer()`.

---

## 14. `var` vs `let` vs `const`

| | var | let | const |
|---|---|---|---|
| Variable Declaration | Possible | Possible | Not possible |
| Initialization | Possible | Possible | Not possible |
| Declaration + Initialization (one line) | Possible | Possible | Possible |
| Variable Re-Declaration | Possible | Not possible | Not possible |
| Re-Initialization | Possible | Possible | Not possible |
| Re-Declaration + Re-Initialization (one line) | Possible | Not possible | Not possible |

---

## 15. `undefined` vs `not defined`

**undefined**
It's a primitive data type. When we try to print a variable that has been declared but not assigned a value, we get `undefined`.

**not defined**
It's an error. It occurs when we try to use a variable that has not been declared at all.

---

## 16. Functions in JavaScript

Functions are blocks of statements that get executed whenever they are called or invoked.

```js
function greet(name) {
    console.log("Hello " + name);
}
```

**Function with Parameter** — A function that accepts values (arguments) as input to perform a task.

**Function with Return Type** — A function that returns a value using the `return` keyword.

```js
function getNumber() {
    return 10;
}
```

### 16.1 Types of Functions

1. **Anonymous Function** — A function without a name.
2. **Named Function** — A function with a name or an identifier.
3. **Function Expression** — Storing a function inside a variable.
4. **First Class Function** — Storing a function inside a variable, on the LHS of the assignment.
5. **Nested Function** — A function declared inside another function.
   - **a. Closure** — Formed when a child function accesses a variable declared in its parent function.
   - **b. Currying** — Calling a child function through multiple parentheses on the parent function; the child function returns to the parent.
6. **Arrow Function** — Reduces regular function syntax. Introduced in ES6 (2015).
7. **IIFE** — Immediately Invoked Function Expression — called once, right after declaration, using parentheses. Executes only once on the page.
8. **Higher Order Function** — A function that accepts a function as an argument and/or returns a function.
9. **Callback Function** — A function passed as an argument to another function.
10. **Generator Function** — Can pause execution mid-way, return a value, and later resume from where it left off.

**Arrow Function Rules:**
- If there is a single parameter, parentheses are optional.
- If the body is a single statement, curly braces `{}` are optional and support an implicit return value.
- If curly braces are used explicitly, the value will **not** be returned automatically — use the `return` keyword.

---

## 17. Objects

An object in JavaScript is a collection of key-value pairs used to store related data and functionality together.

### 17.1 Object Inbuilt Methods

| Method | Description |
|---|---|
| `Object.keys(obj)` | Returns an array of property names. |
| `Object.values(obj)` | Returns an array of property values. |
| `Object.entries(obj)` | Returns an array of key-value pairs. |
| `Object.assign(target, source)` | Copies properties from one object to another. |
| `Object.freeze(obj)` | Prevents modifications to the object. |
| `Object.seal(obj)` | Prevents adding or deleting properties. |
| `Object.hasOwn(obj, key)` | Checks if an object has its own property. |

---

## 18. Arrays & Array Methods

An array in JavaScript is used to store multiple values in a single variable. Arrays can store numbers, strings, objects, and even other arrays.

| Method | Description |
|---|---|
| `push()` | Add element at end |
| `pop()` | Remove last element |
| `unshift()` | Add element at beginning |
| `shift()` | Remove first element |
| `concat()` | Merge arrays |
| `join()` | Convert array to string |
| `slice()` | Extract part of array |
| `splice()` | Add / remove / replace elements |
| `indexOf()` | Find element index |
| `includes()` | Check if element exists |
| `reverse()` | Reverse array |
| `sort()` | Sort array |
| `forEach()` | Iterate through elements |
| `map()` | Transform array |
| `filter()` | Filter elements |
| `find()` | Find first matching element |
| `findIndex()` | Find first matching index |
| `reduce()` | Reduce to single value |
| `every()` | Check all elements |
| `some()` | Check at least one element |
| `flat()` | Flatten nested arrays |
| `flatMap()` | Map and flatten |
| `Array.isArray()` | Check if value is an array |

---

## 19. String Methods

| Method | Description |
|---|---|
| `length` | Returns string length |
| `toUpperCase()` | Convert to uppercase |
| `toLowerCase()` | Convert to lowercase |
| `charAt()` | Character at index |
| `charCodeAt()` | Unicode of character |
| `at()` | Character at index (supports negative index) |
| `indexOf()` | First occurrence index |
| `lastIndexOf()` | Last occurrence index |
| `includes()` | Check substring exists |
| `startsWith()` | Check starting text |
| `endsWith()` | Check ending text |
| `slice()` | Extract part of string |
| `substring()` | Extract substring |
| `substr()` | Extract by length (deprecated) |
| `replace()` | Replace first occurrence |
| `replaceAll()` | Replace all occurrences |
| `split()` | Convert string to array |
| `trim()` | Remove spaces from both ends |
| `trimStart()` | Remove leading spaces |
| `trimEnd()` | Remove trailing spaces |
| `concat()` | Join strings |
| `repeat()` | Repeat string |
| `padStart()` | Pad at beginning |
| `padEnd()` | Pad at end |

---

## 20. Number Methods

| Method | Description |
|---|---|
| `toString()` | Convert number to string |
| `toFixed(n)` | Fixed decimal places |
| `toPrecision(n)` | Total significant digits |
| `Number()` | Convert value to number |
| `parseInt()` | Convert string to integer |
| `parseFloat()` | Convert string to decimal |
| `Number.isInteger()` | Check integer |
| `Number.isFinite()` | Check finite number |
| `Number.isNaN()` | Check for NaN |
| `valueOf()` | Get primitive value |

---

## 21. OOPs Concepts in JavaScript

OOPs stands for Object-Oriented Programming. It is a programming approach where we organize code using objects and classes.

JavaScript supports the major OOP concepts:

1. **Class**
2. **Object**
3. **Encapsulation**
4. **Inheritance**
5. **Polymorphism**
6. **Abstraction**

### 21.1 Class
A class is a blueprint or template used to create objects.

### 21.2 Object
An object is an instance of a class.

### 21.3 Encapsulation
Encapsulation means wrapping data and methods together in a single unit and controlling access to the data.

### 21.4 Inheritance
Inheritance allows one class to acquire properties and methods from another class. We use the `extends` keyword.

### 21.5 Polymorphism
Same method name but different behaviour. Polymorphism means one name, many forms.

### 21.6 Abstraction
Abstraction means hiding unnecessary implementation details and exposing only the required functionality.

### 21.7 Easy Way to Remember

| Concept | Analogy |
|---|---|
| Class | Blueprint |
| Object | Real entity |
| Encapsulation | Data protection |
| Inheritance | Reusability |
| Polymorphism | Many forms |
| Abstraction | Hide complexity |

---

## 22. Synchronous vs Asynchronous JavaScript

**Synchronous** — Executes code line by line, where each operation waits for the previous operation to complete.

**Asynchronous** — Starts an operation and continues executing other code without waiting for that operation to finish.

**Common asynchronous operations include:**
1. `setTimeout()`
2. API calls
3. `fetch()`
4. Promises
5. `async` / `await`
6. Event handlers

> **Easy Way to Remember:**
> - Synchronous → Wait and execute
> - Asynchronous → Start operation and continue

---

## 23. Promises

A **Promise** in JS is an object that represents the eventual completion or failure of an asynchronous operation. A Promise represents a value that may be available now, later, or never.

**Promises are commonly used for:**
- API calls
- Fetching data from a server
- Reading files
- Timers
- Database operations

### 23.1 Promise States

1. **Pending** — Operation is still running.
2. **Fulfilled** — Operation completed successfully.
3. **Rejected** — Operation failed.

### 23.2 Syntax of a Promise

```js
new Promise((resolve, reject) => {
    resolve();
    reject();
});
```

### 23.3 Example

```js
new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation is successful");
    } else {
        reject("Operation failed");
    }
});
```

### 23.4 How to Handle a Promise

| Method | Purpose |
|---|---|
| `then()` | Runs if the promise is fulfilled |
| `catch()` | Runs if the promise is rejected |
| `finally()` | Runs regardless of success or failure |

### 23.5 Promise Methods

1. `Promise.all()`
2. `Promise.any()`
3. `Promise.allSettled()`
4. `Promise.race()`

---

## 24. BOM and DOM in JavaScript

BOM (Browser Object Model) and DOM (Document Object Model) are two important concepts in JavaScript.

### 24.1 BOM (Browser Object Model)

BOM is used to interact with the browser and its features such as the window, location, history, navigator, and screen.

```
             Window
                |
    ----------------------------
    |      |      |      |     |
 document location history navigator screen
```

### 24.2 DOM (Document Object Model)

DOM is a programming interface that represents an HTML document as a tree of objects. It allows JavaScript to access and manipulate HTML elements.

```
Document
   |
  html
 /    \
head   body
         |
       div
      /   \
     h1   p
```

### 24.3 DOM Selection Methods

| Method | Description |
|---|---|
| `document.getElementById()` | Select element by ID |
| `document.getElementsByClassName()` | Select elements by class |
| `document.getElementsByTagName()` | Select elements by tag |
| `document.querySelector()` | Select first matching element |
| `document.querySelectorAll()` | Select all matching elements |

### 24.4 DOM Manipulation

| Method / Property | Description |
|---|---|
| `createElement()` | Create a new HTML element |
| `appendChild()` | Add an element |
| `removeChild()` | Remove an element |
| `innerHTML` | Gets or sets the HTML content inside an element |
| `innerText` | Gets or sets only the visible text inside an element |

### 24.5 HTMLCollection vs NodeList

| HTMLCollection | NodeList |
|---|---|
| Contains only HTML elements | Contains DOM nodes (elements, text nodes, comments, etc.) |
| Returned by `getElementsByTagName()` and `getElementsByClassName()` | Returned by `querySelectorAll()` and `childNodes` |
| Live collection (updates automatically when the DOM changes) | `querySelectorAll()` returns a static NodeList (doesn't update automatically); `childNodes` returns a live NodeList |
| Does not support `forEach()` directly | Supports `forEach()` (for `querySelectorAll()` results) |
| Array-like object, not a real array | Array-like object, not a real array |

### 24.6 DOM Events

A **DOM Event** is an action performed by the user or browser that JavaScript can detect and respond to, such as clicking, typing, submitting a form, or loading a page.

**`onclick` vs `addEventListener()`**

| `onclick` | `addEventListener()` |
|---|---|
| Supports only one event handler per element | Supports multiple event handlers |
| Basic approach | Modern and recommended approach |

**Common DOM events:**
1. `click`
2. `dblclick`
3. `mouseover`
4. `mouseout`
5. `keydown`
6. `keyup`
7. `input`
8. `change`
9. `submit`

| Event | Description |
|---|---|
| `onclick` | Triggered when an element is clicked |
| `ondblclick` | Triggered when an element is double-clicked |
| `onmouseover` | Triggered when the mouse moves over an element |
| `onmouseout` | Triggered when the mouse leaves an element |
| `onmousemove` | Triggered when the mouse moves inside an element |
| `onkeydown` | Triggered when a key is pressed |
| `onkeyup` | Triggered when a key is released |
| `onkeypress` | Triggered when a printable key is pressed (legacy) |
| `oninput` | Triggered when the input value changes |
| `onchange` | Triggered when the value changes and loses focus (for many form controls) |
| `onsubmit` | Triggered when a form is submitted |