
// get the the events of the buttons
let createCohete1 = document.getElementById("createCohete1");
let increaseCohete1 = document.getElementById("increaseCohete1");
let decreaseCohete1 = document.getElementById("decreaseCohete1");
let result1 = document.getElementById("result1");
let createCohete2 = document.getElementById("createCohete2");
let increaseCohete2 = document.getElementById("increaseCohete2");
let decreaseCohete2 = document.getElementById("decreaseCohete2");
let result2 = document.getElementById("result2");

//rockets
let rocket1 = document.getElementById("rocket1");
let rocket2 = document.getElementById("rocket2");


// objects rockets
let rocketObject = {
  propulsion1: {
    start: 0,
    max: 10
  },
  propulsion2: {
    start: 0,
    max: 30
  },
  propulsion3: {
    start: 0,
    max: 80 
  }
}

// funciona al anadir elementos
// var obj = {
//   key1: "value1", 
//   key2: "value2",
//   key3: {
//     key4: "xx",
//     key5: "rr"
//   }
//   }

 
// Object.assign(obj, {key4: "value3"});

// let tata = ["sex", "but"];
// Object.assign(obj.key3, {key6: tata[0]});


let maxSpeedRocket1 = [rocketObject.propulsion1.max, rocketObject.propulsion2.max, rocketObject.propulsion3.max]
let startSpeedRocket1 = [rocketObject.propulsion1.start, rocketObject.propulsion2.start, rocketObject.propulsion3.start]
let maxSpeedRocket2 = [rocketObject.propulsion2.max, rocketObject.propulsion2.max, rocketObject.propulsion2.max]
let startSpeedRocket2 = [rocketObject.propulsion2.start, rocketObject.propulsion2.start, rocketObject.propulsion2.start]
// document.body.innerHTML = JSON.stringify(obj);

// let valuesBox: [] = [];
function increaceCohete(start: any, max: number) {
    if(start < max){
      // valuesBox.map();
      console.log("work")
      return start += 10
      
    }else{
      console.log("finish");
      return start;
    }
  }
  
  // Object.assign(rocketObject,valuesBox[0]);
  

  console.log(startSpeedRocket1[0]);
  console.log(maxSpeedRocket1[0]);
  console.log(increaceCohete(startSpeedRocket1[0], maxSpeedRocket1[0]));
  console.log(increaceCohete(startSpeedRocket1[0], maxSpeedRocket1[0]));
  console.log(increaceCohete(startSpeedRocket2[0], maxSpeedRocket2[0]));
  console.log(increaceCohete(startSpeedRocket2[0], maxSpeedRocket2[0]));
  console.log(increaceCohete(startSpeedRocket2[0], maxSpeedRocket2[0]));

// function increaceCohete(object: object){
//   for (let value in object) {
//     let total += obj[value]; 
//     return total;  
//   };
// }



// let sumarex = rocketObject.values.reduce((a, b) => a + b);



// do{
//   rocketObject.propulsion1.start += 10
// } while (rocketObject.propulsion1.start < rocketObject.propulsion1.max);
// console.log(rocketObject);

// do{
//   rocketObject.propulsion2.start += 10
// } while (rocketObject.propulsion2.start < rocketObject.propulsion2.max);
// console.log(rocketObject);

// do{
//   rocketObject.propulsion3.start += 10
// } while (rocketObject.propulsion3.start < rocketObject.propulsion3.max);
// console.log(rocketObject);
// do{
//   rocketObject.propulsion2.start += 10
// } while (rocketObject.propulsion2.start < rocketObject.propulsion2.max);


// rocketObject.propulsion1.start += 10;


// rocketObject.propulsion1.start += 10;



// increaceCohete(rocketObject.propulsion1.start, rocketObject.propulsion1.max);


// function increaceCohete (start: number, max: number){
//   if(start < max){
//     return start += 10
//   }else{
//     console.log("test");
//     return start;
//   }
// }

// increaceCohete(rocketObject.propulsion1.start, rocketObject.propulsion1.max);
// increaceCohete(startPropultion2, maxPropultion2);
// increaceCohete(startPropultion3, maxPropultion3);

