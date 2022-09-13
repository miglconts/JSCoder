// Simulador de retención de impuestos de México de regimen RESICO

// TODO Recopilar Datos de ingresos

//let ingreso = parseInt(prompt("Ingresos netos mensuales en MNX"));

let tope0 = 25000;
let tope1 = 50000;
let tope2 = 83333;
let tope3 = 208333;

// TODO COndicional de ingresos, mayor ingreso mayor porcentaje de impuestos
function limite(ingreso, tope0, tope1, tope2, tope3) {
  switch (true) {
    case ingreso <= tope0:
      return `Con un ingreso de ${ingreso} MNX el ISR es de ${
        ingreso * 0.01
      } MNX, el saldo libre de impuestos es de ${ingreso - ingreso * 0.01} MNX`;
      break;
    case ingreso <= tope1:
      return `Con un ingreso de ${ingreso} MNX el ISR es de ${
        ingreso * 0.011
      } MNX, el saldo libre de impuestos es de ${
        ingreso - ingreso * 0.011
      } MNX`;
      break;
    case ingreso <= tope2:
      return `Con un ingreso de ${ingreso} MNX el ISR es de ${
        ingreso * 0.015
      } MNX, el saldo libre de impuestos es de ${
        ingreso - ingreso * 0.015
      } MNX`;
      break;
    case ingreso <= tope3:
      return `Con un ingreso de ${ingreso} MNX el ISR es de ${
        ingreso * 0.02
      } MNX, el saldo libre de impuestos es de ${ingreso - ingreso * 0.02} MNX`;
      break;

    default:
      return "Ingresa una cantidad menor a 208,333 MNX, de lo contrario tu régimen es incorrecto o ingresaste un carácter que no es un número ";
      break;
  }
}

//limite(ingreso, tope0, tope1, tope2, tope3);

//! Arrays
//Desafio arrays
class User {
  constructor(user) {
    this.name = user.name;
    this.lastName = user.lastName;
    this.age = user.age;
    this.income = user.income;
  }
}

let users = [
  new User({ name: "Miguel", lastName: "Contreras", age: 28, income: 20000 }),
  new User({ name: "Karla", lastName: "Mateos", age: 27, income: 26000 }),
  new User({ name: "Ricardo", lastName: "Villaseñor", age: 35, income: 11200 }),
  new User({ name: "Ivette", lastName: "Cruz", age: 35, income: 30000 }),
  new User({ name: "Miriam", lastName: "Gonzalez", age: 39, income: 46000 }),
  new User({ name: "María", lastName: "Juan", age: 59, income: 55000 }),
];

// Ordenar de mayor a menor ungreso
let topIncome = users.sort((a, b) => b.income - a.income);
console.log(topIncome[0]);

//Calcular los impuestos
let userTaxes = users.forEach((user) => {
  limite(user.income, tope0, tope1, tope2, tope3);
});

let userList = document.getElementById("userList");
userList.append();

for (const usuario of topIncome) {
  let userDiv = document.createElement("div");
  userDiv.innerHTML = `
  <H2> ${usuario.name} ${usuario.lastName} </H2>
  <h3> ${usuario.age} años  con un ingreso de  $${usuario.income}.00 MXN </h3>
  <p> ${limite(usuario.income, tope0, tope1, tope2, tope3)} </p>
  `;
  userList.append(userDiv);
}
