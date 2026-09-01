// // /* 
// // ===============================
// // Promises
// // ===============================
// // – promise is a class jiska hum obj. banate hai
// // */ 

// // // let result = new Promise((resolve, reject) => {
// // //     console.log("promise");
// // // });
// // // console.log(result);

// // // let result = new Promise((resolve, reject) => {
// // //     resolve("resolve");
// // // });
// // // console.log(result);

// // // let result = new Promise((resolve, reject) => {
// // //     reject("reject");
// // // });
// // // console.log(result);

// // // pending by default: pending

// // let result = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("user found")
// //     }, 3000);
// // })
// // console.log(result);

// // //try catch block

// // result.then((resolve) => {
// //     console.log(resolve);
// // }).catch((error) => {
// //     console.log(error);
// // })

// // three stages : pending, resolved, regected

// // Company -> 1st priority
// let company = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             // token value pass to company
//             if(tokan >= 50000) {
//                 res(500); // as a response bikes -> send
//             } else {
//                 rej("promise not fullfilled by company");
//             }
//         }, 3000);
//     });
// }

// let result = company(50000);
// result.then((res) => {
//     console.log(res);
//     return dealer(res); // issue
// }).then((res) => {
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej);
// })

// // company to dealer
// let dealer = (bikes) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(bikes >= 500) {
//                 res(50);
//                 // console.log("");
//             } else {
//                 rej("Promise rejected by Dealer");
//             }
//         }, 3000);
//     })
// }

// let seller = ()=> {
// return Promise((res, rej)) > {
//     setTimeout(() => {
//         if(bikes >=50) {
//             res("res");
//         } else {
//             rej("rej");
//         }
//     }, 3000);
// }
// }

// let customer = (bike) => {
//     else {
//         rej("bike not available")
//     }
// }, 3000);
// }
// catch only one why? at any worst 
//̐ option + 9

/* 
===============================
Async, Await
===============================
*/

async function handleAsync() {
    // let result = complay(50000);
    let result = await company(5000);
    console.log(result);
    result = await dealer (123);
    console.log(result);
}

//based on this; Design a promise for talking a leave from the college }-> letter GOES FROM THE STUDENT, AND send to the mft - if promise fullfilled then letter reaches to the HOD and if HOD approved it then, print Leave approved or not

// ___

// 1/09/2026

// console.log("A");
// setTimeout(() => {
//     console.log("A");
// }, 2000);

/* wrapping it in function */
function printA() {
    setTimeout(() => {
        console.log("A");
    }, 2000);

}
function printB(){
    setTimeout(() => {
        console.log("B");
    }, 3000);
}

function printC() {
    setTimeout(() => {
        console.log("C")
    }, 2000);
}

printA()
printB()
printC()

// o/p: A C B

// pass printB to printA function}-> callback function
// here callback is a parameter it can be anything

function printA(callback) {
    setTimeout(() => {
        console.log("A");
        if(callback) {
            callback();
        }
    }, 2000);
}
printA();

function printB(callback) {
    setTimeout(() => {
        console.log("B");
        if(callback) {
            callback();
        }
    }, 2000);
}
// printB();
printA(printB()); // We can't pass normally with parameter to printA function, we have to wrap it first

// printA(() => {
//     printB();
// });

printA(() => {
    printB(() => {
        printC()
    });
});

// this structure itself is consider as callBack hell
// problem in callback hell: jab tak above execution is pending, we are not going beyond to execute our further function. }-> solved by promise(obj.(it is a class we are making its obj.))

let value = new Promise((resolve, reject) => {
    // if(5 % 2 == 0) {
    //     resolve("success");
    // } else {
    //     reject("Failed");
    // }

    // for pending state
    setTimeout(() => {
        if(5 % 2 == 0) {
            resolve("success");
        } else {
            reject("Failed");
        }
    }, 2000);
});
// console.log(value);

// setTimeout(() => {
//     console.log(value);
// }, 4000);

value.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});
// To handle the error part(reject)
// value.catch((reject) => {
//     console.log(reject);
// });

// ---

/*
function printA(callback) {
    setTimeout(() => {
        console.log("A");
        if(callback) {
            callback();
        }
    }, 2000);
}

printA();

function printB(callback) {
    setTimeout(() => {
        console.log("B");
        if(callback) {
            callback();
        }
    }, 2000);
}

printA(() => {
    printB(() => {
        printC()
    });
});
*/

/* Via Promise */
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

// Promise chaining
printA()
    .then(() => {
        return printB();
    })
    .then(() => {
        return printC();
    });

// sir

let value = new Promise((res, rej) => {
    setTimeout(() => {
        res("A");
    }, 3000);
});

function getPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("B");
        }, 2000);
    });
}

//Promise chain
value.then((res) => {
    console.log(res);
    return getPromise();
    // return new Promise((res, rej) => {
    //     setTimeout(() => {
    //         rej("B");
    //     }, 2000);
    // })
})
.then((res) => {
    console.log(res);
})
.catch((rej) => {
    console.log("error " + rej);
});

// catch block only runs once.

// long cut
// let nextValue = value.then((res) => {
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej);
// })

let nextValue = value.then((res) => {
    console.log(res);
    return getPromise();
}).catch((rej) => {
    console.log(rej);
});

// console.log(nextValue);
// not optimal code, because at every me;vement this you
nextValue.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
});



//Imp. question for interview: promise chain