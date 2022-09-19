"use strict";
function addition(a, b) {
    console.log(a + b);
}
addition(24, 36);
//program
function addition1(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log('please enter correct input');
    }
}
addition1(78, 69);
// Function 
//  program 2
// void not returning anythin ====> donot use return key word
function add(p, q) {
    console.log(p + q);
}
add(36, 14);
let s = add(45, 36);
console.log(s);
function add(x, y) {
    console.log(x + y);
    return;
}
let y = add(12, 13);
console.log(y);
function additionA(p, q, result, greet) {
    if (result) {
        console.log(greet);
        console.log(p + q);
        return p + q;
    }
    else {
        return 0;
    }
}
let r = additionA(24, 14, true, "abhi");
// program 4
// type - object 
let info6 = {
    firstName: "kaivaly",
    lastName: "anrikar",
    age: 12
};
console.log(info6);
let info8 = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12
};
let person = {
    firstName: "krushna",
    lastName: "arnikar",
    mobileNo: 5456566,
    ismarried: false
};
console.log(person);
// program
let marks = [45, 65, 47];
let names = ["abhi", "ram", "krushna"];
console.log(marks);
console.log(names);
let marksA = [45, 36];
marksA.push(55);
console.log(marksA);
