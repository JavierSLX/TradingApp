require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPass: process.env.MYSQL_PASS,
    mysqlHost: process.env.MYSQL_HOST,
    mysqlPort: process.env.MYSQL_PORT,
    mysqlName: process.env.MYSQL_NAME
};