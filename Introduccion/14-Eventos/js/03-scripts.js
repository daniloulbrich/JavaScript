//eventos con el teclado

const busqueda = document.querySelector('.busqueda')

//cuando apretas una tecla
/////busqueda.addEventListener('keydown',()=>{})

//busqueda.addEventListener('blur',()=>{})  

//busqueda.addEventListener('copy',()=>{})  

busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value)

})  
