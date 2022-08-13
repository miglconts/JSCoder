//! Comentarios
//Hello word comentario de linead cmd + /
// console.log('Hola Muindo')

/* cometario de bloque option + shift + A
console.log('Hola Muindo')
console.log('Hola Muindo')
console.log('Hola Muindo')
 */

//!Variables
// declaración de Variable
let nombre;
//var edad;//tiene problemas var

// Definición de variables
nombre = 'Miguel'; // retomamos la variable declarada anteriormente y l e asignamos un valor
let edad = 28; // Declaramos la variable y le asignamos un valor en una sola linea
const VALOR = 10; //Son constantes que no van a cambiar

let primerNumero = 10;
let segundoNumero = 10;
let suma = primerNumero + segundoNumero;
console.log(`Esta es la suma ${suma}`)

//! Alert y Prompt
/* let nombrePrompt = prompt('ingresa el nombre')
let edadPrompt = prompt('ingresa edad')
let salida = `Hola ${nombrePrompt} tienes ${edadPrompt} de edad`
alert(salida) */

//* Parse para convertir strings a sus valores parseInt es Entero y parseFloat es flotante
let primerNumeroParse = parseInt(prompt('ingresa un numero'))
let segundoNumeroParse = parseInt(prompt('ingresa otro numero'))
let sumaParse = primerNumeroParse + segundoNumeroParse;
alert(sumaParse)



