// variables loosely type but type infered 
//we can not assign a different type of value to inferred type variable.
let num=100
console.warn(num)
/*
num = "100"  >>>>>>> throw error */

let userName = "Asad"
console.warn(userName)
/*
userName = 500  >>>>>>>> will throw erroe 
*/


let isGood = true
console.warn(isGood)

/*
isGood = "True" >>>>>>> willthrow error
*/

let marks = 100
console.log(marks)

/*
marks = "hundred" >>>>>>> will throw error
*/

//     #######strictly typed declaration#########

let num1:number=100
console.warn(num)
/*
let num1:number="hundred"    >>>>>> will throw error
*/

let newUserName:string = "aghanhussain"
console.warn(userName)
/*
newUserName:string = 500  >>>>>>>> will throw erroe 
*/

let wasGood:boolean = true
console.warn(isGood)

/*
wasGood:boolean = "True" >>>>>>> willthrow error
*/

let total_marks:number = 100
console.log(total_marks)

/*
total_marks:number = "hundred" >>>>>>> will throw error
*/