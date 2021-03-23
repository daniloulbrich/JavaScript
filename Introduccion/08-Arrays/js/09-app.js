const carrito =[
    {nombre: 'ricky', apellido: 'Ricon'},
    {nombre: 'juan', apellido: 'diorio'},
    {nombre: 'maluma', apellido: 'paz'},
    {nombre: 'ernesto', apellido: 'rodriguez'},
    {nombre: 'mario', apellido: 'groppo'}
]

console.log(carrito)
console.table(carrito)
console.log(carrito.length)


//foreach

carrito.forEach(function(producto) {
    console.log(`${producto.nombre}  Precio: ${producto.apellido}`);
    
});


//.map --> esto crea un arreglo nuevo mienstras foreach no

carrito.map(function(producto) {
    console.log(`${producto.nombre}  Precio: ${producto.apellido}`);
    
});