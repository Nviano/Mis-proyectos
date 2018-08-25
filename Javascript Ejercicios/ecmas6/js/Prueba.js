function Prueba(nombre) {
    this.nombre = nombre;

    Prueba.prototype.getNombre = function() {
        return this.nombre;
    }

    Prueba.prototype.setNombre = function(nombre) {
        this.nombre = nombre;
    }

}