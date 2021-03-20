//Objet literal
const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}

//objet construction
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('monitor2', 4000);

console.log(producto)
console.log(producto2)