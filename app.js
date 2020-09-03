/*
 * @Author: zhangyong
 * @Date: 2020-08-05 14:55:31
 * @LastEditTime: 2020-08-28 17:30:04
 * @LastEditors: zhangyong
 * @Description: 
 */
const koa = require('koa')
const cors = require('koa2-cors');

const app = new koa()

// const router = require("koa-router")();

const mysql = require('./mysql')

const router = require('./routes')

// app.use(async (ctx, next) => { 
//   await next()
//   let data = await mysql.findUserData('S367859043')
//   ctx.response.type = 'text/html'
//   ctx.response.body = { 
//     "code": 1,
//     "data": data,
//     "mesg": 'ok'
//   }
// })

app.use(cors()) // 跨域处理(允许所有的请求跨域)
app.use(router.routes(), router.allowedMethods())

app.listen(3000)
console.log('app startedt port 3000...')