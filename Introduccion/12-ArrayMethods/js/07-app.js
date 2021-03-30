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

// .concat

const resultado = meses.concat(meses1)

console.log(resultado)

//spred operator. Siempre que ponga ... lo siguiente si o si tiene que ser un arreglo

const resultado1 = [...meses, ...meses1]

console.log(resultado1)