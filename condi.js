//Artimetic Operators

// let a = 6;
// let b = 2;

//  console.log('a = ', a, '& b =', b);
// console.log('a + b =', a + b);
// console.log('a - b =', a - b);
// console.log('a * b =', a * b);
// console.log('a / b =', a / b);
// console.log('a % b =', a % b);
// console.log('a - b =', a ** b); // 6   

// Unary Operator

// let a = 5;
// let b = 2;

// console.log('a = ', a, '& b =', b);

// console.log('a++ =', a++); //5
// console.log('a =', a); //6

//Assignment Operator
// let a = 5;
// let b = 2;

// console.log('a = ', a, '& b =', b);
// // console.log(a+=5);
// console.log(a**=4);

//Comparision Operator

// let a = 6;
// let b = 5;

// console.log('a = ', a, '& b =', b);
// // console.log(a+=5);
// console.log(a>=b);

// Logical Operator

// let a = 6;
// let b = 2;

// console.log('cond1 && cond2 = ', !(a===6));

// Conditional Statements

// let age = 18;
// if(age >= 18){
//     console.log(" u can vote ");
// }else{
//     console.log(' u cannot vote ');
// }

//if statement

// let mode = 'light';
// let color;

// if(mode==='dark'){
//     color = 'black';
// }
// if(mode==='light'){
//     color='white';
// }
// console.log(color);

// if else statement

// let mode = 'light';
// let color;

// if(mode==='dark'){
//     color='black';
// }else{
//     color='white';
// }
// console.log(color);

// if else statement

// let age=15;
// let vote;
// if(age>18){
//     vote='yes';
// }else{
//     vote='no'
// }
// console.log(vote);

// let numBer=2;
// let output;

// if(numBer%2==0){
//     output='even';
// }else{
//     output='odd';
// }
// console.log(output);

// else if Statement

// let mode ='nightLight';
// let color;
// if(mode == 'dark'){
//     color='black';
// }
// else if(mode == 'light'){
//     color='white';
// }
// else if(mode == 'nightLight'){
//     color='orange'
// }else{
//     color='vivid';
// }
// console.log(color);

// if(mode === 'nightLight') console.log(mode); // not used.

// if (mode === 'nightLight'){ // used.
//     console.log(mode);
// }

// Ternary Operators

// let age=25;

// let result = age >= 18 ? console.log('adult') : console.log('not adult');

// practice questions 1


// let no = prompt('enter a number');
// let result;
// if(no%5==0){
//     result='multiple of 5';
// }else{
//     result='not a multiple of 5'
// }
// alert(result);

// practice question 2

let students = prompt('enter the marks of student =');
let results;
if(students >= 90 && students <= 100){
    results = 'A';
}
else if(students >= 70 && students <=89){
    results = 'B';
}
else if(students >= 60 && students <=69){
    results = 'C';
}
else if(students >= 50 && students <=59){
    results = 'D';
}
else if(students >= 0 && students <= 49){
    results = 'F';
}
alert(results);