// console.log("External JS");
//button events
//normal function
function clickFunc() {
    console.log("Clicked");
}

//arrow function
let dblFunc = () => {
    console.log("Double Clicked");
};

//mouse events
let box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "crimson";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "rgb(149, 246, 251)";
});
console.log(box);

//keydown
// let btn = document.querySelector("button")
// let input = document.querySelector("input");
// input.addEventListener("keydown", (event) => {
//     console.log(event.key);
// });
let input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
    console.log(event.key);
    if(event.key == "Enter") {
        console.log("Searching...");
    }
});

//keypress : !use

