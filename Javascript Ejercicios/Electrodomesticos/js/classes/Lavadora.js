function Lavadora(precioBase, color, consumo, peso, carga) {

    Electrodomestico.call(this, precioBase, color, consumo, peso);

    this.carga = 5;

    if (carga) this.carga = carga;

    Lavadora.prototype.getCarga = function() {
        return this.carga;

    }

    Lavadora.prototype.getPrecioFinal = function() {

        if (this.carga >= 30) {
            this.precioFinal = this.precioFinal + 50;
        } else {
            this.precioFinal = this.precioFinal
        }
        return this.precioFinal;

    }
}

Lavadora.prototype = new Electrodomestico();
Lavadora.prototype.constructor = Lavadora;