# JavaScript: Functional Oriented

## Variables

- A **variable** is a **container** that stores data.
- JavaScript has **3 types of variables**:
  - `var`
  - `let`
  - `const`

---

## ES6 (ECMAScript 2015)

> **ES6** is one of the biggest evolutions of JavaScript.

It introduced:
- `let`
- `const`
- Arrow Functions
- Classes
- Template Literals
- Destructuring
- Promises
- Modules
- and many more...

---

## `var`

- Available before ES6.
- ✅ Redeclaration is allowed.
- ✅ Reassignment is allowed.

```javascript
var a = 10;
var a = 20; // Redeclaration ✅

a = 30; // Reassignment ✅
```

---

## `let`

- Introduced in **ES6**.
- ❌ Redeclaration is **not** allowed.
- ✅ Reassignment is allowed.

```javascript
let b = 10;

b = 20; // Reassignment ✅

// let b = 30; // ❌ Redeclaration not allowed
```

---

## `const`

- Introduced in **ES6**.
- ❌ Redeclaration is **not** allowed.
- ❌ Reassignment is **not** allowed.

```javascript
const PI = 3.14;

// PI = 3.14159; // ❌ Error
```

---

# Running JavaScript Code

Run a JavaScript file using the terminal:

```bash
node file_name.js
```

Example:

```bash
node index.js
```

---

# Variable Naming Rules

## 1. No spaces allowed

❌ Invalid

```javascript
let my name = "Gaurav";
```

✅ Valid

```javascript
let myName = "Gaurav";
```

---

## 2. Variable name cannot start with a number

❌ Invalid

```javascript
const 1234567 = 333;
console.log(1234567);
```

✅ Valid

```javascript
const s1234567 = 333;
console.log(s1234567);
```

---

## 3. Variable names can start with

- Letters (`a-z`, `A-Z`)
- Underscore (`_`)
- Dollar Sign (`$`)

Examples

```javascript
let name = "Gaurav";
let _name = "Gaurav";
let $name = "Gaurav";
```

---

## 4. JavaScript is Case Sensitive

```javascript
const py = 3.14;

console.log(Py); // ❌ Error
```

`py` and `Py` are considered different variables.

---

# JavaScript Data Types

JavaScript has **2 categories of data types**:

1. Primitive
2. Non-Primitive (Reference)

---

# Primitive Data Types

Primitive data types store **single values**.

- Number
- Boolean
- String
- Undefined
- Null
- BigInt
- Symbol

> **Important:** Number, Boolean, String, Undefined, and Null are the most commonly used.

### Example

```javascript
let num = 10;                      // Number
let name = "Gaurav Joshi Sir";     // String
let isOkay = true;                 // Boolean

let myValue;                       // Undefined
// Reserved for future assignment

let myNullValue = null;            // Null
// Intentionally stores "no value"
```

### `undefined` vs `null`

```javascript
let myValue;
let myNullValue = null;

console.log(myValue * 3);      // NaN
console.log(myNullValue * 3);  // 0

console.log(name, num, isOkay, myValue);
// Multiple values can be printed together
```

**Difference**

- `undefined` → Variable is declared but no value has been assigned.
- `null` → Variable intentionally stores "no value".

---

# Drawback of JavaScript (Dynamic Typing)

JavaScript is **dynamically typed**, so a variable's data type can change during execution.

```javascript
let num = 10;      // Number

num = "10";        // Now it becomes a String

let name = "Mahadev";
let isOkay = true;
let myValue;
let myNullValue = null;

console.log(num + 3); // "103"
```

### Output

```
103
```

### Why?

Since `"10"` is a **string**, JavaScript performs **string concatenation** instead of numeric addition.

Instead of:

```
10 + 3 = 13
```

it becomes:

```
"10" + 3 = "103"
```

This is one of the common drawbacks of JavaScript's **dynamic typing**.

---

# TypeScript Solution

TypeScript adds **static types** to JavaScript, preventing accidental type changes.

```typescript
let num: number = 10;

num = "10"; // ❌ Error
```

TypeScript catches this mistake **during compilation**, making code safer and easier to maintain.

---

# Non-Primitive (Reference) Data Types

- Array
- Object
- Function

### Array

```javascript
let numbers = [10, 20, 30];
```

### Object

```javascript
let student = {
    name: "Gaurav",
    age: 20
};
```

### Function

```javascript
function greet() {
    console.log("Hello, World!");
}
```

---

# Quick Revision

## Variables

| Keyword | Redeclaration | Reassignment |
|---------|---------------|--------------|
| `var` | ✅ | ✅ |
| `let` | ❌ | ✅ |
| `const` | ❌ | ❌ |

---

## Primitive Data Types

- Number
- Boolean
- String
- Undefined
- Null
- BigInt
- Symbol

---

## Non-Primitive Data Types

- Array
- Object
- Function