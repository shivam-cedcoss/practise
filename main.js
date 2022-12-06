"use strict";
exports.__esModule = true;
var name = "satyam";
var num = 100;
var start = true;
// Declaring array
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = [11, 22, 33, 44, 55];
// Type enum
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
var c = color.green;
// assigning value to variable give them that type 
// here variable is of type any
var a;
a = 10;
a = true;
// here b is of type that given type
var b = 10;
// b=false
// function typechecking with required parameter
function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 20);
// function typechecking with optional parameter
function sub(num1, num2) {
    if (num2) {
        console.log(num1 - num2);
    }
    else {
        console.log(num1);
    }
}
sub(20, 300);
// function typechecking with default parameter
function mul(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num1 * num2);
}
mul(1000);
// passing object in function
function fullName(person) {
    console.log(person.firstname, person.lastname);
}
var n = {
    firstname: "abc",
    lastname: "xyz"
};
// fullName({firstname:"abc",lastname:"xyz"})
fullName(n);
function userDetail(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.address);
    console.log(person.mobile);
}
var x = {
    name: "Arvind",
    age: 21,
    address: "Lucknow",
    mobile: 12345
};
userDetail(x);
