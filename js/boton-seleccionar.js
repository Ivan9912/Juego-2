function init () {
        
    let botonParaMascotaJugador = document.getElementById ("seleccionar-mascota-jugador");
    botonParaMascotaJugador.addEventListener ("click", seleccionarMascotaJugador);  

    let botonParaMascotaJugadorAleatorio = document.getElementById ("seleccionar-mascota-jugador-aleatorio");
    botonParaMascotaJugadorAleatorio.addEventListener ("click", seleccionarMascotaJugadorAleatorio); 

    let spanfechaDeHoy = document.getElementById ("fecha-de-hoy");
    const hoy = new Date ();
    spanfechaDeHoy.innerHTML = ("Fecha de hoy: " + hoy.toDateString() + "   " + hoy.toLocaleTimeString() + " Hs.");

    //-----------------------
    let escuchaOpcionesRadio = document.forms["seleccionar-mascota"].elements["mascota"];
    for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
        escuchaOpcionesRadio[i].onclick = function() {
            let spanInputsSelect = document.getElementById ("botones-requisito-seleccion");
            spanInputsSelect.innerHTML = "<button id = \"seleccionar-mascota-jugador\" onclick = seleccionarMascotaJugador() + seleccionarMascotaPc() >Avanzar</button><button id = \"seleccionar-mascota-jugador-aleatorio\" onclick = seleccionarMascotaJugadorAleatorio()>Aleatorio</button>";  
        }
    }
    //-----------------------
}

