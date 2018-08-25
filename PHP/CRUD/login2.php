<!DOCTYPE html>
<html>
<head>
   
    <title>CRUD</title>
    
</head>
<body>

    <!-- INSERT -->
    <h1>INSERT</h1>

    <form action="login2.php" method="POST">
        <input type="text" name="username" id=""> <br>
        <input type="password" name="pass" id=""> <br>
        <input type="submit" name="enviar" id="">
    </form>

    <!-- SELECT -->
    <h1>SELECT</h1>
    <div>
        <?php
            //Obtener conexion
            $conexion = obtenerConexion();

            $result = obtenerUsuario ($conexion);
           
            if (!$result){
                die("Error en SELECT " . mysqli_error($conexion));
            }
            else {

            //Imprimir datos por pantalla
                while ($fila = mysqli_fetch_row($result)){
                    print_r($fila[0] . " - " . $fila[1] . " - " . $fila[2] . "<br>");
                }
            }
            //cerrar conexion
            cerrarConexion ($conexion);
        ?>
    
    </div>
    <!-- UPDATE -->

    <h1>UPDATE</h1>

    <form action="login2.php" method="POST">
        <input type="text" name="up-username" id=""> <br>
        <input type="password" name="up-pass" id=""> <br>
        <input type="submit" name="actualizar" id="">
              
    </form>

    <!-- DELETE -->

    <h1>DELETE</h1>
            <form action="login2.php" method="POST">
                <select name="select_by_id">

            
            
              
    <?php
        //Crear conexion
        $conexion = obtenerConexion();

        //obtener usuarios
        $result = obtenerUsuario($conexion);
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
    
    $username = $_POST['username'];
    $password = $_POST['pass'];

    $puedoConectar= False;
    if ($username && $password){
        echo $username . " " . $password;
        $puedoConectar = True;
    }
    elseif (!$username) {
        echo "El campo nombre no puede estar vacio";
    }
    elseif (!$password) {
        echo "El campo password no puede estar vacio";
    }
    else {
        echo "Algo ha ido mal";
    }
    if ($puedoConectar) {

        $conexion = obtenerConexion();

        if ($conexion) {
            echo "Hemos conectado";
            
        //Proteccion - SQL Injection -

            $username = mysqli_real_escape_string($conexion, $username);
            $password = mysqli_real_escape_string($conexion, $password);

            $consulta = "INSERT INTO usuario (username,password) VALUES ('$username','$password')";

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

function obtenerConexion() {
    return mysqli_connect('localhost', 'root', '', 'prueba');
}

function cerrarConexion ($con){
     //siempre hay que cerrar la conexion
    mysqli_close($con);
}

//UPDATE

if (isset($_POST['actualizar'])){
    
    $username = $_POST['up-username'];
    $password = $_POST['up-pass'];

    $puedoConectar= False;

    if ($username && $password){
        echo $username . " " . $password;
        $puedoConectar = True;
    }
    elseif (!$username) {
        echo "El campo nombre no puede estar vacio";
    }
    elseif (!$password) {
        echo "El campo password no puede estar vacio";
    }
    else {
        echo "Algo ha ido mal";
    }
    if ($puedoConectar) {

        $conexion = obtenerConexion();

        if ($conexion) {
            echo "Hemos conectado";
            
        //Proteccion - SQL Injection -

            $username = mysqli_real_escape_string($conexion, $username);
            $password = mysqli_real_escape_string($conexion, $password);

            $consulta = "UPDATE usuario SET password = '$password' WHERE username = '$username'";

            $result = mysqli_query($conexion, $consulta);

            $error = 0;

            if (!$result){
                die("Error.Todo al carajo " . mysql_error($conexion));
                $error = 1; //muerte mortal
            }

            if ($error == 1){
                echo "Ya te vale, la has liado al ACTUALIZAR";
            }
            else {
                echo "consulta ACTUALIZACION OK";
            }
            //cierro conexion
            cerrarConexion ($conexion); 
        }
        else {
            echo "No se ha podido establecer la conexion al actualizar";
        }
    }
}

//BORRAR

if (isset($_POST['borrar'])){
    $id = $_POST['select_by_id'];
    $puedoConectar = False;

    if ($id){
        $puedoConectar = True;
    }
    else {
        echo "Redios Manolo, con esto no vasmo a ningun lado";
        echo "El id no puede estar vacio";
    }

    if ($puedoConectar){
        //abrir conexion
        $conexion = obtenerConexion();

        if ($conexion){
            echo "Hemos conectado";

            $username = mysqli_real_escape_string($conexion, $id);

            $consulta = "DELETE FROM usuario WHERE id = '$id'";

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

function obtenerUsuario ($con){
    //crear consulta
    $consulta = "SELECT id, username, password FROM usuario";
    //Obtener datos
    $result = mysqli_query($con,$consulta);

    return $result;
}



?>