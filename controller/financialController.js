const Financial = require('../model/AlphaVantage');
const MySQL = require('../model/MySQL');
const {token} = require('../model/config');

let mysql = new MySQL();
module.exports = {
    getDataDaily: getDataDaily,
    insertAction: (nombre, abreviatura) => {
        return new Promise((resolve, reject) => {
            mysql.insertEmpresa(nombre, abreviatura).then(result => {

                //Obtiene el id del registro insertado
                let id = result.insertId;


                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }
}

/**
 * @description Obtiene los datos de las accion por día
 * @param {string} action 
 */
function getDataDaily(action)
{
    return new Promise((resolve, reject) => {
        const financial = new Financial(token);
        financial.getStockDaily(action).then(result => {

            //Transforma la respuesta a JSON
            let data = JSON.parse(result);
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
}