var config = require('../config/mysql');
var mysql = require('mysql')
const db = {}
const pool = mysql.createPool(config)

db.query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
                return
            }
        
            connection.query(sql, params, (queryErr, results) => {
                connection.release()
                if (queryErr) {
                    reject(queryErr)
                } else {
                    resolve(results)
                }
            })
        })
    })
}


module.exports = db