function Altavoz (estado, volumen){
	this.estado = false;
	this.volumen = 0;
	
	Altavoz.prototype.encender = function(){
		
		this.estado = true;
		this.volumen = 20;
	}
	
	Altavoz.prototype.apagar = function (){
		
		this.estado;
		this.volumen;
	}
	
	Altavoz.prototype.getVolumen = function (){
		
		return this.volumen;
	}
	
	Altavoz.prototype.subirVolumen = function (){
		if(this.volumen<100){
			this.volumen++;
		}
	}
	
	Altavoz.prototype.bajarVolumen = function() {
		if(this.volumen!= 0){
			this.volumen--;
		}
	}
	
	Altavoz.prototype.establecerVolumen = function(volumen) {
		
		if(this.volumen < 100 || this.volumen > 0){
			this.volumen = volumen;
		}
	}
	
	Altavoz.prototype.mute = function() {
		
		this.volumen = 0;
	}
	
	Altavoz.prototype.print = function() {
		
		console.log("El altavoz esta " + this.estado + " y su volumen es de " + this.volumen);
		
	}
	
}	

	
	