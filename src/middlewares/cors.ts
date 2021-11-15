/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 16:45:15
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:07:59
 */
import { Context } from 'koa'
const corsHandler = {
  origin: function (ctx: Context) {
    if (ctx.url === '/test') {
      // 这可以配置不运行跨域的接口地址
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}

export {
  corsHandler
}
