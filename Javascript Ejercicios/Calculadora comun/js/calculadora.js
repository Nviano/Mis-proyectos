/**
*	Añade al texto recogido en "resultado" el texto que le pasemos
*/
function addText(valor){
	if (pulsacionIgual == true) {
		borrar ();
		pulsacionIgual = false;
	}	
	document.getElementById("resultado").innerHTML += valor;
}

/**
*	Elimina el texto que haya en "resultado"
*/
function borrar () {
	document.getElementById("resultado").innerHTML = "";
}

function igual () {	
	var operation = document.getElementById("resultado").innerHTML;
	console.log(operation);
	var resultado = "";
	if (validarOperando(operation)) {		
		if (validarOperadores(operation)){			
			resultado = operate(operation);
			document.getElementById("resultado").innerHTML = resultado;
		}
		else {
			document.getElementById("resultado").innerHTML = "Error";
		}	
	}
	else {
		console.log("error");
		document.getElementById("resultado").innerHTML = "Error";
	}
	
	pulsacionIgual = true;
}

function operate(operation) {
	
	var simbolo = obtenerSimbolo(operation);
	var operandos = operation.split(simbolo);
	var operando1 = operandos[0];
	var operando2 = operandos[1];
	var result = 0;
	switch(simbolo){
		case "+":
			result = parseFloat(operando1) + parseFloat(operando2);
		break;
		
		case "-":
			result = parseFloat(operando1) - parseFloat(operando2);
		break;
		
		case "*":
			result = parseFloat(operando1) * parseFloat(operando2);
		break;
		
		case "/":
			result = parseFloat(operando1) / parseFloat(operando2);
		break;
		
		case "^":
			result = Math.pow(parseFloat(operando1), parseFloat(operando2));
		break;
	}	
	
	return result;
}


function exchangeDollarToEuro(){
	console.log("dollar to euro");
	var valor = document.getElementById("resultado").innerHTML;
	
	if (!isNaN(valor)){
		let result = parseFloat(valor) / 0.83;
		document.getElementById("resultado").innerHTML = result;
	}
	else {
		document.getElementById("resultado").innerHTML = "Error";
	}
	
	pulsacionIgual = true;
}

function exchangeEuroToDollar(){
	console.log("euro to dollar");
	var valor = document.getElementById("resultado").innerHTML;
	
	if (!isNaN(valor)){
		let result = parseFloat(valor) * 0.83;
		document.getElementById("resultado").innerHTML = result;
	}
	else {
		document.getElementById("resultado").innerHTML = "Error";
	}
	
	pulsacionIgual = true;
}


/**
* Se valida que la operacion solo tenga un caracter
* que no sea un número, es decir sólo un +,-,* ó /
*/
function validarOperando (operation){
	
	var arrayOperation = operation.split("");
	var cont = 0;
	for (let i = 0; i < arrayOperation.length; i++) {
		if (isNaN(arrayOperation[i])) {
			cont++;
		}
	}
	
	if (cont > 1) {
		return false;
	}
	else {
		return true;
	}
}


/**
* Se valida que la operacion tenga dos operandos,
* a cada lado del símbolo
*/
function validarOperadores (operation){
	
	var simbolo = obtenerSimbolo(operation);
	
	var operandos = operation.split(simbolo);
	
	if (operandos.length == 2) {
		return true;
	}
	else {
		return false;
	}
}


function obtenerSimbolo(operation){
	var arrayOperation = operation.split("");
	var simbolo = "";
	for (let i = 0; i < arrayOperation.length && simbolo == ""; i++) {
		if (isNaN(arrayOperation[i])) {
			simbolo = arrayOperation[i];			
		}
	}
	
	return simbolo;
}	