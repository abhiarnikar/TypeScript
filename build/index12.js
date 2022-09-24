"use strict";
class PersonU {
    constructor(n) {
        this.name = n;
    }
    greet(word) {
        console.log(word);
    }
    updateName(word) {
        this.name = word;
    }
}
let userTwo = new PersonU('chinmay');
// userTwo.name = "sdd"
// userTwo.updateName('cc')
console.log(userTwo.name);
