"use strict";
class PersonZ {
    constructor(name, age2) {
        this.name = name;
        this.age2 = age2;
    }
    greet(word) {
        console.log(`${word} ${this.name}`);
    }
    display() {
        console.log('ram');
    }
}
let krushna = new PersonZ("krusna", 4);
krushna.greet('hello');
krushna.display();
