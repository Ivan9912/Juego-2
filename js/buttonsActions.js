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


    //let sectionAtaque = document.getElementById (`section-ataque`);
    //sectionAtaque.style.display=`block`;

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
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);

    if (input1.checked) {
        registroDeElecciones (0);
    } else if (input2.checked){
        registroDeElecciones (1);
    } else if (input3.checked){
        registroDeElecciones (2);
    } else if (input4.checked){
        registroDeElecciones (3);
    } else if (input5.checked){
        registroDeElecciones (4);
    } else if (input6.checked){
        registroDeElecciones (5);
    } 
    
    seleccionarMascotaPc();
    spanVidaJugador.innerHTML = vidaJugador;
    return seleccion;
}

function seleccionarMascotaJugadorAleatorio () {
    let aleatorioMascotaJugador = random (min, max);
    let spanMenuMascotas = document.getElementById (`ocultar-menu-mascotas`);
    spanMenuMascotas.innerHTML = `<br><br><br><br><p>Seleccionaste el botón <b>"aleatorio"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p><br><br><br><br`;
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);
        
    if (aleatorioMascotaJugador == 1) {
        registroDeElecciones (1);  
        } else if (aleatorioMascotaJugador == 2) {
            registroDeElecciones (2);
        } else if (aleatorioMascotaJugador == 3) {
            registroDeElecciones (3);
        } else if (aleatorioMascotaJugador == 4) {
            registroDeElecciones (4);
        } else if (aleatorioMascotaJugador == 5) {
            registroDeElecciones (5);
        } else if (aleatorioMascotaJugador == 6) {
            registroDeElecciones (6);
    }
    seleccionarMascotaPc();
    spanVidaJugador.innerHTML = vidaJugador;
}


function registroDeElecciones (mascota) {
    let spanMascotaJugador = document.getElementById (`nombre-mascota-jugador`);
    mascotaElegidaPorJugador.push (mascotasEleccion[mascota-1].name);
    seleccion = spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[0];
    ataqueDelJugadorALaPc = registroDeAtaque[mascota-1];
    vidaJugador = registroDeVida[mascota-1];
    validarBotonesAtaque (mascota);
}

//function quitaBotonesDeEleccion () {
 //   let spanInputsSelect = document.getElementById (`botones-requisito-seleccion`);
 //       spanInputsSelect.innerHTML = `
//        <button type = "button" id = "seleccionar-mascota-jugador" onclick = seleccionarMascotaJugador() + seleccionarMascotaPc() class = "btn btn-primary" disabled>
//            Select
//        </button> 
//        <button type = "button" id = "seleccionar-mascota-jugador-aleatorio" class = "btn btn-secondary btn-sm" disabled>
//            Random
//        </button>`
//}



function seleccionarMascotaPc () {
    
    let spanVidaPc = document.getElementById (`span-vida-pc`);
    let aleatorioMascotaPc = random (min, max);
        
    if (aleatorioMascotaPc == 1) {
        registroDeEleccionesPc(1);
        } else if (aleatorioMascotaPc == 2) {
            registroDeEleccionesPc(2);
        } else if (aleatorioMascotaPc == 3) {
            registroDeEleccionesPc(3);
        } else if (aleatorioMascotaPc == 4) {
            registroDeEleccionesPc(4);
        } else if (aleatorioMascotaPc == 5) {
            registroDeEleccionesPc(5);
        } else if (aleatorioMascotaPc == 6) {
            registroDeEleccionesPc(6);
    }
    spanVidaPc.innerHTML = vidaPc;
} 

function registroDeEleccionesPc (MascotaPc) {
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    mascotaElegidaPorPc.push (mascotasEleccion[MascotaPc-1].name); 
    spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlJugador = registroDeAtaque[MascotaPc-1];
    console.log (registroDeAtaque[MascotaPc-1])
    vidaPc = registroDeVida[MascotaPc-1];
    eleccionPc = MascotaPc;
}

