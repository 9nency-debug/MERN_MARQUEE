// let HOD;
// let MFT;
// let Student;

// Student -> Leave Letter
let Student = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let application = "Leave application";
            if(application) {
                resolve(application);
            } else {
                reject("Student did not send the leave application");
            }
        }, 2000);
    });
};

// Received By MFT -> sent -2-> the HOD ma'am
let mft = (application) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(application) {
                console.log("MFT received the application");
                resolve("Application forwarded to HOD ma'am");
            } else {
                reject("MFT di not received the application");
            }
        }, 2000);
    });
};

// HOD checks and approves/rejects leave
let hod = (applicationStatus) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isApproved = false;
            if(isApproved) {
                resolve("Leave Approved");
            }else{
                reject("Leave Not Approved");
            }
        },2000);
    });
};

Student()
    .then((application) => {
        console.log("Student sent:", application);
        return mft(application);
    }).then((mftResponse) => {
        console.log(mftResponse);
        return hod(mftResponse);
    }).then((hodResponse) => {
        console.log(hodResponse);
    }).catch((error) => {
        console.log(error);
    });

    // Developers kabhi Promises nhi likhte

    // https://dummyjson.com/ }-> domain 
    // https://dummyjson.com/products }-> end point of APIs
    