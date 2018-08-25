function Television(precioBase, color, consumo, peso, resolucion, TDT) {

    Electrodomestico.call(this, precioBase, color, consumo, peso);

    this.resolucion = 20;
    this.TDT = false;

    if (resolucion) this.resolucion = resolucion;
    if (TDT) this.TDT = TDT;


    Television.prototype.getResolucion = function() {

        return this.resolucion;
    }
    Television.prototype.getTDT = function() {

        return this.TDT;
    }

    Television.prototype.getPrecioFinal = function() {

        if (this.resolucion > 40) {
            this.precioFinal = (this.precioFinal * 30) / 100;
            if (this.TDT = true) {
                this.precioFinal = ((this.precioFinal * 30) / 100) + 50;
            }
        } else {
            this.precioFinal = this.precioFinal
        }
        return this.precioFinal;

    }
}

Television.prototype = new Electrodomestico();
Television.prototype.constructor = Television;