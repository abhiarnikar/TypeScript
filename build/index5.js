"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.fullName;
        n;
    }
    describe() {
        console.log(`Department ${this.fullName}`);
    }
    addEmployee(employeeName) {
        this.employees.push(employeeName);
    }
    information() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// program 2
// private fields cannot be accessed outside class
// use getter and setter method to access same
let admin = new Department('Admin');
admin.addEmployee("abhijit");
admin.addEmployee('krushna');
// public
admin.fullName = "Accounting";
admin.country = "pakistan";
// read only and const
//class ----->  construtor , object 
// method copy 
// public , private , readonly
// program -- 1 (method copy)
// let admin = new Deparment('Admin')
// admin.describe()
// console.log(admin)
// let admin2 = {
//     fullName:"Accouting",
//     describe:admin.describe
// }
// admin2.describe()
