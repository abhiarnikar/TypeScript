interface Greetable {
    name:string
    greet(word: string):void
}

class PersonZ implements Greetable{
    name:string
    age2:number
    constructor(name:string,age2:number){
        this.name= name
        this.age2=age2
    }

  greet(word:string):void{
    console.log(`${word} ${this.name}`)
  }
  display(){
    console.log('ram')
  }
}

let krushna:PersonZ=new PersonZ("krusna",4)
krushna.greet('hello')
krushna.display()