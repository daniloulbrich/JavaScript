"use strict";

const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}

console.log(producto)


//Hago un objeto modificable pero no se pueden agregar o eliminar elementos
Object.seal(producto)