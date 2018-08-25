var eur;
var dolar;
var operandoa;
var operandob;
var operandon;

function init() {
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var suma = document.getElementById("suma");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var resta = document.getElementById("resta");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var multiplicacion = document.getElementById("multiplicacion")
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var igual = document.getElementById("igual");
    var division = document.getElementById("division");

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e) {
        resetear();
    }
    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operandon = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operandon = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operandon = "*";
        limpiar();
    }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operandon = "/";
        limpiar();
    }
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operandon = "";
}



function resolver() {
    var res = 0;
    switch (operandon) {
        case "+":
            res = parseInt(operandoa) + parseInt(operandob);
            break;
        case "-":
            res = parseInt(operandoa) - parseInt(operandob);
            break;
        case "*":
            res = parseInt(operandoa) * parseInt(operandob);
            break;
        case "/":
            res = parseInt(operandoa) / parseInt(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}