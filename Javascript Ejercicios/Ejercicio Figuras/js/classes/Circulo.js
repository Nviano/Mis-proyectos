function Circulo(nombre, tamanioRadio) {

    Figura.call(this, nombre);
    this.tamanioRadio = tamanioRadio;
    const PI = 3.14159;

    Circulo.prototype.getArea = function(tamanioRadio) {
        var area = PI * this.tamanioRadio * this.tamanioRadio;
        return area;

    }

    Circulo.prototype.getPerimetro = function(tamanioRadio) {
        var perimetro = 2 * PI * this.tamanioRadio;
        return perimetro;

    }
}

Circulo.prototype = new Figura();
Circulo.prototype.constructor = Circulo;