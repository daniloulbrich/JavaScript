for (let i= 0; i < 10; i++){
    console.log(i); 
}

for(let i = 0; i < 20 ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

const carrito =[
    {nombre: 'ricky', apellido: 'Ricon'},
    {nombre: 'juan', apellido: 'diorio'},
    {nombre: 'maluma', apellido: 'paz'},
    {nombre: 'ernesto', apellido: 'rodriguez'},
    {nombre: 'mario', apellido: 'groppo'}
]

for(let i = 0; i < carrito.length ; i++){
        console.log(carrito[i].nombre)
   
}