function ocultarSecciones() {//el querySelectorAll devuelve un array de elementos HTML
    let secciones = document.querySelectorAll(".seccion");//con el .seccion ese"." es para hacer referencia a un elemento por su atributo class
    for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        seccion.style.display = "none";//.style modifica desde js un estilo css y la porp que queremos modificar. Display es propiedad que gestiona la visibilidad.
    }
}

let botones = document.querySelectorAll('.btn');//Se obtienen todos los botones con class btn
for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.addEventListener('click', mostrarSeccion);
}


function cambiarSeccion(otraSeccion) {
    ocultarSecciones()
    document.querySelector("#" + otraSeccion).style.display = "block";
}
cambiarSeccion("seccionInicio");

function mostrarSeccion() {
    ocultarSecciones()
    let idBoton = this.getAttribute("id");
    let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.slice(4);
    cambiarSeccion(idSeccion);
}
//mostrarBotones("invitado");

function mostrarBotones(tipo) {
    let todosBotones = document.querySelectorAll(".btn");
    for (let i = 0; i < todosBotones.length; i++) {
        const boton = todosBotones[i];
        boton.style.display = "none";
    }
    let botonesMostrar = document.querySelectorAll("." + tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        const boton = botonesMostrar[i];
        boton.style.display = "block";
    }
}
