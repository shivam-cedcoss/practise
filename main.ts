export {}
let name:string = "satyam";
let num:number = 100;
let start:boolean = true;
// Declaring array
let arr1 : number[]=[1,2,3,4,5,6,7];
let arr2:Array<number> = [11,22,33,44,55];

// Type enum
enum color {red = 5,green,blue}
let c=color.green

// assigning value to variable give them that type 
// here variable is of type any
let a;
a=10;
a=true;
// here b is of type that given type
let b = 10;
// b=false

// function typechecking with required parameter
function add(num1:number,num2:number){
    console.log(num1 + num2)
}
add(10,20)

// function typechecking with optional parameter
function sub(num1:number, num2?:number){
    if(num2){
        console.log(num1 - num2);
    }
    else{
        console.log(num1)
    }
}
sub(20,300)

// function typechecking with default parameter
function mul(num1:number,num2:number=10){
    console.log(num1 * num2)
}
mul(1000)

// passing object in function

function fullName(person:{firstname:string,lastname:string}){
    console.log(person.firstname,person.lastname)
}
let n = {
   firstname:"abc",
   lastname:"xyz"
}
// fullName({firstname:"abc",lastname:"xyz"})
fullName(n)

// Interface
interface Detail {
    name:string,
    age:number,
    address:string,
    mobile:number
}
function userDetail(person:Detail){
    console.log(person.name)
    console.log(person.age)
    console.log(person.address)
    console.log(person.mobile)
}
let x={
    name:"Arvind",
    age:21,
    address:"Lucknow",
    mobile:12345
}
userDetail(x)