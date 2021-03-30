const header = document.querySelector('.contenido-hero h1')
console.log(header)


console.log(header.innerText); //Si CSS visibility: hidden; no lo encuentra
console.log(header.textContent); //Si CSS visibility: hidden; si lo encuentra
console.log(header.innerHTML); //se trae el HTML

//document.querySelector('.contenido-hero h1').innerContent = 'Nuevo Contenido'

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer3.jpg'