//     ########## return type of function ######

//  we are not defining any return type
// our function can return any type of value
function calc(){    return 10+10    }
console.warn(calc())

function calc1():number{    return 12+5    }
console.warn(calc1())
// we have defined number type
// our function will return only number type of value
// any other type in return will throw an error


//     ########## parameter type of function ######
function Calc2(val:number):number
{
    return val
}
//  we are restricted to supply a number type argument only
console.warn(Calc2(15))

// using asssertion ? we have made val2 optional
function funcy(val1:number, val2?:number):number{
    return val2? val1 + val2:val1
    // if there is some val in val2 add n return
    //  else only return val1
}

//  function with two arguments

console.log(funcy(12,34))
// 
console.log(funcy(12))