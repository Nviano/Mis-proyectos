<?php

//1- Escribe un código que concatene con el espacio en blanco correspondiente estos dos textos:

$texto1 = "Hola";
$texto2 = "estamos aprendiendo PHP";

echo $texto1 . " ". $texto2 ;
echo "<br>";

//2- Escribe un código que imprima la suma de dos números
echo "<br>";
$num1 = 7;
$num2 = 8;

echo $num1 + $num2;
echo "<br>";
echo "<br>";
//3- Escribe un código en el que dado un array con los siguientes valores [verde, rojo, azul] escriba lo siguiente:

//a)
echo "<br>";
$color = ["verde","rojo","azul"];
print_r($color);

//b)
echo "<br>";
echo $color[0];
echo "<br>";
echo $color[1];
echo "<br>";
echo $color[2];
echo "<br>";

//4- Mostrar en pantalla una tabla de 10 por 10 con los números del 1 al 100.
echo "<br>";
echo "<br>";

$cont= 0;
echo "<table>";
    for ($i = 0; $i < 10; $i++){
    echo "<tr>";
        for ($j = 0; $j < 10; $j++){
        echo "<td>";
            $cont++;
            echo $cont;
        echo "</td>";
        }
    echo "</tr>";
    }
echo "</table>";

//5- Crear e imprimir los valores del vector asociativo siguiente
//usando la estructura de control foreach: 
echo "<br>";
echo "<br>";

$v = array(1 => 90, 30 => 7, 'e' => 99, 'hola' => 43);

$v[1]=90;
$v[30]=7;
$v['e']=99;
$v['hola']=43;
    
foreach ($v as $key => $value) {
    echo $key . " => " . $value . "<br>";
}

//6- Dado un array, elimina un elemento del array y a continuación
//restaura los índices del array, para que vuelva a ser secuencial.
echo "<br>";
echo "<br>";

$nums = [1,5,4,78,988,6,5,64,4,58];

var_dump($nums); 
echo "<br>";	
unset($nums[6]);
var_dump($nums);
echo "<br>";
$nums = array_values($nums); 
echo "<br>";
var_dump($nums);

echo "<br>";
echo "<br>";

//7- Crea un código que dibuje el siguiente patrón
$num = 5;

for($n=1; $n <= $num; $n++){
    echo str_pad('', $n, '*') . '<br>';
}
 

for($n=$num - 0; $n >= 0; $n--){
    echo str_pad('', $n, '*') . '<br>';
}
echo "<br>";
echo "<br>";

//8- Crea una función que imprima y devuelva el factorial de un 
//número. Los factoriales tienen que ser números positivos.

$numero=5;
$factorial=1;

echo "$numero =";
for($i=$numero; $i>=1; $i--){
$factorial*=$i;
echo $i;
echo ($i==1)? "=":"x";
}
echo $factorial;
echo "<br>";
echo "<br>";

//9- Crea un código que dibuje el siguiente patrón:

echo "<table width = '270px' border='1px'> ";

for ($fila = 1;$fila < 9; $fila++){
    echo "<tr>";

    for ($col = 1; $col < 9; $col++){
        $total = $fila + $col;
        if ($total % 2 ==0) {
            echo "<td height='30px' width='30px' bgcolor=#FFFFFF></td>";
        }
        else {
            echo "<td height='30px' width='30px' bgcolor=#000000></td>";
        }
    }
    echo "</tr>";
}
echo "</table>";
echo "<br>";
echo "<br>";

//10- Crea un función que invierta el contenido de un string.

$str = "Que pasa primo!";
$new = [];

for($i = (strlen($str) -1); $i >=0; $i--){
    array_push($new, $str[$i]);
}//for
$strInv = implode("", $new);
echo $strInv;

echo "<br>";
echo "<br>";

//11- Crea una función que devuelva el mayor elemento de un array
$nums = [2,85,4,89,6,68,65];

echo max($nums) . "<br>";


echo "<br>";
echo "<br>";

//12- Crea una función imprima la secuencia de Fibonnacci 
//hasta el número de dígitos que se le pasa como parámetro:

$fibonacci = array();
$fibonacci[0] = 1;
$fibonacci[1] = 1;
 
for ($i = 2; $i < 14; $i++) {
  $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];

}
 
print array_sum($fibonacci);

//13- Crea una función que localice un valor dentro de un array
//y elimine todas las concurrencias que haya de ese valor.

$lista = [1,5,78,23,6,9,2,5,7,98,123,5];
$eliminar = 5;
asort($lista);
print_r($lista);
echo "<br>";
for ($i=0; $i<count($lista); $i++){
    
    if ($lista[$i] == $eliminar) {
        echo "Se elimina uno <br>";
        unset ($lista[$i]);
        $lista=array_values($lista);
        $i=0;       
    }
}
echo "<br>";
print_r($lista);

//14-

function numFeos ($num) {
    
    if ($num>0){ 
        if($num%2==0 || $num%3==0 || $num%5==0){
            echo ("Es un numero FEO!!!");
        }else{
            echo ("Que chulo es el numero");
        }
    }
}
$num1 = numFeos(15);



?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ejercicios PHP</title>


</head>
<body>


</body>
</html>

