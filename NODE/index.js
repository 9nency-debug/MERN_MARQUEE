// // // console.log(document);
// // // console.log(window); 
// // // here document and window are object}-> !access on server
// // let math = require("./math");
// // let a = 23;
// // let b = 34;

// // console.log(math.add(a, b));
// // console.log(math.sub(a, b));


// // bcz, we already have created the function which function is to add two nos. so, if it is already.
// // <variable_name(jiske ander values store kar rhe ho)> =  require(./path) }-> for import

// // const { response } = require("express");
// // const http = require("http");
// // console.log(http);
// // // http.createServer(request, response) req. from fronend / user and res from server
// // http.createServer((request, response) => {
// //     // server ban gaya / backend ban gaya ==> students ka admission ho gaya type
// //     // but classroom to chahiye so for that, we have to assign on which port no. it should be assign


// // });
// // // Server.listen(8000);
// // // server successfully run hua ya nhi hua:|
// // server.listen(8000, () => {
// //     console.log("server run on port 8000");
// // });
// // const http = require("http");
// // console.log(http);
// // http.createServer((request, response) => {
// //     response.end("Hello World");
// // });
// // server.listen(8000, () => {
// //     console.log("server run on port 8000");
// // });
// // const http = require("http");
// // console.log(http);
// // http.createServer((request, response) => {
// //         console.log(request.url);
// //     response.end("Hello World");
// // });
// // server.listen(8000, () => {
// //     console.log("server run on port 8000");
// // });
// // const http = require("http");
// // console.log(http);
// // http.createServer((request, response) => {
// //         console.log(request.url);
// //         if(request.url == "/fullname") {
// //             response.end("Gaurav Joshi");
// //         }
// //         )
// //     response.end("Hello World");
// // });
// // server.listen(8000, () => {
// //     console.log("server run on port 8000");
// // });
// const http = require("http");
// console.log(http);
// http.createServer((request, response) => {
//         console.log(request.url);
//         if(request.url == "/fullname") {
//             response.end("Gaurav Joshi");
//         } else {
//             response.end("page not found");
//         }
//         )
//     response.end("Hello World");
// });
// server.listen(8000, () => {
//     console.log("server run on port 8000");
// });

// // fir bhi nhi aaya
// // node ke andar koi bhi single change karte hai to purane server ko stop karna padega and then shayad ...
// // delete it(terminal) / kuchh bola tha 😖

// // but ye continues chal rhi hai bcz, uss ko res ya req. milihi nhi (sir bohot fast bolte hai).
// // port number ke ander hi dena chahiye!
// // most imp: uss port pr koi aur website nhi chalni chahiye!
// // range: 0 to 65,535
// // port 5500 frontend chal rha hai to usko stop kar ke backend ko run kar sakte hai and backend to stop kar ke frontend run kar sakte hai

// // bcz, http is a server and it is made on backend, so it is available in node not in js
// // console.log(http);o/p module print

// // instead of localhost 8000 if we write user to bhi hello world aayega out put me ex. sirne diya abba, jabba, dabba request koi bhi ho response 1 hi milega abba, jabba, dabba
// // sir ne kuchh bola ki API endpoint ka kuchh zol hai

// // https://localhost:8000/product}-> product is a endpoint 
// // why it is called endpoint
// // ip add and local host may be 8000 bhi const hai endpoint hi change ho rha hai jiss se hi data change ho sakta hai
// // endpoint change hone pr bhi same data kyu aa rha hai, run kyu ho rha hai
// // server stop: req. gai but response nhi aaya kyu ki if condition has been written but !else

/*
=========================================
*/

/*
    Node.js HTTP Server Notes

    Browser vs Node.js:
    - document and window are browser objects.
    - They are not available in Node.js.
*/

/*
    Modules:
    const math = require("./math");
    require("./path") is used to import a module.
    The imported module is stored in a variable.
    If a function has already been created inside a module,
    we can import and use that function instead of creating it again.
*/

/*
    HTTP Module:
    const http = require("http");
    The HTTP module is built into Node.js and is used
    to create an HTTP server.
    http.createServer(request, response)

    request  -> Request received from the client/user.
    response -> Response sent by the server.
*/

/*
    Creating a server:
    const server = http.createServer((request, response) => {
        response.end("Hello World");
    });
    The server is created, but it needs a port to be accessible.
*/

/*
    Starting the server:
    server.listen(8000, () => {
        console.log("Server is running on port 8000");
    });

    The server listens for incoming requests on the specified port.
*/

/*
    Request URL:
    request.url gives the URL path requested by the client.
    Example:
    http://localhost:8000/product
    Here, "/product" is the API endpoint.
*/

/*
    API Endpoint:
    An endpoint is a specific URL path through which
    a client can request particular data or functionality.

    Examples:
    /product
    /user
    /fullname

    Changing the endpoint allows the server to handle
    different requests and return different data.
*/

/*
    Without endpoint-based conditions:
    If the server always contains:
        response.end("Hello World");
    then /product, /user, /abc, etc. will all receive
    the same response.
    The server must check request.url to return
    different responses for different endpoints.
*/

/*
    Example:

    /fullname -> returns "Gaurav Joshi"
    Any other endpoint -> returns "Page Not Found"
    The else condition acts as a fallback for
    undefined or unsupported endpoints.
*/

/*
    Important:

    - The server must run on an available port.
    - Port numbers range from 0 to 65535.
    - Only one server/application can use a port at a time.
    - If port 5500 is being used by the frontend,
      use another available port for the backend.
    - The frontend and backend can run on different ports.
*/

/*
    Server Restart:

    When the server code is changed, the running server
    may need to be stopped and started again for the changes
    to take effect, unless automatic reloading is configured.
    If the server is continuously running, it is waiting
    for incoming requests.
*/

/*
    Request and Response:

    Whenever a client sends a request, the server should
    send a response.
    If a request is received but no response is sent,
    the request remains pending.
*/


const http = require("http");
const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === "/fullname") {
        response.end("Gaurav Joshi");
    } else {
        response.end("Page Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});