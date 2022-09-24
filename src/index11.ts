interface Greetable {
    name:string
    greet(word:string):void
    display(year:number):void;
}

interface Year{
    year:number
    display(year:number):void;
    
}

class PersonK implements Greetable,Year{
    name:string
    year:number
    age:30;
    constructor(name:string,year:number){
        this.name= name
        this.year= year
    }

    greet(word:string):void{
        console.log(`${word} ${this.name}`)
    }
    display(year:number){
        console.log(year)
    }
}

let kaivaly:PersonK = new PersonK("kaivaly",2015)
console.log(kaivaly)
kaivaly.greet('hello')
kaivaly.display(2015)