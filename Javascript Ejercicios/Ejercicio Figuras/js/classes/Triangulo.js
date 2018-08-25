function Triangulo(nombre, base, altura) {

    Figura.call(this, nombre);
    this.altura = altura;
    this.base = base;


    Triangulo.prototype.getArea = function(base, altura) {
        var area = (this.base * this.altura) / 2;
        return area;

    }
}

Triangulo.prototype = new Figura();
Triangulo.prototype.constructor = Triangulo;