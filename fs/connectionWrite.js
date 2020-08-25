/*
 * @Author: zhangyong
 * @Date: 2020-08-06 14:40:54
 * @LastEditTime: 2020-08-06 15:18:53
 * @LastEditors: zhangyong
 * @Description: 
 */
const fs = require('fs')
const qs = require('querystring')
const path = require('path')

const connWrite = (filename, data) => {
  let res = qs.stringify(data)
  fs.writeFile(filename, res, (err) => {
    if (!err) {
      console.log('写入完毕')
    }else{
      console.log(err)
    }
  })
}

module.exports = connWrite