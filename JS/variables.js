/*
===================================
1. var 
===================================
*/
var num; // var declairation
var num = 10; // var assigning
num = 20; // var re-assigning
console.log(num);
var num = 30 // redeclairing the var
// redeclairation + reassigning => both valid in var

/*
===================================
2. let 
===================================
*/

let name= "Virbhadra";
console.log(name);
//reassigning allowed in let also, but redecaliration not allowed
name="Kalbhairav"; 

// let name="HERO"; // Error: Identifier 'name' has already been declared

/*
===================================
3. const 
===================================
*/

const py = 3.14;
console.log(py);

// imp diff. for frontend: diff. b/w let, var & const.

let num = 10;
num = "10";
let name = "Mahadev";
let isOkay = true;
let myValue;
let muNullValue = null;
console.log(num + 3);

/*
===================================
* Array 
===================================
*/

let arr = [1, "Shiv", 3, false, 5];
console.log(arr[2]);

/*
===================================
@ OBJECT – key value pairs
===================================
*/

let obj = {
    name: 'Mahakali', // , => for adding multiple value
    age: 23
}
// after making whole obj, adding any key further by .
obj.roll = 12;
console.log(obj);
// . => for axising the values of object
console.log(obj.age);
// method - 2) to print obj except .
console.log(obj["name"]);
// another way to add key value pair in obj
obj["mobileno"] = "100"; // more usuable in js

// to store var and it's value in object
let x = "mobileno";
obj[x] = "100" 
// key should not be dublicate -> should be unique , values can be dublicate

// only accessing the keys of an obj
// Object naam ka parent hota hai
console.log(Object.keys(obj)) // ['name', 'age', 'roll', 'mobileno']
console.log(Object.values(obj)) // ['Mahakali', '23', '12', '100']

/*
===================================
 METHODS
===================================
*/

/*
===================================
 
===================================
*/

