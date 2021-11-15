
/*
 * @Description: jest server
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:55:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:46:31
 */
const request = require('supertest')
const server = require('../dist/app').callback()

module.exports = request(server)
