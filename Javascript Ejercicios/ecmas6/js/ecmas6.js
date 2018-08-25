//----------LET------------//

// if (true) {
//     var uno = 1;
//     let dos = 2;
// }

// document.write("uno =  " + uno);
// document.write("<br/>");
//document.write("dos =  " + dos);
//------------------------------------
// var datos = new Prueba("Pepito");
// var dos = datos;

// dos.setNombre("68546458");
// console.log(datos.getNombre());
// console.log(dos.getNombre());
// //este ejemplo es por referencia
//----------------------------------------

// var datos = new Prueba("Pepito");
// console.log(datos.getNombre());
// pruebaFunct(datos);
// console.log(datos.getNombre());

// function pruebaFunct(valor) {
//     valor.setNombre("68545458")
// }

// function prueba(arrayValores) {

//     arrayValores = new Array("hola", "tio");
// }

// var arrayDatos = new Array(1, 2, 3, 4, 5);
// console.log(arrayDatos);
// prueba(arrayDatos);
// console.log(arrayDatos);

// Dos clases paso por valor o paso por referencia, 
// El paso por valor: es una copia de lo que envio, lo declaro lo envio 
// y lo recibo igual.
// El paso por referencia: es la informacion diferentes variables que 
// apuntan al mismo valor, siempre en memoria

//----------CONSTANTES------------//

// const PI = 3.141592;

// //PI = 8;

// document.write("typeof true: " + typeof true);
// document.write("<br>");
// document.write("typeof 3.14: " + typeof 3.14);
// document.write("<br>");
// document.write("typeof string: " + typeof "String");
// document.write("<br>");
// document.write("typeof Symbol(): " + typeof Symbol());
// document.write("<br>");
// document.write("typeof {a:1}: " + typeof { a: 1 });
// document.write("<br>");
// document.write("typeof [1,2,3]: " + typeof [1, 2, 3]);
// document.write("<br>");
// document.write("typeof undefined: " + typeof undefined);
// document.write("<br>");
// document.write("typeof null: " + typeof null);
// document.write("<br>");


//----------TEMPLATE LITERALS------------//


// let nombre = "Balbino";
// let apellido = "Perez";
// document.write(` Mi nombre es ${nombre} ${apellido}`);
// document.write("<br>");

// let num1 = 6;
// let num2 = 7;
// document.write(`num1 = ${num1}`);
// document.write("<br>");
// document.write(`num2 = ${num2}`);
// document.write("<br>");
// document.write(` num1 + num2 =  ${num1 + num2}`);
// document.write("<br>");

//----------FUNCIONES USANDO TEMPLATE LITERALS------------//

// function matematicas(operacion, ...valores) {
//     //los ... es xq no sabemos cnt valores vamos a recibir

//     if (operacion[0] == 'Suma') {
//         let sumatorio = 0;

//         for (let i = 0; i < valores.length; i++) {
//             sumatorio += valores[i];
//         }
//         document.write(`Resultado de la suma: ${sumatorio}`);
//         document.write("<br>");
//     } else if (operacion[0] == 'Multiplica') {
//         document.write(`Multiplicaion: ${valores[0] * valores[1]}`);
//         document.write("<br>");
//     }

// }

// matematicas `Suma${10} ${20} ${30} ${40}`;
// matematicas `Multiplica${10} ${10}`;

// //for ... of

// let nombre = "Manolito";

// for (let caracter of nombre) {
//     document.write(` ${caracter}`);
//     document.write("<br>");
// }

// let dato = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let numero of dato) {
//     document.write(`${numero}`);
//     document.write("<br>");
// }

// //para sumar los numero del array
// let dato = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumatorio = 0;
// for (let numero of dato) {
//     sumatorio += numero;

// }
// document.write(`${sumatorio}`);
// document.write("<br>");

// //----------STRINGS------------//
// //nuevos metodos y propiedades de la clase String

// let hola = "hola ";

// //repeat
// document.write(hola.repeat(3));
// document.write("<br>");

// //starrsWith
// document.write(hola.startsWith("ho"));
// document.write("<br>");
// document.write(hola.startsWith("la"));
// document.write("<br>");

// if (hola.startsWith("ho")) {
//     document.write("sep");
//     document.write("<br>");
// } else {
//     document.write("nop");
//     document.write("<br>");
// }

// //endsWith

// document.write("endsWith la: " + hola.endsWith("la "));
// document.write("<br>");
// document.write("endsWith ho: " + hola.endsWith("ho"));
// document.write("<br>");

// //includes
// document.write("includes ol: " + hola.includes("ol"));
// document.write("<br>");

// //String en multiples lineas

// //antes de ES6

// let datoTexto = "Esto es un\
// String en varias \
// lineas";
// document.write(datoTexto);
// document.write("<br>");

// //despues de ES6

// let datoTexto2 = `Esto es un 
// String en varias
// lineas v2 :-)`;
// document.write(datoTexto2);
// document.write("<br>");


// Valores por defecto 

// function suma(num1 = 8, num2 = 5) {
//     document.write(`${num1} + ${num2} = ${num1 + num2}`);

// }
// suma(1, 8);

// function suma(num1 = 8, num2 = 5) {
//     for (let i = 0; i < arguments.length; i++)
//         document.write(`${arguments[i]} <br\>`);
// }

// suma(7, 8, 9, 4, 2, 6);

// function suma() {
//     for (let i = 0; i < arguments.length; i++)
//         document.write(`${arguments[i]} <br\>`);
// }
// suma(7, "a", new Date(), 2);
//con arguments puede ser q haya valores o no porque siempre existe, con ...valores tiene q recibir
//valores a la fuerza

// function suma(...valores) {
//     for (let i = 0; i < valores.length; i++)
//         document.write(`${valores[i]} <br\>`);
// }

// suma(7, "a", new Date(), 2);

// function suma(...valores) {
//     let sumatorio = 0;
//     for (let i = 0; i < valores.length; i++)
//         sumatorio += valores[i];
//     document.write(`La suma es ${sumatorio} <br\>`);
// }

// let numeros = [1, 2, 3, 4, 5, 6];
// suma(...numeros);

//------------------------ARROW FUNCTIONS-----------------------------------

// let resta = (num1, num2) => num1 - num2;
// document.write(`5 - 10 = ${resta(5,10)} <br\> `);

// let multiplicar = (num1, num2) => {
//     let result = num1 * num2;
//     document.write(`${num1} * ${num2} = ${result} <br\> `);
// }
// multiplicar(5, 10);


//------------------------ARRAYS-----------------------------------

// REDUCERS

let varArray = [1, 2, 3, 4, 5];
let sumaValores = varArray.reduce((a, b) => a + b);
document.write(`Suma: ${sumaValores} <br\>`);

//FILTER

let pares = varArray.filter(v => v % 2 == 0);
document.write(`Pares: ${pares} <br\>`);

let impares = varArray.filter(v => v % 2 != 0);
document.write(`Impares: ${impares} <br\>`);

//MAP

let doubles = varArray.map(v => v * 2);
document.write(`Dobles: ${doubles} <br\>`);