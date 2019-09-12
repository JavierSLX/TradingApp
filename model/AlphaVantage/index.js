const request = require('request');

class AlphaVantage
{
    constructor(token)
    {
        this.token = token;
    }

    /**
     * @description Obtiene la informacion diaria de la accion indicada
     * @param {string} action 
     */
    getStockDaily(action)
    {
        return new Promise((resolve, reject) => {
            request({
                url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${action}&outputsize=compact&apikey=${this.token}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }, (error, response, body) => {
                if(error)
                    reject(error);
                else
                    resolve(body);
            });
        });
    }
}

module.exports = AlphaVantage;