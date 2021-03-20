//usamos used stric para no poder modificar los calores del producto
"use strict";

const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}

console.log(producto)


//Hago un objeto no modificable
Object.freeze(producto)

// no va a andar producto.disponible = false