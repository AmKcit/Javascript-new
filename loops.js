// Print from 1 to 5
// for(let i=1;i<=5;i++){

// console.log('i=',i);
// }

// console.log('i =',i);

// Calculate sum of 1 to n;
// let sum = 0;
// let n = 5;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log(sum);

// console.log('loop has ended');

// while loops;
// let i =1;
// while(i<=5){
//     console.log('i=',i);
//     i++;
// }

// do while loop;
// let i = 1;
// do{
// console.log('amit');
// i++;
// }while(i <= 5);

// for of loops;

// let str = 'amit';
// let length = 0;
// for( let val of str){ // iterator -> character.
//     console.log('val=',val);
//     length++;
// }
// console.log('string size =',length);

// for-in loops

// let students = {
//     name : 'amit',
//     age : 20,
//     cgpa : 7.5,
//     isPass : true,
// };

// for(let key in students){
//     console.log(key, 'value=',students[key]);
// }

// Practice Q1

// print 1-100 even number;

// for(number = 1; number<=100; number++){
//     if(number%2===0){
//     console.log(number);
//     }
// }

// Practice Q2.

let gameNum = 25;

let userNum = prompt('guess the game number :');
console.log(userNum);

while (userNum!= gameNum) {
    userNum = prompt('You entered wrong number,Guess Again! : ');
}
document.write('congratulations, you entered the right number');




