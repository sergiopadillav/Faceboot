const config = require("../../../config");
const mysql = require('mysql');
const logger = require("../../../utils/logger");

const connection_mysql = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});
connection_mysql.connect((err) => {
    if (err) {
        throw err;
    } 
    logger.info('Connected to mysq');
});
global.connection_mysql = connection_mysql