function validarBotonesAtaque (codigoMascota) {
    
    let spanBotonAtaque = document.getElementById (`botones-para-atacar`);
    if (codigoMascota == 1) {
        spanBotonAtaque.innerHTML = `${agua} <br><br><br>`;
        escuchaBotonAgua = document.getElementById(`boton-agua`);
    } else if (codigoMascota == 2) {
        spanBotonAtaque.innerHTML = `${tierra} <br><br><br>`;
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
    } else if (codigoMascota == 3) {
        spanBotonAtaque.innerHTML = `${fuego} <br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
    } else if (codigoMascota == 4) {
        spanBotonAtaque.innerHTML =`${fuego} ${agua} <br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
        escuchaBotonAgua = document.getElementById(`boton-agua`);
    } else if (codigoMascota == 5) {
        spanBotonAtaque.innerHTML = `${agua} ${tierra} <br><br><br>`;
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
        escuchaBotonAgua = document.getElementById(`boton-agua`);
    } else if (codigoMascota == 6) {
        spanBotonAtaque.innerHTML = `${fuego} ${tierra} <br><br><br>`;
        escuchaBotonDeFuego = document.getElementById(`boton-fuego`);
        escuchaBotonTierra = document.getElementById(`boton-tierra`);
    }
    let sectionAtaque = document.getElementById (`section-ataque`);
    sectionAtaque.style.display=`block`;
    let sectionMain = document.getElementById(`section-main`);
    sectionMain.style.display=`none`;
    let sectionMain2 = document.getElementById(`section-botones-seleccion-jugador`);
    sectionMain2.style.display=`none`;
}

function elementoFuego () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Fuego 🔥`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
}

function elementoAgua () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Agua 💧`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();    
}

function elementoTierra () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Tierra ☘`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
}

function ataqueDeLaPc () {
    let ataqueAleatorio = random (min, (max-4));
    let spanElementosDeLaPc = document.getElementById (`span-elementos-enemigo`);
    ataqueDelJugadorALaPc = ataqueAleatoriooo();
    ataqueDeLaPcAlJugador = ataqueAleatoriooo();

    if (eleccionPc == 1) {
        ataqueElementoDeLaPc = `Agua 💧`;
    } else if (eleccionPc == 2) {
        ataqueElementoDeLaPc = `Tierra ☘`;
    } else if (eleccionPc == 3) {
        ataqueElementoDeLaPc = `Fuego 🔥`;
    } else if (eleccionPc == 4) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        }
    } else if (eleccionPc == 5) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        }
    } else if (eleccionPc == 6) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        }
    }
    spanElementosDeLaPc.innerHTML = `Elemento de ${ataqueElementoDeLaPc}`;
    combateDeElementos();
}

function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
}

function botonDeReinicio () {
    location.reload(); 
}

function ataqueAleatoriooo () {
    let aletoidad = random (60, 100);
    return aletoidad
}

//----------------------------
function seleccionarMascotaPcTrampa () {
    for (i = 0; i< 2; i++) {
        seleccionarMascotaPc()
        
    }
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    let aleatorioMascotaPc = random (min, mascotaElegidaPorPc.length-1);
    spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[aleatorioMascotaPc];
    //console.table (mascotaElegidaPorPc); //MIRAR ACA se itera en mascotaAlea objetos y se seleccionan aleatoriamente...
   
    alert (`
    Este botón se desarrolló para probar las posibles variables de 
    ataques. 
    
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
        </p>`;
        let botonDeTrampa2 = document.getElementById (`boton-pc`);
        botonDeTrampa2.addEventListener (`click`, seleccionarMascotaPcTrampa)
    } else {
        let trampa = document.getElementById (`trampa`);
        trampa.innerHTML = `<br><br><br><br>`;
    }
    i++;
    return i
}

//function infoMascotas () {
//    if (index % 2 || index == 1) {
//        let info = document.getElementById (`span-info-elementos-mascotas`);
//        info.innerHTML = `<br><br><br><br><br><br><br>`;
//        let atrasInfo = document.getElementById (`atras-info`);
//        atrasInfo.innerHTML = `Presiona para saber elementos de las mascotas...`;
//    } else {
//        let info = document.getElementById (`span-info-elementos-mascotas`);
//        info.innerHTML = `
//        <br>Mascota 1 -> Agua. 
//        <br> Mascota 2 -> Tierra. 
//        <br>Mascota 3 -> Fuego. 
//       <br>Mascota 4 -> Agua y Fuego. 
//        <br>Mascota 5 -> Agua y Tierra. 
//        <br>Mascota 6 -> Tierra y Fuego.`;
//        let atrasInfo = document.getElementById (`atras-info`);
//        atrasInfo.innerHTML = `Ocultar Info`;
//    }
//    index++;
//    return index
//}
//----------------------------

