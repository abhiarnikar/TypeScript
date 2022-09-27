//program 1
type Admin = {
    name:string;
    startDate:Date
}

type Employee2 = {
    name:string;
    privileges:string[]
}

type calEmployee = Admin & Employee2

let A1:calEmployee = {
    name:"abhijit",
    startDate:new Date(),
    privileges:["abhi","ram","krushna"]
}

console.log(A1)

//program 2

type com = number|string
type com2 = boolean|number
type universal = com & com2
let V1:universal = 2
console.log(V1)

//program 3

//typeGuard
//function Overloading
function add(a:number,b:number):number
function add(a:number,b:string):string
function add(a:string,b:number):string
function add(a:string,b:string):string

function add(a:com,b:com){
         if(typeof a === 'string' && typeof b ==='string'){
            return a.toString()+b.toString()
         }
         else{
            if(typeof a ==='number'&& typeof b ==='number' ){
                return a+b
            }
         }
}

let a12 = add(12,36)
console.log(a12)
let a13 = add('abhi','devyani')
console.log(a13)
let a14 = add('abhi',25)
console.log(a14)
let a15 = add(7,'devyani')
console.log(a15)

//program 4
type Admin1= {
    name:string;
    startDate:Date
}

type Employee3 = {
    name:string;
    privilege:string[]
}

type calEmployee1 = Admin1 & Employee3

function printInfo(emp:calEmployee1){
    console.log(emp)
}

printInfo({name:"kaivaly",privilege:["abhi","krushna"],startDate:new Date()})

type personA = {
    name:string;
    privilege:string[]
}
type personB = {
    name:string;
    startDate:Date
}

type PersonM = personA | personB

function printInfo1(emp:PersonM){
    if('privilege'in emp){
        console.log(emp.privilege)
    }
    else if('startDate'in emp){
        console.log(emp.startDate)
    }
}

printInfo1({name:"abhijit",privilege:["krushna","kaivaly"]})
printInfo1({name:"vishwa",startDate:new Date()})
