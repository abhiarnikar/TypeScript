//program 1

function add(x:number,y:number){
    console.log(x+y)
}
add(2,3)

//program 2

function addition(x,y){

    if(typeof x == 'number'  && typeof y == 'number'){
        console.log(x+y)
    }
    else{
        console.log('incorrect input')
    }
}

addition(12,13)
addition('12','25')

//program 3

function addition1(a:number,b:number,result:boolean,message:string):void{
    if(result){
        console.log(a+b)
        console.log(message)
    }
}

addition1(25,25,true,"addition done")

let x: number = 10
let y: string = "chinmay"
let z: boolean = true

//program 4
function addition2(x: number, y: number, result: boolean, message: string): number {
    if (result) {
        console.log(x + y)
        console.log(message)
        return x + y;
    } else {
        return 0;
    }
}
let sum = addition2(12, 23, true, "addition done")
console.log(sum)

//object

let info:object ={
    firstName:"Abhijit",
    lastName:"Arnikar",
    age:26

}
console.log(info)

let info2:{
    firstName:string;
    lastName:string;
    age:number

} = {
    firstName:"krushna",
    lastName:"arnikar",
    age:4,
}
console.log(info2)