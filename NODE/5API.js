/*
    Task:
    - Create 5 APIs:
      /first-name
      /last-name
      /full-name
      /college-name
      /dob

    - Return Page Not Found for any other API.
    - Run the server on port 8080.
*/

const http = require("http");
const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url == "/firstname") {
        response.end("Nency");
    } else if (request.url == "/lastname") {
        response.end("Parmar");

    } else if (request.url == "/fullname") {
        response.end("Nency Parmar");

    } else if (request.url == "/college") {
        response.end("Parul University");

    } else if (request.url == "/dob") {
        response.end("13 March 2004");

    } else {
        response.end("page not found");
    }
});
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});