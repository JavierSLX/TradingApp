const mysql = require('mysql');
const {mysqlUser, mysqlPass, mysqlHost, mysqlPort, mysqlName} = require('../config');

class MySQL
{
    constructor()
    {
        this.mysqlObject = {host: mysqlHost, user: mysqlUser, password: mysqlPass, database: mysqlName, port: mysqlPort};
    }

    insertEmpresa(nombre, abreviatura)
    {
        return new Promise((resolve, reject) => {

            this.connectMySQL().then(connection => {
                let query = "INSERT INTO empresa(nombre, abreviatura) VALUES (?, ?)";

                connection.query(query, [nombre, abreviatura], (error, result) => {
                    if(error)
                        reject(error);
                    else
                        resolve(result);

                    connection.end();
                });
            }).catch(error => {
                reject(error);
            });
        });
    }

    connectMySQL()
    {
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection(this.mysqlObject);
            connection.connect(error => {
                if(error)
                    reject(error);
                else
                    resolve(connection);
            });
        });
    }
}

module.exports = MySQL;