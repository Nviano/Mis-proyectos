<?php
// class Vehiculo{

//     var $modelo = "600";

//     function __construct($mod){
//         $this->marca = "Seat";
//         if ($mod != null)
//         $this->modelo= $mod;
//     }
    
//     function hacerSonarBocina() {
//         print("meeeeeeeeeeeee");
//     }
// }
// class Coche extends Vehiculo{

//     var $capota = True;

//     function __construct($mod, $capota) {
//         parent::__construct($mod);
//         $this->capota = $capota;
//     }

//     function descapotar(){
//         print ("Se abre la capota");
//         $this->capota = false;
//     }

//     function isDecapotado(){
//         return $this->capota;
//     }


    
// }

// $coche1 = new Coche("800",True);
// //acceso a metodos
// $coche1-> hacerSonarBocina();
// echo "<br>";
// echo $coche1-> modelo;
// echo "<br>";
// echo $coche1-> isDecapotado();
// echo "<br>";
// echo $coche1-> descapotar();
// echo "<br>";
// echo $coche1-> isDecapotado();


// echo class_exists("Coche");
// echo "<br>";
// echo method_exists("Coche", "hacerSonarBocina");



//---------------------------------------------------------------------

// class ClasePadre {
//     public $valorPublic = "publico";
//     protected $valorPortected = "protected";
//     private $valorPrivate = "private";

//     private $ejemplo = 23;

//     public function metodo() {
//         echo $this -> valorPublic . "<br>"; //si se ve
//         echo $this -> valorPortected . "<br>";//si se ve
//         echo $this -> valorPrivate . "<br>";//si se ve
//     }

//     public function getEjemplo(){
//         return $this->ejemplo;
//     }

//     public function setEjemplo($valor){
//         return $this-> ejemplo = $valor;
//     }
// }

// class ClaseHija extends ClasePadre {
//     public function metodo() {
//         echo $this -> valorPublic . "<br>"; //si se ve
//         echo $this -> valorPortected . "<br>";//si se ve
//         echo $this -> valorPrivate . "<br>";//no se ve
//     }
// }

// $obj1 = new ClasePadre();
// $obj1->metodo();
// echo $obj1->getEjemplo();
// echo "<br>";
// $obj1->setEjemplo(8);
// echo $obj1->getEjemplo();

// echo $obj1 -> valorPublic . <br>;//si se ve
// echo $obj1 -> valorPortected . <br>;//no se ve
// echo $obj1 -> valorPrivate . <br>;//no se ve

// $obj2 = new ClaseHija();
// $obj2-> metodo();

class Vehiculo {
    static $numeroDeVehiculos = 0; //variable de clase

    function __construct($mod) {
        Vehiculo::$numeroDeVehiculos += 1;
        $this-> modelo = $mod; //variable de instancia
    }

    function getModelo() {
        return $this-> modelo;
    }

}

$c1 =new Vehiculo("Seat");
echo Vehiculo::$numeroDeVehiculos;
echo "<br>";
$c12 =new Vehiculo("Fiat");
echo Vehiculo::$numeroDeVehiculos;
echo "<br>";
$c3 =new Vehiculo("Renault");
echo Vehiculo::$numeroDeVehiculos;
echo "<br>";
$c4 =new Vehiculo("Skoda");
echo Vehiculo::$numeroDeVehiculos;
echo "<br>";



?>