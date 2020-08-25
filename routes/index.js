/*
 * @Author: zhangyong
 * @Date: 2020-08-21 15:45:43
 * @LastEditTime: 2020-08-21 16:00:37
 * @LastEditors: zhangyong
 * @Description: 
 */
const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)
files
	.filter(file => ~file.search(/^[^\.].*\.js$/))
	.forEach(file => {
		const file_name = file.substr(0, file.length - 3);
    const file_entity = require(path.join(__dirname, file));
		if (file_name !== 'index') {
			router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
		}
	})

module.exports = router