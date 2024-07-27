const name="amit"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo copunt is ${repoCount}`);
const gameName = new String('amit-kc');
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "    amit     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amitkc.com.np/amit%120kc"
console.log(url.replace('%120','-'))


console.log(url.includes('amit'))


console.log(gameName.split('-'));