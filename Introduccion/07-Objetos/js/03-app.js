const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}
console.log(producto)

//agregar propiedades al objeto

producto.imagen = 'imagen.jpg'

console.log(producto)

//borrar propiedad

delete producto.disponible

console.log(producto)