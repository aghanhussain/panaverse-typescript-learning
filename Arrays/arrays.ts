// ###########   ARRAY DECLARATION WITHOUT TYPE   ###########

let languages = ["Python", 'TypeScript', 'Java']
/*In above code we have not defined data type of the array 
it will infer by seeing the data in array that data type is string
since dtype is STRING we can not push anyother type in array.
*/
//             languages.push(100)    >>>>>will thorw error


let new_langs = ["Python", 'TypeScript', 'Java', 12]
 /*we have not defined data type of the array 
it will infer data types that it can accpts string and numbers
as many types found in array we can push those type of values in array*/

new_langs.push(15)    //ok 
new_langs.push("JS")  //ok

// ###########   ARRAY DECLARATION WITH TYPE   ###########

let data:number[] =[1,2,3,4,5,6,7]
/*  declaration with dtype in ARRAYS needs to mention [] to say its array
//  now we can not push anyother type anyway */

//           data.push("hundred")   >>> will generate error

/* can not add anyother type value if type is mentioned in declaration */

//            let rolls:number[]= [121,122,123,124, "hello"] >>> will throw error
