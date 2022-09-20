class PersonD {
    // public firstName:string;
    // public lastName:string;

    constructor(public firstName:string,public lastName:string){
        // this.firstName = firstname
        // this.lastName= lastName
    }
    display(){
          console.log(this.firstName+ this.lastName)
    }
}

let obj = new PersonD("devyani","arnikar")
obj.display()


//program 2
class PersonB {

    constructor(private firstName:string,private lastName:string){

    }
    display(){
        console.log(this.firstName,this.lastName)
    }
    // getter method
    getName1(){
        return this.firstName
        
    }
    getName2(){
        return this.lastName
    }
    // setter method
    setName(firstName:string,lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
    // getter method
    get getName3(){
        return this.firstName
        
    }
    get getName4(){
        return this.lastName
    }
    // setter method
    set setName1(firstName:string){
        this.firstName = firstName
       
    }


    
}

let obj2 = new PersonB("sachin","tendulkar")
console.log(obj2.getName1())
console.log(obj2.getName2())

obj2.setName("virendra","sehwag")

console.log(obj2.getName1())
console.log(obj2.getName2())

console.log(obj2.getName3)
console.log(obj2.getName4)

obj2.setName1 = "sachin"

console.log(obj2.getName3)

//---------------------------------------------------------------->

class vehicle{

    constructor(private color:string){

    }
    display(){
        console.log(this.color)
    }

    get getcolor(){
        return this.color
    }

    set setcolor(color:string){
        this.color=color
    }
}

let Audi = new vehicle("white")
console.log(Audi.getcolor)

Audi.setcolor = "red"

console.log(Audi.getcolor)

// program 3
// Inheritance











