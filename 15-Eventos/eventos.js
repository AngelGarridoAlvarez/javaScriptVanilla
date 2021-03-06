'use strict'
/*
# Eventos
* Funciones que se ejecutan cuando ocurre algo en el DOM
* (cuando pasa tiempo, cuando el usuario pasa por encima de un elemento, cuando el usuario redimensiona una ventana, etc.)
*/

//## 1. Eventos del ratón
//### 1.1 Evento Onclick:
//Cambia el genera eventos cuando pulsamos con el botón izquierdo

//vamos a crear una función usar más ejemplos

let btnOnclick = (funcion, textoBoton) => {
    //creo mi lugar dónde voy a situar mis elementos:
    let miLugar = document.querySelector("body");

    //creo el elemento html donde va a ir mi botón
    let miP = document.createElement("p");

    //creo mi botón
    let miBtn = document.createElement("button");

    //introduzco las propiedades de mi botón
    miBtn.innerHTML = textoBoton;
    miBtn.onclick = funcion;

    //digo donde meto a miP
    miLugar.appendChild(miP)

    //Meto miBtn dentro de miP
    return miP.appendChild(miBtn)
}

//A partir de btn creamos un botón que me cree una alerta.
btnOnclick(() => alert("alerta, has pulsado botón1"), "botón1: alert");

//Botón que me cambie de color
btnOnclick(
    () => {
        if (document.querySelectorAll("button")[1].style.background == "red") {
            document.querySelectorAll("button")[1].style.background = "blue"
        } else if (document.querySelectorAll("button")[1].style.background == "blue") {
            document.querySelectorAll("button")[1].style.background = "yellow"
        } else if (document.querySelectorAll("button")[1].style.background == "yellow") {
            document.querySelectorAll("button")[1].style.background = "purple"
        } else if (document.querySelectorAll("button")[1].style.background == "purple") {
            document.querySelectorAll("button")[1].style.background = "green"
        } else {
            document.querySelectorAll("button")[1].style.background = "red"
        }
    }
    , "botón2: colorines");


//### 1.2. ondblclick

//hay que hacer doble click para que se efectuen cambios

let btnOnDblClick = (funcion, textoBoton) => {
    //creo mi lugar dónde voy a situar mis elementos:
    let miLugar = document.querySelector("body");

    //creo el elemento html donde va a ir mi botón
    let miP = document.createElement("p");

    //creo mi botón
    let miBtn = document.createElement("button");

    //introduzco las propiedades de mi botón
    miBtn.innerHTML = textoBoton;
    miBtn.ondblclick = funcion;

    //digo donde meto a miP
    miLugar.appendChild(miP)

    //Meto miBtn dentro de miP
    return miP.appendChild(miBtn)
}

btnOnDblClick(() => alert("has hecho doble click"), "botón3: pulsa doble click")

//## 2. addEventListener
//Es una forma sencilla de capturar eventos
//elementoHTML.addEventListener('comportamiento',callback)

let btnAddEventListener = (evento, funcion, textoBoton) => {
    //creo mi lugar dónde voy a situar mis elementos:
    let miLugar = document.querySelector("body");

    //creo el elemento html donde va a ir mi botón
    let miP = document.createElement("p");

    //creo mi botón
    let miBtn = document.createElement("button");

    //introduzco las propiedades de mi botón
    miBtn.innerHTML = textoBoton;
    miBtn.addEventListener(evento, funcion);

    //digo donde meto a miP
    miLugar.appendChild(miP)

    //Meto miBtn dentro de miP
    return miP.appendChild(miBtn)
}


btnAddEventListener("click", () => alert("Click registrado con addEventListener"), "botón4: pulsa click");
btnAddEventListener("dblclick", () => alert("Doble click registrado con addEventListener"), "botón5: pulsa doble click");

//## 3. mouseOver
//* Te avisa cuando pasas el ratón por encima
//* Se ejecutaría de l siguiente forma: elementoHTML.addEventListener('mouseover',callback)
//* Integrado dentro de mi función quedaría de la siguiente forma:

btnAddEventListener("mouseover", () => alert("Has pasado por encima del botón"), "Botón6: mouseover");

//## 4. mouseOut
//* Te avisa cuando sacas el ratón por encima del teclado.
//* Se ejecutaría de l siguiente forma: elementoHTML.addEventListener('mouseout',callback)
//* Integrado dentro de mi función quedaría de la siguiente forma:

btnAddEventListener("mouseout", () => alert("Has sacado el ratón del botón"), "Botón7: mouseout");

