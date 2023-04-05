var operandoa;
var operandob;
var operacion;


function init(){  // inicializa todas las funciones de lo botones varaibles  
//variables

var mensaje = document.getElementById('mensaje');
var llamar = document.getElementById('llamar'); 
var ver = document.getElementById('ver');


var atras = document.getElementById('atras');
var salir = document.getElementById('salir')
var eliminar= document.getElementById('eliminar');


//Eventos de click
mensaje.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
}
llamar.onclick = function(e){
    click= new Audio("../audios/click.mp3");
    click.play();
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
    
}

}