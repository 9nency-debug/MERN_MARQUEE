function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// module.exports = add;
module.exports = { add, sub };

/*
    These are called custom modules.
    Modules allow us to divide different tasks into
    separate files and keep the code organized.

    MVC Pattern:
    - Model      -> Database / data
    - View       -> User interface
    - Controller -> Application logic

    In an application, different responsibilities are
    divided into separate modules for better organization.
*/