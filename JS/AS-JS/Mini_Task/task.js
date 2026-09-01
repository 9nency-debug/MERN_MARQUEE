function loginUser(callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 1000);
}

function selectDestination(callback) {
    setTimeout(() => {
        console.log("User Selected the Destination");
        callback();
    }, 1000);
}

function SelectPassanger(callback) {
    setTimeout(() => {
        console.log("Passanger has been created!");
        callback();
    }, 1000);
}

