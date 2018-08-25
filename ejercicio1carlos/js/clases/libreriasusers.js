function almacenarUsuario(usuario) {
    var jUser = usuario.toJSONObject();
    var stringJUser = JSON.stringify(jUser);
    sessionStorage.setItem("user", stringJUser);

    enviarAlServer(stringJUser);
}

function recuperarUsuario(usuario) {
    var stringJUser = sessionStorage.getItem("user");
    var jUser = JSON.parse(stringJUser);
    return new User(jUser);
}

function enviarAlServer(stringJUser) {
    //TODO: enviar al server
}