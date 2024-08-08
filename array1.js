// Arrays in JS

// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log(marks.length); //property

// let heroes= ['ironman','thor','hulk','spiderman'];
// console.log(heroes);
// console.log(typeof heroes);

// Arrays Indices

// let marks = [97,82,64,76,36];
// console.log(marks[0]);
// marks[0] = 66;
// console.log(marks);

// Looping over arrays

// for loop

// let heroes = ['ironman','thor','hulk','shaktiman','spiderman','antman'];

// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
    
// }

// for of

// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ['delhi','mumbai','pokhara','kathmandu','hyderabad'];
// for(let city of cities){
//     console.log(city.toUpperCase());
    
// }

// Practice Q1

// let marks = [85,97,44,37,76,60];
// let sum = 0;
//  for( let val of marks){
//     sum += val;
//  }

//  let avg = sum/marks.length;
//  console.log(`avg marks of the class = ${avg}`);

// Practice Q2.

let items = [250, 645, 300, 900, 50];

// let idx = 0;
//     for(let val of items){
//         console.log(`value at index ${idx} = ${val}`);
//         let offer = val / 10;
//         items[idx] = items[idx] - offer;
//         console.log(`value after offer = ${items[idx]}`);
//         idx++;
//     }
//     console.log(items)
// for(let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

let number = 5;
for(let i=1; i<=10; i++){
    console.log(`the table of 5 is 5x ${5*i}`);
}