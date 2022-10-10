var students = [];
console.warn(students);
students.push("Pakistan");
students.push("UAE");
students.push("CHINA");
console.warn(students);
console.warn("Length of array is ".concat(students.length));
console.warn(students.join('-'));
function test(country) {
    students.push(country.toLowerCase());
}
students.map(test);
console.warn(students);
console.log(students.concat('INDIA', 'IRAN'));
console.log(students.concat('INDIA', 'IRAN'));
console.log(students.slice(2, 4));
console.log(students.reverse());
