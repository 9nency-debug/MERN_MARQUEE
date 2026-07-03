// assignin, arithmatic, relational. logivcal, bitwise
// # operators

/*
===================================
1. Arithmetic Operators 
===================================
*/

console.log(3+2);
console.log(10-30);
console.log(23%15);
console.log(3 ** 3); // 3^3 = 27 ->o/p

/*
===================================
2. Assignment Operators 
===================================
*/

let n = 10;
n+=20;  
console.log(n);

// += , -= , /= , *= , %=

/*
===================================
3. Relational/Conditional Operators
===================================
*/

// >, <, ==, ===, >= , <= , !=, !==
let n = "23";
let m = 23;
console.log(n==m); // == -> compares value, but not datatype
console.log(n===m); // === -> compares datatype comparision not value
console.log(n!=m);  // false -> due to '=' (single equals to)
console.log(n!==m);

/*
===================================
4. AND,OR & NOT Operators
===================================
*/

console.log(true && true); // true
let n = 10;
console.log(n>10 && n< 10); // false
console.log(n>=10 || n<10); // true->because of the 1st condition
console.log(!true); // false
console.log(!n>10 || n<10); // false: !=> false + n<10 => false-> both false

/*
===================================
5. Unary Operator
===================================
*/

let n = 10;
console.log(n++); // 10
console.log(++n); // 12
console.log(--n + n++); // 22

/*
===================================
6. Bitwise Operator()
===================================
*/

console.log(1 & 2);
// 0001 & 0010 ; 0000 -> 0=false, 1=true;
console.log(1 | 2);
// 0001 & 0010 ; 0011 -> 3
console.log(1 ^ 2); // => both values same false
// 0001 ^ 0011 ; 0010 -> 2

console.log(3 >> 1);
// 0011 -shift-> 1 01 001 => 0001  

console.log(3 << 1);
// 0011 -shift-> 0110 -> 6

console.log(4 << 2);
// 0100 -shift-> 10000 -> 16


