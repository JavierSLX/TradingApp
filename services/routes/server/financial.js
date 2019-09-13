const {getDataDaily, insertAction} = require('../../../controller/financialController');

module.exports = (app) => {
    
    //Peticion que permite obtener la informacion financiera de una accion
    app.post('/action', (request, response) => {
        
        const {action} = request.body;
        getDataDaily(action).then(result => {
            response.status(200).json({codigo: 1, data: result});
        }).catch(error => {
            console.log(error);
            response.status(500).json({codigo: 0, mensaje: 'Error en actions'});
        });
    });

    //Peticion que permite insertar un nuevo registro a la DB
    app.post('/insert/action', (request, response) => {
        const {nombre, abreviatura} = request.body;

        insertAction(nombre, abreviatura).then(result => {
            response.status(200).json({codigo: 1, data: result});
        }).catch(error => {
            console.log(error);
            response.status(500).json({codigo: 0, mensaje: 'Error al insertar la accion'});
        });
    });
}