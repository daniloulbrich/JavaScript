const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses1 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spred operator

const meses2 = [...meses, 'Agosto']
console.log(meses2)

const producto = {producto: 'Disco Duro', precio: 600 }

const carrito2 = [...carrito,producto]

console.log(carrito2)