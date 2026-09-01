# JavaScript Promises

---

## Table of Contents

- [JavaScript Promises](#javascript-promises)
  - [Table of Contents](#table-of-contents)
- [1. What is a Promise?](#1-what-is-a-promise)
- [2. Promise Constructor](#2-promise-constructor)
- [3. States of a Promise](#3-states-of-a-promise)
- [4. Pending State](#4-pending-state)
- [5. Resolved / Fulfilled State](#5-resolved--fulfilled-state)
- [6. Rejected State](#6-rejected-state)
- [7. then() and catch()](#7-then-and-catch)
  - [`.then()`](#then)
  - [`.catch()`](#catch)
  - [Using both](#using-both)
- [8. Asynchronous Execution with setTimeout](#8-asynchronous-execution-with-settimeout)
- [9. Callbacks](#9-callbacks)
- [10. Callback Hell](#10-callback-hell)
- [Callback Hell](#callback-hell)
    - [Problems with Callback Hell](#problems-with-callback-hell)
- [11. Why Promises?](#11-why-promises)
- [12. Converting Callback to Promise](#12-converting-callback-to-promise)
  - [Callback version](#callback-version)
  - [Promise version](#promise-version)
    - [Main difference](#main-difference)
- [13. Promise Chaining](#13-promise-chaining)
- [14. Returning a Promise from then()](#14-returning-a-promise-from-then)
- [15. Promise Rejection in a Chain](#15-promise-rejection-in-a-chain)
- [16. catch() in Promise Chains](#16-catch-in-promise-chains)
    - [Important clarification](#important-clarification)
- [17. Promise vs Function Returning a Promise](#17-promise-vs-function-returning-a-promise)
  - [Function returning a Promise](#function-returning-a-promise)
  - [Variable containing a Promise](#variable-containing-a-promise)
    - [Remember](#remember)
- [18. Async and Await](#18-async-and-await)
  - [`async`](#async)
  - [`await`](#await)
- [19. Promise Chaining vs Async/Await](#19-promise-chaining-vs-asyncawait)
  - [Promise Chaining](#promise-chaining)
  - [Async/Await](#asyncawait)
- [20. Company → Dealer → Seller → Customer Example](#20-company--dealer--seller--customer-example)
  - [Company](#company)
  - [Dealer](#dealer)
  - [Promise Chain](#promise-chain)
- [21. Important Interview Concepts](#21-important-interview-concepts)
  - [1. What is a Promise?](#1-what-is-a-promise-1)
  - [2. What are the states of a Promise?](#2-what-are-the-states-of-a-promise)
  - [3. What is `resolve()`?](#3-what-is-resolve)
  - [4. What is `reject()`?](#4-what-is-reject)
  - [5. What is Callback Hell?](#5-what-is-callback-hell)
  - [6. How do Promises solve Callback Hell?](#6-how-do-promises-solve-callback-hell)
  - [7. What does `.then()` return?](#7-what-does-then-return)
  - [8. Why do we return a Promise inside `.then()`?](#8-why-do-we-return-a-promise-inside-then)
  - [9. What happens if we don't return the Promise?](#9-what-happens-if-we-dont-return-the-promise)
    - [Interview Rule](#interview-rule)
  - [10. Why is this wrong?](#10-why-is-this-wrong)
- [22. Quick Revision Sheet](#22-quick-revision-sheet)
  - [Promise](#promise)
  - [States](#states)
  - [Success](#success)
  - [Failure](#failure)
  - [Promise Chain](#promise-chain-1)
  - [Return another Promise](#return-another-promise)
  - [Callback Hell](#callback-hell-1)
  - [Promise replacement](#promise-replacement)
  - [Async/Await](#asyncawait-1)
  - [Error Handling with Async/Await](#error-handling-with-asyncawait)
- [23. Interview Questions](#23-interview-questions)
    - [Basic](#basic)
    - [Callback Hell](#callback-hell-2)
    - [Promise Chaining](#promise-chaining-1)
    - [Promise vs Function](#promise-vs-function)
    - [Async/Await](#asyncawait-2)
- [Most Important Mental Model](#most-important-mental-model)
- [Final Example](#final-example)
- [Golden Rules to Remember](#golden-rules-to-remember)

---

# 1. What is a Promise?

A **Promise** is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation.

In simple words:

> A Promise says: **"I don't have the result right now, but I will give you the result later."**

A Promise is created using the `Promise` constructor.

```javascript
let result = new Promise((resolve, reject) => {

});
```

Here:

- `resolve` → called when the operation is successful.
- `reject` → called when the operation fails.

The names `resolve` and `reject` are conventional. We can use other names as well:

```javascript
let result = new Promise((res, rej) => {

});
```

---

# 2. Promise Constructor

The basic syntax is:

```javascript
let result = new Promise((resolve, reject) => {

});
```

The Promise constructor accepts a function called the **executor function**.

```javascript
new Promise((resolve, reject) => {

});
```

The executor receives two functions:

```text
resolve → success
reject  → failure
```

Example:

```javascript
let result = new Promise((resolve, reject) => {

    console.log("Promise");

});
```

---

# 3. States of a Promise

A Promise has three states:

```text
Pending
Fulfilled / Resolved
Rejected
```

Visual representation:

```text
                  Promise
                     |
          -----------------------
          |                     |
       Pending              Settled
                                |
                     -------------------
                     |                 |
                 Fulfilled          Rejected
                 / Resolved
```

A Promise can transition only once:

```text
Pending → Fulfilled
```

or

```text
Pending → Rejected
```

Once it becomes fulfilled or rejected, it is called **settled**.

---

# 4. Pending State

When a Promise is created, its initial state is:

```text
Pending
```

Example:

```javascript
let result = new Promise((resolve, reject) => {

    setTimeout(() => {

    }, 3000);

});

console.log(result);
```

The Promise is initially:

```text
Promise { <pending> }
```

It will remain pending until either:

```javascript
resolve();
```

or

```javascript
reject();
```

is called.

---

# 5. Resolved / Fulfilled State

A Promise becomes fulfilled when `resolve()` is called.

Example:

```javascript
let result = new Promise((resolve, reject) => {

    resolve("User found");

});

console.log(result);
```

The Promise becomes:

```text
Fulfilled
```

The value passed to `resolve()` becomes the result of the Promise.

```javascript
resolve("User found");
```

That `"User found"` can later be accessed using `.then()`.

---

# 6. Rejected State

A Promise becomes rejected when `reject()` is called.

Example:

```javascript
let result = new Promise((resolve, reject) => {

    reject("User not found");

});

console.log(result);
```

The Promise becomes:

```text
Rejected
```

The value passed to `reject()` can be accessed using `.catch()`.

```javascript
reject("User not found");
```

---

# 7. then() and catch()

Promises are generally handled using:

```javascript
.then()
.catch()
```

## `.then()`

`.then()` handles a fulfilled Promise.

Example:

```javascript
let result = new Promise((resolve, reject) => {

    resolve("User found");

});

result.then((res) => {

    console.log(res);

});
```

Output:

```text
User found
```

---

## `.catch()`

`.catch()` handles a rejected Promise.

```javascript
let result = new Promise((resolve, reject) => {

    reject("User not found");

});

result.catch((error) => {

    console.log(error);

});
```

Output:

```text
User not found
```

---

## Using both

```javascript
result
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
```

Remember:

```text
resolve(value) → .then()

reject(error)  → .catch()
```

---

# 8. Asynchronous Execution with setTimeout

Consider:

```javascript
let result = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("User found");

    }, 3000);

});

console.log(result);
```

Immediately after creating the Promise:

```text
Promise { <pending> }
```

After 3 seconds:

```text
Promise { "User found" }
```

The Promise starts in the pending state and later becomes fulfilled.

---

# 9. Callbacks

A **callback** is a function passed as an argument to another function.

Example:

```javascript
function printA(callback) {

    setTimeout(() => {

        console.log("A");

        if (callback) {
            callback();
        }

    }, 2000);

}
```

Here:

```javascript
callback
```

is a parameter that receives a function.

We can call:

```javascript
printA(() => {

    console.log("Next operation");

});
```

The flow becomes:

```text
printA()
   |
   ↓
wait 2 seconds
   |
   ↓
print A
   |
   ↓
callback()
```

---

# 10. Callback Hell

Suppose we have three asynchronous functions:

```javascript
function printA(callback) {

    setTimeout(() => {

        console.log("A");

        if (callback) {
            callback();
        }

    }, 2000);

}


function printB(callback) {

    setTimeout(() => {

        console.log("B");

        if (callback) {
            callback();
        }

    }, 2000);

}


function printC() {

    setTimeout(() => {

        console.log("C");

    }, 2000);

}
```

If we want them to execute sequentially:

```text
A → B → C
```

we can write:

```javascript
printA(() => {

    printB(() => {

        printC();

    });

});
```

This creates nested callbacks.

As the number of operations increases, the code becomes deeper:

```javascript
printA(() => {

    printB(() => {

        printC(() => {

            printD(() => {

                printE();

            });

        });

    });

});
```

This structure is called:

# Callback Hell

It is also commonly called:

> **Pyramid of Doom**

### Problems with Callback Hell

- Code becomes deeply nested.
- Readability decreases.
- Maintenance becomes difficult.
- Error handling becomes harder.
- Large asynchronous workflows become difficult to understand.

Promises provide a cleaner way to handle such asynchronous operations.

---

# 11. Why Promises?

Suppose we execute:

```javascript
printA();
printB();
printC();
```

with:

```javascript
function printA() {

    setTimeout(() => {
        console.log("A");
    }, 2000);

}

function printB() {

    setTimeout(() => {
        console.log("B");
    }, 3000);

}

function printC() {

    setTimeout(() => {
        console.log("C");
    }, 2000);

}
```

The output is:

```text
A
C
B
```

Why?

Because:

```text
A → 2 seconds
B → 3 seconds
C → 2 seconds
```

All three timers are started without waiting for one another.

Therefore:

```text
A finishes → 2 sec
C finishes → 2 sec
B finishes → 3 sec
```

Output:

```text
A
C
B
```

If we want:

```text
A → B → C
```

we need to connect the asynchronous operations.

Promises help us do this.

---

# 12. Converting Callback to Promise

## Callback version

```javascript
function printA(callback) {

    setTimeout(() => {

        console.log("A");

        if (callback) {
            callback();
        }

    }, 2000);

}
```

We call it like:

```javascript
printA(() => {

    // next operation

});
```

---

## Promise version

```javascript
function printA() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("A");

            resolve();

        }, 2000);

    });

}
```

Now we don't pass a callback.

Instead:

```javascript
printA()
    .then(() => {

        // next operation

    });
```

### Main difference

Callback:

```javascript
printA(() => {

});
```

Promise:

```javascript
printA()
    .then(() => {

    });
```

---

# 13. Promise Chaining

Promise chaining is one of the most important concepts.

Suppose we have:

```javascript
function printA() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("A");
            resolve();

        }, 2000);

    });

}


function printB() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("B");
            resolve();

        }, 2000);

    });

}


function printC() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("C");
            resolve();

        }, 2000);

    });

}
```

We can execute them sequentially:

```javascript
printA()
    .then(() => {

        return printB();

    })
    .then(() => {

        return printC();

    });
```

Output:

```text
A
B
C
```

The flow is:

```text
printA()
   ↓
resolve()
   ↓
.then()
   ↓
printB()
   ↓
resolve()
   ↓
.then()
   ↓
printC()
```

---

# 14. Returning a Promise from then()

This is one of the **most important Promise concepts for interviews**.

Consider:

```javascript
value
    .then((res) => {

        console.log(res);

        return getPromise();

    })
    .then((res) => {

        console.log(res);

    });
```

The important line is:

```javascript
return getPromise();
```

Why do we return it?

Because `.then()` itself returns a Promise.

When we return another Promise from `.then()`, the next `.then()` waits for that Promise.

Therefore:

```javascript
.then(() => {
    return anotherPromise();
})
.then(() => {
    // executes after anotherPromise is settled
});
```

This is called **Promise chaining**.

---

# 15. Promise Rejection in a Chain

Consider:

```javascript
let value = new Promise((res, rej) => {

    setTimeout(() => {

        res("A");

    }, 3000);

});
```

And:

```javascript
function getPromise() {

    return new Promise((res, rej) => {

        setTimeout(() => {

            rej("B");

        }, 2000);

    });

}
```

Now create a chain:

```javascript
value
    .then((res) => {

        console.log(res);

        return getPromise();

    })
    .then((res) => {

        console.log(res);

    })
    .catch((error) => {

        console.log("error " + error);

    });
```

Execution:

```text
value
  ↓
wait 3 sec
  ↓
resolve("A")
  ↓
.then()
  ↓
print A
  ↓
getPromise()
  ↓
wait 2 sec
  ↓
reject("B")
  ↓
.catch()
```

Output:

```text
A
error B
```

The second `.then()` does not execute because `getPromise()` was rejected.

---

# 16. catch() in Promise Chains

Consider:

```javascript
value
    .then((res) => {

        console.log(res);

        return getPromise();

    })
    .then((res) => {

        console.log(res);

    })
    .catch((error) => {

        console.log("error " + error);

    });
```

The `.catch()` handles a rejection that reaches it from the chain before it.

Conceptually:

```text
Promise
   ↓
.then()
   ↓
.then()
   ↓
.catch()
```

If a relevant Promise in the chain rejects:

```text
reject()
   ↓
skip remaining success handlers
   ↓
.catch()
```

### Important clarification

Do not memorize:

> "catch only runs once."

Instead remember:

> A particular `.catch()` handler executes when a rejection reaches that handler.

You can have multiple `.catch()` handlers in different Promise chains.

---

# 17. Promise vs Function Returning a Promise

This is an important distinction.

## Function returning a Promise

Suppose:

```javascript
function getPromise() {

    return new Promise((resolve, reject) => {

        // asynchronous operation

    });

}
```

Here:

```javascript
getPromise()
```

is a function call.

The function returns a Promise.

Therefore:

```javascript
getPromise().then(...);
```

is valid.

---

## Variable containing a Promise

Suppose:

```javascript
let nextValue = getPromise();
```

Now:

```javascript
nextValue
```

already contains a Promise.

Therefore:

```javascript
nextValue.then(...);
```

is correct.

But:

```javascript
nextValue().then(...);
```

is incorrect.

Why?

Because `nextValue` is a Promise, not a function.

### Remember

```text
getPromise()       → function call → returns Promise

nextValue          → already contains Promise
```

Therefore:

```javascript
getPromise().then(...);    // correct

nextValue.then(...);       // correct

nextValue().then(...);     // incorrect
```

---

# 18. Async and Await

Promises can also be handled using:

```text
async
await
```

Example:

```javascript
async function handleAsync() {

    let result = await company(5000);

    console.log(result);

    result = await dealer(123);

    console.log(result);

}
```

---

## `async`

When a function is declared with `async`:

```javascript
async function handleAsync() {

}
```

the function always returns a Promise.

---

## `await`

`await` is used to wait for the result of a Promise inside an `async` function.

Example:

```javascript
let result = await company(5000);
```

Conceptually:

```text
company()
   ↓
Promise
   ↓
await
   ↓
result
```

`await` makes asynchronous code look more like synchronous code.

---

# 19. Promise Chaining vs Async/Await

## Promise Chaining

```javascript
company()
    .then((result) => {

        console.log(result);

        return dealer(result);

    })
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });
```

---

## Async/Await

```javascript
async function handleAsync() {

    try {

        let result = await company(5000);

        console.log(result);

        result = await dealer(result);

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

`async/await` is a cleaner syntax for working with Promises.

---

# 20. Company → Dealer → Seller → Customer Example

The original notes were trying to demonstrate a real-world Promise chain:

```text
Company
   ↓
Dealer
   ↓
Seller
   ↓
Customer
```

The idea is that one stage sends its result to the next stage.

---

## Company

```javascript
function company(token) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (token >= 50000) {

                resolve(500);

            } else {

                reject("Promise not fulfilled by company");

            }

        }, 3000);

    });

}
```

If the token is at least `50000`:

```javascript
resolve(500);
```

means:

```text
Company successfully provides 500 bikes.
```

---

## Dealer

```javascript
function dealer(bikes) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (bikes >= 500) {

                resolve(50);

            } else {

                reject("Promise rejected by Dealer");

            }

        }, 3000);

    });

}
```

The dealer receives the number of bikes from the company.

If:

```text
bikes >= 500
```

then:

```javascript
resolve(50);
```

---

## Promise Chain

```javascript
company(50000)
    .then((bikes) => {

        console.log(bikes);

        return dealer(bikes);

    })
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });
```

The important line is:

```javascript
return dealer(bikes);
```

The result of one Promise is passed to the next Promise.

Flow:

```text
company(50000)
       ↓
    Promise
       ↓
   resolve(500)
       ↓
    .then()
       ↓
 dealer(500)
       ↓
    Promise
       ↓
   resolve(50)
       ↓
    .then()
```

---

# 21. Important Interview Concepts

## 1. What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

---

## 2. What are the states of a Promise?

Three states:

```text
Pending
Fulfilled
Rejected
```

---

## 3. What is `resolve()`?

`resolve()` is called when an asynchronous operation succeeds.

```javascript
resolve("Success");
```

Handled by:

```javascript
.then()
```

---

## 4. What is `reject()`?

`reject()` is called when an asynchronous operation fails.

```javascript
reject("Failed");
```

Handled by:

```javascript
.catch()
```

---

## 5. What is Callback Hell?

Callback Hell occurs when multiple asynchronous callbacks become deeply nested.

Example:

```javascript
A(() => {

    B(() => {

        C(() => {

            D();

        });

    });

});
```

It is also called:

```text
Pyramid of Doom
```

---

## 6. How do Promises solve Callback Hell?

Instead of deeply nesting callbacks:

```javascript
A(() => {

    B(() => {

        C();

    });

});
```

we can use Promise chaining:

```javascript
A()
    .then(() => B())
    .then(() => C());
```

This improves readability and maintainability.

---

## 7. What does `.then()` return?

`.then()` returns a **new Promise**.

Example:

```javascript
let nextValue = value.then(() => {

});
```

Therefore:

```javascript
nextValue
```

is a Promise.

---

## 8. Why do we return a Promise inside `.then()`?

Example:

```javascript
value
    .then(() => {

        return getPromise();

    })
    .then(() => {

    });
```

Returning the Promise connects it to the chain.

The next `.then()` waits for it to settle.

---

## 9. What happens if we don't return the Promise?

Example:

```javascript
value
    .then(() => {

        getPromise();

    })
    .then(() => {

        console.log("Next");

    });
```

The Promise returned by `getPromise()` is not connected to the chain.

Therefore, the next `.then()` does not wait for `getPromise()`.

### Interview Rule

> When chaining asynchronous operations, return the Promise from the `.then()` callback.

---

## 10. Why is this wrong?

```javascript
nextValue().then(...);
```

If:

```javascript
nextValue
```

is already a Promise, then it cannot be called like a function.

Correct:

```javascript
nextValue.then(...);
```

---

# 22. Quick Revision Sheet

## Promise

```javascript
new Promise((resolve, reject) => {

});
```

---

## States

```text
Pending
Fulfilled / Resolved
Rejected
```

---

## Success

```javascript
resolve("Success");
```

handled by:

```javascript
.then()
```

---

## Failure

```javascript
reject("Error");
```

handled by:

```javascript
.catch()
```

---

## Promise Chain

```javascript
promise
    .then(...)
    .then(...)
    .then(...)
    .catch(...);
```

---

## Return another Promise

```javascript
.then(() => {

    return anotherPromise();

})
```

---

## Callback Hell

```javascript
A(() => {

    B(() => {

        C(() => {

            D();

        });

    });

});
```

---

## Promise replacement

```javascript
A()
    .then(() => B())
    .then(() => C())
    .then(() => D());
```

---

## Async/Await

```javascript
async function example() {

    let result = await somePromise();

}
```

---

## Error Handling with Async/Await

```javascript
async function example() {

    try {

        let result = await somePromise();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

---

# 23. Interview Questions

You should be able to answer these without looking at your notes.

### Basic

1. What is a Promise in JavaScript?
2. Why do we use Promises?
3. What are the three states of a Promise?
4. What is the difference between `resolve()` and `reject()`?
5. What is `.then()`?
6. What is `.catch()`?
7. What is the Promise constructor?
8. What is the executor function?

### Callback Hell

9. What is a callback?
10. What is Callback Hell?
11. What is the Pyramid of Doom?
12. What problems are associated with Callback Hell?
13. How do Promises solve Callback Hell?

### Promise Chaining

14. What is Promise chaining?
15. What does `.then()` return? ⭐
16. Why does `.then()` return a new Promise? ⭐
17. Why do we return a Promise inside `.then()`? ⭐
18. What happens if we don't return a Promise inside `.then()`? ⭐
19. How does data move from one Promise to another?
20. How does error propagation work in a Promise chain? ⭐

### Promise vs Function

21. What is the difference between a Promise and a function returning a Promise?
22. Why is `getPromise().then()` valid?
23. Why is `nextValue.then()` valid?
24. Why is `nextValue().then()` invalid?

### Async/Await

25. What is `async`?
26. What is `await`?
27. Does an `async` function return a Promise?
28. Where can `await` be used?
29. How do you handle errors with async/await?
30. What is the difference between Promise chaining and async/await?

---

# Most Important Mental Model

```text
                    PROMISE
                       |
             ---------------------
             |                   |
          resolve              reject
             |                   |
           .then()             .catch()
             |
       return Promise
             |
          .then()
             |
       return Promise
             |
          .then()
```

The most important concepts to understand are:

```text
1. Promise states
2. resolve() and reject()
3. then() and catch()
4. Callback Hell
5. Promise chaining
6. return inside .then()
7. .then() returns a Promise
8. Promise vs function returning a Promise
9. async
10. await
11. Error handling
```

---

# Final Example

Here is the complete A → B → C example using Promises:

```javascript
function printA() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("A");

            resolve();

        }, 2000);

    });

}


function printB() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("B");

            resolve();

        }, 2000);

    });

}


function printC() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("C");

            resolve();

        }, 2000);

    });

}


printA()
    .then(() => {

        return printB();

    })
    .then(() => {

        return printC();

    })
    .catch((error) => {

        console.log(error);

    });
```

Output:

```text
A
B
C
```

The execution flow is:

```text
printA()
   ↓
2 seconds
   ↓
A
   ↓
resolve()
   ↓
.then()
   ↓
printB()
   ↓
2 seconds
   ↓
B
   ↓
resolve()
   ↓
.then()
   ↓
printC()
   ↓
2 seconds
   ↓
C
```

---

# Golden Rules to Remember

> **Rule 1:** A Promise starts in the `pending` state.

> **Rule 2:** `resolve()` means success.

> **Rule 3:** `reject()` means failure.

> **Rule 4:** `.then()` handles successful results.

> **Rule 5:** `.catch()` handles rejected results.

> **Rule 6:** `.then()` returns a new Promise.

> **Rule 7:** Return the Promise when chaining asynchronous operations.

> **Rule 8:** A Promise is not a function.

> **Rule 9:** `async` functions always return a Promise.

> **Rule 10:** `await` waits for a Promise's result inside an async context.

> **Rule 11:** Promises help avoid deeply nested Callback Hell.

> **Rule 12:** `async/await` provides a cleaner way to work with Promises.

---