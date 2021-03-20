const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}
console.log(producto)

//asiganmos a una variable algo del objeto
const nombre = producto.nombre

//ahora se hace asi
//destructuring
const {precio} = producto
const {nombre, disponible} = producto
console.log(precio)

