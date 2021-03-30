const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//encontrar el indice de abril. Si no lo encuentra el indice es -1

const indice = meses.findIndex(mes => mes == 'Abril')

console.log(indice)


const indice2 = carrito.findIndex( producto => producto.precio == 500)

console.log(indice2)
