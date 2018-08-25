DROP TABLE IF EXISTS jugador;

CREATE TABLE jugador(
idjugador INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
idpersona INT NOT NULL,
idclub INT NOT NULL,
altura VARCHAR(3) NOT NULL,
posicion VARCHAR(15) NOT NULL,
peso VARCHAR(3) NOT NULL,
CONSTRAINT FK_jugador_persona FOREIGN KEY(idpersona) 
REFERENCES persona(idpersona),
CONSTRAINT FK_jugador_club FOREIGN KEY(idclub) 
REFERENCES club(idclub));