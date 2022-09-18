function add1(x:number,y:number):void{
       console.log(x+y)
}
add1(12,2)

function add2(x:number,y:number):undefined{
    console.log(x+y)
    return ;
}
add2(12,10)

//program 1

function displayFullname(firstName:string,lastName:string){
    return firstName + lastName
}

let q = displayFullname("abhijit","arnikar")

//program 2

function ad(a:number,b:number){
    return a+b
}

function displaytResult(a:number,b:number,fn:function){
    console.log(`result of sum ${fn(a,b)}`)
}
displaytResult(45,52,ad)

//program 3

function displaytResult1(a:number,b:number,fn:(a:number,b:number) => number){
    console.log(`result of sum ${fn(a,b)}`)
}
displaytResult1(36,36,ad)


//program 4

class Person {
    name:string= "abhijit"
}

let info5 = new Person

console.log(info5.name)

// program 5
// public , private , protected , default

class PersonA {
    private firstName:string ;
    private age:number = 29;
    public constructor(name:string){
        this.firstName = name;
    }

    // getter method
    public getName():string{
        return this.firstName
    }
    // setter 
    public setName(j:string){
        this.firstName = j
    }
}

let a22 = new PersonA("abhijit");
// private
console.log(a22.firstName)
console.log(a22.age)
console.log(a22.getName())
a22.setName("vishwa")
console.log(a22.getName())
