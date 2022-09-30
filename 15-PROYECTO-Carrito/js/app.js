//Variables para referenciae el carrito
const carrito = document.querySelector('carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Presionaste el boton ')

    }
    
}

const cargarEventListener = () => {
    //Agregar funcion de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
}


cargarEventListener();