function seleccionarMascotaJugador () {
    let input1 = document.getElementById ("mascota-1");
    let input2 = document.getElementById ("mascota-2");
    let input3 = document.getElementById ("mascota-3");
    let input4 = document.getElementById ("mascota-4");
    let input5 = document.getElementById ("mascota-5");
    let input6 = document.getElementById ("mascota-6");
    let spanMascotaJugador = document.getElementById ("nombre-mascota-jugador");

    if (input1.checked) {
        mascotaElegidaPorJugador.push ("Mascota 1");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else if (input2.checked){
        mascotaElegidaPorJugador.push ("Mascota 2");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else if (input3.checked){
        mascotaElegidaPorJugador.push ("Mascota 3");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else if (input4.checked){
        mascotaElegidaPorJugador.push ("Mascota 4");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else if (input5.checked){
        mascotaElegidaPorJugador.push ("Mascota 5");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else if (input6.checked){
        mascotaElegidaPorJugador.push ("Mascota 6");
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        seleccionarMascotaPc();
    } else {
        alert ("Selecciona alguna mascota. \nO sino, seleccione la opción \"Aleatorio\" para seleccionar.");
    }
    if ( i % 2) {
        let botonDeTrampa1 = document.getElementById ("boton-pc");
        botonDeTrampa1.addEventListener ("click", seleccionarMascotaPcTrampa);
    }
    return seleccion;
}

function seleccionarMascotaPc () {
    let spanMascotaAleatorioPc = document.getElementById ("nombre-mascota-pc");
    let aleatorioMascotaPc = random (min, max);
        
    if (aleatorioMascotaPc == 1) {
        mascotaElegidaPorPc.push ("Mascota 1"); 
        spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 2) {
            mascotaElegidaPorPc.push ("Mascota 2"); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 3) {
            mascotaElegidaPorPc.push ("Mascota 3"); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 4) {
            mascotaElegidaPorPc.push ("Mascota 4"); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 5) {
            mascotaElegidaPorPc.push ("Mascota 5"); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 6) {
            mascotaElegidaPorPc.push ("Mascota 6"); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
    }
    validate++;
    if (validate == 1) {
        let spanBotonAtaque = document.getElementById ("botones-para-atacar");
        spanBotonAtaque.innerHTML = "<button id = \"boton-fuego\" onclick = fuego()> Fuego 🔥 atacar</button><button id = \"boton-agua\" onclick = agua()> Agua 💧</button><button id = \"boton-tierra\" onclick = tierra()> Tierra ☘</button><br><br><br>";
    }           
} 
    
function seleccionarMascotaJugadorAleatorio () {
    let spanMascotaAleatorioJugador = document.getElementById ("nombre-mascota-jugador");
    let aleatorioMascotaJugador = random (min, max);
        
    if (aleatorioMascotaJugador == 1) {
        mascotaElegidaPorJugador.push ("Mascota 1");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 2) {
            mascotaElegidaPorJugador.push ("Mascota 2");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 3) {
            mascotaElegidaPorJugador.push ("Mascota 3");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 4) {
            mascotaElegidaPorJugador.push ("Mascota 4");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 5) {
            mascotaElegidaPorJugador.push ("Mascota 5");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 6) {
            mascotaElegidaPorJugador.push ("Mascota 6");
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
    }
    seleccionarMascotaPc();
    if ( i % 2) {
        let botonDeTrampa2 = document.getElementById ("boton-pc");
        botonDeTrampa2.addEventListener ("click", seleccionarMascotaPcTrampa)
    }       
}

function ataqueDeLaPc () {
    let ataqueAleatorio = random (min, (max-3));
    if ( ataqueAleatorio == 1) {
        let spanElementosDeLaPc = document.getElementById ("span-elementos-enemigo");
        spanElementosDeLaPc.innerHTML = "Elemento de Fuego 🔥";
        ataqueElementoDeLaPc = "Fuego 🔥";
    } else if (ataqueAleatorio == 2 ) {
        let spanElementosDeLaPc = document.getElementById ("span-elementos-enemigo");
        spanElementosDeLaPc.innerHTML = "Elemento de Agua 💧";
        ataqueElementoDeLaPc = "Agua 💧";
    } else {
        let spanElementosDeLaPc = document.getElementById ("span-elementos-enemigo");
        spanElementosDeLaPc.innerHTML = "Elemento de Tierra ☘";
        ataqueElementoDeLaPc = "Tierra ☘";
    }
    crearMensajeResultado ();
}
    
function fuego () {
    let spanElementosJugador = document.getElementById ("span-elementos-jugador");
    spanElementosJugador.innerHTML = "Elemento de Fuego 🔥" ;
    ataqueJugador = "Fuego 🔥";
    ataqueDeLaPc ();
}
    
function agua () {
    let spanElementosJugador = document.getElementById ("span-elementos-jugador");
    spanElementosJugador.innerHTML = "Elemento de Agua 💧" ;
    ataqueJugador = "Agua 💧";
    ataqueDeLaPc ();     
}
    
function tierra () {
    let spanElementosJugador = document.getElementById ("span-elementos-jugador");
    spanElementosJugador.innerHTML = "Elemento de Tierra ☘" ;
    ataqueJugador = "Tierra ☘";
    ataqueDeLaPc ();
}

function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
}

//----------------------------
function seleccionarMascotaPcTrampa () {
    for (i = 0; i< 2; i++) [
        seleccionarMascotaPc()
    ]
    let spanMascotaAleatorioPc = document.getElementById ("nombre-mascota-pc");
    let aleatorioMascotaPc = random (min, mascotaElegidaPorPc.length);
    if (mascotaElegidaPorPc[aleatorioMascotaPc] != undefined) {
        spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[aleatorioMascotaPc];
    }
    alert ("Este botón se desarrlló para probar las posibles variables de ataques. \nSí da \"Undefined\" tomará otro valor al azar.\nÉste es tú valor que se cambiará: " + mascotaElegidaPorPc[aleatorioMascotaPc]);
}

function trampa () {
    i++;
    //console.log (i);
    if (i % 2 || i == 0) {
        let trampa = document.getElementById ("trampa");
        trampa.innerHTML = "<p> Aquí se generará la elección de la PC de su mascota. <br> </p> <p> <button id = " + "boton-pc" + ">Elegir por la pc.</button><br><br></p>";
    } else {
        let trampa = document.getElementById ("trampa");
        trampa.innerHTML = "";
    }
    return i
}
    
function infoMascotas () {
    //console.log (index);
    if (index % 2 || index == 1) {
        let info = document.getElementById ("span-info-elementos-mascotas");
        info.innerHTML = "<label>Presiona el botón para saber más sobre los elementos de las mascotas.</label>";
        let atrasInfo = document.getElementById ("atras-info");
        atrasInfo.innerHTML = "Info...";
    } else {
        let info = document.getElementById ("span-info-elementos-mascotas");
        info.innerHTML = "<br>Mascota 1 -> Agua. <br> Mascota 2 -> Tierra. <br>Mascota 3 -> Fuego. <br>Mascota 4 -> Agua y Fuego. <br>Mascota 5 -> Agua y Tierra. <br>Mascota 6 -> Tierra y Fuego.";
        let atrasInfo = document.getElementById ("atras-info");
        atrasInfo.innerHTML = "Ocultar Info";
    }
    index++;
    return index
}

function crearMensajeResultado () {
    let esperaResultadoAleatorio = random (min, (max * 1000))
    for (wait = 0; wait <= esperaResultadoAleatorio; wait++) {
        if (wait == esperaResultadoAleatorio) {
            alert ("funciona");
        }
        //console.log (wait);
    }
}
//----------------------------
    

    
window.addEventListener ("load", init);
let index = 0;
let i = 0;
let min = 1;
let max = 6;
let seleccion;
let ataqueJugador;
let ataqueElementoDeLaPc;
let validate = 0;
const mascotaElegidaPorPc = ["Mascota 1"];
const mascotaElegidaPorJugador = ["Mascota 1"];
