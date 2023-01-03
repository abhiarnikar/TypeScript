interface info{
    firstName:string,
    lastName:string,
    age:number,
    display:()=>string

}

let person4:info={
     
      firstName:'abhijit',
      lastName:'arnikar',
      age:31,
      display:function(){
        return 'abhijit'
      }
}


console.log(person4)
console.log(person4.display())

