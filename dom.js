// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Amit Kc"; //concatinate

// let divs = document.querySelectorAll(".sample");

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));
// let div = document.querySelector("div");
// div.style.backgroundColor = "green"

// // div.style.visibility ="hidden";

// div.style.fontSize = "26px";

// div.innerText ="hello"
// div.style.height="250px";
// let newBtn = document.createElement("button");
// newBtn.innerText = "bhenkaBsda";
// console.log(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML ="<i>HI, I am new! </i>"; 

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p")

// para.remove();

// newHeading.remove()
// let body = document.querySelector("body");

//practice question 1

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(newBtn)

//practice question 2

// let para = document.querySelector("p");

// events in js

let btn1 = document.querySelector("#btn1")

btn1.onclick = (evt)=>{
   
    // console.log("this is my handler 1");
    // let a = 25;
    // a++;
    // console.log(a);
// }

btn1.addEventListener("click",()=>{
    console.log('button1 was clicked');
})

let newDiv = document.querySelector(".newDiv")}

// newDiv.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     console.log("mouse is over");
