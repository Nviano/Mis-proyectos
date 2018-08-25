function Administrativo(dni, nombre, telefono, salario, pulsaciones, nivel) {

    Empleado.call(this, dni, nombre, telefono, salario);
    this.pulsaciones = pulsaciones;
    this.nivel = nivel;

    Administrativo.prototype.getPulsaciones = function() {
        return this.pulsaciones;
    }

    Administrativo.prototype.getNivel = function() {
        return this.nivel;
    }


}
Administrativo.prototype = new Empleado();
Administrativo.prototype.constructor = Administrativo;