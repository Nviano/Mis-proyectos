function User(jUser, nombre, apellidos, tipo) {
    if (jUser) {

    } else {
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

                case User.ADVANCED:
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

        User.prototype.toJSONObject = function() {
            var jUser = {};

            jUser.nombre = this.nombre;
            jUser.apellidos = this.apellidos;
            jUser.tipo = this.tipo;
        }
    }
    User.BASIC = 1;
    User.ADVANCED = 2;
    User.PREMIUM = 3; //variables estaticas
    User.VIP = 4;