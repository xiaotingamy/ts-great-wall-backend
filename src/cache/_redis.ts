/*
 * @Description: 连接redis的方法 get set
 * @version:
 * @Author: guoxt
 * @Date: 2021-11-07 15:56:46
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 17:57:33
 */
import redis from 'redis'
import { REDIS_CONF } from '../conf'
// const redis = require('redis')
// const { REDIS_CONF } = require('../conf')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

// 监听客户端
redisClient.on('error', (error) => {
  console.log('redis error :', error)
})

/**
 * @function: redis set
 * @author: guoxt
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位秒
 * @return {*}
 */
function set (key: string, val: string, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
 * @function: redis get
 * @author: guoxt
 * @param {string} key 键
 * @return {*}
 */
function get (key: string) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (ex) {
        resolve(val)
      }
    })
  })
}

export {
  set,
  get
}
