let info4:{
    firstName1:string,
    lastName1:string,
    skills:[number,string]

} = {
    firstName1:"abhijit",
    lastName1:"arnikar",
    skills:[25,"abhi"]
}

info4.skills[0]= 1
info4.skills.push("python")

//program 3

// Union Type

function addition(x: number|string,y:number|string){
    if(typeof x == 'number' && typeof y == 'number'){
        console.log(x+y)
    }
    else{

        console.log(Number(x)+Number(y))

    }
}

addition(65,45)
addition('45','14')

// Union
type Result = number|string|boolean
// let a:number|string = "10"
// let b:number|string|boolean = true
let a:Result = "10"
let b:Result = true

//literals

type firstName = "abhijit"|"devayni"
type lastName = "arnikar"|"deshpande"

let info:{
    firstName:firstName,
    lastName:lastName
}={
    firstName:"devayni"
    lastName:"arnikar"
}

// program

type parent = {mother:string,father:string}

let info6:parent = {
    mother:"sunanda",
    father:"ashok"
}

// program5

// let role = "read_only";
// let role2 = "read_and_write";
// let role3 = 'admin'

enum Roles {
    "read_only"=1,
    "read_and_write",
    'admin',
    'customer'
}

enum Account {
    'saving'=1,
    'current'
}

if(Roles.read_only){
    console.log('reading only')
}
if(Roles.read_and_write){
    console.log('read and write ')
}
if(Roles.admin){
    console.log('admin')
}
if(Roles.customer){ // role == "customer"

}
if(Account.saving){

}
if(Account.current){
    
}
