function setUsers() {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    var tipo = document.getElementsByName("tipo")[0].value;

    var user = new user(nombre, apellidos, tipo);

    paintUsers(user);
}

function paintUsers(user) {

    document.getElementById("mostrar_nombre").innerHTML = user.getNombre();
    document.getElementById("mostrar_apellidos").innerHTML = user.getApellidos();
    document.getElementById("mostrar_tipo").innerHTML = user.getTipoEnTexto();

}