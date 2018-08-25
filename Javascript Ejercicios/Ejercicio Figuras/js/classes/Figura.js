function Figura(nombre) {

    this.nombre = nombre;

    Figura.prototype.getNombre = function() {
        return this.nombre;
    }
}