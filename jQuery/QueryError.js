function QueryError(errorCode){
	//datos POR DEFECTO de las variables
	this.errorCode = null;
	this.data = null;
	
	if (errorCode){
		this.errorCode = errorCode;
	}	
	
	QueryError.prototype.getErrorCode = function(){
		return this.errorCode;
	}
	
	QueryError.prototype.setErrorCode = function(errorCode){
		this.errorCode = errorCode;
	}
	
	QueryError.prototype.setReturnedData = function(data){
		this.data = data;
	}
	
	QueryError.prototype.getReturnedData = function(){
		return this.data;
	}
	
	/**
	*	Parsear el valor del error de SQL al nuestra codificación
	*/
	QueryError.prototype.parseQueryError = function(sqlError) {

		switch(parseInt(sqlError)){
			case null: 
				this.errorCode = QueryError.NO_ERROR;
			break;
			case 1: 
				this.errorCode = QueryError.NO_CONNECTION_ERROR;
			break;
			case 8: 
				this.errorCode = QueryError.BAD_QUERY_ERROR;
			break;			
		}	
		
		return tipoDeUsuario;
	}
	
}

QueryError.NO_ERROR = 0;
QueryError.NO_CONNECTION_ERROR = 1;
QueryError.BAD_QUERY_ERROR = 2;