//Probamos cambiar color con addEventListener:
btnAddEventListener("mouseover",
    () => {
        if (document.querySelectorAll("button")[7].style.background == "red") {
            document.querySelectorAll("button")[7].style.background = "blue"
        } else if (document.querySelectorAll("button")[7].style.background == "blue") {
            document.querySelectorAll("button")[7].style.background = "yellow"
        } else if (document.querySelectorAll("button")[7].style.background == "yellow") {
            document.querySelectorAll("button")[7].style.background = "purple"
        } else if (document.querySelectorAll("button")[7].style.background == "purple") {
            document.querySelectorAll("button")[7].style.background = "green"
        } else {
            document.querySelectorAll("button")[7].style.background = "red"
        }
    }
    , "botón8: colorines");

//##3. Eventos Focus, Blur, Keydown, Keypress y Keyup

//Ahora vamos a crear una función que me dibuje un formulario para trabar

let miInput = (evento, funcion, textoInput) => {
    //creo mi lugar dónde voy a situar mis elementos:
    let miLugar = document.querySelector("body");

    //creo el elemento html donde va a ir mi botón
    let miP = document.createElement("p");

    //creo mi botón
    let miInput = document.createElement("input");

    //introduzco las propiedades del formulario

    miInput.type = "text";
    miInput.placeholder = textoInput;
    miInput.addEventListener(evento, funcion);
    //miInput.style.border="1";

    //digo donde meto a miP
    miLugar.appendChild(miP)

    //Meto miBtn dentro de miP
    return miP.appendChild(miInput)
}

//### 3.1 Evento Focus

//* Cuando hago click dentro del input se activa
//* Si el input estuviera creado en HTML en lugar de hacerlo con mi función sería:
//* input.addEventListener('focus',function)

miInput("focus", () => alert("estás haciendo foco en el input, pulsa ESC para dejar de hacer foco"), "Input1: focus");

//### 3.2.evento Blur

//* Se activa cuando dejo de hacer focus en el input (hago click fuera del input)
//* input.addEventListener('blur',function)

miInput("blur", () => alert("estás haciendo blur en el input, es decir, has hecho click en el input y luego has hecho click fuera del input"), "Input2: blur");

//### 3.3.evento keydown, keypress y keyup
// * keydown se activa cuando presionas la tecla.
// * keypress se activa cuando se dibuja el caracter.
// * keyup se activa cuando dejas de presionar la tecla.


miInput("keydown", () => alert(`cuando presionabas "${event.key}" se ha activado keypress`), "Input3: keydown");
miInput("keypress", () => alert(`cuando se ha dibujado el caracter "${event.key}" se ha activado keydown`), "Input4: keypress");
miInput("keyup", () => alert(`cuando has levantado el dedo de la tecla "${event.key}" se ha activado keyup`), "Input5: keyup");

//## 5. Eventos timers

//### 5.1. setInterval(callback, t * 1000)
//Ejecuta mi callback cada t segundos.

//Voy a crear un texto con JS y con la id textoTimer1 para poder probar el intervalo

//* creo el lugar donde voy a situar mi texto
let timer1Place = document.querySelector("body");
//* creo un contenedor html para el texto
let pTimer1 = document.createElement("p");
//* añado la id a p
pTimer1.id = "textoTimer1"
//* creo el texto:
let textoTimer1 = document.createTextNode("Con este texto estamos probando setTimeOut");
//* Sitúo a <p>
timer1Place.appendChild(pTimer1);
//* Meto el texto en la <p>
pTimer1.appendChild(textoTimer1);

//Ya he creado mi texto en el documeto HTML, ahora voy a modificar sus estilos en un intervalo de 3 segundos:
setInterval(() => {
        if (document.querySelector("#textoTimer1").style.background == "blue") {
            document.querySelector("#textoTimer1").style.background = "yellow";
            document.querySelector("#textoTimer1").style.color = "red";

        } else {
            document.querySelector("#textoTimer1").style.background = "blue";
            document.querySelector("#textoTimer1").style.color = "white";

        }
    },
    1 * 1000)


//### 5.2. setTimeout(callback, t*1000)
//Establece una cuenta atrás

//vamos a crear un botón que nos inicie una cuenta atrás reutilizando el botón creado anteriormente
btnAddEventListener("click", () => setTimeout(() => {
    //dentro del setTimeOut indico que se cree un texto dentro de un <p> 2 segundos después de pulsar el botón
        let setTimeOutPlace = document.querySelector("body");
        let pSetTimeOut = document.createElement("p");
        let setTimeOutText = document.createTextNode(`Este texto ha aparecido 2 segundos después de que pulsaras click`);
        setTimeOutPlace.appendChild(pSetTimeOut);
        pSetTimeOut.appendChild(setTimeOutText);

    }, 1000 * 1)
    , "Set time out: algo va a pasar en 2 segundos");
