//program 1 
function add(a:number,b:number){
    console.log(a+b)
}
add(12,65)

//program 2

function additionA(x:number,y:number){
    if(typeof x == "number" && typeof y == "number" ){
        console.log(x+y)
    }
    else{
        console.log('please enter correct input')
    }
}

additionA(36,45)

// basic data type 
// let s1 = 10
// s1 ='ch'

//program 3

function subtraction(a:number,b:number,result:boolean,message:string){
    if(result){
        console.log(message)
        console.log(a-b)
    }
}
subtraction(78,36,true,"abhi")

//program 4
function multiplication(x:number,y:number):void{
    console.log(x*y)
}
multiplication(12,13)

// Tuple (array of fixed length and specfic data type)

let role:[number,string] = [12,"krushna"]
role.push(45)
console.log(role)

//program 5 Union

let bn: number|string|true = 25

function additionB(p:number|string,q:number|string){
    if(typeof p == "number" && typeof q == "number"){
        console.log(p+q)
    }
    else{
        console.log(Number(p)+Number(q))
    }
}

additionB(24,26)
additionB(36,25)

// program 9
let infoZ:object = {
    firstName:"chinmay",
    lastName:"deshpande"
}
console.log(infoZ)

let infoP:{
    firstNumber:string,
    lastName:string
} = {
    firstNumber:"chinmay",
    lastName:"deshpande" , 
}

//type  ||
type person = {
    firstName:string;
    lastName:string;
    age:number;
    skills:string[]
}

let infoNM:person = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    skills:["chinmay","poorva"]
}
console.log(infoNM)
