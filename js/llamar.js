var operandoa;
var operandob;
var operacion;


function init(){  // inicializa todas las funciones de lo botones varaibles  
//variables

var resultado = document.getElementById('resultado');
var historial = document.getElementById('historial');


var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var asteristico = document.getElementById('asteristico');
var cero = document.getElementById('cero');
var numeral = document.getElementById('numeral');

var mensaje = document.getElementById('mensaje');
var llamar = document.getElementById('llamar'); 
var ver = document.getElementById('ver');


var atras = document.getElementById('atras');
var salir = document.getElementById('salir')
var eliminar= document.getElementById('eliminar');


//Eventos de click
uno.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "1";
    historial.textContent += "1";
}
dos.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "2";
    historial.textContent += "2";
}
tres.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "3";
    historial.textContent += "3";
}
cuatro.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "4";
    historial.textContent += "4";
}
cinco.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "5";
    historial.textContent += "5";
}
seis.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "6";
    historial.textContent += "6";
}
siete.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "7";
    historial.textContent += "7";
}
ocho.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "8";
    historial.textContent += "8";
}
nueve.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "9";
    historial.textContent += "9";
}
asteristico.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "*";
    historial.textContent += "*";
}
cero.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "0";
    historial.textContent += "0";
}
numeral.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
    resultado.textContent = resultado.textContent + "#";
    historial.textContent += "#";
}


mensaje.onclick = function(e){
    click= new Audio("../audios/sour.mp3");
    click.play();
}


llamar.onclick = function(e){
    llamando();
}

function llamando(){
    const llamarBtn = document.getElementById("llamar");
    const click = new Audio("../audios/llamando.mp3");
    click.play();
    llamarBtn.style.backgroundColor = "red";
    
    click.addEventListener('ended', function() {
        llamarBtn.style.backgroundColor = "";
    });
    
    llamarBtn.addEventListener('dblclick', function() {
        colgar(click, llamarBtn);
    });
}

function colgar(audio, button) {
    audio.pause();
    audio.currentTime = 0;
    button.style.backgroundColor = "";
}






ver.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
}
atras.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
}
salir.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
}
eliminar.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
    eliminarNumero();
    eliminarNumeroHistorial();
}




function eliminarNumero() {
    let resultado = document.getElementById("resultado").innerHTML;
    let nuevoResultado = resultado.slice(0, -1);
    document.getElementById("resultado").innerHTML = nuevoResultado;
}

function eliminarNumeroHistorial() {
    let historial = document.getElementById("historial").innerHTML;
    let nuevoResultado = historial.slice(0, -1);
    document.getElementById("historial").innerHTML = nuevoResultado;
}
}