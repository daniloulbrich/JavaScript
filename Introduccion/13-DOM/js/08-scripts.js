//traversing the DOM

const navegacion = document.querySelector('.navegacion')

console.log(navegacion)
console.log(navegacion.firstElementChild) 
console.log(navegacion.children) 

const card = document.querySelector('.card')

console.log(card.children) 

console.log(card.children[0]) 

console.log(card.children[1].children[1].textContent) 

console.log(card.parentElement)  