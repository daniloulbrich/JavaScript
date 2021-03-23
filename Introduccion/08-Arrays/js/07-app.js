const numeros = [10, 20, 30, 40, 50, 60, 70]

console.log(numeros)
console.table(numeros)
console.log(numeros.length)

//eliminar elementos desde el final

numeros.pop();
console.table(numeros)


//eliminar desde el principio

numeros.shift();
console.table(numeros)

//eliminar del medio, dos parametros el primero que posicion empezar a eliminar, y el segundo cuantos elementos eliminar

numeros.splice(2,1)
console.table(numeros)