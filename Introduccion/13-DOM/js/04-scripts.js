//querySelector devuelve el primero que encuentra. Sintaxis similar a la de css. el '.' para las clases y el '#' para los id
//Devuelve uno solo. El primero que encuentra
const card = document.querySelector('.card')

console.log(card)

const info = document.querySelector('.premium .info')

console.log(info)

//seleccionar el segundo card de hospedajes


const segundocard = document.querySelector('section.hospedaje .card:nth-child(2)')

console.log(segundocard)

//seleccioanr el formulario

const formulario = document.querySelector('#formulario')
console.log(formulario)