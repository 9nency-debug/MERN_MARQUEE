// let buttons = document.querySelectorAll(".button");
// let display = document.querySelector(".display");
// let expression = "";
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let value = button.innerText;
//         if(value == "AC"){
//             expression = "";
//             display.innerText = "0";
//         }
//         else if(value == "="){
//             let answer = eval(expression);
//             display.innerText = answer;
//             expression = answer.toString();
//         } else{
//             expression = expression + value;
//             display.innerText = expression;
//         }
//     });
// });

let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let expression = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.innerText;
        if(value == "AC"){
            expression = "";
            display.innerText = "0";
        }
        else if(value == "C"){
            expression = expression.slice(0, expression.length - 1);
            if(expression == ""){
                display.innerText = "0";
            } else {
                display.innerText = expression;
            }
        }
        else if(value == "="){
            let answer = eval(expression);
            display.innerText = answer;
            expression = answer.toString();
        } else {
            expression = expression + value;
            display.innerText = expression;
        }
    });
});