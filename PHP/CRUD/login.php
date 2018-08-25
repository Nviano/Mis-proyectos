<!DOCTYPE html>
<html>
<head>
   
    <title>CRUD</title>
    
</head>
<body>
    <form action="login.php" method="POST">
        <input type="text" name="username" id=""> <br>
        <input type="password" name="pass" id=""> <br>
        <input type="submit" name="enviar" id="">
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

        $conexion = mysqli_connect('localhost', 'root', '', 'prueba');
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
            //siempre hay que cerrar la conexion
            mysqli_close($conexion);
        }
        else {
            echo "No se ha podido establecer la conexion";
        }
    }
}


?>