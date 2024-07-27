// primitive

// 7 : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber =  45647123121651n



// Reference(Non primitive)

// Array, Objects, Functions.
const heroes = ["saktiman", "nagraj", "doga"]
let myobj = {
    name: "amit",
    age: 22,
}

const myFunction = function(){
    // console.log("hello world");
}

// console.log(typeof heroes);


//++++++++++++++++++++++++++++++++++++++ Stack & Heap memory ++++++++++++++++++++++++++++++++++++++++++++++++//

//Stack memeory(primitive), Heap memory(Non-primitive)



let myYoutubeName = "amitkc"
let anothername= myYoutubeName;
anothername = "helloamit"


console.log(myYoutubeName);
console.log(anothername);


let userOne = {
    email: "amitkc26@gmail.com",
    upi: "user@upi"
}


let userTwo = userOne
userTwo.email = "amitchettri@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);