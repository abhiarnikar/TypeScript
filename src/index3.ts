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