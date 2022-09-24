interface PersonA {
    name:string;
    age1:number;
    greet(word:string):void
}

type PersonQ={
    name:string;
    age1:number;
    greet(word:string):void
}

let user1:PersonQ={
     name:"abhijit",
     age1:1991,
     greet:(word:string)=>{
        console.log(word)
     }
};
user1.greet('namskar')

let user2:PersonQ={
    name:"vishwa",
    age1:1992,
    greet:(word:string)=>{
       console.log(word)
    }
};
user2.greet('vishwa')
// type and interface 

type greet = string|boolean|number
type nameH = 'ram'|'sham'