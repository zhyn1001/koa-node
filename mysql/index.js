/*
 * @Author: zhangyong
 * @Date: 2020-08-06 11:43:06
 * @LastEditTime: 2020-08-06 15:19:38
 * @LastEditors: zhangyong
 * @Description: 
 */

const mysql = require('mysql');
const config = require('../config')
const connWrite = require('../fs/connectionWrite')


let pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});


class Mysql {
    constructor () {

    }
    query (sql, values) {
      return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => { 
          if(err) {
            reject(err)
          }else{
            connection.query(sql, values, (err, rows) => { 
              if(err) {
                reject(err)
              }else{
                resolve(rows)
              }
              connection.release()
            })
          }
        })
      })
    }
    
    findUserData(code) { 
      let sql = `SELECT * FROM db_student where student_code='${code}';`
      return this.query(sql)
    }
}

module.exports = new Mysql()
