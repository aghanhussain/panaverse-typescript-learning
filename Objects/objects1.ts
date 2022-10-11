// create the object person
var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 
 //access the object values 
 console.log(person.firstname) 
 console.log(person.lastname)

// creating another object person1
 var person1 = {    
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  },  //Type template 
 } 

// updating function
 person1.sayHello = function() { 
    console.log("hello "+person1.firstName)
 }  
// Calling object property which is a function
person1.sayHello()


// Create another object poet
const poet = {
    born: 1935,
    name: "Mary Oliver",
    };

poet['born']; // Type: number
poet.name; // Type: string
/*           poet.end;     
    
    Error: Property 'end' does not exist on
    type '{ name: string; start: number; }'.
*/

let poetLater: {born: number;name: string;};// Ok
    poetLater= {born: 1935  ,name: "Mary Oliver"};
/*         poetLater = "Sappho";
    Error: Type 'string' is not assignable to object type
    type '{ born: number; name: string; }'
*/


// Objects can also be passed as parameters to function.

/*           Example: Objects as function parameters       */

var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 

 var invokeperson = function(obj: { firstname:string, lastname :string }) 
 /* 
   Invokeperson is called object literal. 
   Function recvs an object with mentioned properties
   The function expression is invoked passing person object.
*/
 { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)



/*  ##########  Object Types ############# */
//  Defining our own type

type Poet={
    name:string,
    book:string

}

let poet1 :Poet;

/*
    Since poet1 is of type Poet nothing else can be assigned to it 
                 poet1 = "Asadullah Ghalib"
*/
poet1={

    // poet1 will be assinged to Poet type object only 
    // must assign all properties strictly
    name:"Asad",
    book:"Dewan",    

}

/*     ###########  Structural Typing ###########     */

type WithFirstName = {firstName: string };
type WithLastName  = {lastName : string };
const hasBoth = {
                    firstName: "Lucille",
                    lastName: "Clifton",
                };
/*
Both withFirstName and withLastName objects are fulfilling their property requirement
from hasBoth type object because hasBoth has both properties
*/
let withFirstName: WithFirstName = hasBoth;  //ok
let withLastName : WithLastName = hasBoth;   //ok


/*Usage */

type FirstAndLastNames = { first: string;  last: string };
    
    const hasBoth1: FirstAndLastNames = {
                        first: "Sarojini",
                        last: "Naidu",
    }; //OK

/* 
    - FirstAndLastNames required two properties but hasOnlyOne implemented only 1
    - Property 'last' is missing in type '{ first: string; }'
    - but required in type 'FirstAndLastNames
 */
                // const hasOnlyOne: FirstAndLastNames = {first: "Sappho" };


                
          /*   ##########################################   */ 
          /*   ####### excess property checks ###########   */
          /*   ##########################################   */

type Player = { born:number; name:string; game:string} 

const playerMatch: Player = {
                            born: 2000,
                            name: "Sami",
                            game: 'Tennis'
                            }; //ok all required properties for a Player are implemented 

const myPlayer={
    born:1950,
    name:"IK",
    game:"Cicket",
    height: "6"

}
/* 
Note here we are trying to assign an object but going beyond the type Player
as Player has no property name height 
Generates no error
This is same like your player required Player properties and properties are 
fulfilled by myPlayer (also has aditional properties*/
const yourPlayer:Player = myPlayer


/* 
Note here we are trying to create an object but going beyond the type Poet
as Poet has no property name activity */

                /*const extraProperty: Poet = {
                    activity: "walking",
                    born: 1935,
                    name: "Mary Oliver",
                    game: "Skatting"
                    };*/

    // Error: Type '{ activity: string; born: number; name: string; }'
    // is not assignable to type 'Poet'.
    // Object literal may only specify known properties,
    // and 'activity' does not exist in type 'Poet'.

    /* 
           Note that excess property checks only trigger for object literals being
           created in locations that are declared to be an object type. 
           Providing an existing object literal bypasses excess property checks.

    */