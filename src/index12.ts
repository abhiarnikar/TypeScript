interface Named {
    readonly name:string
}
interface Greet extends Named {
    greet(word:string):void;

}

class PersonU implements Named {
    name:string;
    constructor(n:string){
        this.name =n
    }

    greet(word:string){
        console.log(word)
    }

    updateName(word:string){
        this.name = word
    }

}

let userTwo:Greet = new PersonU('chinmay')
// userTwo.name = "sdd"
// userTwo.updateName('cc')
console.log(userTwo.name)