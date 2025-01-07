class Employee{
    readonly empId :number;
     first: string;
    last : string;
    static age:number =29;

    constructor( empId :number,first :string,last : string){
        this.empId=empId;
        this.first=first;
        this.last = last;
    }
   
     public getFullname ():string{
        return this.first + this.last;
    };

    public set(Fname:string){
        this.first=Fname;
    }

    static getAge(){
        return this.age;
    }
}

let employee= new Employee(101,"abc","***");
// employee.first="ccbjh"; first private

console.log(employee.getFullname());

// employee.empId=105;  cnt reassign value because of readonly property
console.log(employee.empId);
employee.set("###")
console.log(employee.getFullname());


class Emp1 extends Employee{
    last:string;
    
   constructor(last : string){
        super(employee.empId,employee.first,last);
        this.last=last;
   }
   public getFullname ():string{
    return super.getFullname(); // return "child class";
};
   
}
 let emp1=new Emp1("gtgt");

 console.log(emp1.getFullname());

//static------------------>

console.log(Employee.age); // static variable

console.log(Employee.getAge()); // static method 



// abstract----------------------->

abstract class Model{
    abstract carName:string;
    // constructor(carName : string){ this.carName=carName}

    abstract getName():string;
}

class Child extends Model{
    carName: string;

    constructor(carName : string){ 
        super();
        this.carName=carName
    };

   
    
    getName(): string {
        throw new Error("Method not implemented.");
    }
    
}
class Big extends Model{
    carName: string;

    constructor(carName : string){ 
        super();
        this.carName=carName
    };

   
    
    getName(): string {
        throw new Error("Big class Method .");
    } 
}

let child=new  Child("tata");
 

interface Person{
    fname: string;
    mName?: string;
    lname : string;
    readonly age ?:number;
}
function personDetails(person :Person){
    return person.fname;
}

let person1={
    fname:"aaa",
    lname:"bbb"
};

console.log(personDetails(person1));


// interface function----------------->
interface FunExample{
    (x: number,y:number):number
}

let funExm: FunExample;

funExm=function (a:number , b:number){
    return a+b;
}

console.log(funExm(5,8));


interface Inter{
    a():void;
}
class NewClass implements Inter{
//   private id:number=101;
    a(): void {
        console.log("Newclass A method");
        
    }

}

interface Inter1 extends NewClass{
        b():void;
        
}

class NewClass1 implements Inter1{
    
    b(): void {
       console.log("NewClass1 B method");
       
    }
    a(): void {
        
        console.log("A Method.");
    }
    
}

let obj=new NewClass1();
obj.a();



// INTERSECTION &

interface Identity {
    id: number;
    name: string;
}

interface Address {
    email: string;
    phone: number;
}

type details= Identity & Address;

let emp: details = {
    id:106,
    name:"aaa",
    email:"@gmail.com",
    phone:123456789,
}

console.log(emp);

function getGeneric<G>(arr : G[]) : G{
    return arr[1];
}

function merge<a extends object, b extends object>(obj1 : a, obj2 : b){
    return {
        ...obj1,...obj2,
    }
}

console.log(merge({name:"aaa",age :25},{state:"karnataka"}));

function prop<O,K extends keyof O>(obj : O, Key: K){
        return obj[Key];
}

console.log(prop({ name: 'btt' }, 'name'));

