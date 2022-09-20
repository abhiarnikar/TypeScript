"use strict";
class PersonD {
    // public firstName:string;
    // public lastName:string;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.firstName = firstname
        // this.lastName= lastName
    }
    display() {
        console.log(this.firstName + this.lastName);
    }
}
let obj = new PersonD("devyani", "arnikar");
obj.display();
//program 2
class PersonB {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log(this.firstName, this.lastName);
    }
    // getter method
    getName1() {
        return this.firstName;
    }
    getName2() {
        return this.lastName;
    }
    // setter method
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter method
    get getName3() {
        return this.firstName;
    }
    get getName4() {
        return this.lastName;
    }
    // setter method
    set setName1(firstName) {
        this.firstName = firstName;
    }
}
let obj2 = new PersonB("sachin", "tendulkar");
console.log(obj2.getName1());
console.log(obj2.getName2());
obj2.setName("virendra", "sehwag");
console.log(obj2.getName1());
console.log(obj2.getName2());
console.log(obj2.getName3);
console.log(obj2.getName4);
obj2.setName1 = "sachin";
console.log(obj2.getName3);
//---------------------------------------------------------------->
class vehicle {
    constructor(color) {
        this.color = color;
    }
    display() {
        console.log(this.color);
    }
    get getcolor() {
        return this.color;
    }
    set setcolor(color) {
        this.color = color;
    }
}
let Audi = new vehicle("white");
console.log(Audi.getcolor);
Audi.setcolor = "red";
console.log(Audi.getcolor);
// program 3
// Inheritance
class fatherA {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(this.firstName, this.lastName);
    }
}
class sonA extends fatherA {
    constructor(firstName, lastName, sonName) {
        super(firstName, lastName);
        this.sonName = sonName;
    }
    displayName() {
        console.log(this.sonName + this.lastName);
        super.displayName();
    }
}
let AbhijitA = new sonA("ashok", "arnikar", "abhijit");
// program 4
class WorldBank {
    country() {
        console.log('india');
    }
}
class SBI extends WorldBank {
    loan(interest) {
        console.log(`Hello i am sbi loan interest ${interest}`);
    }
    save(interest) {
        console.log(`Hello i am sbi saving interest ${interest}`);
    }
}
class ICIC extends WorldBank {
    loan(interest) {
        console.log(`Hello i am ICIC loan interest ${interest}`);
    }
    save(interest) {
        console.log(`Hello i am ICICI saving interest ${interest}`);
    }
}
//let wb = new WorldBank()
// let sbi = new SBI()
// we cannot create object of abstract class
// if abstract class is having abstract methods , those who inherit abstract class need to
// give definition for methods
// abstract class can have abstract and and non abstract method
