'user strict'
//Imports
const Usuario = require('./modelos/usuario'); 


function getUsuario(id){
    //Se obtiene el id para base de datos
    let id = req.params.id;
    console.log(id);
    
    //Se busca el usuario por el id
    Usuario.findById(id, (err, usuario) => {
        
        if (err) {
            
            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);
        
        } else {
            if (!usuarios) {

                res.sendStatus(404).send({message: 'No se han encontrado el usuario'});

            } else {

                 res.json(usuario);
            }
        }

    });

}

/**
 * Función pare obtener todos los usuarios.
 * @param {Respuesta} res 
 * @param {Petición} req 
 */
function getUsuarios(res, req) {
    Usuario.find((err, usuarios) => {
        
        if (err) {
            
            res.sendStatus(500).send({message:`Ha ocurrido un error en el servidor: ${err}`});
        
        } else {
            if (!usuarios) {

                res.sendStatus(404).send({message: 'No se han encontrado usuarios'});

            } else {

                res.sendStatus(200).json(usuarios);
            }    
        }

    });

}

function newUsuario() {

}

/**
 * Función para modificar el usuario por Id
 * @param {id de mongo} id 
 * @param {usuario} usuario 
 */
function updatedUsuario(id, usuario) {
    //Obtenemos el usuario de body de la petición
    let miUsuario = req.body;
    console.log(miUsuario);
    
    //Obtenemos el id de mongo
    let id = req.params.id; 

    //Buscamo el usuario en base de datos
    Usuario.findById(id, (err, usuario) => {
        
        if (err) {
            
            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);
        
        } else {
            
            //Modificamos el usuauario en base de datos
            usuario.update(miUsuario, (err, respuesta) => {
                if (err) {
                    res.status(500).send({message: `Error al eliminar el usuario: ${err}`});
                } else {
                    res.status(200).send({respuesta});
                }   
        
            });
        }

    });
}

function deletetUsuario(id) {


}

exports  = {
     getUsuario,
     getUsuarios,
     newUsuario,
     updatedUsuario,
     deletetUsuario

}