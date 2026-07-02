# JS: Funtional oriendted
– var: container -> stores data
–3 types: 
ES6(SABSE BADA Evolution) me bana hai var 
reassign + redecailre }-> pos. in var
only reassign -> in let 

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

a = 30;     // Reassignment ✅
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

for running the code:
use(terminal):
node file_name.js

# Rules:
– variables name -> not space allowed
– can't start with no. 
ex.: 
```javascript
const 1234567 = 333; // invalid
console.log(1234567); // error
```
– latter, _, $
ex.: 
```javascript
const s1234567 = 333; // valid
console.log(s1234567);
```
– var -> case sensitive 
ex.: 
```javascript
const py = 3.14;
console.log(Py); // error
```

in js : var-> primitive and non primitive
primitive: no, bool, string, undifined, null, begin, symbol.
– no, bool, string, undifined, null -> imp
ex:
```js
let num = 10; // no.
let name = "Gaurav Joshi Sir"; // string
let isOkay = true; // bool
let myValue; // undifined: why to use-> var, reserved in future we will need it
let muNullValue = null; // null imagenary value store karke rkha hai, empty nhi hai
// ex:
console.log(myValue * 3); // o/p: NaN
console.log(myNullValue * 3); // o/p: 0(BYDEFAULT 0 CONSIDERED)
console.log(name, num, isOkay, myValue); // multiple values can print together

```
### Drawbacks:

in js: data can overwrite
```js
let num = 10;
num = "10";
let name = "Mahadev";
let isOkay = true;
let myValue;
let muNullValue = null;
console.log(num + 3); // 103(concatinate) instead of (adding)13 -> 
```
tyoes define in typescript
--- 
### NON-PRIMITIVE:
`ARRAY, OBJ, FUNCTION`