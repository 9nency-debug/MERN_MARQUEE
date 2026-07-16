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

//keyup: when you release the key | single time use
input.addEventListener("keyup", (event) => {
    console.log(event.key);
    if(event.key == "Enter") {
        console.log("Searching...");
    }
});

//How to read values from the input:-> input event
input.addEventListener("input", (event) => {
    // console.log(event);
    console.log(event.target.value);
});

//change
input.addEventListener("change", (event) => {
    console.log(event.target.value);
});

//Read->dropdownlist
let select = document.getElementById("select");
select.addEventListener("change", (event) => {
    console.log(event.target.value);
});

//rest 2 methods will work on window object
//resize 
window.addEventListener("resize", () => {
    console.log("Resized Called");
});

//scroll
window.addEventListener("scroll", () => {
    console.log("scroll called");
});

//input,change,dbl,click,mousein,mouseout;> MOST IMP
//keypress : !use

