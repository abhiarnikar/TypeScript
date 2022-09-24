"use strict";
// we cannot use static method and properties inside non-static things with this 
// if you want to call out you can callout with this keyword
// Interface cannot be assign a value , they all are abstract
// Interface is always related with object
// Interface can only have read only property
// Interface can be split
// What are static method and properties
class Employee {
    constructor(id, country) {
        this.id = id;
        this.country = country;
        this.year = Employee.currentYear;
    }
    static CreateEmployee(name) {
        return { fullName: name };
    }
}
Employee.currentYear = 2022;
console.log(Employee.currentYear);
console.log(Employee.CreateEmployee("abhijit arnikar"));
console.log(Math.PI);
console.log(Math.floor(12.3));
let abhijit1 = new Employee(25, 'india');
console.log(abhijit1);
console.log(abhijit1.year);
// Singleton pattern
//this Pattern is used when we want to create Only one Object from class
class Accounting {
    constructor(id, reports) {
        this.id = id;
        this.reports = reports;
    }
    static getinstance() {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(45, '4566');
        return this.instance;
    }
}
// private constructor are not accessible outside the class
// let account = new Accounting(2,'2022')
// let account2 = new Accounting(3,'2023')
// console.log(account)
// console.log(account2)
let a1 = Accounting.getinstance();
console.log(a1);
let b1 = Accounting.getinstance();
console.log(b1);
// private constructor 
// instance variable which is of type class
// write a static method to check same instance value 
//(undefined)
// call the static method on class name
