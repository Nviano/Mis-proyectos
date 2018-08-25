var daniel = new Empleado("77777777-C", "Daniel Perez", "666666666", 2000);
console.log(daniel.getDni());
console.log(daniel.subirSueldo(150));

var admin1 = new Administrativo("88888888-K", "Pedro Lopez", "777777777", 1532, 124, "A");
console.log(admin1.getPulsaciones());
console.log(admin1.getNivel());
console.log(admin1.getDni());

var arqui1 = new Arquitecto("33333333-G", "Luis Gomez", "655555555", 2000, 300, 9);
console.log(arqui1.getDni());
console.log(arqui1.subirSueldo(150));
arqui1.design();