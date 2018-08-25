function Electrodomestico(precioBase, color, consumo, peso) {

    this.precioBase = 100;
    this.color = "blanco";
    this.consumo = "F";
    this.peso = 5;


    if (precioBase) this.precioBase = precioBase;
    if (color) this.color = color;
    if (consumo) this.consumo = consumo;
    if (peso) this.peso = peso;


    Electrodomestico.prototype.getPrecioConsumo = function() {

        if (this.consumo == "A") return 100;
        if (this.consumo == "B") return 80;
        if (this.consumo == "C") return 60;
        if (this.consumo == "D") return 50;
        if (this.consumo == "E") return 30;
        if (this.consumo == "F") return 10;

    }

    Electrodomestico.prototype.getPrecioPeso = function() {

        if (this.peso < 0 && this.peso >= 19) return 10;
        if (this.peso < 20 && this.peso >= 49) return 50;
        if (this.peso < 50 && this.peso >= 79) return 80;
        if (this.peso >= 80) return 100;

    }

    Electrodomestico.prototype.getPrecioFinal = function() {
        return this.precioBase + getPrecioConsumo() + getPrecioPeso();
    }


    Electrodomestico.prototype.getColor = function(color) {
        if (color == "blanco" || color == "negro" || color == "gris")
            console.log("El color es : " + this.color);
        this.color = color;
    }


    Electrodomestico.prototype.getConsumo = function(letra) {
        if (letra == "A" || letra == "B" || letra == "C" || letra == "D" || letra == "E" || letra == "F")
            console.log("El color es : " + this.consumo);
        this.consumo = consumo;
    };

}