var user = {
    name: "Ahmed",
    age: 20,
    address: "Karachi"
};
/*
 - We have not defined the property types inside object.
 - It will infer the dtype by the value assigned to it.
 - Due to strict tpying property name can only hold strings.
 - Due to strict tpying property age can only hold numbers.
 - Due to strict tpying property address can only hold strings.
 */
/*
               user.age = "twenty"
>>>string is not assignable to int type property
*/
/*
- Properties of an object can be updated by assigning
  new valid type values.
- No new property can be added to object
*/
console.warn(user.name);
console.warn(user.age);
console.warn(user.address);
