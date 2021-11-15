/*
 * @Description: 存储配置
 * @version: 1.0.0
 * @Author: guoxt
 * @Date: 2021-11-07 15:51:44
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 17:56:07
 */
import ENV from '../lib/env'

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'amy19920912',
  port: '3306',
  database: 'great_wall_db'
}

let SSO_LOGIN_CONF = {
  url: 'http://4a.test.fshows.com/api/gateway',
  sysCode: 'greatWallProject'
}

if (ENV.isProd) {
  REDIS_CONF = {
    // 线上的 redis 配置
    port: 6379,
    host: '127.0.0.1'
  }

  MYSQL_CONF = {
    // 线上的 mysql 配置
    host: 'localhost',
    user: 'root',
    password: 'amy19920912',
    port: '3306',
    database: 'great_wall_db'
  }

  SSO_LOGIN_CONF = {
    url: 'http://4a.fshows.com/api/gateway',
    sysCode: 'great-wall-prod'
  }
}

export {
  REDIS_CONF,
  MYSQL_CONF,
  SSO_LOGIN_CONF
}
