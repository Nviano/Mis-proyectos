function User(nombre, apellidos, tipo) {

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.tipo = tipo;

    User.prototype.getNombre = function() {
        return this.nombre;
    }

    User.prototype.getApellidos = function() {
        return this.apellidos;
    }

    User.prototype.getTipo = function() {
        return this.tipo;
    }

    User.prototype.getTipoEnTexto = function() {
        var tipoDeUsuario = "";
        switch (parseInt(this.tipo)) {
            case User.PREMIUM:
                tipoDeUsuario = "Premium";
                break;
            case User.ADVANCE:
                tipoDeUsuario = "Advanced";
                break;
            case User.BASIC:
                tipoDeUsuario = "Basic";
                break;
            case User.VIP:
                tipoDeUsuario = "VIP";
                break;
        }
        return tipoDeUsuario;
    }

}

User.BASIC = 1;
User.ADVANCE = 2;
User.PREMIUM = 3;
User.VIP = 4;