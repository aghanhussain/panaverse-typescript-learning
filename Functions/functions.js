//     ########## return type of function ######
//  we are not defining any return type
// our function can return any type of value
function calc() {
    return 10 + 10;
}
console.warn(calc());
/*
 - We have defined "number" as return type
 - Our function will return only number type of value
- Any other type in return will throw an error
*/
function calc1() {
    return 12 + 5;
}
console.warn(calc1());
//     ########## parameter type of function ######
/*
- The function will receive a number type value
- The function will return number type value
- Type Error will be thrown in case other than number is tried to pass as argument

*/
function Calc2(val) {
    return val;
}
//  we are restricted to supply a number type argument only
console.warn(Calc2(15));
/* ############ Aseertiin in function ############*/
// using asssertion operator '?' we have made parameter as  optional
function funcy(val1, val2) {
    return val2 ? val1 + val2 : val1;
    // if there is some val in val2 add n return
    //  else only return val1
}
//  function with two arguments
console.log(funcy(12, 34));
// 
console.log(funcy(12));
