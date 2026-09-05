<!-- # NODE
– run time env }-> helps us to run code on __browser__(forgot)
– node is made up with chrome's v8 engineen & C++
– terminal run -pos-> via node
– local hame server banana padega -then-> global kuchh hota hai

### difference between node and JS
some stuffs can run on server and some will on browser.
– DB + apis are available on server. not on 

– node package manager = npm

https://www.npmjs.com/ }-> world wide modules available

# Dependencies :
express, to.js, react
most common library -> express

to initialise -> npm init -y 
npm install <package_name> }-> to install any packages

package-loack.json }-> for developers

node modules:-> each and every in-depth details about the dependencies
most storage consuming -> node_modules

except express rest of the dependenceis we have not installed those dependencies then how it is available auto?
bcz, as we know we required express as a helper(dependenceis) to complete our code (requirements). The same way express have the dependencies(ussko banane me jo chize chaiye) wo hota hai!

package-log.json:-> ____

# Module
– file <=> module

built - in modules:
1) HTTP module: no need to install
– available in js in build
– to make HTTP server


local host 8000 broswer pr nhi aa rha i don't know why help me chatgpt


# api postman, thunder client
to test api
thunderclient : nhi use karna bcz, !free -> limit cross ho jati hai

post api successfully host ho gai}-> on EchoAPI 
so aisa nhi hona chahiye get pr kar to bhi chal jaye will learn  -->

# NODE

* Node.js is a **JavaScript runtime environment**.
* It allows us to run JavaScript code **outside the browser**, mainly on the server.
* Node.js is built on **Chrome's V8 JavaScript engine** and uses **C++** extensively.
* JavaScript code can be executed through the terminal using Node.js.

```bash
node filename.js
```

* We need to create a **local server** first, and then we can learn how a server can be made accessible globally.
* Node.js is designed for building servers, web applications, command-line tools, and scripts.

---

# Difference Between Node.js and JavaScript

* JavaScript is a programming language.
* Node.js is a runtime environment that provides an environment in which JavaScript can run outside the browser.
* Some things can run on the server, while some are available in the browser.

### Browser

* `document`
* `window`
* DOM-related features

`document` and `window` are browser-specific objects and are not available in Node.js.

### Server / Node.js

* Databases
* APIs
* HTTP servers
* File-system operations
* Other server-side functionality

Node.js provides APIs and built-in modules that allow JavaScript to perform server-side operations.

---

# NPM

* **NPM** stands for **Node Package Manager**.
* It is used to install, manage, and use packages in Node.js projects.
* The npm registry contains a large number of publicly available packages.

[NPM](https://www.npmjs.com/) → A worldwide registry containing JavaScript and Node.js packages.

---

# Dependencies

Examples:

* Express

* `to.js`

* React

* Express is one of the most commonly used Node.js frameworks/libraries for building web servers and APIs.

### Initialise a Node.js Project

```bash
npm init -y
```

* `npm init -y` is used to initialise a Node.js project.
* It creates the `package.json` file with default values.

### Install a Package

```bash
npm install <package_name>
```

* Used to install a required package/dependency.
* The installed package is added to the project's dependencies in `package.json`.

---

# package.json

* `package.json` contains information about the Node.js project.
* It contains the project's dependencies and other project configuration.
* Dependencies required by the application are listed under the `dependencies` section.

---

# package-lock.json

* `package-lock.json` is important for developers.
* It records the exact dependency tree generated for the project.
* It helps ensure that the same dependency versions can be installed consistently by other developers, deployments, and CI systems.
* It is generally committed to the source repository.

---

# node_modules

* `node_modules` contains the installed packages and their dependencies.
* It contains the actual installed dependency tree.
* It can be the **most storage-consuming folder** in a Node.js project.

### Why are dependencies available automatically even though we did not install them separately?

Suppose we install only Express:

```bash
npm install express
```

We did not manually install all the other dependencies required by Express.

This happens because **Express itself has dependencies**.

Just as our application requires Express as a dependency/helper to fulfil our requirements, Express also requires other packages to work internally.

Therefore, when Express is installed, its required dependencies are also installed automatically.

The dependency structure can be understood as:

```text
Our Project
     ↓
   Express
     ↓
Express Dependencies
     ↓
Their Dependencies
```

This creates a **dependency tree**. npm resolves and installs the required dependencies when installing a package.

---

# Modules

* A **file can be treated as a module** in Node.js.
* Modules allow us to divide different tasks into separate files.
* This helps keep the code organised and maintainable.
* A module can be loaded using `require()` or `import`.

## Built-in Modules

* Built-in modules are provided by Node.js.
* They do not need to be installed separately.

### HTTP Module

1. **HTTP module**

   * No separate installation is required.
   * It is built into Node.js.
   * It is used to create an HTTP server.

```js
const http = require("http");
```

Node.js officially provides the HTTP module for creating HTTP servers.

---

# Local Server

* We can create a local HTTP server using the Node.js HTTP module.
* Example:

```text
http://localhost:8000
```

* If `localhost:8000` does not open in the browser, check:

  * whether the Node.js server is running,
  * whether the server is listening on port `8000`,
  * whether the correct URL and port are being used,
  * and whether another application is already using that port.

---

# API Testing

API testing tools:

* Postman
* Thunder Client
* EchoAPI

### Purpose

These tools are used to **test APIs** by sending HTTP requests and checking the server's responses.

### Thunder Client

* Thunder Client can be used for API testing.
* It is not preferred because the free plan has usage limitations, and the limit can be reached.

### EchoAPI

* EchoAPI can also be used for API testing.
* The `POST` API was successfully hosted/tested using EchoAPI.

---

# GET vs POST

* An API should respond according to the HTTP method for which it is defined.
* A `POST` API should not automatically work as a `GET` API.
* `GET` and `POST` are different HTTP methods and represent different types of requests.

For example:

```text
POST /users
```

and

```text
GET /users
```

are different requests, even though the endpoint path is the same.

* Need to understand why a `POST` API should not also work when the request is made using `GET`.
* This will be learned further while studying HTTP methods and API routing.
