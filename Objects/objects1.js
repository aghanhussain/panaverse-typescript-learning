// create the object
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
//access the object values 
console.log(person.firstname);
console.log(person.lastname);
// creating another object
var person1 = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }
};
// updating function
person1.sayHello = function () {
    console.log("hello " + person1.firstName);
};
// Calling object property which is a function
person1.sayHello();
// Objects can also be passed as parameters to function.
/*           Example: Objects as function parameters       */
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(person);
function invokeP() {
    console.log("first name :" + person.firstname);
    console.log("last name :" + person.lastname);
}
invokeP();
