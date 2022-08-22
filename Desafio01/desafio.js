//Desafio CoderHouse
// Ciclo For
for (let number = 0; number < 10; number++) {
    let square= number * number
    let cubic= number * number * number
    console.log(`${number} al cuadrado es ${square} || ${number} al cubo es ${cubic}`)    
}

// Do while
let numberTo = parseInt(prompt('Ingresa un número para exsponenciar su valor al cuadrado y al cubo, escribe 0 (cero) para salir'));
while (numberTo != 0) {
    let square= numberTo * numberTo
    let cubic= numberTo * numberTo * numberTo
    alert(`${numberTo} al cuadrado es ${square} || ${numberTo} al cubo es ${cubic}`) 
    numberTo = parseInt(prompt('Ingresa un número para exsponenciar su valor al cuadrado y al cubo, escribe 0 (cero) para salir'));
} while (numberTo === 0){
    break
};