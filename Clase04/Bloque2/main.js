//! Funciones de alrto grado

/* function operation(op) {
  if (op === "sumar") {
    return (x, y) => x + y;
  }
  if (op === "restar") {
    return (x, y) => x - y;
  }
  if (op === "dividir") {
    return (x, y) => x / y;
  }
  if (op === "multiplicar") {
    return (x, y) => x * y;
  }
}

let suma = operation("sumar");
let resta = operation("restar");
let multiplica = operation("multiplicar");
let divide = operation("dividir");
console.log(multiplica(10, 20)); */

/* function recorrer(array, funct) {
  for (const item of array) {
    funct(item);
  }
}

recorrer([1, 2, 3, 4, 5], console.log);

const names = [
  "Miguel",
  "Angel",
  "COntreras",
  "Cruz",
  "Karla",
  "Mateos",
  "Flores",
];
recorrer(names, console.table); */

class Product {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.precio = info.precio;
  }
  hablar() {
    console.log(this.name);
  }
}

const productos = [
  new Product({ id: 1, name: "Mouse", precio: 2500 }),
  new Product({ id: 2, name: "Monitor", precio: 2500 }),
  new Product({ id: 3, name: "Teclado", precio: 2500 }),
];

productos.forEach((item) => {
  console.log(item.name);
});

//find Element


