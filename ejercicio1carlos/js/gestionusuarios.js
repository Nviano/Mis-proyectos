function setUsers() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    var tipo = document.getElementsByName("tipo")[0].value;

    var user = new User(nombre, apellidos, tipo);
    localStorage.setItem('miGato', user);

    var jUser = user.toJSONObject();
    var stringJUser = JSON.stringify(jUser);
    sessionStorage.setItem("user", stringJUser);


}

function paintUsers(user) {

    var stringJUser = sessionStorage.getItem("user");

    document.getElementById("mostrar_nombre").innerHTML = user.getNombre();
    document.getElementById("mostrar_apellidos").innerHTML = user.getApellidos();
    document.getElementById("mostrar_tipo").innerHTML += user.getTipoEnTexto();
}