"use strict";
//program 1 
function add(a, b) {
    console.log(a + b);
}
add(12, 65);
//program 2
function additionA(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log('please enter correct input');
    }
}
additionA(36, 45);
// basic data type 
// let s1 = 10
// s1 ='ch'
//program 3
function subtraction(a, b, result, message) {
    if (result) {
        console.log(message);
        console.log(a - b);
    }
}
subtraction(78, 36, true, "abhi");
//program 4
function multiplication(x, y) {
    console.log(x * y);
}
multiplication(12, 13);
// Tuple (array of fixed length and specfic data type)
let role = [12, "krushna"];
role.push(45);
console.log(role);
//program 5 Union
let bn = 25;
function additionB(p, q) {
    if (typeof p == "number" && typeof q == "number") {
        console.log(p + q);
    }
    else {
        console.log(Number(p) + Number(q));
    }
}
additionB(24, 26);
additionB(36, 25);
// program 9
let infoZ = {
    firstName: "chinmay",
    lastName: "deshpande"
};
console.log(infoZ);
let infoP = {
    firstNumber: "chinmay",
    lastName: "deshpande",
};
let infoNM = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12,
    skills: ["chinmay", "poorva"]
};
console.log(infoNM);
