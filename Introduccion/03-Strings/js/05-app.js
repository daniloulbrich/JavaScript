const producto = ' Monitor de 45 pulgadas'

//uso de repleace para cambiar caracteres dentro de un string

console.log(producto.replace('pulgadas', '"'));


// slice te permite cortar desde un caracter hasta otro. No corta hacia atras

console.log(producto.slice(0,11));

//substring se comporta igual a slice con la diferencia de que si el primer caracter es mayor lo invierte

console.log(producto.slice(11,0));