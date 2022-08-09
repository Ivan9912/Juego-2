function init () {
            
    let botonParaMascotaJugador = document.getElementById (`seleccionar-mascota-jugador`);
    botonParaMascotaJugador.addEventListener (`click`, seleccionarMascotaJugador);  

    let botonParaMascotaJugadorAleatorio = document.getElementById (`seleccionar-mascota-jugador-aleatorio`);
    botonParaMascotaJugadorAleatorio.addEventListener (`click`, seleccionarMascotaJugadorAleatorio); 

    let spanfechaDeHoy = document.getElementById (`fecha-de-hoy`);
    const fechaHoy = new Date ();
    spanfechaDeHoy.innerHTML = (`Fecha de hoy: ${fechaHoy.toDateString()} ${fechaHoy.toLocaleTimeString()} Hs.`);

    let botonReinicio = document.getElementById (`boton-reiniciar`);
    botonReinicio.addEventListener (`click`, botonDeReinicio);

    let escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
    
    for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
        escuchaOpcionesRadio[i].onclick = function() {
            let spanInputsSelect = document.getElementById (`botones-requisito-seleccion`);
            spanInputsSelect.innerHTML = `
            <button type = "button" id = "seleccionar-mascota-jugador" onclick = seleccionarMascotaJugador() + seleccionarMascotaPc() class = "btn btn-primary">
                Select
            </button> 
            <button type = "button" id = "seleccionar-mascota-jugador-aleatorio" class = "btn btn-secondary btn-sm" disabled>
                Random
            </button>`
            //let chequeo = escuchaOpcionesRadio[i].checked;
            if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[0]) {
                alert (listaMascotas[0]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[1]) {
                alert (listaMascotas[1]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[2]) {
                alert (listaMascotas[2]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[3]) {
                alert (listaMascotas[3]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[4]) {
                alert (listaMascotas[4]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[5]) {
                alert (listaMascotas[5]);
            }
            //console.log (chequeo);
        }
    }

};

function seleccionarMascotaJugador () {
    let input1 = document.getElementById (`mascota-1`);
    let input2 = document.getElementById (`mascota-2`);
    let input3 = document.getElementById (`mascota-3`);
    let input4 = document.getElementById (`mascota-4`);
    let input5 = document.getElementById (`mascota-5`);
    let input6 = document.getElementById (`mascota-6`);
    let spanMascotaJugador = document.getElementById (`nombre-mascota-jugador`);

    if (input1.checked) {
        mascotaElegidaPorJugador.push (mascotasEleccion[0].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (1);
        seleccionarMascotaPc();
    } else if (input2.checked){
        mascotaElegidaPorJugador.push (mascotasEleccion[1].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (2);
        seleccionarMascotaPc();
    } else if (input3.checked){
        mascotaElegidaPorJugador.push (mascotasEleccion[2].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (3);
        seleccionarMascotaPc();
    } else if (input4.checked){
        mascotaElegidaPorJugador.push (mascotasEleccion[3].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (4);
        seleccionarMascotaPc();
    } else if (input5.checked){
        mascotaElegidaPorJugador.push (mascotasEleccion[4].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (5);
        seleccionarMascotaPc();
    } else if (input6.checked){
        mascotaElegidaPorJugador.push (mascotasEleccion[5].name);
        seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[1];
        validarBotonesAtaque (6);
        seleccionarMascotaPc();
    } else if ( i % 2) {
        let botonDeTrampa1 = document.getElementById (`boton-pc`);
        botonDeTrampa1.addEventListener (`click`, seleccionarMascotaPcTrampa);
    }
    return seleccion;
}

function seleccionarMascotaPc () {
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    let aleatorioMascotaPc = random (min, max);
        
    if (aleatorioMascotaPc == 1) {
        mascotaElegidaPorPc.push (mascotasEleccion[0].name); 
        spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 2) {
            mascotaElegidaPorPc.push (mascotasEleccion[1].name); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 3) {
            mascotaElegidaPorPc.push (mascotasEleccion[2].name); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 4) {
            mascotaElegidaPorPc.push (mascotasEleccion[3].name); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 5) {
            mascotaElegidaPorPc.push (mascotasEleccion[4].name); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
        } else if (aleatorioMascotaPc == 6) {
            mascotaElegidaPorPc.push (mascotasEleccion[5].name); 
            spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[1];
    }
    
             
} 

function validarBotonesAtaque (codigoMascota) {
    
    let spanBotonAtaque = document.getElementById (`botones-para-atacar`);
    if (codigoMascota == 1) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-agua" onclick = agua() class = "btn btn-outline-info" id = "boton-agua"> Agua 💧</button><br><br><br>`
    //spanBotonAtaque.innerHTML = `
    //<button id = "boton-fuego" onclick = fuego() class = "btn btn-outline-danger" id = "boton-fuego"> Fuego 🔥 </button>
    //<button id = "boton-agua" onclick = agua() class = "btn btn-outline-info" id = "boton-agua"> Agua 💧</button>
    //<button id = "boton-tierra" onclick = tierra() class = "btn btn-outline-success" id = "boton-tierra"> Tierra ☘</button>
    //<br><br><br>`;
    escuchaBotonAgua = document.getElementById(`boton-agua`);
    
    } else if (codigoMascota == 2) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-tierra" onclick = tierra() class = "btn btn-outline-success" id = "boton-tierra"> Tierra ☘</button><br><br><br>`;
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
    } else if (codigoMascota == 3) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-fuego" onclick = fuego() class = "btn btn-outline-danger" id = "boton-fuego"> Fuego 🔥 </button><br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
    } else if (codigoMascota == 4) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-fuego" onclick = fuego() class = "btn btn-outline-danger" id = "boton-fuego"> Fuego 🔥 </button>
        <button id = "boton-agua" onclick = agua() class = "btn btn-outline-info" id = "boton-agua"> Agua 💧</button><br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
        escuchaBotonAgua = document.getElementById(`boton-agua`);
    } else if (codigoMascota == 5) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-agua" onclick = agua() class = "btn btn-outline-info" id = "boton-agua"> Agua 💧</button>
        <button id = "boton-tierra" onclick = tierra() class = "btn btn-outline-success" id = "boton-tierra"> Tierra ☘</button><br><br><br>`;
        escuchaBotonAgua = document.getElementById(`boton-agua`);
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
    } else if (codigoMascota == 6) {
        spanBotonAtaque.innerHTML = `
        <button id = "boton-fuego" onclick = fuego() class = "btn btn-outline-danger" id = "boton-fuego"> Fuego 🔥 </button>
        <button id = "boton-tierra" onclick = tierra() class = "btn btn-outline-success" id = "boton-tierra"> Tierra ☘</button><br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
    }
}
    
function seleccionarMascotaJugadorAleatorio () {
    let spanMascotaAleatorioJugador = document.getElementById (`nombre-mascota-jugador`);
    let aleatorioMascotaJugador = random (min, max);
    let spanMenuMascotas = document.getElementById (`ocultar-menu-mascotas`);
    spanMenuMascotas.innerHTML = `<br><br><br><br><p>Seleccionaste el botón <b>"aleatorio"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p><br><br><br><br`;
        
    if (aleatorioMascotaJugador == 1) {
        mascotaElegidaPorJugador.push (mascotasEleccion[0].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 2) {
            mascotaElegidaPorJugador.push (mascotasEleccion[1].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 3) {
            mascotaElegidaPorJugador.push (mascotasEleccion[2].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 4) {
            mascotaElegidaPorJugador.push (mascotasEleccion[3].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 5) {
            mascotaElegidaPorJugador.push (mascotasEleccion[4].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
        } else if (aleatorioMascotaJugador == 6) {
            mascotaElegidaPorJugador.push (mascotasEleccion[5].name);
        spanMascotaAleatorioJugador.innerHTML = mascotaElegidaPorJugador[1];
    }
    seleccionarMascotaPc();
    if ( i % 2) {
        let botonDeTrampa2 = document.getElementById (`boton-pc`);
        botonDeTrampa2.addEventListener (`click`, seleccionarMascotaPcTrampa)
    }       
}

function ataqueDeLaPc () {
    let ataqueAleatorio = random (min, (max-3));
    if ( ataqueAleatorio == 1) {
        let spanElementosDeLaPc = document.getElementById (`span-elementos-enemigo`);
        spanElementosDeLaPc.innerHTML = `Elemento de Fuego 🔥`;
        ataqueElementoDeLaPc = `Fuego 🔥`;
    } else if (ataqueAleatorio == 2 ) {
        let spanElementosDeLaPc = document.getElementById (`span-elementos-enemigo`);
        spanElementosDeLaPc.innerHTML = `Elemento de Agua 💧`;
        ataqueElementoDeLaPc = `Agua 💧`;
    } else {
        let spanElementosDeLaPc = document.getElementById (`span-elementos-enemigo`);
        spanElementosDeLaPc.innerHTML = `Elemento de Tierra ☘`;
        ataqueElementoDeLaPc = `Tierra ☘`;
    }
    combateDeElementos();
}

function fuego () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    spanElementosJugador.innerHTML = `Elemento de Fuego 🔥` ;
    ataqueElementoJugador = `Fuego 🔥`;
    ataqueDeLaPc ();
}

function agua () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    spanElementosJugador.innerHTML = `Elemento de Agua 💧` ;
    ataqueElementoJugador = `Agua 💧`;
    ataqueDeLaPc ();     
}

function tierra () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    spanElementosJugador.innerHTML = `Elemento de Tierra ☘` ;
    ataqueElementoJugador = `Tierra ☘`;
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
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    let aleatorioMascotaPc = random (min, mascotaElegidaPorPc.length);
    if (mascotaElegidaPorPc[aleatorioMascotaPc] != undefined) {
        spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[aleatorioMascotaPc];
        //console.table (mascotaElegidaPorPc); //MIRAR ACA se itera en mascotaAlea objetos y se seleccionan aleatoriamente...
    }
    alert (`
    Este botón se desarrolló para probar las posibles variables de 
    ataques. 
    Sí da "Undefined" tomará otro valor al azar.
    Éste es tú valor que se cambiará:  "${mascotaElegidaPorPc[aleatorioMascotaPc]}"`);
}
function trampa () {
    //console.log (i);
    if (i % 2 || i == 1) {
        let trampa = document.getElementById (`trampa`);
        trampa.innerHTML = `
        <p> 
            Aquí se generará la elección de la PC de su mascota.<br> 
        </p> 
        <p> 
            <button id = "boton-pc" class = "btn btn-outline-dark">
                Elegir por la pc.<br><br>
            </button>
        </p>`
    } else {
        let trampa = document.getElementById (`trampa`);
        trampa.innerHTML = `<br><br><br><br>`;
    }
    i++;
    return i
}

function infoMascotas () {
    //console.log (index);
    if (index % 2 || index == 1) {
        let info = document.getElementById (`span-info-elementos-mascotas`);
        info.innerHTML = `<br><br><br><br><br><br><br>`;
        let atrasInfo = document.getElementById (`atras-info`);
        atrasInfo.innerHTML = `Presiona para saber elementos de las mascotas...`;
    } else {
        let info = document.getElementById (`span-info-elementos-mascotas`);
        info.innerHTML = `
        <br>Mascota 1 -> Agua. 
        <br> Mascota 2 -> Tierra. 
        <br>Mascota 3 -> Fuego. 
        <br>Mascota 4 -> Agua y Fuego. 
        <br>Mascota 5 -> Agua y Tierra. 
        <br>Mascota 6 -> Tierra y Fuego.`;
        let atrasInfo = document.getElementById (`atras-info`);
        atrasInfo.innerHTML = `Ocultar Info`;
    }
    index++;
    return index
}
//----------------------------

function crearMensajeResultado () {
    let esperaResultadoAleatorio = random (min, (max * 1000))
    for (wait = 0; wait <= esperaResultadoAleatorio; wait++) {
        if (wait == esperaResultadoAleatorio) {
            let seccionMensajes = document.getElementById (`mensajes`);
            let parrafo = document.createElement (`p`);
            parrafo.innerHTML = `${ataqueElementoJugador}  ${ataqueElementoDeLaPc}  ${progresoDeAtaques}`;
            seccionMensajes.appendChild(parrafo);
        }
        //console.log (wait);
    }
}
// se podria eleiminar la variable ResultadoDeAtaques y colocarlo como parametro de crearMensajeResultado con el valor de cada condicional (ganar, perder o empatar).
//COMBATE-------------------------
function combateDeElementos () {
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);
    let spanVidaPc = document.getElementById (`span-vida-pc`);

    if (ataqueElementoDeLaPc == ataqueElementoJugador) {
        progresoDeAtaques = `Ninguno de los dos se pudo dañar 😮😮😮😮`;
        crearMensajeResultado();
        
    } else if ((ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoJugador == `Tierra ☘`) || (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoJugador == `Agua 💧`) || (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoJugador == `Fuego 🔥`)) {
        progresoDeAtaques = `vida de la mascota Pc pierde ${ataqueDeLaPcAlJugador}`;
        crearMensajeResultado();
        vidaPc = vidaPc - ataqueDeLaPcAlJugador;
        spanVidaPc.innerHTML =  vidaPc;
    } else {
        progresoDeAtaques = `vida de tú mascota pierde ${ataqueDelJugadorALaPc}`;
        crearMensajeResultado();
        vidaJugador = vidaJugador - ataqueDelJugadorALaPc;
        spanVidaJugador.innerHTML = vidaJugador;
    }
    revisarVidas()
}
function revisarVidas () {
    if (vidaPc == 0) {
        crearMensajeFinal (`GANASTE el combate dejando a la mascota de la PC en 0. Felicitaciones! 🎉🎉🎈🥳🎉`);
    } else if (vidaJugador == 0) {
        crearMensajeFinal (`PERDISTE el combate la mascota de la PC dejó en 0 la vida de tú mascota. Vuelve a jugar...  😣😣😣😣😣`);
    }
}

function crearMensajeFinal (resultadoFinal) {
    let seccionMensajes = document.getElementById (`mensajes`);
    let parrafo = document.createElement (`p`);
    parrafo.innerHTML = resultadoFinal;
    seccionMensajes.appendChild(parrafo);  //aca se aplica lo interesante de las funciones junto con la funcion de revisarVidas...
    desactivarBotones ();
    
}
function desactivarBotones () {
    if (escuchaBotonAgua != undefined) {
        escuchaBotonAgua.disabled = true;
    } 
    if (escuchaBotonDeFuego != undefined) {
        escuchaBotonDeFuego.disabled = true;
    } 
    if (escuchaBotonTierra != undefined) {
        escuchaBotonTierra.disabled = true;
    } //aca uso una nueva manera de deshabilitar botones...
}


//let ResultadoDeAtaques;
let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;


let ataqueDelJugadorALaPc = 333;
let ataqueDeLaPcAlJugador = 333;
let progresoDeAtaques;

window.addEventListener (`load`, init);

let index = 0;
let i = 0;
let min = 1;
let max = 6;
let ataqueElementoJugador;
let ataqueElementoDeLaPc;
const mascotaElegidaPorPc = [`Mascota 1`];
const mascotaElegidaPorJugador = [`Mascota 1`];
let vidaJugador = 999;
let vidaPc = 999;


//.join es metodo para unir arrays!!.
//-----------------------parte de objetos mascotas------------------------

class Mascotas{
    constructor(name, element, health, atk, def, deb1, deb2, deb3) {
        this.name = name
        this.element = element
        this.health = health
        this.atk = parseFloat (atk)
        this.def = def
        this.deb1 = deb1
        this.deb2 = deb2
        this.deb3 = deb3

    }
    ataqueAleatoriooo () {
        this.atk = this.atk + random (10, 50);
    }
}
const mascotasEleccion = [];
const listaMascotas = [];

mascotasEleccion.push(new Mascotas(`Mascota 1`,`Agua`, 1000, 56,1.21,05,06,098));
mascotasEleccion.push(new Mascotas(`Mascota 2`,`Tierra`, 1000, 57,1.21,05,06,097));
mascotasEleccion.push(new Mascotas(`Mascota 3`,`Fuego`, 1000, 58,1.21,05,06,096));
mascotasEleccion.push(new Mascotas(`Mascota 4`,`Agua y Fuego`, 1000, 59,1.21,05,06,095));
mascotasEleccion.push(new Mascotas(`Mascota 5`,`Agua y Tierra`, 1000, 60,1.21,05,06,094));
mascotasEleccion.push(new Mascotas(`Mascota 6`,`Tierra y Fuego`, 1000, 61,1.21,05,06,093));


mascotasEleccion.forEach ((mascota) => {
        listaMascotas.push (`
        Su elección fué ${mascota.name} 
        Su elemento es de ${mascota.element} 
        Su ataque es de: ${mascota.atk}
        Su defensa es de: ${mascota.def}
        Su debilidad por Elemento de Tierra: ${mascota.deb1}
        Su debilidad por Elemento de Agua: ${mascota.deb2}
        Su debilidad por Elemento de Fuego: ${mascota.deb3}`);
        
       //alert (jeje);
    });


function botonDeReinicio () {
    
    location.reload(); 
}




//console.table (listaMascotas);

//console.table (mascotasEleccion[5]);

    //if (Eleccion == 1) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 1`,`Agua`, 1000, 56,1.21,05,06,098));
    //} else if (Eleccion == 2) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 2`,`Tierra`, 1000, 57,1.21,05,06,097));
    //} else if (Eleccion == 3) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 3`,`Fuego`, 1000, 58,1.21,05,06,096));
    //} else if (Eleccion == 4) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 4`,`Agua y Fuego`, 1000, 59,1.21,05,06,095));
    //} else if (Eleccion == 5) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 5`,`Agua y Tierra`, 1000, 60,1.21,05,06,094));
    //} else if (Eleccion == 6) {
    //    mascotasEleccion.push(new Mascotas(`Mascota 6`,`Tierra y Fuego`, 1000, 61,1.21,05,06,093));
    //} else {
    //    mascotasEleccion.push(new Mascotas(`Sin definir`,`sin definir`,`sin definir`,`sin definir`,`sin definir`,`sin definir`,`sin definir`,`sin definir`));
    //    alert (`Realiza nuevamente su elección con F5.` );
    //}
    //mascotasEleccion.forEach ((mascota) => {
    //    listaa.push (`
    //    ${index} - Su elección fué ${mascota.name} 
    //    Su elemento es de ${mascota.element} 
    //    Su ataque es de: ${mascota.atk}
    //    Su defensa es de: ${mascota.def}
    //    Su debilidad por Elemento de Tierra: ${mascota.deb1}
    //    Su debilidad por Elemento de Agua: ${mascota.deb2}
    //    Su debilidad por Elemento de Fuego: ${mascota.deb3}`);
    //    index++;
       //alert (jeje);
    //});
    //alert (listaa[0]);