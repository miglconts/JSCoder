//! Ciclos
//* For es un conte
/* for(let index = 4;index < 10 ; index = index + 3  ){
    console.log(`Hola ${index + index}`);
} */

// let numero = parseInt(prompt("Ingrese número"))

//* While
// Se ejecutan condicionales
/* let number = 10

while( number < 20){
    console.log(`Hey ${number}`);
    number++
}

//* Do while
let condition = false
while(condition){
    console.log("hey");}
/////////////////////    
do{
    console.log("hey");
}while(condition)
 */
let moneda = "arg";

switch(moneda){
    case "cop":
        console.log("Moneda de Colombia");
        break;
    case "arg":
        console.log("Moneda de Argentina");
        break;
    case "clp":
        console.log("Moneda de Chile");
        break;
    default :
        console.log("Moneda no Identificada");
        break;
}