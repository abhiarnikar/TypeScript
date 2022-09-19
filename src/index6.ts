class father {
    public firstName:string;
    protected lastName:string;
    private city:string = "pune"

    constructor(firstName:string,lastName:string){
        this.firstName= firstName
        this.lastName= lastName
    }

    display(){
        console.log(this.firstName,this.lastName)
    }
}

class son extends father{
    sonName:string;
    constructor(firstName:string,lastName:string,sName:string){
        super(firstName,lastName)
        this.sonName= sName
    }
    display(){
        console.log(this.sonName+ this.lastName)
        console.log(this.lastName)
        super.display()
    }
}

let abhijit = new son("ashok","arnikar","abhijit")

abhijit.display()
// private ------> within class
// public ---- class , in extended class , outside class
// protected --- in class and in extended class