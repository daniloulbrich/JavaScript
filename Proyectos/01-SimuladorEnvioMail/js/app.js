//variables

const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('#enviar-mail')
const btnLimpiar = document.querySelector('#resetBtn')
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListener();

function eventListener(){
    //Arrancar app
    document.addEventListener('DOMContentLoaded',iniciarApp)

    //validar campos. Blur se ejecuta cuando salimos del campo que estamos tocando
    email.addEventListener('blur',validarFormulario)
    asunto.addEventListener('blur',validarFormulario)
    mensaje.addEventListener('blur',validarFormulario)

    //Limpiar formulario

    btnLimpiar.addEventListener('click',limpiarFormulario)

    //Envio de mail

    formulario.addEventListener('submit',enviarEmail)

   
}


//funciones

function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50') 
}

function validarFormulario(e){

    if (e.target.value.length > 0) {

        //borramos mensaje de error
        const error = document.querySelector('p.error')
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    }
    else{
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){


        if (er.test(e.target.value)){

            const error = document.querySelector('p.error')
            if(error){
                error.remove();
            }
            

            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')
        }
        else{
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
            mostrarError('Email no valido');
        }
    }

    if (er.test(email.value) && asunto.value != '' && mensaje.value != ''){
        
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')

    }

}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('border','border-red-500','blackground-color-100','text-red-500','p-3', 'mt-5', 'text-center', 'error')

    const errores = document.querySelectorAll('.error')

    if (errores.length === 0){
        formulario.appendChild(mensajeError)
    }


}

function enviarEmail(e){
    e.preventDefault();

     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

    //Esperamos 3 segundo, ocultamos el spinner y mostamos el mensaje
    setTimeout( () =>{
        spinner.style.display = 'none';

        const parrafo = document.createElement('p')
        parrafo.textContent = 'El mail fue enviado correctamente.'
        parrafo.classList.add('text-center','my-10','p-3','bg-green-500','text-white','font-bold','uppercase')

        //insertamos parrafo antes del sppiner
        formulario.insertBefore(parrafo, spinner)

        //Eliminamos el mensaje despues de 3 segundos
        setTimeout(()=> {
            parrafo.remove(); 

            limpiarFormulario();
        }, 3000)
    }, 3000)


}

//Limpiar el formulario

function limpiarFormulario(e){

    formulario.reset();
    email.classList.remove('border', 'border-red-500')
    asunto.classList.remove('border', 'border-red-500')
    mensaje.classList.remove('border', 'border-red-500')
    const error = document.querySelector('p.error')
            if(error){
                error.remove();
            }
    iniciarApp();
}

//PAGINA PARA SPINNER
// https://tobiasahlin.com/spinkit/