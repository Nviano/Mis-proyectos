<!DOCTYPE html>
<html>
<head>

    <title>Document</title>

    
</head>
<body>
    <form action="forms.php" method= "POST">
        <input type="text" name="username" placeholder="Nombre de usuario">
        <br>
        <input type="password" name="pass" placeholder="Contraseña">
        <br>
        <input type="submit" name="datos_usuario">
    
    </form>



</body>
</html>

<?php
if (isset($_POST['datos_usuario'])){
    // echo "hola, me estoy ejecutando";
    $username = $_POST['username'];
    $pass = $_POST['pass'];

    echo $username . " " . $pass;
}
//Si cambiamos donde pone POST por GET sale toda la informacion en la barra de navegacion. Mejor POST!!

?>