/* // Objetos
const persona = {
  nombre: "Miguel",
  edad: 28,
  colorCabello: "negro",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.colorCabello);

console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["colorCabello"]);

// Cambiar propiedad de un objeto

persona["nombre"] = "Angel";
console.log(persona.nombre);
persona.nombre = "Miguel";
console.log(persona.nombre);
 */

// Funciones construvtoras o clases van con mayusculas
/* function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}
const persona1 = new Persona("Miguel", 28, "Heliotropos");
console.log(persona1);
 */
/* 
function Producto(imagen, precio, nombre) {
  this.imagen = imagen;
  this.precio = precio;
  this.nombre = nombre;
}

const producto1 = new Producto("http", 12000, "Monitor");
const producto2 = new Producto("http", 13000, "CPU");
console.log(producto1.nombre);
console.log(producto2.nombre);
 */

/* function Usuario(info) {
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.pais = info.pais;
  this.colorCabello = info.colorCabello;
  this.colorOjos = info.colorOjos;
  this.altura = info.altura;
  this.peso = info.peso;
}

const user1 = new Usuario({
  nombre: "Miguel",
  edad: " 28",
  pais: "pais",
  colorOjos: "colorOjos",
  altura: "altura",
  peso: "peso",
  colorCabello: "colorCabello",
});
console.log(user1);
 */

class Product {
  constructor(name, value, cantidad) {
    this.name = name;
    this.value = value;
    this.vendido = false;
    this.cantidad = cantidad;
  }
  vender() {
    this.vendido = true;
    this.cantidad -= 1;
  }
}
const product1 = new Product("monitor", 1000, 6);
console.log(product1);
product1.vender();onsole.log(product1);

const product2 = new Product("Computadora", 1090);
