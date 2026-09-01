function loginUser(callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 1000);
}

function selectFood(callback) {
    setTimeout(() => {
        console.log("Pizza selected");
        callback();
    }, 2000);
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment successful");
        callback();
    }, 2000);
}

function prepareFood(callback) {
    setTimeout(() => {
        console.log("Food prepared");
        callback();
    }, 3000);
}

function deliverOrder(callback) {
    setTimeout(() => {
        console.log("Order delivered");
        callback();
    }, 2000);
}


// Callback Hell
loginUser(() => {
    selectFood(() => {
        placeOrder(() => {
            processPayment(() => {
                prepareFood(() => {
                    deliverOrder(() => {
                        console.log("Order process completed!");
                    });
                });
            });
        });
    });
});