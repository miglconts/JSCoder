// Funciones

/* function suma(a, b) {
  return a + b;
}
console.log(suma(10, 10));

let suma2 = (a, b) => a + b;
console.log(suma(10, 10));

let suma3 = (a, b) => {
  return a + b;
};

console.log(suma3(10, 10)); */

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.16;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

console.log(nuevoPrecio);
