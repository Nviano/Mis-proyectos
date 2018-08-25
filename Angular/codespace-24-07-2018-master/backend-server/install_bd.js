var mongoose = require('mongoose');
var Movie = require('./models/movie');

mongoose.connection.openUri('mongodb://localhost:27017/movieDB', (err,res) => {
    if(err) throw err;
    console.log('Database is \x1b[32m%s\x1b[0m', 'running');
});


var dataArray = [
    {
        title: "El club de la lucha",
        original_title: "Fight Club",
        overview: "Un joven sin ilusiones lucha contra su insomnio, consecuencia quizás de su hastío por su gris y rutinaria vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón que sostiene una filosofía muy particular: el perfeccionismo es cosa de gentes débiles; en cambio, la autodestrucción es lo único que hace que realmente la vida merezca la pena. Ambos deciden entonces formar un club secreto de lucha donde descargar sus frustaciones y su ira que tendrá un éxito arrollador.",
        poster_path: "/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg",
        backdrop_path: "/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
        movieDB_id: 550,
        vote_average: 8.4,
    },
    {
        title: "Algo pasa con Mary",
        original_title: "There's Something About Mary",
        overview: "Ted Strohehmann ha vivido angustiado durante 14 años de su vida. La razón de su desgracia no es otra que la famosa Mary Jensen, la chica a la que todos desean y con la que por fin consigue tener una cita en la fiesta de graduación. Pero un desgraciado accidente con la cremallera del pantalón arruina sus planes. Ahora parece que tendrá otra oportunidad.",
        poster_path: "/2En2W85Oel46KLBckbmdZEMyqH8.jpg",
        backdrop_path: "/8ZIZJbPXCtnIG1rJpR57iFRyPTt.jpg",
        movieDB_id: 544,
        vote_average: 6.5,
    },
    {
        title: "El señor de los anillos: La comunidad del anillo",
        original_title: "The Lord of the Rings: The Fellowship of the Ring",
        overview: "The Lord of the Rings: The Fellowship of the Ring",
        overview: "En la Tierra Media, el Señor Oscuro Saurón creó los Grandes Anillos de Poder, forjados por los herreros Elfos. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales. Secretamente, Saurón también forjó un anillo maestro, el Anillo Único, que contiene en sí el poder para esclavizar a toda la Tierra Media. Con la ayuda de un grupo de amigos y de valientes aliados, Frodo emprende un peligroso viaje con la misión de destruir el Anillo Único. Pero el Señor Oscuro Sauron, quien creara el Anillo, envía a sus servidores para perseguir al grupo. Si Sauron lograra recuperar el Anillo, sería el final de la Tierra Media.",
        poster_path: "/z99yU71wH7JBHZX4tQ3XzPG521M.jpg",
        backdrop_path: "/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
        movieDB_id: 120,
        vote_average: 8.2,
    },
    {
        title: "La guerra de las galaxias. Episodio IV: Una nueva esperanza",
        original_title: "Star Wars",
        overview: "La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial 'El Halcón Milenario', y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.",
        poster_path: "/8ae71OAm6XwnvakAx6rYa1Lo5qD.jpg",
        backdrop_path: "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
        movieDB_id: 11,
        vote_average: 8.2,
    },
];

async function loadData(){

    console.log('Compienza la carga de peliculas');
    dataArray.forEach( (data, index) => {
        
        var newMovie = new Movie(data);

        newMovie.save((err, savedMovie )=> {
            if( err ){
                console.log('Algo fallo', err)
            }
            console.log('Carganda pelicula', index);
            if( index === (dataArray.length - 1) ){
                process.exit();
            }
    
            
        });
    });
 
}

loadData();




