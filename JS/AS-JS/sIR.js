function A(nextValue) {
    setTimeout(() => {
        console.log("A");

        if (nextValue) {
            nextValue();
        }
    }, 2000);
}

function B(nextValue) {
    setTimeout(() => {
        console.log("B");

        if (nextValue) {
            nextValue();
        }
    }, 2000);
}

function C() {
    setTimeout(() => {
        console.log("C");
    }, 2000);
}

A(() => {
    B(() => {
        C();
    });
});
