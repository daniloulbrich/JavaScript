//VARIABLES
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = []


cargarEventListeners();

function cargarEventListeners(){
    //agregar curso presionando agregar a carrito
    listaCursos.addEventListener('click',agregarCurso)

    //borrar curso
    carrito.addEventListener('click',eliminarCurso)

    //vaciar carrito entero
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML();
    })


}


//Funciones

function agregarCurso(e){
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer contenido de HTML

function leerDatosCurso(curso){
    //crear objeto con el contenido del curso

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
        
    }
    //Ver si el elemento existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe){
        //actualizamos cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad ++
                return curso
            }
            else{
                return curso
            }
        })
        articulosCarrito = [...cursos]
    }
    else{

        //agregar elemento al arreglo
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();
}

//muestra carrito en HTML

function carritoHTML(){

    //limpiar html
    limpiarHTML();
    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, id, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src='${imagen}' width='100'>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' data-id='${id}' cant='${cantidad}'>X</a>
            </td>
        `
        
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)        
    }
}

//eliminar un curso

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')
        const cant = e.target.getAttribute('cant')
        if (cant > 1){
            //actualizamos cantidad
            const cursos = articulosCarrito.map(curso =>{
                if(curso.id === cursoId){
                    curso.cantidad --
                    return curso
                }
                else{
                    return curso
                }
            })
            articulosCarrito = [...cursos]
        }
        else{
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        }
         //Elimina del arreglo de articulosCarrito
        

        carritoHTML();
    }

}