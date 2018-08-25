<!-- <?php
	$nombre = "nombre texto 1";
	$nombre2 = "pepe";
	$valor = 8;

	echo $nombre . " ". $nombre2 . " y vale " . $valor;

?> -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>T�tulo de tu p�gina</title>
<style type="text/css">
.destacado span{
	color:red;
}
</style>

</head>
<body>
<?php
	// $textoHTML = "<h1>hola!</h1>";
	// echo $textoHTML;

	// //matematicas
	// echo 16+8;
	// echo "<br>";
	// $num = "8";
	// echo $num . 8; //concatenar
	// echo "<br>";
	// echo $num + 8; //sumar

	//sentencias condicionales
	//if

	// $numero = 11;

	// if ($numero < 10){
	// 	echo "El numero es menor que 10: " . $numero;
	// }
	// elseif ($numero > 10){
	// 	echo "El numero es mayor que 10: " . $numero;
	// }
	// else {
	// 	echo "El numero es igual que 10: " . $numero;
	// }

	// //switch
	// echo "<br>";
	// $num = 9;
	// switch($num) {
	// 	case 9:
	// 		echo "caso 9";
	// 	break;
	// 	case 10:
	// 		echo "caso 10";
	// 	break;
	// 	case 11:
	// 		echo "caso 11";
	// 	break;
	// 	default:
	// 		echo "default";
	// 	break;
	// }

	//arrays

	// $numeros = array(1,2,3,4,5,6);
	// $num = [11,15,20,30,50,100,1,0,8,9];

	// echo $numeros[0];
	// echo "<br>";
	// echo $numeros[2];
	// echo "<br>";
	// echo $num[3];
	// echo "<br>";

	// print_r($num);

	// arrays asociativos

	// $nombres = array("nombre" => "Carlos", "apellido1" => "Perez");

	// echo "<br>";
	// print_r($nombres);
	// echo "<br>";

	// print_r($nombres["nombre"]);
	// echo "<br>";

	// print_r($nombres["apellido1"]);
	// echo "<br>";

	// echo $nombres["nombre"] . " " . $nombres["apellido1"];
	// echo "<br>";
 

	// bucles

		// echo "<br> WHILE: <br>";
		// $numero = 0;
		// while ($numero < 10) {
		// 	echo $numero;
		// 	echo "<br>";
		// 	$numero++;
		// }

		// echo "<br> FOR: <br>";
		// for ($i = 0; $i < 10; $i++) {
		// 	echo $i;
		// 	echo "<br>";

		// }
		// echo "<br> FOREACH: <br>";
		// $numeros = array(1,2,3,4,5,6,7,8);
		// foreach($numeros as $n){
		// 	echo $n . "<br>";
		// }

		// echo "<br> FOR para bucle: <br>";
		// for ($i = 0; $i < count($numeros); $i++) {
		// 	echo $numeros[$i] . "<br>";
		// }

		// function hablar(){
		// 	echo "bla bla bla";
		// }

		// hablar();

		// function escribir($texto){
		// 	echo "<br> Uno va y dice " . $texto;
		// }

		// escribir("Que pasa tron");

		// function restar ($n1,$n2){
		// 	$result = $n1 - $n2;
		// 	return $result;
		// }

		// function restar2 ($n1,$n2){
		// 	return $n1 - $n2;
		// }

		// echo "<br>";
		// echo restar(18,9) . " y " . restar2(30,20);


	//visibilidad - scope
	// $x = "fuera";

	// function hacerCosas(){
	// 	$x = "dentro";
	// }
	// hacerCosas();
	// echo "<br>" . $x;


	// $x = "fuera";
	// function hacerCosas($valor){
	// 	$valor = "dentro";
	// 	return $valor;
	// }
	// $x = hacerCosas($x);
	// echo "<br>" . $x;

	// $x = array(1,2,4,5,6);
	// function hacerCosas($valor){
	// 	$valor = array(7,8,9,11);
		
	// }
	// hacerCosas($x);
	// print_r($x);

	//constantes

	// define("NOMBRE", "Pepe");

	// echo NOMBRE;

	//funciones matematicas

	echo "pow:" . pow(4,2) . "<br>"; //exponente
	echo "rand:" . rand(1,1000) . "<br>"; //numero aleatorio
	echo "sqrt:" . sqrt(4) . "<br>"; //raiz cuadrada
	echo "ceil:" . ceil(4.6) . "<br>"; //redondeo arriba
	echo "floor:" . floor(4.6) . "<br>"; //redondeo abajo
	echo "round:" . round(4.6) . "<br>"; //redondeo normal

	//funciones de los String

	$texto = "Ya queda poco para el recreo";

	echo "strlen: " . strlen($texto) . "<br>";
	echo "strtoupper: " . strtoupper($texto) . "<br>";
	echo "strtolower: " . strtolower($texto) . "<br>";

	echo "<br>";
	echo "<br>";

	//funciones arrays

	$nums = [0,1,2,3,4,5,6,7,8];

	echo max($nums) . "<br>";
	echo min($nums) . "<br>";


	echo "<br>";
	echo "<br>";
	//mostrar datos por pantalla para debugear

	print_r($nums);
	echo "<br>";
	var_dump($nums); //mostrar datos variable
	echo "<br>";	

	//eliminar un elemento de un array
	unset($nums[3]);
	var_dump($nums);
	echo "<br>";
	$nums = array_values($nums); //reindexar el array
	echo "<br>";
	var_dump($nums);


?>

</body>
</html>

