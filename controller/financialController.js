const Financial = require('../model/AlphaVantage');
const {token} = require('../model/config');

module.exports = {
    getDataDaily: (action) => {
        return new Promise((resolve, reject) => {
            const financial = new Financial(token);
            financial.getStockDaily(action).then(result => {

                //Transforma la respuesta a JSON
                let data = JSON.parse(result);

                try
                {
                    //Obtiene el json de infomacion
                    data = data['Time Series (Daily)'];

                    //Saca el arreglo de llaves para poder acceder a la informacion
                    keys = Object.keys(data);
                    resolve(keys);
                }catch(error)
                {
                    reject({mensaje: 'No existe la accion a analizar'});
                }

                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}