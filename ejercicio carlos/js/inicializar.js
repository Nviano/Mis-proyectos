function inicializar() {

    crearSelectUsers();
}

function crearSelectUsers() {

    var span1 = document.createElement("span");
    var selectUsuario = document.createElement("select");
    selectUsuario.name = "tipo";

    for (var i = 1; i <= 5; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        var userPrueba = new User("prueba", "prueba", i);
        opt.innerHTML = userPrueba.getTipoEnTexto();
        selectUsuario.appendChild(opt);
    }

    div.appendChild(span1);
}