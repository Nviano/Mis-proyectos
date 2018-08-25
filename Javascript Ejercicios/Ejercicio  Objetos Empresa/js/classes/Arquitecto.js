function Arquitecto(dni, nombre, telefono, salario, comisiones, nProyectos) {

    Empleado.call(this, dni, nombre, telefono, salario);
    this.comisiones = comisiones;
    this.nProyectos = nProyectos;

    Arquitecto.prototype.design = function() {
        console.log(this.nombre + " está diseñando cosas");
    }

    Arquitecto.prototype.subirSueldo = function(cantidad) {
        this.salario += cantidad;
        var sueldo = this.salario + this.comisiones;
        console.log("A esta persona se le calcula el sueldo por las comisiones")
        return sueldo;
    }


}
Arquitecto.prototype = new Empleado();
Arquitecto.prototype.constructor = Arquitecto;