// className : forEach loop ❌ apply
let buttons = document.querySelectorAll("button");
let total = "";
let display = document.querySelector("input");
// console.log(buttons);

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", () => {
        total = total + button.innerText;
        // console.log(button.innerText);
        display.value = total;
        console.log(total);

        if(button.innerText == "=") {
            // total = eval(total);
            total = eval(total).toString();
            display.value = total;
        } else if(button.innerText == "AC") {
            total = "";
            display
        }
        
        else {
            total = total + button.innerText;
            display.value = total;
        }
        if(button.innerText == "C") {
            
        }
    });
});



// var total: whenever user clicks on it in console it get prints
