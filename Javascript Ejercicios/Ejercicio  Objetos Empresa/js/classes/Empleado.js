function Empleado(dni, nombre, telefono, salario) {

    this.dni = dni;
    this.nombre = nombre;
    this.telefono = telefono;
    this.salario = salario;

    Empleado.prototype.getDni = function() {
        return this.dni;
    }

    Empleado.prototype.subirSueldo = function(cantidad) {
        this.salario += cantidad;
        return this.salario;
    }
}