// console.log(rocketObject);





// animation to do it-------------------------------
// let id = null;
// function getInside() {
//   var elem = document.getElementById("animate");   
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       rocket1.style.top = pos + "px"; 
//       rocket1.style.left = pos + "px"; 
//     }
//   }
// }
//create objects

// createRocket(this) {
//     let element = this.rocket;
//     element.addEventListener('click', (e:Event) =>{
//         e.preventDefault();
//         document.getElementById
//     })

// infinitive arguments
// ------------------
// function printArguments(...args) {
//   args.forEach((arg, index) => {
//     console.log(`Argument ${index}:`, arg);
//   });
// }

// lola = ['hello', true, 55, "verga"];
// printArguments(...lola);

// -------------------------


// function IncreasePotency (...args: any){
//   args.forEach((arg: any) =>{
//     arg =+ 10;
//   });
// }

// let potencia = [0, 0 , 10 , 30];

// IncreasePotency(...potencia);

// // sumando cada elemento dentro de un array y asignarlo a otro
// const incresePotency = potencia.map(sum => {
//   return 10 +sum;
// })

// console.log(incresePotency);




// ----------------------------------------

// function IncreasePotency (...args: any) {
//   args.forEach((arg: any) => {
//     console.log(arg =+ 10);
//   });
// }


// let potencia = [0, 0 , 10 , 30];
// IncreasePotency(...potencia);


// console.log("------");

// const myArray = [1, 2, 3, 4];

// // Appends text to each element of the array
// const newArray = myArray.map(name => {
// 	return 10 + name; 
// });

// console.log(newArray); // ['My name is Sam', 'My Name is Alice', ...]

// // Appends the index of each element with it's value
// const anotherArray = myArray.map((value, index) => index + ": " + value);
// console.log(anotherArray); // ['0: Sam', '1: Alice', '2: Nick', ...]

// if(myArray2[0] < 40){
//   args.forEach((arg: any) => {
//     myArray2[0] =+10;
//   console.log(incresePotency);
//   });
   
  
// }else{
//   console.log("finishs");
// }








// let rocket = {
//   propulsion1: {
//     start: 0,
//     max: 10
//   },
//   propulsion2: {
//     start: 0,
//     max: 30
//   },
//   propulsion3: {
//     start: 0,
//     max: 80 
//   }
// }

// console.log(rocket.propulsion1);



// let potencia = [0, 0 , 10 , 30];

// const incresePotency = potencia.map(sum => {
//   if(sum)
//   return 10 + sum;
// });

// if(potencia[0] < 40){
//   for(let i = 0;i < potencia[0]; i =+10){
//     console.log(10);
//   } 
// }else{
//   console.log("finish");
// } 


// if (usersObj[rrr].start > usersObj[rrr].max) {
//   console.log("done!");
// }else{
//   usersObj[rrr].start = usersObj[rrr].start + 10;
//   console.log("not acuared");
//   console.log(usersObj[rrr].start);
// }

 







// if(potencia[0] < 40){
//   potencia.forEach((arg: any) => {
//   console.log(incresePotency);
//   });
   
  
// }else{
//   console.log("finis");
// }



// import * as typescript from "https://cdn.skypack.dev/typescript";

// let rocket = {
  
// }

// let potencia = [0, 0 , 10 , 30];

// const incresePotency = potencia.map(sum => {
//   if(sum)
//   return 10 + sum;
// });

// if(potencia[0] < 40){
//   for(let i = 0;i < potencia[0]; i =+10){
//     console.log(10);
//   } 
// }else{
//   console.log("finish");
// } 

 


// ------------------------
// if (usersObj[rrr].start > usersObj[rrr].max) {
//   console.log("done!");
// }else{
//   usersObj[rrr].start = usersObj[rrr].start + 10;
//   console.log("not acuared");
//   console.log(usersObj[rrr].start);
// }

// --------------------
// function starter(usersObj) {
   
//   for (let rrr in usersObj) {
//       const incresePotency = usersObj.[rrr].start.map(sum => {
//         return 10 + sum;
//       });
//       return
//   }
//   return;
// }

// starter(rocket);