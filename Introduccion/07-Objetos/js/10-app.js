const producto = {
    nombre: 'Monitor',
    precio: 500,
    disponible: true
}

const producto2 = {
    nombre: 'Monitor2',
    precio: 450,
    disponible: true
}

//unir dos objeto

const resultado = Object.assign(producto,producto2)

//o

const resultado = {...producto2, ...producto}