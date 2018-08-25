function inicializar() {

    sessionStorage.setItem('nombre', 'hola')
    var data = sessionStorage.getItem('nombre');
    alert(data);

    crearSelectDeUsers();

}

function crearSelectDeUsers() {

    var div = document.getElementById("spanTipoUsuario");
    var selectUsuario = document.createElement("select");
    selectUsuario.name = "tipo";

    for (let i = 0; i < 5; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        var userPrueba = new User("prueba", "prueba", i);
        opt.innerHTML = userPrueba.getTipoEnTexto();
        selectUsuario.appendChild(opt);

    }

    div.appendChild(selectUsuario);
    /*
    var div = document.getElementById("spanTipoUsuario");
    var span1 = document.createElement("sapn");
    span1.innerHTML = "Hola soy un span";
    div.appendChild(span1);
    */

}