function crearMensajeResultado () {
    let esperaResultadoAleatorio = random ((min * 1000), (max * 1000))
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
        progresoDeAtaques = `vida de la mascota Pc pierde ${ataqueDelJugadorALaPc}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc;
        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado();
            revisarVidas ();
            
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado();
        }
        
    } else {
        progresoDeAtaques = `vida de tú mascota pierde ${ataqueDeLaPcAlJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador;
        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado();
            revisarVidas ();
            
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado();
        }
    }
}

function revisarVidas () {
    if (vidaPc <= 0) {
        crearMensajeFinal (`GANASTE el combate dejando a la mascota de la PC en 0. Felicitaciones! 🎉🎉🎈🥳🎉`);
        vidaPc = 0;
    } else if (vidaJugador <= 0) {
        crearMensajeFinal (`PERDISTE el combate la mascota de la PC dejó en 0 la vida de tú mascota. Vuelve a jugar...  😣😣😣😣😣`);
        vidaJugador = 0;
    }
}

function crearMensajeFinal (resultadoFinal) {
    let seccionMensajes = document.getElementById (`mensajes`);
    
    let parrafo = document.createElement (`p`);
    parrafo.innerHTML = resultadoFinal;
    seccionMensajes.appendChild(parrafo);  //aca se aplica lo interesante de las funciones junto con la funcion de revisarVidas...
    desactivarBotones ();
    
    let sectionReiniciar = document.getElementById (`reiniciará`);
    sectionReiniciar.style.visibility=`visible`;
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


let fuego = `<button id = "boton-fuego" onclick = elementoFuego() class = "btn btn-outline-danger" id = "boton-fuego"> Fuego 🔥 </button>`
let agua = `<button id = "boton-agua" onclick = elementoAgua() class = "btn btn-outline-info" id = "boton-agua"> Agua 💧</button>`
let tierra = `<button id = "boton-tierra" onclick = elementoTierra() class = "btn btn-outline-success" id = "boton-tierra"> Tierra ☘</button>`;

//let ResultadoDeAtaques;
let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

let registroDeAtaque = [];
let registroDeVida = [];
let ataqueDelJugadorALaPc;
let ataqueDeLaPcAlJugador;

let progresoDeAtaques;

window.addEventListener (`load`, init);
let eleccionPc;

let index = 0;
let i = 0;
let min = 1;
let max = 6;
let ataqueElementoJugador;
let ataqueElementoDeLaPc;
const mascotaElegidaPorPc = [];
const mascotaElegidaPorJugador = [];
const mascotaAtaque = [];
let vidaJugador = 999;
let vidaPc = 999;


//.join es metodo para unir arrays!!.
//-----------------------parte de objetos mascotas------------------------

class Mascotas{
    constructor(name, element, health, atk, def, deb1, deb2, deb3) {
        this.name = name
        this.element = element
        this.health = health
        this.atk = atk
        this.def = def
        this.deb1 = deb1
        this.deb2 = deb2
        this.deb3 = deb3
    }   
}

const mascotasEleccion = [];
const listaMascotas = [];

mascotasEleccion.push(new Mascotas(`Mascota 1`,`Agua`, 1000, 60,1.21,05,06,098));
mascotasEleccion.push(new Mascotas(`Mascota 2`,`Tierra`, 1000, 60,1.21,05,06,097));
mascotasEleccion.push(new Mascotas(`Mascota 3`,`Fuego`, 1000, 60,60.21,05,06,096));
mascotasEleccion.push(new Mascotas(`Mascota 4`,`Agua y Fuego`, 1000, 60,1.21,05,06,095));
mascotasEleccion.push(new Mascotas(`Mascota 5`,`Agua y Tierra`, 1000, 60,1.21,05,06,094));
mascotasEleccion.push(new Mascotas(`Mascota 6`,`Tierra y Fuego`, 1000, 60,1.21,05,06,093));

mascotasEleccion.forEach ((mascota) => {
    listaMascotas.push (`
    Su elección fué ${mascota.name} 
    Su elemento es de ${mascota.element} 
    Su vida es de ${mascota.health}
    Su ataque es de: ${mascota.atk}
    Su defensa es de: ${mascota.def}
    Su debilidad por Elemento de Tierra: ${mascota.deb1}
    Su debilidad por Elemento de Agua: ${mascota.deb2}
    Su debilidad por Elemento de Fuego: ${mascota.deb3}`);
    registroDeAtaque.push (mascota.atk);
    registroDeVida.push (mascota.health);    
    }
)
