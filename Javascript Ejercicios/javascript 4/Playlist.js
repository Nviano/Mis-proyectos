function Playlist() {
	
	this.songs = new Array(); //aquí almaceno todas mis canciones
	
	/**
	*	Añade un objeto canción a la Playlist
	*/
	Playlist.prototype.addSong = function (song) {
		song.setFechaDeInclusion(); //le doy la fecha en la que la he añadido
		this.songs.push(song); //añado la canción al array
	}	
	
	/**
	*	Devuelve la duración en minutos de todas las canciones que están en la Playlist
	*/
	Playlist.prototype.getDuration = function () {
		var duracionEnMinutos = 0;	//sumo la duración total de todas las canciones	
		for (let i = 0: i < songs.length; i++){
			duracionEnMinutos = duracionEnMinutos + this.songs[i].getDuration();
		}
		return duracionEnMinutos;
	}	
	
	/**
	*	Elimina una canción de la Playlist
	*/
	Playlist.prototype.removeSong = function (song) {
		var encontrado = false; //uso esta variable para parar el bucle cuando la encuentre
		for (let i = 0; i < this.songs.length && !encontrado; i++){
			
			if (song.getTitle() === this.songs[i].getTitle())
			{
				this.songs[i].splice(i, 1); //uso splice para eliminar la canción
				encontrado = true; //cambio el estado de la variable cuando encuentro la canción
			}
		}
	}	
	
	/**
	*	Reordena el array, haciendo que tenga contenido aleatorio
	*/
	Playlist.prototype.shuffle = function () {
		
		var copia = this.songs.slice(); //creo una copia para no modificar el array original hasta que haya acabado

		var shuffle = new Array(); //este es el array desordenado

		for (var i = 0;i < this.songs.length; i++) {			
		  var numAlea = parseInt(obtenerNumeroAleatorio(0, copia.length - 1));	//genero un número aleatorio	  		  
		  shuffle[i] = copia.splice(numAlea, 1); //extraigo de la copia la canción en la posición dada por el aleatorio
		}	
		
		this.songs = shuffle; //elimo el array de canciones y le asigno el desordenado
		
		changeListenedState(); //marco todas las canciones como no escuchadas
	}
	
	/**
	*	Ordena el array por la fecha en la que se añadió la canción a la Playlist (más nuevas primero)
	*/
	Playlist.prototype.ordenarPorFechaDeInclusionAscendente = function () {
		
		this.songs.sort(function(a,b){
		  return new Date(b.fechaDeInclusion) - new Date(a.fechaDeInclusion);
		});
		
		changeListenedState(); //marco todas las canciones como no escuchadas
				
		//https://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	}
	
	/**
	*	Ordena el array por la fecha en la que se añadió la canción a la Playlist (más viejas primero)
	*/
	Playlist.prototype.ordenarPorFechaDeInclusionDescendente = function () {
		
		this.songs.sort(function(a,b){
		  return new Date(a.fechaDeInclusion) - new Date(b.fechaDeInclusion);
		});
		
		changeListenedState(); //marco todas las canciones como no escuchadas
	}
	
	/**
	*	Ordena el array por el nombre del artista y de tener varias canciones del mismo artista uso el titulo
	*	de la canción
	*/
	Playlist.prototype.ordenarPorArtistaAlfabetico = function () {
		//
		arrayDePrueba.sort(
			function(a,b){
				if (a.grupo > b.grupo) {
					return -1; //devuelvo -1 que le indica a sort que primero va b y luego a
				} else if (a.grupo < b.grupo) {
					return 1; //devuelvo -1 que le indica a sort que primero va a y luego b
				} else { //si los dos grupos son iguales, ordeno alfabéticamente por la cancion
				  if (a.titulo > b.titulo) { 
						return -1; //devuelvo -1 que le indica a sort que primero va b y luego a
				  } else if (a.titulo < b.titulo) {
					return 1; //devuelvo -1 que le indica a sort que primero va a y luego b
				  } else {
					return 0;
				  }
				}    	
			}
		);
		
		changeListenedState(); //marco todas las canciones como no escuchadass
	}
	
	/**
	*	Ordena por duración de la canción
	*/
	Playlist.prototype.ordenarPorDuracionCancion = function () {
		
		this.songs.sort(function(a,b){
		  return a.duration - b.duration;
		});
		
		changeListenedState(); //marco todas las canciones como no escuchadas
	}
	
	
	/**
	*	Cambia el estado de escuchado a todas las canciones
	*/
	Playlist.prototype.changeListenedState() = function () {
		for (let i = 0; i < this.songs.length; i++){
			this.songs[i].escuchado = false;
		}
	}
	
	/**
	*	paso a la siguiente canción, buscando cual es la primera canción no escuchada del array
	*/
	Playlist.prototype.nextSong() = function () {
		
		var songToListen = null; //y la canción que quiero devolver, en este caso a null, ya que es un objeto
		for (let i = 0; i < this.songs.length && songToListen == null; i++) {
			if (this.songs[i].listened() == false){ //cuando encuentro una canción que no se haya reproducido...
				this.songs[i].play(); //... invoco a su método play
				songToListen = this.songs[i]; //... guardo el objeto para devolverlo
			}
		}
		
		return songToListen; //cuando la encuentro devuelvo la canción
	}
}

//TODO: cada vez que reordene, marcar todas las canciones como no escuchadas