// strings

// let str = 'amit';
// let str2 = "kc";
// console.log(str[2]);

// Template literals

// let obj = {
//     item: 'pen',
//     price: 10,
// };
// let output = `the cost of ${obj.price} rupees`; //obj.price become a string.
// console.log(output);

// console.log('this is the cost',obj.item,'is',obj.price,'rupees' );
// let sentence = `this is a template iterals`;
// console.log(typeof(sentence));

// let specialString = `this is a template literal ${1+2+3}`;
// console.log(specialString);

// Escape characters
// let str = 'amit\tkc';
// console.log(str.length);

// String Methods

// let str1 = 'amitkc';
// let str2 = 'kc';
// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);
// console.log(str.trim());
// console.log(str1.replaceAll('amit','maya'));
// console.log(str1.charAt(3));


// Practice Q1

let userName = prompt('enter the name');
let newUsername = `@ ${userName}`;
document.write(newUsername);

let index = (newUsername.length);
document.write(index);