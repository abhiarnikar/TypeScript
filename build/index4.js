"use strict";
function add1(x, y) {
    console.log(x + y);
}
add1(12, 2);
function add2(x, y) {
    console.log(x + y);
    return;
}
add2(12, 10);
//program 1
function displayFullname(firstName, lastName) {
    return firstName + lastName;
}
let q = displayFullname("abhijit", "arnikar");
//program 2
function ad(a, b) {
    return a + b;
}
function displaytResult(a, b, fn) {
    console.log(`result of sum ${fn(a, b)}`);
}
displaytResult(45, 52, ad);
//program 3
function displaytResult1(a, b, fn) {
    console.log(`result of sum ${fn(a, b)}`);
}
displaytResult1(36, 36, ad);
//program 4
class Person {
    constructor() {
        this.name = "abhijit";
    }
}
let info5 = new Person;
console.log(info5.name);
// program 5
// public , private , protected , default
class PersonA {
    constructor(name) {
        this.age = 29;
        this.firstName = name;
    }
    // getter method
    getName() {
        return this.firstName;
    }
    // setter 
    setName(j) {
        this.firstName = j;
    }
}
let a22 = new PersonA("abhijit");
// private
console.log(a22.firstName);
console.log(a22.age);
console.log(a22.getName());
a22.setName("vishwa");
console.log(a22.getName());
