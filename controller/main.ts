// importaciones

import {Cohete} from "../model/cohete.js"


// siempre regresa un objeto
// class Cohete {
//   public potencia: number;
//   public tipoCohente: string;
//   // lo inicializo luego
//   public cohete1: any;
//   public cohete2: any;

//   constructor(cohete: string) {
//       this.tipoCohente = cohete;
//       this.potencia = 0;
//       this.cohete1 = [10,30,80];
//       this.cohete2 = [30,40,50,50,30,10];
//   }

// //   acelerar function 
//   acelerar():number {
//       switch(this.tipoCohente){
//           case "32WESSDS":
//             if(this.potencia == 120){}else{
//               this.cohete1[0] = this.cohete1[0] - 10;
//               this.cohete1[1] = this.cohete1[1] - 10;
//               this.cohete1[2] = this.cohete1[2] - 10;
  
//               if(this.cohete1[0] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete1[1] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete1[2] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//             }
            
//             console.log(this.cohete1);
//               break;
//           case "LDSFJA32":
//             if(this.potencia == 210){}else{
//               this.cohete2[0] = this.cohete2[0] - 10;
//               this.cohete2[1] = this.cohete2[1] - 10;
//               this.cohete2[2] = this.cohete2[2] - 10;
//               this.cohete2[3] = this.cohete2[3] - 10;
//               this.cohete2[4] = this.cohete2[4] - 10;
//               this.cohete2[5] = this.cohete2[5] - 10;
  
//               if(this.cohete2[0] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete2[1] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete2[2] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete2[3] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete2[4] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
//               if(this.cohete2[5] >= 0){
//                 this.potencia = this.potencia + 10;
//               }else{
  
//               }
          
//             }
            
//             console.log(this.cohete2);
              
//               break;            
//       }

//       return this.potencia;
//   }

// // frebrar
//   frenar():number {
//       switch(this.tipoCohente){
//           case "32WESSDS":
//             if(this.potencia <= 0){
//             console.log("test");
//             console.log(this.cohete1);
//             }else{
//               this.cohete1[0] = this.cohete1[0] + 10;
//               this.cohete1[1] = this.cohete1[1] + 10;
//               this.cohete1[2] = this.cohete1[2] + 10;
  
//               if(this.cohete1[0] > 0){
//                 this.potencia = this.potencia - 10;
//               }else{
  
//               }
//               if(this.cohete1[1] > 0){
//                 this.potencia = this.potencia - 10;
//               }else{
  
//               }
//               if(this.cohete1[2] > 0){
//                 this.potencia = this.potencia - 10;
//               }else{
  
//               }
              
//               console.log(this.cohete1);
//           }
//           break; 
//           case "LDSFJA32":
              
              
//           break;            
//       }
//   return this.potencia;
// }


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


let cohete1 = new Cohete("32WESSDS");
let cohete2 = new Cohete("LDSFJA32");

// console.log(cohete1); 
console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());
 console.log(cohete1.acelerar());


 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 console.log(cohete1.frenar());
 
 
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
//  console.log(cohete2.acelerar());
// console.log(cohete1.acelerar());

// console.log(cohete1); 

// console.log(cohete2); 
// console.log(cohete2.acelerar());
// console.log(cohete2.acelerar());

// console.log(cohete2); 