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

