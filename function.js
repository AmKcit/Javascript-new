// function myFunction(msg, n){ //parameter -> input
//     console.log(msg*n);
//     // console.log('i am learning js'); 
// }

// myFunction('i love u',100); //argument

//function sum of 2 number, sum

// function sum(a,b){
    // console.log(a+b);
    // local variable -> scope
//         s = a+b;
//     return s;
// }
// let val = sum(5,10);
// console.log(val);

//Arrow function

// function sum(a,b){
//     return a+b;
// }

// const arrowSum = (a, b) => {
//     console.log(a+b);
// };
// arrowSum(5,1);
//multiplication
// function mul(a, b){
//     return a*b
// }

//Arrow Multiplication function

// let arrowMul = (x, y) =>{
//     return x*y;
// };
// console.log(arrowMul(5, 5));

//practice question

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char ==='a'||char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count++;  
//         }
//     }
//     return count;
// }

const countVowels = (str) => {
    let count=0;
    for(const char of str){
        if(char ==='a'||char ==="e" || char ==="i" || char ==="o" || char ==="u"){
            count++;  
        }
    }
    return count;
}
console.log(countVowels("aeiou"));
