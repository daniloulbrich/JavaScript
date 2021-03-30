window.addEventListener('scroll',()=>{
    console.log('Scroll')

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    
    if (ubicacion < 100){
        console.log('Aun falta')
    }
    else{
        console.log('Llegaste')
    }
})