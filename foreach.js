// let num = [1,2,3,4,5];

// let calSquare = (num) => {
//     console.log(num+=num);
// };
// num.forEach(calSquare);


// Map method

// let nums = [67,52,39];

// let newArr = nums.map((val) => {
//     return val * val;
// });
// console.log(nums);
// console.log(newArr);

// filer method

// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val)=>{
//     return val>3;
// });

// console.log(evenArr);

// reduce method

// let arr = [5,6,2,1,3];

// const output=arr.reduce((res,curr)=>{
//      return res > curr ? res : curr;
// });
// console.log(output);

// practice question 01

// let student = [80,87,99,90,35,50];

// let std_marks = student.filter((val)=>{
//     return val >= 90;
// })
// console.log(std_marks);

// practice question 02

let n = prompt('tell me the numbers');
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev,rslt) => {
        return prev + rslt;
})
console.log("sum = ",sum);

let factorial = arr.reduce((prev,rslt) => {
    return prev * rslt;
})
console.log("factorial = ",factorial);
