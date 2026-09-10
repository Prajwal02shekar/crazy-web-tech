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
| `document.writeln()` | Writes content in the same line with one letter space. |
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