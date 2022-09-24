"use strict";
class PersonK {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    greet(word) {
        console.log(`${word} ${this.name}`);
    }
    display(year) {
        console.log(year);
    }
}
let kaivaly = new PersonK("kaivaly", 2015);
console.log(kaivaly);
kaivaly.greet('hello');
kaivaly.display(2015);
