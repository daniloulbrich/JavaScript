const producto = {
    nombre: 'Monitor',
    precio: 530,
    disponible: true,
    informacion: {
        medida : '3 metros'

    }
}

console.log(producto)

//destructuring
const {precio, informacion, informacion: {medida} } = producto

console.log(precio)
console.log(medida)