function Rectangulo(nombre, tamanioX, tamanioY) {

    Figura.call(this, nombre);
    this.tamanioX = tamanioX;

    if (tamanioY) this.tamanioY = tamanioY
    else tamanioY = tamanioX;

    Rectangulo.prototype.getArea = function(tamanioX, tamanioY) {
        var area = this.tamanioX * this.tamanioY;
        return area;
    }

    Rectangulo.prototype.getPerimetro = function(tamanioX, tamanioY) {
        var perimetro = (2 * this.tamanioX) + (2 * this.tamanioY);
        return perimetro;
    }
}

Rectangulo.prototype = new Figura();
Rectangulo.prototype.constructor = Rectangulo;