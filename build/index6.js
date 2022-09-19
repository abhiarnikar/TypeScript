"use strict";
class father {
    constructor(firstName, lastName) {
        this.city = "pune";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log(this.firstName, this.lastName);
    }
}
class son extends father {
    constructor(firstName, lastName, sName) {
        super(firstName, lastName);
        this.sonName = sName;
    }
    display() {
        console.log(this.sonName + this.lastName);
        console.log(this.lastName);
        super.display();
    }
}
let abhijit = new son("ashok", "arnikar", "abhijit");
abhijit.display();
// private ------> within class
// public ---- class , in extended class , outside class
// protected --- in class and in extended class
