// variables loosely type but type infered 
//we can not assign a different type of value to inferred type variable.
var num = 100;
console.warn(num);
/*
num = "100"  >>>>>>> throw error */
var userName = "Asad";
console.warn(userName);
/*
userName = 500  >>>>>>>> will throw erroe
*/
var isGood = true;
console.warn(isGood);
/*
isGood = "True" >>>>>>> willthrow error
*/
var marks = 100;
console.log(marks);
/*
marks = "hundred" >>>>>>> will throw error
*/
//     #######strictly typed declaration#########
var num1 = 100;
console.warn(num);
/*
let num1:number="hundred"    >>>>>> will throw error
*/
var newUserName = "aghanhussain";
console.warn(userName);
/*
newUserName:string = 500  >>>>>>>> will throw erroe
*/
var wasGood = true;
console.warn(isGood);
/*
wasGood:boolean = "True" >>>>>>> willthrow error
*/
var total_marks = 100;
console.log(total_marks);
/*
total_marks:number = "hundred" >>>>>>> will throw error
*/ 
