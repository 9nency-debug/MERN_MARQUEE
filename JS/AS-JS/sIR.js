// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 1000)
// console.log("C");

// function printValue(nextValue) {
function printValue(currValue, nextValue) {
    currValue(); //explore for it
    if(nextValue) {
        nextValue();
    }
}

function A(nextValue) {
    setTimeout(() =>{
        console.log("A");
        if(nextValue) {

        }
    }, 2000);
}

function B() {
    setTimeout(()=> {
        console.log("B");
        if(nextValue) {
            console.log()
        }
    }, 2000);
}

function C() {
    setTimeout(() => {
        console.log("B")
    }, 2000);
}

// printValue(A);
// printValue(B);
printValue(A, B);
A();
// B(); // aise nhi kar sakte bcz, A & B dono saath me aa jayenge
A(B(C)); //valid, here A and B are 

// call back hell
A(() => {
    B(() => {
        C();
    });
});

