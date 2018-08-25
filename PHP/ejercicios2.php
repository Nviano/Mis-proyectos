<?php

//ORIENTACION A OBJETOS
 //----------- Ejercicios 1 y 2 -------------
 class Gato{
    var $color = "Negro";
    var $nombre = "Pocholo";
    
    function __construct(){
        echo "La clase se ha inicializado <br>";
    }
    
    function maullar($nombre){
        print ("Hola " . $nombre . " estamos pasándolo genial aquí");
    }
}
    
//instanciar la clase
$gato1 = new Gato();
//acceder al método de una clase
$gato1->maullar("Pocholo");
//---------- Ejercicio 3 -------------
class Calculos{
    
    function factorial ($numero){
        $factorial = 1;
        echo "$numero =";
        for ($i=$numero; $i >=1; $i--){
            $factorial*= $i;
            echo $i;
            echo ($i==1)? " = " : "x";
        }
        
        echo $factorial;
    }
    function cuadrado ($numero){
        echo pow($numero,2);
    }
}
//instanciar la clase
$calculo=new Calculos();
//acceder al método de una clase
$calculo->factorial(8);
echo "<br>";
$calculo->cuadrado(3);
// -------------------- Ejercicio 4 ----------
    class Calculadora{
    
        public function calcular($operador, $operando1, $operando2){
        
            if($operador == "+"){
                $aux = $this->suma ($operando1, $operando2);
                return $aux;
            }elseif($operador == "-"){
                $aux = $this->resta ($operando1, $operando2);
                return $aux;
            }elseif($operador == "*"){
                $aux = $this->multi ($operando1, $operando2);
                return $aux;
            }       
        }
    
        public function suma ($operando1, $operando2){      
            return ($operando1 + $operando2);       
        }
        
        private function resta ($operando1, $operando2){    
            
            return ($operando1 - $operando2);           
        }
        
        private function multi ($operando1, $operando2){            
            return ($operando1 * $operando2);           
        }   
    }
    
    $var1 = new Calculadora;
    
    echo $var1->calcular("+",3,2); echo "<br>";
    echo $var1->calcular("-",3,2); echo "<br>";
    echo $var1->calcular("*",3,2); echo "<br>";
    
    
    // ---------- Ejercicio 5 -------------
    
        class Animal {
        public $nombre = "";
        public $especie = "";
        public $color = "";
        static $numeroAnimales = 0;
        
        function __construct ($nombre, $especie){
            $numeroAnimales++;
            $this->$nombre = $nombre;
            $this->$especie = $especie;
        }
        
        public function hablar(){
            echo "meeeeeeh";
        }
    }
    
    class Acuatico extends Animal {
        public $clasificacion = "";
        public $oceano = "";
        
        function __construct($nombre, $especie, $oceano){
            parent::__construct($nombre, $especie);
            $this->oceano = $oceano;
        }
        
        public function nadar(){
            echo $this->nombre .  " está nadando";
        }
    }
    
    class Terrestre extends Animal {
        public $continente = "";
        public $pelaje = "";
        
        function __construct($nombre, $especie, $continente){
            parent::__construct($nombre, $especie);
            $this->continente = $continente;
        }
        
        public function caminar(){
            echo $this->nombre .  " está caminando";
        }
        
        public function setPelaje($pelaje){
            $this->pelaje = $pelaje;
        }
    }

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

