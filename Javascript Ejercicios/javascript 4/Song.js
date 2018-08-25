function Song(){
	this.titulo;
	this.grupo;
	this.duration;
	this.valoracion;
	this.escuchado = false;
	this.fechaDeInclusion = null;

	Song.prototype.getDuration = function () {
		return this.duration;
	}
	
	Song.prototype.getTitle = function () {
		return this.titulo;
	}
	
	Song.prototype.print = function () {
		console.log("La canción " + this.songnombre + " me encanta y en Apple sólo le dan " + this.valoracion + " estrellas.");	
	}
	
	/**
	*	Reproduzco una canción -> cambio el estado a 'reproducido'
	*/
	Song.prototype.play = function () {
		this.escuchado = true;

	}
	
	/**
	*	Marco la canción como que ya ha sido escuchada en mi Playlist
	*/
	Song.prototype.listened = function () {
		return this.escuchado;
	}
	
	/**
	*	Cuando añada una song a mi Playlist, le doy una fecha en la que se 
	*	ha añadido
	*/
	Song.prototype.setFechaDeInclusion = function () {
		this.fechaDeInclusion = new Date();
	}
}