var operandoa;
var operandob;
var operacion;


function init(){  // inicializa todas las funciones de lo botones varaibles  
//variables
var resultado = document.getElementById('resultado');
var reset = document.getElementById('reset');
var historial = document.getElementById('historial');

var igual = document.getElementById('igual');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');

//Eventos de click
uno.onclick = function(e){
resultado.textContent = resultado.textContent + "1";
historial.textContent += "1";
}
dos.onclick = function(e){
resultado.textContent = resultado.textContent + "2";
historial.textContent += "2";
}
tres.onclick = function(e){
resultado.textContent = resultado.textContent + "3";
historial.textContent += "3";
}
cuatro.onclick = function(e){
resultado.textContent = resultado.textContent + "4";
historial.textContent += "4";
}
cinco.onclick = function(e){
resultado.textContent = resultado.textContent + "5";
historial.textContent += "5";
}
seis.onclick = function(e){
resultado.textContent = resultado.textContent + "6";
historial.textContent += "6";
}
siete.onclick = function(e){
resultado.textContent = resultado.textContent + "7";
historial.textContent += "7";
}
ocho.onclick = function(e){
resultado.textContent = resultado.textContent + "8";
historial.textContent += "8";
}
nueve.onclick = function(e){
resultado.textContent = resultado.textContent + "9";
historial.textContent += "9";
}
cero.onclick = function(e){
resultado.textContent = resultado.textContent + "0";
historial.textContent += "0";
}
reset.onclick = function(e){
resetear();
historial.textContent ="";
}
suma.onclick = function(e){
operandoa = resultado.textContent;
if(historial.textContent.length <5)
{
historial.textContent +=" + ";
}
else
{
    //* solo permite de 3 digitos*//
alert("Solo puede introducir dos valores y 3 digitos como máximo para los dos números, vuelva a intentarlo");
resetear();
historial.textContent = "";
}
operacion = "+";
limpiar();

}
resta.onclick = function(e){
operandoa = resultado.textContent;
if(historial.textContent.length <5)
{
historial.textContent +=" - ";
}
else
{
alert("Solo puede introducir dos valores y 3 digitos como máximo para los dos números, vuelva a intentarlo");
resetear();
historial.textContent = "";
}
operacion = "-";
limpiar();
}
multiplicacion.onclick = function(e){
operandoa = resultado.textContent;
if(historial.textContent.length <5)
{
historial.textContent +=" x ";
}
else
{
alert("Solo puede introducir dos valores y 3 digitos como máximo para los dos números, vuelva a intentarlo");
resetear();
historial.textContent = "";
}
operacion = "*";
limpiar();
}
division.onclick = function(e){
operandoa = resultado.textContent;
if(historial.textContent.length <5)
{
historial.textContent +=" / ";
}
else
{
alert("Solo puede introducir dos valores y 3 digitos como máximo para los dos números, vuelva a intentarlo");
resetear();
historial.textContent = "";
}
operacion = "/";
limpiar();
}
igual.onclick = function(e){
operandob = resultado.textContent;
resolver();
}
}

function limpiar(){
resultado.textContent = "";
}
function resetear(){
resultado.textContent = "";
operandoa = 0;
operandob = 0;
operacion = "";
}

function resolver(){
var res = 0;
switch(operacion){
case "+":
res = parseFloat(operandoa) + parseFloat(operandob);
break;
case "-":
res = parseFloat(operandoa) - parseFloat(operandob);
break;
case "*":
res = parseFloat(operandoa) * parseFloat(operandob);
break;
case "/":
res = parseFloat(operandoa) / parseFloat(operandob);
break;
}
resetear();
resultado.textContent = res;
historial.textContent += " = "+res;
}