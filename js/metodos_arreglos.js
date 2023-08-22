const textoInput = document.getElementById('texto');
const total = document.getElementById('total');
const realizados = document.getElementById('realizados');
const numero_id = document.getElementById('resultados');
const tareas = document.getElementById('tarea');

const botonEliminar = document.getElementById('btnEliminar');
const seccionResultados = document.querySelector('.seccion_resultados')
var boton = document.getElementById('boton');

var totalTareas = 0

let tareasRealizadas = [
    {
        texto: "hacer ejercicio",
        ID: 1,
        botonID: 1,
        completado: false
    },
    {
        texto: "hacer deporte",
        ID:2,
        botonID: 2,
        completado: false
    },
    {
        texto: "hacer hacer cardio",
        ID: 3,
        botonID: 3,
        completado: false
    }

];


cargarEventos();

function cargarEventos (){
    // agregar tarea haciendo click en el boton
    boton.addEventListener('click', agregandoTareas);

    //eliminando tarea haciendo click en la X
    seccionResultados.addEventListener('click', eliminarTareas);

    document.addEventListener('DOMContentLoaded', () => {
        mostrarTareas();
    })

}

function agregandoTareas (e){

    const textoTareas = {
        texto: textoInput.value,
        ID: Date.now(),
        botonID: Date.now(),
        completado: false
       
    }
  
    // creamos un sprear operator para agregar los datos del objeto en el arreglo global
    tareasRealizadas = [...tareasRealizadas, textoTareas]

    pintarHTML();
}

// mostrar el arreglo en el html

function pintarHTML (){

// limpia html
limpiarHTML();

//recorre el hmtl y general en el dom 
    tareasRealizadas.forEach( tarea => {
        
        let parrafo = document.createElement('div');
        parrafo.className = "seccionResultados";
        parrafo.id = tarea.ID
        parrafo.innerHTML = `

        <div class="id_resultados" id="resultados">
        <p>${tarea.ID}</p>
        
        </div>
        <div class="id_tareas" id="tarea">
        <p>${tarea.texto}</p>

        </div>
        <div class="checks" id="checks">
        <input type="checkbox" name="checkbox" class="tareasMarcadas" id="${tarea.ID}">

        </div>
        <div class="btnEliminar" id="btnEliminar">
        <div><button class="boton_eliminar" id="boton_eliminar"> <a href="#" class="borrar-tarea" data-id="${tarea.botonID}">X</a></button></div>
        
        </div>

        `;

    // pintamos el html en el div de tarea
    seccionResultados.appendChild(parrafo);

    })

    totalTareas = contadorTareas();
    total.innerHTML = totalTareas;

    const checkMarcado = document.querySelectorAll('.tareasMarcadas');

   checkMarcado.forEach( elemento => {
    elemento.addEventListener('click', checkSeleccionado)})

}


function limpiarHTML (){
    while (seccionResultados.firstChild){
        seccionResultados.removeChild(seccionResultados.firstChild)
    }


}



function contadorTareas (){
    return tareasRealizadas.length

}

//funcion que elimina los datos del curso 

function eliminarTareas (e){
    if(e.target.classList.contains('borrar-tarea')){
        const tareaID = e.target.getAttribute('data-id')
        console.log(tareaID)

        // elimina del arreglo tareasRealizadas por el data-id
        tareasRealizadas = tareasRealizadas.filter( tareas => tareas.botonID !== parseInt(tareaID));
        console.log(tareasRealizadas)

        pintarHTML ();

    
    }

}

function checkSeleccionado(e){
    
    var tareaid = e.target.id

    tareasRealizadas.map( elemento => {
    if(elemento.ID == tareaid){
        elemento.completado = !elemento.completado

    } 

    return elemento;

    })

    realizados.innerHTML = tareasRealizadass();

    
}

function tareasRealizadass (){
     return tareasRealizadas.filter(elemento => {
        if(elemento.completado){
            return true 

        }
        return false
    }).length

    

}

function mostrarTareas (){
    pintarHTML();
}
   
















