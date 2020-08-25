/*
 * @Author: zhangyong
 * @Date: 2020-08-21 15:47:20
 * @LastEditTime: 2020-08-21 15:47:33
 * @LastEditors: zhangyong
 * @Description: 
 */
const router = require('koa-router')()

router.get('/', function (ctx, next) {
  ctx.body = 'demo'
})

router.get('/child', function (ctx, next) {
  ctx.body = 'demo child'
})

module.exports = router