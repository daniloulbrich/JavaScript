//Evento con el mouse

const nav = document.querySelector('.navegacion')

//registrar evento


nav.addEventListener('click',()=>{
    console.log('Click en nav')
})

nav.addEventListener('mouseenter',()=>{
    console.log('Arriba')
})

nav.addEventListener('mouseout',()=>{
    console.log('Saliendo')
})

nav.addEventListener('dblclick',()=>{
    console.log('doble click')
})