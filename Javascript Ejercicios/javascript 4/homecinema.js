	var altavozFront = new Altavoz();
	var altavozLatIzq = new Altavoz();
	var altavozLatDcho = new Altavoz();
	var altavozBackIzq = new Altavoz();
	var altavozBackDcho = new Altavoz();
	
	
	altavozFront.encender();
	altavozFront.establecerVolumen(50);
	
	altavozLatIzq.encender();
	altavozLatIzq.establecerVolumen(20);
	
	altavozLatDcho.encender();
	altavozLatDcho.establecerVolumen(30);
	
	altavozBackIzq.encender();
	altavozBackIzq.establecerVolumen(10);
	
	for(let i = 0;i < 5;i++){
		altavozLatIzq.subirvolumen();
	}
	
	altavozBackDcho.encender();
	altavozBackDcho.establecerVolumen(35);
	
	altavozFront.apagar();
	altavozLatIzq.apagar();
	altavozLatDcho.apagar();
	altavozBackIzq.apagar();
	altavozBackDcho.apagar();
		