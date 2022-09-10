/* const names = [
  "Miguel",
  "Angel",
  "COntreras",
  "Cruz",
  "Karla",
  "Mateos",
  "Flores",
]; */

/* for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
} */

/* // Metodos
names.push("Venus"); //Agrega elemento al final
names.unshift("Marte"); //Agrega elemento al inicio
console.log(names);

names.pop(); //Elimina elemento al final
names.shift(); //Elimina elemento al inicio
console.log(names); */

/* names.splice(2, 2); //Elimina elemento desde el index hasta cantidad
console.log(names);
console.log(names.join(" ")); // Metodo para unir los elementos en un string
 */

/* const names = [
  "Miguel",
  "Angel",
  "COntreras",
  "Cruz",
  "Karla",
  "Mateos",
  "Flores",
];
const animales = ["Perrito", "Gato"];
const carros = ["Vochos", "Tsurus"];
//Concatenar
const varios = names.concat(names).concat(animales);
console.log(varios);

//Cortar fragmento
const copia = names.slice(1, 4);
console.log(copia);

//Indice
console.log(names.indexOf("Angel"));

//Revertir
const reverso = names.reverse();
console.log(reverso);

//Delete Funtion
const eliminarPersona = (nombre) => {
  let position = names.indexOf(nombre);
  if (position != -1) {
    names.splice(position, 1);
    console.log(names);
  } else {
    console.log(`No existe el Nombre ${nombre}`);
  }
};
eliminarPersona("Karsla");
 */

//!Recorrer un arreglo

/* const productos = [
  { id: 1, nombre: "Mouse", precio: 1000 },
  { id: 2, nombre: "CPU", precio: 1000 },
  { id: 3, nombre: "Monitor", precio: 1000 },
  { id: 4, nombre: "Teclado", precio: 1000 },
];

for (const item of productos) {
  console.log(item.nombre);
  console.log(item.precio);
}
 */
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
  new Product({ id: 2, name: "Monitor", precio: 5000 }),
  new Product({ id: 3, name: "Teclado", precio: 7500 }),
];
/* 
for (const item of productos) {
  console.log(`${item.name} ${item.precio}`);
}

//! Find
let nombre = "Monitor";
let producto = productos.find((item) => item.name === nombre);
let mensaje = console.log(`
Nombre : ${producto.name}
`); */
/* 
let precio = 4000;
let filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach((item) => {
  console.log(`
  Nombre = ${item.name}
  `);
}); */

/* let names = productos.map((item) => item.name);
console.log(names);
 */

/* //! MAP
let newProducs = productos.map((item) => {
  return {
    id: item.id,
    name: item.name,
    precio: item.precio - 100,
  };
});

console.log(newProducs);
 */

//! Reduce
// let total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(` El precio total de productos ${total}`);

//!SOrt
let numeros = [2, 45, 66, 8, 2, 3, 0, 01];

let orden = numeros.sort();
console.log(orden);
