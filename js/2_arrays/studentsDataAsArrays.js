// store students data as array of arrays:
let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];
////////////////////  TASK  ////////////////////
// print in console the oldest student names:  /
////////////////////////////////////////////////
// your code goes here:

let maxAge=students[0][1];

let oldestStudent;

for(let i=0; i<students.length; i++){
    let studentAge = students[i][1];
    if(studentAge>=maxAge){
        maxAge=studentAge;
        oldestStudent=students[i];
    }
}
console.log(`The oldest student is ${oldestStudent[2]} ${oldestStudent[3]}. Their age is ${oldestStudent[1]}.`);

// Expexted output:
//The oldest student is Ivan Ivanov. He is 24 years old.