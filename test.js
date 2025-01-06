// function getProduct(id){
//   return {
//     id: id,
//     name: `Awesome Gadget ${id}`,
//     price: 99.5
//   }
// }
// const product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.price}`);
// interface Product{
//   id : Number,
//   name:String,
//   price:Number
// }
// function getProduct(id): Product{
//   return {
//     id: id,
//     name: `Awesome Gadget ${id}`,
//     price: 99.5
//   }
// }
// const pro = getProduct(101);
// console.log("ID :",pro.id," Name :",pro.name)
// let person :{
//   name :string;
//   id:number;
// };
// person={name:'pavan',id:"ppp"};
// console.log(person)
// function changeStatus(status: boolean): boolean {
//   return false;
// }
// console.log(changeStatus(10))
// let employee:{
//     name:string;
//     age:number;
//     mob:number;
//   };
//   employee={name:"pavan",age:29,mob:959585};
//   console.log(employee)
//   let arr:string[] = [];
//   let skill: [string, number?];
//   skill = ['Programming'];
//   console.log(skill)
//   let a:number[]=[1,2,3];
//   let res=a.reduce((t,v)=>{ return t+v})
//   console.log(res)
//   let b:any;
//   b=12;
//   console.log(b)
var num;
num = 102;
console.log(num);
var result; // if not specified any type it  automatically assign as any 
result = 101;
console.log(result);
result = [1, 4, 5, 8];
console.log(result.length);
result = true;
console.log(result);
result = { name: "pavan", age: "29" };
console.log(result.x);
function my(abc) {
    return abc;
}
console.log(my(10));
// void type do not return any value
// only assign undefined to the variable
var m;
m = undefined;
function add(a, b) {
    if (typeof a == "string" && typeof b == "string")
        return a.concat(b);
    if (typeof a == "number" && typeof b == "number")
        return a + b;
    throw new Error("Parameter must be string or number");
}
console.log(add("pavan", " darshan"));
var un;
un = 101;
un = [2, 4, 7, 9];
console.log(typeof un);
console.log(un.length); // asseration or narrowing type
// string literal type----------------------------
var click;
click = 'press';
console.log(click);
var mouse;
mouse = 'dblclick';
mouse = 'click';
var anothermouse;
anothermouse = 'click';
anothermouse = 'mouseup';
console.log(anothermouse);
var candidate = {
    name: "pavan",
    age: 29,
    email: "@gmail.com",
    mob: 96969696
};
console.log(candidate);
var nev;
var count = 10, max = 100;
max > count ? console.log("count is lesser") : console.log("count is bigger");
//  let i = 0;
//  for (; i < 10; i++) {
//      if(i == 5)
//         continue;
//     console.log(i); 
//  }
var myFun = function (a, b) {
    if (typeof b !== 'undefined')
        return a + b;
    return a;
};
console.log(myFun(50, 45));
// rest parameter
function sum() {
    var val = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        val[_i] = arguments[_i];
    }
    var total = 0;
    val.forEach(function (x) { return total += x; });
    return total;
}
console.log(sum());
console.log(sum(10, 25, 20));
