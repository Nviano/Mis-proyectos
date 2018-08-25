<!DOCTYPE html>
<html>
<head>
   <title>Noticias PHP</title>
</head>
<body>
   
<h1>Noticias</h1>
    <div>
        <?php            
            //obtener conexion
            $conexion = obtenerConexion();            
            
            $result = obtenerNoticias($conexion);
            
            if (!$result){
                die("Error en SELECT. " . mysqli_error($conexion));
            }
            else {        
            //imprimir datos por pantalla
                while ($fila = mysqli_fetch_row($result)){
                    print_r($fila[0] . " - " . $fila[1] . " - " . $fila[2] . 
                    " - " . $fila[3] . " - " . $fila[4] ."<br>");
                }
            
            }
            //cerrar conexion
            cerrarConexion($conexion);
            
        ?>        
    </div>

 <!-- INSERT -->
 <h1>Añadir Noticias</h1>
    <form action="noticias.php" method="POST">
        <input type="text" name="titulo" placeholder="titulo"> <br>
       <input type="text" name="texto" placeholder="texto"> <br>
       <input type="text" name="categoria" placeholder="categoria"> <br>
        <input type="text" name="fecha" placeholder="fecha"> <br>
       <input type="text" name="imagen" placeholder="imagen"> <br>        
        <input type="submit" name="enviar"> 
    </form>


<!-- DELETE -->

    <h1>Borrar Noticia</h1>
            <form action="noticias.php" method="POST">
                <select name="select_by_id">

            
            
              
    <?php
        //Crear conexion
        $conexion = obtenerConexion();

        //obtener usuarios
        $result = obtenerNoticias($conexion);
        if (!$result){
            die ("Pamba!!! Todo al carajo " . mysql_error($conexion));
        }
        //Seleccionar elemento q quremos borrar
        while ($fila = mysqli_fetch_row($result)){
            print_r("<option value=" . $fila[0] . ">" . $fila[1] . "</option>");
        }

        //ejecutamos el borrado


        //cerramos conexion
        cerrarConexion ($conexion);

    ?>

                </select>
                <input type="submit" name="borrar">                       
            </form>

</body>
</html>




<?php 

//INSERT
if (isset($_POST['enviar'])){
    
    $titulo = $_POST['titulo'];
    $texto = $_POST['texto'];
    $categoria = $_POST['categoria'];
    $fecha = $_POST['fecha'];
    $imagen = $_POST['imagen'];

    $puedoConectar= False;
    if ($titulo && $texto && $categoria && $fecha){
        echo $titulo . " " . $texto. " " . $categoria. " " . $fecha;
        $puedoConectar = True;
    }
    elseif (!$titulo) {
        echo "El campo titulo no puede estar vacio";
    }
    elseif (!$texto) {
        echo "El campo texto no puede estar vacio";
    }
    elseif (!$categoria) {
        echo "El campo categoria no puede estar vacio";
    }
    elseif (!$fecha) {
        echo "El campo fecha no puede estar vacio";
    }
    else {
        echo "Algo ha ido mal";
    }
    if ($puedoConectar) {

        $conexion = obtenerConexion();

        if ($conexion) {
            echo "Hemos conectado";
            
        //Proteccion - SQL Injection -

            $titulo = mysqli_real_escape_string($conexion, $titulo);
            $texto = mysqli_real_escape_string($conexion, $texto);
            $categoria = mysqli_real_escape_string($conexion, $categoria);
            $fecha = mysqli_real_escape_string($conexion, $fecha);
           

            $consulta = "INSERT INTO noticias (titulo,texto,categoria,fecha,imagen) VALUES ('$titulo','$texto','$categoria',
            '$fecha','$imagen')";

            $result = mysqli_query($conexion, $consulta);

            $error = 0;

            if (!$result){
                die("Error.Todo al carajo " . mysql_error($conexion));
                $error = 1; //muerte mortal
            }

            if ($error == 1){
                echo "Ya te vale, la has liado";
            }
            else {
                echo "consulta OK";
            }
            //cierro conexion
            cerrarConexion ($conexion); 
        }
        else {
            echo "No se ha podido establecer la conexion";
        }
    }
}




//DELETE

if (isset($_POST['borrar'])){
    $id = $_POST['select_by_id'];
    $puedoConectar = False;

    if ($id){
        $puedoConectar = True;
    }
    else {
        echo "La madre del cordero, odio PHP";
        echo "El id no puede estar vacio";
    }

    if ($puedoConectar){
        //abrir conexion
        $conexion = obtenerConexion();

        if ($conexion){
            echo "Se borró";

            $username = mysqli_real_escape_string($conexion, $id);

            $consulta = "DELETE FROM noticias WHERE id = '$id'";

            $result = mysqli_query($conexion, $consulta);

            if (!$result){
                die ("Error al borrar");
            }
            cerrarConexion ($conexion); 
            
        }
        else {
            die ("No hay conexion");
        }
    }
}


    function obtenerNoticias($con){
        //crear consulta
        $consulta = "SELECT id,titulo,texto,categoria,fecha,imagen FROM noticias";
        
        //obtener datos
        $result = mysqli_query($con, $consulta);
        
        return $result;
    }

    function obtenerConexion(){
        return mysqli_connect('localhost', 'root', '', 'noticias');            
    }

    function cerrarConexion($con){    
        //siempre hay q cerrar la conexion
        mysqli_close($con);
    }
    


?>