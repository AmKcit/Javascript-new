//create basic object in JS
// const student = {
//     name: 'John Doe',
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks = ",this.marks);
//     },
// };

//prototype:

// const employee = {
//     calTax(){
//         console.log("Tax rate is 10%" );
//     }
// };

// const karanArjun = {
//     salary: 50000,
//     calTax(){
//         console.log("Tax rate is 20%");
//     }
// };


// karanArjun.__proto__ = employee;

// classes:

class Toyotacar{
    constructor(){
        console.log("creating new object");
        this.brand=brand;
    }
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.bradName = brand;
    // }
}

let fortuner = new Toyotacar("fortuner");//constructor

let lexus = new Toyotacar();//constructor
