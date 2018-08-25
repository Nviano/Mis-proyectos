//operacion === "+", hago un console.log de la suma de dos numeros
//operacion === "-", hago un console.log de la resta de dos numeros
var operacion = "%";
var x = 10;
var y = 8;

switch (operacion) {
    case '+':
        console.log(x + y)
        break;


    case '-':
        console.log(x - y)
        break;


    case '*':
        console.log(x * y)
        break;


    case '/':
        console.log(x / y)
        break;


    case '%':
        console.log(x % y)
        break;
    default:
        console.log("Operacion no definida")
}