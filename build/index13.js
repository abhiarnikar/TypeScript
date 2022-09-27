"use strict";
let A1 = {
    name: "abhijit",
    startDate: new Date(),
    privileges: ["abhi", "ram", "krushna"]
};
console.log(A1);
let V1 = 2;
console.log(V1);
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
    }
}
let a12 = add(12, 36);
console.log(a12);
let a13 = add('abhi', 'devyani');
console.log(a13);
let a14 = add('abhi', 25);
console.log(a14);
let a15 = add(7, 'devyani');
console.log(a15);
function printInfo(emp) {
    console.log(emp);
}
printInfo({ name: "kaivaly", privilege: ["abhi", "krushna"], startDate: new Date() });
function printInfo1(emp) {
    if ('privilege' in emp) {
        console.log(emp.privilege);
    }
    else if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printInfo1({ name: "abhijit", privilege: ["krushna", "kaivaly"] });
printInfo1({ name: "abhijit", startDate: new Date() });
